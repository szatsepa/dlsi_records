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
                
                $data['cat'] = self::querySelect("SELECT n.`categories` AS 'id', c.`categories` AS 'cat' FROM `nomenclature` AS n, `categories` AS c WHERE n.`categories` = c.`id` GROUP BY n.`categories` ORDER BY  c.`categories`"); 
                
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
        
        public function set_invoice($param,$query) {
            
            $num_order = self::setInsert($query);
            
            $str = stripcslashes($param);
            
            $obj = json_decode($str,TRUE);
            
            $cash = 0;
            
            $stru = '';
            
            $stro  = "INSERT INTO `order_list`(`order`, `category`, `nomenclature`, `amount`, `price`) VALUES ";
            
            foreach ($obj as $key => $value) {
                
                $stro .= "($num_order,{$value['cat']},{$value['nom']},{$value['amount']},{$value['price']}),";
                
                $cash += round(($value['amount'])*($value['price']),3);
                
                $stru .= "UPDATE `production` SET `count`=(`count` - {$value['amount']}) WHERE `name`={$value['nom']}";
                
            }
            
            $stro = substr($stro,0, -1);
            
            $stro .= ";";
            
            $strc = "INSERT INTO `cashbox`(`add`) VALUES ({$cash})";
            
            self::setInsert($stro);
            
            self::setInsert($stru);
                        
            self::setInsert($strc);
            
            return $num_order;
            
        }
        
        public function get_order($list) {
            
            $data = array();
            
            $data['order'] = self::querySelect("SELECT * FROM `orders` WHERE `id` = {$list}");
            
            $data['list'] = self::querySelect("SELECT n.`nomenclature` AS 'nom', o.`amount` , o.`price`, u.`unit`
                                                    FROM `order_list` AS o, `nomenclature` AS n, `orders` AS r, `unit` AS u
                                                    WHERE o.`nomenclature` = n.`id`
                                                    AND r.`id` = o.`order` AND u.`id` = n.`unit`
                                                    AND r.`id` ={$list}");
            
            return $data;
        }
        
        public function get_view($list,$papam) {
            
            $data = array();
            
            $data['orders'] = self::querySelect("SELECT * FROM `orders` WHERE `created` BETWEEN '{$list}' AND '{$papam}'");
            
            return $data;
        }
        
        public function get_customer($list,$param) {
            
            $data = array();
            
            $data['customers']  = self::querySelect("SELECT `id`, `customer` FROM `orders` GROUP BY `customer`");            
            
            $str = stripcslashes($list);

            $data['orders']   = self::querySelect("SELECT * FROM `orders` WHERE `customer` = (SELECT `customer` FROM `orders` WHERE `id` = '{$list}')");
            
//            $data['query'] = "SELECT * FROM `orders` WHERE `customer` = '{$str}'";

//            if($list){}
            
            return $data;
            
        }
}
