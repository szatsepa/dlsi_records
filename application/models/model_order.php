<?php

class Model_Order extends Model
{
	
	public function get_data()
	{	
		
		$data_array = array();	
                
                $length = self::querySelect("SELECT `d` FROM `kub` GROUP BY `d`");
                
                $data_array['length'] = $length;
		
                $list = self::querySelect("SELECT MAX( `list` ) AS 'list' FROM `woods`");
                
                $data_array['list'] = $list;

                $query = "SELECT pr.`id`, pr.`d_min`,pr.`d_max`, pr.`sort`, pr.`p1`,  p.`name`, t.`providers_type` AS 'pt'
                         FROM `providers` AS p LEFT JOIN `providers_prices` AS pr ON p.`id`=pr.`shipper`  LEFT JOIN `providers_type` AS t ON t.`id` = p.`d_type`
                        WHERE p.`activ` = 1 AND pr.`activ`=1";


                $result = self::querySelect($query);
                
                $data_array['price'] = array();

                    if($result){
                        foreach ($result as $row) {
                         
                            if($row['id'])array_push ($data_array['price'], $row);
                        }
                    }

                $result = self::querySelect("SELECT * FROM `providers_type`");

                $data_array['dtype'] = array();

                foreach ($result as $row){
                    array_push($data_array['dtype'], $row);
                }
                                
                $result = self::querySelect("SELECT  d.`id`, d.`name`, d.`created`, dt.`providers_type`, d.`comment` FROM `providers` as d, `providers_type` as dt WHERE d.`d_type` = dt.`id` AND d.`activ`=1");

                $data_array['providers'] = array();

                if($result){
                    foreach ($result as $row){
                        array_push($data_array['providers'], $row);
                    }
                }
                
                $data_array['depart'] = array();
                
                
                $result = self::querySelect("SELECT  d.`id`, d.`name`,p.`name` AS 'prov'  FROM `providers` AS p LEFT JOIN `providers_department` AS d ON p.`id` = d.`providers`");
//  WHERE d.`id` IS NOT NULL               
                if($result){
                    foreach ($result as $row){
                        if($row['id'])$data_array['depart'][$row['id']] = $row;
                    }
                }
                
                return $data_array;
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
        
//        function setOrder($param) {
//            
//            $result = self::setInsert($param);
//            
//            return $result;
//        }
}
