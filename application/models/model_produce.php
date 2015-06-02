<?php

class Model_Produce extends Model
{
	
	public function get_data()
	{	
		$data = $this->getQuery(NULL);
                
                return $data;
		
	}
        
        private function getQuery($param) {
            
                $data = array();
                
                $and = '';

                if($param != 0){
                    $and = "AND c.`id` = {$param}";
                }
                                
                $query = "SELECT p.`id`, 
                                  c.`categories` AS 'category', 
                                  n.`nomenclature` AS 'name', 
                                  p.`count`,
                                  n.`price`,
                                  u.`unit` 
                             FROM `production` AS p 
                             LEFT JOIN `categories` AS c ON p.`category` = c.`id`
                             LEFT JOIN `nomenclature` AS n ON n.`id` = p.`name`
                             LEFT JOIN `unit` AS u ON p.`unit` = u.`id`
                             WHERE p.`marked`= '1' ".$and;
                 
                $data['depot'] = self::querySelect($query);

                $data['category'] = self::querySelect("SELECT `id`, `categories` FROM `categories` WHERE `activity` = 1");

                $data['unit'] = self::querySelect("SELECT `id`, `unit` FROM `unit`");

                $query1 = "SELECT p.`category` AS 'id', 
                                 c.`categories` AS 'category'
                             FROM `production` AS p 
                             LEFT JOIN `categories` AS c ON p.`category` = c.`id`
                             WHERE p.`marked`=1
                             GROUP BY p.`category`
                             ORDER BY c.`categories`";

                $data['selector'] = self::querySelect($query1);
                
                $result = mysql_query($query);
                
                return $data;
        }
        
        public function get_select($param)
	{	
		
            $data = $this->getQuery($param);	
                
                
            return $data;
	}
        
}
