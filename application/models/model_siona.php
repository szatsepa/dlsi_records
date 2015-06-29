<?php

class Model_Siona extends Model
{
	
        
	public function get_data($param)
	{
            $data = array();
            
            $data['data'] =  self::querySelect("SELECT * FROM `siona`");
            
            $data['rej'] = self::querySelect("SELECT `rej` FROM `siona` GROUP BY `rej`");
            
            $data['page'] = $param;
            
            return $data;
	}
        
       
}
