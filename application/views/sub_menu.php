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
                case 'his':    
                case 'reports':
                case 'providers':
                case 'departs':
                case 'prices':    
                    $sub_menu = array('order'=>'Расчет','his'=>'История','providers'=>'Поставщики','departs'=>'Подразделения','prices'=>'Цены');
                    break;
                case 'math':
                    $sub_menu = array('math'=>'Тригонометрия');
                    break;
                case 'staff':
                case 'work':
                case 'func':
                    $sub_menu = array('staff'=>"Персонал",'work'=>'Должности');
                    break;
                case 'pay':
                case 'payment':
                case 'tariff':
                case 'pay/his':
                case 'imprest':    
                    $sub_menu = array('pay'=>'Табель','pay/payment'=>"Порахувати",'pay/tariff'=>'Тарифы','pay/his'=>'История','pay/imprest'=>"Аванс");
                    break;
                                    
                default:
                    break;
            } 
            
//            unset($sub_menu[$controller_name]) ;
//            print_r($sub_menu);
            
            
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
