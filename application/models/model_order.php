<?php

class Model_Order extends Model
{
	
	public function get_data()
	{	
		
		$data = array();	
                
                $length = self::querySelect("SELECT `d` FROM `kub` GROUP BY `d`");
                
                $data['length'] = $length;
		
                $list = self::querySelect("SELECT MAX( `list` ) AS 'list' FROM `woods`");
                
                $data['list'] = $list;

                $query = "SELECT pr.`id`, pr.`d_min`,pr.`d_max`, pr.`sort`, pr.`p1`,  p.`name`, t.`providers_type` AS 'pt'
                         FROM `providers` AS p LEFT JOIN `providers_prices` AS pr ON p.`id`=pr.`shipper`  LEFT JOIN `providers_type` AS t ON t.`id` = p.`d_type`
                        WHERE p.`activ` = 1 AND pr.`activ`=1";


                $result = self::querySelect($query);
                
                $data['price'] = array();

                    if($result){
                        foreach ($result as $row) {
                         
                            if($row['id'])array_push ($data['price'], $row);
                        }
                    }

                $result = self::querySelect("SELECT * FROM `providers_type`");

                $data['dtype'] = array();

                foreach ($result as $row){
                    array_push($data['dtype'], $row);
                }
                                
                $result = self::querySelect("SELECT  d.`id`, d.`name`, d.`created`, dt.`providers_type`, d.`comment` FROM `providers` as d, `providers_type` as dt WHERE d.`d_type` = dt.`id` AND d.`activ`=1");

                $data['providers'] = array();

                if($result){
                    foreach ($result as $row){
                        array_push($data['providers'], $row);
                    }
                }
                
                $data['depart'] = array();
                
                
                $result = self::querySelect("SELECT  d.`id`, d.`name`,p.`name` AS 'prov'  FROM `providers` AS p LEFT JOIN `providers_department` AS d ON p.`id` = d.`providers`");
//  WHERE d.`id` IS NOT NULL               
                if($result){
                    foreach ($result as $row){
                        if($row['id'])$data['depart'][$row['id']] = $row;
                    }
                }
                
                return $data;
	}
        
        function get_his() {
                
                return $result = self::querySelect("SELECT `create`,`list` FROM `woods` GROUP BY `list`");
            
        }
        
        public function get_providers($list)
	{
            $data = array();
            
            $and = '';
            
            if($list){
                $and = "AND d.`d_type` = {$list}";
            }
            
            $data['providers'] =  self::querySelect("SELECT  d.`id`, d.`name`, d.`created`, dt.`providers_type`, d.`comment` FROM `providers` as d, `providers_type` as dt WHERE d.`d_type` = dt.`id` AND d.`activ`=1 ".$and);
            
            $data['type'] = self::querySelect("SELECT * FROM `providers_type`");
            
            $data['uid'] = $list;
            
            return $data;
	}
        
        public function get_departs($list)
	{	
            
            $data = array();
            
            $and = '';
            
            if($list){
                $and = "AND p.`providers` = {$list}";
            }	

            $data['providers'] = self::querySelect("SELECT  d.`id`, d.`name`, d.`created`, dt.`providers_type`, d.`comment` FROM `providers` as d, `providers_type` as dt WHERE d.`d_type` = dt.`id` AND d.`activ`=1");

            $data['departs'] = self::querySelect("SELECT d.`id`, d.`name`, t.`providers_type` AS 'type', d.`comment`,p.`id` AS 'pid', p.`name` AS 'patr', p.`comment` AS 'pcomm' FROM `providers` AS d LEFT JOIN `providers_type` AS t ON d.`d_type` = t.`id` LEFT JOIN `providers_department` AS p ON d.`id`=p.`providers` WHERE d.`activ`=1 AND p.`id` IS NOT NULL AND p.`activ` = 1 ".$and);

            $data['dtype'] = self::querySelect("SELECT * FROM `providers_type`");
            
            $data['pid'] = $list;

            return $data;

        }
        
        public function get_prices($list)
	{
            $data = array();
            
            $and = '';
            
            if($list){
                $and = " AND p.`id` = {$list}";
            }
            
            $data['providers'] =  self::querySelect("SELECT  d.`id`, d.`name`, d.`created`, dt.`providers_type` AS 'typename', dt.`id`  AS 'typeid', d.`comment` FROM `providers` as d, `providers_type` as dt WHERE d.`d_type` = dt.`id` AND d.`activ`=1");
            
            $data['type'] = self::querySelect("SELECT * FROM `providers_type`");
            
            $data['prices'] = self::querySelect("SELECT pr.`id`, pr.`d_min`,pr.`d_max`, pr.`sort`, pr.`p1`,  p.`name`, t.`providers_type` AS 'pt'
                                                FROM `providers` AS p LEFT JOIN `providers_prices` AS pr ON p.`id`=pr.`shipper`  LEFT JOIN `providers_type` AS t ON t.`id` = p.`d_type`
                                                WHERE p.`activ` = 1 AND pr.`activ`=1".$and);
            
            $data['pid'] = $list;
            
            return $data;
	}
        
        public function get_report($list)
	{	
		
		$result = self::querySelect("SELECT w.`create` , w.`d` , w.`sort` , w.`l` , w.`n` , w.`v` , w.`price` , w.`itog` , p.`name` AS 'provider', wd.`shipped` , wd.`num_doc` , wd.`date_doc` , wd.`freighter` , wd.`V_type` , wd.`V_num` , wd.`V_man` , wd.`accepted` , wd.`pdep` , pd.`name` AS 'dep', wd.`freighte`,w.`list`
                                                        FROM `woods` AS w
                                                        LEFT JOIN `woods_doc` AS wd ON w.`doc` = wd.`id`
                                                        LEFT JOIN `providers` AS p ON p.`id` = wd.`providers`
                                                        LEFT JOIN `providers_department` AS pd ON wd.`pdep` = pd.`id`
                                                        WHERE w.`list` = '{$list}'");
                                                        
            return $result;
               
        }
        
        
        function getPrice($param){
            
            $query = "SELECT pr.`p1`
                        FROM `providers_prices` AS pr
                        WHERE pr.`activ` =1
                        AND pr.`shipper` = {$param['id']}
                        AND pr.`sort` = {$param['sort']}
                        AND {$param['d']}
                        BETWEEN pr.`d_min`
                        AND pr.`d_max`";


                $result = self::querySelect($query);
                
                if(!$result){
                    $price=0;
                }else{
                    $price = $result[0]['p1'];
                }
              
                echo $price;
        }
        function getKub($param){
            
            $query = "SELECT `v` FROM `kub` WHERE `d` = '{$param['d']}' AND `l` = '{$param['l']}'";


                $result = self::querySelect($query);
                
                if(!$result){
                    $volume='0';
                }else{
                    $volume = $result[0]['v'];
                }
              
              echo $volume;
        }
        
        function setW($param) {
            
            $result = self::setInsert($param);
            
            echo $result;
        }
        
        function setUpdate($param) {
            $result = self::actUpdate($param);
            
            echo $result;
        }
        
        public function getReceived($query, $pid, $ds) {
            
             $data = array(); 
             
             $provider = stripcslashes($pid);
             
             $dstart = stripcslashes($ds);
             
             $dstop = stripcslashes($pid);
             
             if(!$ds){
                 $data['woods'] = self::querySelect("SELECT `id`, `create`, `d`, `l`, `v`, `price`, `itog` FROM `woods` WHERE `provider`={$provider}");
                 
                 $data['sum'] = self::querySelect("SELECT  Sum(`v`) AS 'all',  Sum(`itog`) AS 'sum' FROM `woods` WHERE `provider`={$provider}");
             }else{
                 $data['woods'] = self::querySelect("SELECT `id`, `create`, `d`, `l`, `v`, `price`, `itog` FROM `woods` WHERE `create` BETWEEN '{$dstart}' AND '{$dstop}'");
                 
                 $data['sum'] = self::querySelect("SELECT  Sum(`v`) AS 'all',  Sum(`itog`) AS 'sum' FROM `woods` WHERE `create` BETWEEN '{$dstart}' AND '{$dstop}'");
             }

             $data['orders'] = self::querySelect($query);
             
             $data['providers']  = self::querySelect("SELECT p.`id`, p.`name` FROM `woods_doc` AS wd, `providers` AS p WHERE p.`id` = wd.`providers` GROUP BY `providers`");
            
            return $data;
        }
        
        public function getList($param) {
            
            $list = self::querySelect("SELECT `list` FROM `woods` WHERE `doc`={$param} GROUP BY `list`");
            
            return $list[0]['list'];
            
        }
}
