<?php

class Model_Staff extends Model
{
	
	public function get_data()
	{
            $data = array();
            
            $data['staff'] =  self::querySelect("SELECT id, surname, phone,  address FROM staff WHERE activity = 1");
            
//            $data['type'] = self::querySelect("SELECT * FROM `providers_type`");
            
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
