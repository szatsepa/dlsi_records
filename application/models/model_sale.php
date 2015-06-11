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
                
                $data['cat'] = self::querySelect("SELECT `id`, `categories` AS 'cat' FROM `categories` WHERE `activity`=1"); 
                
                return $data;
	}
        
        public function get_selector($param) {
                         
            $data = self::querySelect( "SELECT n.`id`, n.`nomenclature` AS 'nom' FROM `nomenclature` AS n WHERE n.`categories`=".$param);
            
            $str = "<select id='nom'>";
            
            $str .= "<option value='0' selected>Найменування</option>";
            
            foreach ($data as $value) {
                $str .= "<option value='{$value['id']}'>{$value['nom']}</option>";
            }
            
            $str .= "</select>";
            
            return $str;
        }
        
        public function get_unit($param) {
            
            $data = self::querySelect("SELECT n.`price` , u.`unit`
            FROM `nomenclature` AS n
            LEFT JOIN `unit` AS u ON n.`unit` = u.`id`
            WHERE n.`id` ={$param}");
            
            return $data;
        }
        
        public function set_invoice($param) {
            
            $str = stripcslashes($param);
            
            $obj = json_decode($str,TRUE);
            
            $stro  = "";
            
            foreach ($obj as $key => $value) {
                $stro .= "{$key} =>> {$value['cat']} - {$value['nom']} - {$value['amount']} - {$value['price']}\r\n";
            }
            
            return $stro;
            
        }
        
}
