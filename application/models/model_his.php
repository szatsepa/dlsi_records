<?php

class Model_His extends Model
{
	
	public function get_data()
	{	
		
//		$data_array = array();
		
		return $result = self::querySelect("SELECT `create`,`list` FROM `woods` GROUP BY `list`");
                                                

        }
}
