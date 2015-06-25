<?php

class SubMenu {

    function __construct() {
        
        $controller_name = 'main';
        

        $routes = explode('/', $_SERVER['REQUEST_URI']);

        // получаем имя контроллера
        if ( !empty($routes[1]) )
        {	
                $controller_name = $routes[1];
        }
        
        if($controller_name === '404'){
            return;
        }
        
            switch ($controller_name) {
                case 'order':                   
                    $sub_menu = array('order'=>'Расчет','order/his'=>'История','order/received'=>'Прийшло','order/providers'=>'Поставщики','order/departs'=>'Подраздел_','order/prices'=>'Цены');
                    break;
                case 'math':
                    $sub_menu = array('math'=>'Тригонометрия','math/pif'=>'Теорема Піфагора','math/sin'=>'Теорема сінусів','math/cos'=>'Теорема косинусів');
                    break;
                case 'staff':
                    $sub_menu = array('staff'=>"Персонал",'staff/old'=>'Бувші працівники','staff/work'=>'Должности');
                    break;
                case 'pay':                   
                    $sub_menu = array('pay'=>'Табель','pay/payment'=>"Порахувати",'pay/tariff'=>'Тарифы','pay/his'=>'История','pay/imprest'=>"Аванс");
                    break;
                case 'produce':
                    $sub_menu = array('produce'=>'Склад','produce/equipment'=>'Оборудование','produce/expendables'=>'Розхідні матеріали','produce/nomenclature'=>'Номенклатура','produce/category'=>'Типы продукции');
                    break;
                case 'sale':
                    $sub_menu = array('sale'=>'Продажи','sale/view'=>'Дивитися','sale/customer'=>'Покупці');
                    break;
                default:
                    break;
            } 
     
            
            if($controller_name !== 'main'){
                $str = '<ul  class="box" id="s_m">';
                foreach ($sub_menu as $key =>  $value) {
                    $str .= "<li><a href='/".$key."'>".$value."</a></li>";
                }
                $str .= "</ul>";
                echo "$str";

            }  else {
                return NULL;    
            }
    }  
}
