<?php

class Model_Prices extends Model
{
	
	public function get_data()
	{
            $data = array();
            
            $data['providers'] =  self::querySelect("SELECT  d.`id`, d.`name`, d.`created`, dt.`providers_type`, d.`comment` FROM `providers` as d, `providers_type` as dt WHERE d.`d_type` = dt.`id` AND d.`activ`=1");
            
            $data['type'] = self::querySelect("SELECT * FROM `providers_type`");
            
            $data['prices'] = self::querySelect("SELECT pr.`id`, pr.`d_min`,pr.`d_max`, pr.`sort`, pr.`p1`,  p.`name`, t.`providers_type` AS 'pt'
         FROM `providers` AS p LEFT JOIN `providers_prices` AS pr ON p.`id`=pr.`shipper`  LEFT JOIN `providers_type` AS t ON t.`id` = p.`d_type`
        WHERE p.`activ` = 1 AND pr.`activ`=1");
            
            return $data;
	}
        
        public function addNew($param) {
            
            $result = self::setInsert($param);
            
            echo $result;
        }
        
        public function delProvider($param) {
            
            $result = self::actUpdate($param);
            
            echo $result;
            
        }
        public function updateProvider($param) {
            
            $result = self::actUpdate($param);
            
            echo $result;
            
        }

}
