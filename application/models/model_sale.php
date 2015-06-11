<?php

class Model_Sale extends Model
{
	
	public function get_data()
	{	
		
		$data = array();
                
                $order = self::querySelect("SELECT `order` FROM `orders` WHERE `id` = (SELECT Max( `id` ) FROM `orders` ) ");
                
                $doc = explode("/", $order[0]['order']);
                
                $num = $doc[0]+1;
                
                $data['doc'] = "{$num}/".date("d-m-y");                
                
                return $data;
	}
        
        
        
}
