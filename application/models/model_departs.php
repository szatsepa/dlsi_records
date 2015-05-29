<?php

class Model_Departs extends Model
{
	
	public function get_data()
	{	

            
                $data_array = array();	
            
		$result = self::querySelect("SELECT  d.`id`, d.`name`, d.`created`, dt.`providers_type`, d.`comment` FROM `providers` as d, `providers_type` as dt WHERE d.`d_type` = dt.`id` AND d.`activ`=1");
                
                $data_array['providers'] = $result;
                
                $result = self::querySelect("SELECT d.`id`, d.`name`, t.`providers_type` AS 'type', d.`comment`,p.`id` AS 'pid', p.`name` AS 'patr', p.`comment` AS 'pcomm' FROM `providers` AS d LEFT JOIN `providers_type` AS t ON d.`d_type` = t.`id` LEFT JOIN `providers_department` AS p ON d.`id`=p.`providers` WHERE d.`activ`=1 AND p.`id` IS NOT NULL AND p.`activ` = 1");
                
                $data_array['departs'] = $result;
                
                $data_array['dtype'] = self::querySelect("SELECT * FROM `providers_type`");
                
                return $data_array;

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
