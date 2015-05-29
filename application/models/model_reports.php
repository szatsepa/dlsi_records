<?php

class Model_Reports extends Model
{
	
	public function get_data($list)
	{	
		
		$result = self::querySelect("SELECT w.`create` , w.`d` , w.`sort` , w.`l` , w.`n` , w.`v` , w.`price` , w.`itog` , p.`name` AS 'provider', wd.`shipped` , wd.`num_doc` , wd.`date_doc` , wd.`freighter` , wd.`V_type` , wd.`V_num` , wd.`V_man` , wd.`accepted` , wd.`pdep` , pd.`name` AS 'dep', wd.`freighte`,w.`list`
                                                        FROM `woods` AS w
                                                        LEFT JOIN `woods_doc` AS wd ON w.`doc` = wd.`id`
                                                        LEFT JOIN `providers` AS p ON p.`id` = wd.`providers`
                                                        LEFT JOIN `providers_department` AS pd ON wd.`pdep` = pd.`id`
                                                        WHERE w.`list` = '{$list}'");
                                                        
            return $result;
               
        }
}
