<?php

class Model_Staff extends Model
{
	
	public function get_data()
	{
            $data = array();
            
            $data['staff'] =  self::querySelect("SELECT id, surname, phone,  address FROM staff WHERE activity = 1");
            
            return $data;
	}
        
        public function get_work() 
        {
            $data = array();
            
            $data['work'] =  self::querySelect("SELECT * FROM function WHERE activity = 1");
            
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
