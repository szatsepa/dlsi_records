<?php

class Model_Payment extends Model
{
	
	public function get_data()
	{
            $data = array();
                        
            $result = self::querySelect("SELECT  s.`id`,s.`surname` FROM `staff` AS s,`timesheet` AS t  WHERE  s.`activity` = 1 AND s.`id` = t.`staff` AND t.`marked` = 0 GROUP BY s.`id`");
            
            foreach ($result as $value) {
                $cost = self::querySelect("SELECT  tf.`short`, tf.`tariff`, t.`produced`,  tf.`cost`
                  FROM `timesheet` AS t 
                  LEFT JOIN function AS f ON t.`function` = f.`id` 
                  LEFT JOIN `tariff` AS tf ON t.`tariff` = tf.`id` 
                  WHERE t.`staff` = {$value['id']} AND
                        t.`marked` = 0");
                $data['credited'][$value['id']] = array('surname'=>$value['surname'],'cost'=>$cost);
            }
            
            $result = self::querySelect("SELECT MAX(  `paket` ) AS 'paket' FROM  `timesheet`");
            
            $data['paket'] = $result[0]['paket'];
            
            return $data;
	}
        
        public function get_credits() {
            
            $data = array();
            
            $data['work'] =  self::querySelect("SELECT * FROM `function` WHERE `activity` = 1");
            
            $data['staff'] = self::querySelect("SELECT `id`, `surname`, `phone`,  `address` FROM `staff` WHERE `activity` = 1");
            
            $result = self::querySelect("SELECT Max(`paket`) AS paket FROM `timesheet`");
            
            $data['paket'] = $result[0]['paket'];
            
            $data['tariff'] = self::querySelect("SELECT t.`id`, t.`action`, f.`function`, t.`short`, t.`tariff`, t.`cost` FROM `tariff` AS t, `function` AS f WHERE t.`activity` = 1 AND t.`action` = f.`id`");
            
            $tmpc = self::querySelect("SELECT  s.`id`,s.`surname` FROM `staff` AS s,`timesheet` AS t WHERE  s.`activity` = 1 AND s.`id` = t.`staff` AND  t.`marked` = 0 GROUP BY s.`id`");
            
            foreach ($tmpc as $value) {
                $data['credit'][$value['id']] = array('surname'=>$value['surname'],'cost'=>array());
                
                $tmp = self::querySelect("SELECT tf.`short` , tf.`tariff` , t.`produced` , tf.`cost` , f.`function` AS 'fn'
                                                FROM `timesheet` AS t
                                                LEFT JOIN `function` AS f ON t.`function` = f.`id`
                                                LEFT JOIN `tariff` AS tf ON t.`tariff` = tf.`id`
                                                WHERE t.`staff` = {$value['id']} 
                                                    AND t.`marked` = 0");
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
        
        public function getDetails($list) {
            
            $id = $list;
                        
            $result = self::querySelect("SELECT `id`,`surname` FROM `staff` WHERE `activity` = 1 AND `id` = {$id}");
            $data = array('uid'=>$id,'surname'=>$result[0]['surname']);
            $data['cost'] = array();
            
            
                $cost = self::querySelect("SELECT tf.`short` , tf.`tariff` , t.`produced` , tf.`cost` , f.`function` AS 'fn'
                                            FROM `timesheet` AS t
                                            LEFT JOIN `function` AS f ON t.`function` = f.`id`
                                            LEFT JOIN `tariff` AS tf ON t.`tariff` = tf.`id`
                                            WHERE t.`staff` ={$id}
                                            AND t.`marked` =0");
                if($cost){
                    foreach ($cost as $value) {  
                    
                        array_push($data['cost'], $value);

                    
                    }
                }  
                
            
            $tmpi = self::querySelect("SELECT 'Аванс' AS 'short',
                            (i.`cost` * ( -1 )) AS 'cost',
                            '1' AS 'produced'
                        FROM `imprest` AS i
                        WHERE i.`staff` = {$id}
                        AND (i.`details` <> 3)
                        AND i.`repay` = 1");
                        
            if(count($tmpi) !== 0){
                foreach ($tmpi as $vali) {}
                    array_push($data['cost'], $vali);
                
            } 

            
            return $data;
        }
        
        public function add($param) {
            
            $result = self::setInsert($param);
            
            echo $result;
        }
        
        public function del($param) {
            
            $result = self::actUpdate($param);
            
            echo $result;
            
        }
        public function update($param) {
            
            $result = self::actUpdate($param);
            
            echo $result;
            
        }

}
