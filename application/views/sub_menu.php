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
//        $sub_menu = array();
//            $sub_menu['staff'] = array('staff'=>"Персонал",'func'=>'Должности','action'=>'Функции');
//            $sub_menu['pay'] = array('tsh'=>'Табель','imprest'=>"Аванс/Выплаты/Штрафы",'payment'=>"Зарплата - расчет",'tariff'=>'Тарифы','his'=>'История');
//            $sub_menu['pro'] = array('skl'=>'Склад','nom'=>'Номенклатура','cat'=>'Типы продукции');
//            $sub_menu['order'] = array('order'=>'Расчет','his'=>'История','ps'=>'Поставщики','part'=>'Подразделения','price'=>'Цены','reports'=>'Отчеты');
//            $sub_menu['his'] = array('order'=>'Расчет','his'=>'История','ps'=>'Поставщики','part'=>'Подразделения','price'=>'Цены','reports'=>'Отчеты');
//            $sub_menu['reports'] = array('order'=>'Расчет','his'=>'История','ps'=>'Поставщики','part'=>'Подразделения','price'=>'Цены','reports'=>'Отчеты');
//            $sub_menu['sale'] = array('sl'=>'Продажи','slo'=>'Расходная накладная');
//            $sub_menu['math'] =array('brad'=>'Тригонометрия');
//            $sub_menu['dump'] = array('dump'=>'Bacup');
//        echo "$controller_name";     
            switch ($controller_name) {
                case 'order':                   
                    $sub_menu = array('order'=>'Расчет','order/his'=>'История','order/providers'=>'Поставщики','order/departs'=>'Подразделения','order/prices'=>'Цены');
                    break;
                case 'math':
                    $sub_menu = array('math'=>'Тригонометрия');
                    break;
                case 'staff':
                    $sub_menu = array('staff'=>"Персонал",'staff/work'=>'Должности');
                    break;
                case 'pay':                   
                    $sub_menu = array('pay'=>'Табель','pay/payment'=>"Порахувати",'pay/tariff'=>'Тарифы','pay/his'=>'История','pay/imprest'=>"Аванс");
                    break;
                case 'produce':
                    $sub_menu = array('produce'=>'Склад','produce/nomenclature'=>'Номенклатура','produce/category'=>'Типы продукции');
                    break;
                case 'sale':
                    $sub_menu = array('sale'=>'Продажи','sale/slo'=>'Расходная накладная');
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
