<?php

class Model_Siona extends Model
{
	
        
	public function get_data()
	{
            $data = array();
            
            $data['data'] =  self::querySelect("SELECT * FROM `siona` WHERE `rej` = 1");
            
            $data['rej'] = self::querySelect("SELECT `rej` FROM `siona` GROUP BY `rej`");
            
            $data['page'] = NULL;
            
            return $data;
	}
        public function get_page($list)
	{
            $data = array();
            
            $data['data'] =  self::querySelect("SELECT * FROM `siona` WHERE `rej` = '{$list}'");
            
            $data['rej'] = self::querySelect("SELECT `rej` FROM `siona` GROUP BY `rej`");
            
            $data['page'] = $list;
            
            return $data;
	}
       
}
