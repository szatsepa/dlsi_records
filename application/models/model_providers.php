<?php

class Model_Providers extends Model
{
	
	public function get_data()
	{
            $data = array();
            
            $data['providers'] =  self::querySelect("SELECT  d.`id`, d.`name`, d.`created`, dt.`providers_type`, d.`comment` FROM `providers` as d, `providers_type` as dt WHERE d.`d_type` = dt.`id` AND d.`activ`=1");
            
            $data['type'] = self::querySelect("SELECT * FROM `providers_type`");
            
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
