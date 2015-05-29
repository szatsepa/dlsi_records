<?php
// TO DO
class Model_Func extends Model
{
	
	public function get_data()
	{
            $data = array();
            
            $data['func'] =  self::querySelect("SELECT * FROM function WHERE activity = 1");
            
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
