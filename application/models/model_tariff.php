<?php

class Model_Tariff extends Model
{
	
	public function get_data()
	{
            $data = array();
            
            $data['tariff'] =  self::querySelect("SELECT t.`id`, t.`action`, f.`function` AS 'fn', t.`short`, t.`tariff`, t.`cost` "
                                                    . "FROM `tariff` AS t, `function` AS f "
                                                    . "WHERE t.`activity` = 1 AND t.`action` = f.`id`");
            
            $data['fn'] =  self::querySelect("SELECT `id`, `function` AS 'fn' FROM `function` WHERE `activity` = 1");
                       
            return $data;
	}
        
        public function addNew($param) {
            
            $result = self::setInsert($param);
            
            echo $result;
        }
        
        public function update($param) {
            
            $result = self::actUpdate($param);
            
            echo $result;
            
        }

}
