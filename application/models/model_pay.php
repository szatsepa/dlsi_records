<?php

class Model_Pay extends Model
{
	
	public function get_data()
	{
            $data = array();
            
            $data['work'] =  self::querySelect("SELECT * FROM `function` WHERE `activity` = 1");
            
            $data['staff'] = self::querySelect("SELECT `id`, `surname`, `phone`,  `address` FROM `staff` WHERE `activity` = 1");
            
            $result = self::querySelect("SELECT Max(`paket`) AS paket FROM `timesheet`");
            
            $data['paket'] = $result[0]['paket'];
            
            $data['tariff'] = self::querySelect("SELECT t.`id`, t.`action`, f.`function`, t.`short`, t.`tariff`, t.`cost` FROM `tariff` AS t, `function` AS f WHERE t.`activity` = 1 AND t.`action` = f.`id`");
            
            $data['timesheet'] = self::querySelect("SELECT t.`id`,t.`staff`, s.`surname`, f.`function`, tf.`tariff`, `produced` 
                                                            FROM `timesheet` AS t, `staff` AS s, `function` AS f, `tariff` AS tf 
                                                            WHERE t.`marked` = 0
                                                            AND t.`staff` = s.`id`
                                                            AND t.`function` = f.`id`
                                                            AND t.`tariff` = tf.`id`");
            
            return $data;
	}
        
        public function get_credits() {
            
            $data = array();
            
            $data['work'] =  self::querySelect("SELECT * FROM `function` WHERE `activity` = 1");
            
            $data['staff'] = self::querySelect("SELECT `id`, `surname`, `phone`,  `address` FROM `staff` WHERE `activity` = 1");
            
            $result = self::querySelect("SELECT Min(`paket`) AS paket FROM `timesheet` WHERE `marked` = 0");
            
            $data['paket'] = $result[0]['paket'];
            
            $result = self::querySelect("SELECT Max(`paket`) AS paket FROM `timesheet`"); 
            
            $data['paketM'] = $result[0]['paket'];
            
            $data['tariff'] = self::querySelect("SELECT t.`id`, t.`action`, f.`function`, t.`short`, t.`tariff`, t.`cost` FROM `tariff` AS t, `function` AS f WHERE t.`activity` = 1 AND t.`action` = f.`id`");
            
            $tmpc = self::querySelect("SELECT s.`id` , s.`surname` FROM `staff` AS s, `timesheet` AS t
                                        WHERE s.`activity` =1
                                        AND s.`id` = t.`staff`
                                        AND t.`marked` =0
                                        GROUP BY s.`id`");
            
            foreach ($tmpc as $value) {
                $data['credit'][$value['id']] = array('surname'=>$value['surname'],'cost'=>array());
                
                $tmp = self::querySelect("SELECT  tf.`short`, tf.`tariff`, t.`produced`,  tf.`cost`,t.`id` AS 'row'
                                              FROM `timesheet` AS t 
                                              LEFT JOIN function AS f ON t.`function` = f.`id` 
                                              LEFT JOIN `tariff` AS tf ON t.`tariff` = tf.`id` 
                                              WHERE t.`staff` = {$value['id']} AND
                                                    t.`marked` = 0");
                foreach ($tmp as $val) {
                    array_push($data['credit'][$value['id']]['cost'], $val);
                }
                
                $tmpi = self::querySelect("SELECT 'Аванс' AS 'short',
                            (i.`cost` * ( -1 )) AS 'cost',
                            '1' AS 'produced', `id` AS 'row'
                        FROM `imprest` AS i
                        WHERE i.`staff` ={$value['id']}
                        AND (i.`details` <> 3)
                        AND i.`repay` = 1");
                        
                if(count($tmpi) !== 0){
                    foreach ($tmpi as $vali) {
                        array_push($data['credit'][$value['id']]['cost'], $vali);
                    }
                }        
                                              
            }
            
            return $data;
        }
        
        function get_imprest($list,$param) {
            
            $data = array();
            
            $whereS = "";
                        
            if(!empty($list)){
               $whereS = " AND `id` = {$list}"; 
            }
            
            $data['staff'] = self::querySelect("SELECT `id`, `surname` FROM `staff` WHERE `activity` = 1".$whereS);
            
            $data['imprest'] = self::querySelect("SELECT i.`id` , s.`surname` AS 'staff' , i.`cost` , t.`types` AS 'type' , i.`recorded`
                                                    FROM `imprest` AS i, `staff` AS s, `types_advances` AS t
                                                    WHERE i.`staff` = s.`id`
                                                    AND i.`activity` =1
                                                    AND i.`details` = t.`id`
                                                    AND i.`repay` =1"); 
            
            $data['types'] = self::querySelect("SELECT `id`, `types` AS 'type' FROM `types_advances`");
            
            if(!empty($param))$data['cost'] = $param;
            
            return $data;
            
        }
        
        public function get_history() {
            
            $data =  self::querySelect("SELECT `recorded` AS 'create',`paket` AS 'list' FROM `timesheet` WHERE `marked` > 0 GROUP BY `paket`");
            
            return $data;
        }
                
        public function get_part($param) {
            
            $data = array();
            
            $tmpc = self::querySelect("SELECT s.`id` , s.`surname` , t.`open` , t.`close`
                                        FROM `staff` AS s, `timesheet` AS t
                                        WHERE s.`activity` =1
                                        AND s.`id` = t.`staff`
                                        AND t.`paket` = {$param}
                                        GROUP BY s.`id`");
                                        
            $data['open'] = $tmpc[0]['open'];
            $data['close'] = $tmpc[0]['close'];
            $data['part'] = $param;
            
            foreach ($tmpc as $value) {
                $data['credit'][$value['id']] = array('surname'=>$value['surname'],'cost'=>array());
                
                $tmp = self::querySelect("SELECT tf.`short` , tf.`tariff` , t.`produced` , tf.`cost` , f.`function` AS 'fn'
                                                FROM `timesheet` AS t
                                                LEFT JOIN `function` AS f ON t.`function` = f.`id`
                                                LEFT JOIN `tariff` AS tf ON t.`tariff` = tf.`id`
                                                WHERE t.`staff` = {$value['id']} 
                                                AND t.`paket` = {$param}");
                foreach ($tmp as $val) {
                    array_push($data['credit'][$value['id']]['cost'], $val);
                }
                
                $tmpi = self::querySelect("SELECT 'Аванс' AS 'short',
                            (i.`cost` * ( -1 )) AS 'cost',
                            '1' AS 'produced'
                        FROM `imprest` AS i
                        WHERE i.`staff` ={$value['id']}
                        AND (i.`details` <> 3)
                        AND i.`repay` = 1");
                        
                if(count($tmpi) !== 0){
                    foreach ($tmpi as $vali) {
                        array_push($data['credit'][$value['id']]['cost'], $vali);
                    }
                }        
                                              
            }
            
            return $data; 
        }
        
        public function get_tariff()
	{
            $data = array();
            
            $data['tariff'] =  self::querySelect("SELECT t.`id`, t.`action`, f.`function` AS 'fn', t.`short`, t.`tariff`, t.`cost` "
                                                    . "FROM `tariff` AS t, `function` AS f "
                                                    . "WHERE t.`activity` = 1 AND t.`action` = f.`id`");
            
            $data['fn'] =  self::querySelect("SELECT `id`, `function` AS 'fn' FROM `function` WHERE `activity` = 1");
                       
            return $data;
	}
        
        public function get_details($param) {
            
            $data = array();
            
            $tmp = self::querySelect("SELECT `surname` FROM `staff` WHERE `activity` = 1 AND `id` = {$param}");
            
            $data['credit'][$param] = array('surname'=>$tmp[0]['surname'],'cost'=>array());
                
            $tmp = self::querySelect("SELECT  tf.`short`, tf.`tariff`, t.`produced`,  tf.`cost`,t.`id` AS 'row'
                                          FROM `timesheet` AS t 
                                          LEFT JOIN function AS f ON t.`function` = f.`id` 
                                          LEFT JOIN `tariff` AS tf ON t.`tariff` = tf.`id` 
                                          WHERE t.`staff` = {$param} AND
                                                t.`marked` = 0");
            foreach ($tmp as $val) {
                array_push($data['credit'][$param]['cost'], $val);
            }

            $tmpi = self::querySelect("SELECT 'Аванс' AS 'short',
                        (i.`cost` * ( -1 )) AS 'cost',
                        '1' AS 'produced', `id` AS 'row'
                    FROM `imprest` AS i
                    WHERE i.`staff` ={$param}
                    AND (i.`details` <> 3)
                    AND i.`repay` = 1");

            if(count($tmpi) !== 0){
                foreach ($tmpi as $vali) {
                    array_push($data['credit'][$param]['cost'], $vali);
                }
            }    
            
            return $data;                                  
        } 
        
        public function add($param) {
            
            $result = self::setInsert($param);
            
            echo $result;
        }
        
        public function del($param) {
            
            $result = self::actDelete($param);
            
            echo $result;
            
        }
        public function update($param) {
            
            $result = self::actUpdate($param);
            
            echo $result;
            
        }

}
