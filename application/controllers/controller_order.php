<?php

class Controller_Order extends Controller
{

	function __construct()
	{
		$this->model = new Model_Order();
		$this->view = new View();
	}
	
	function action_index()
	{
		$data = $this->model->get_data();
                
                $this->view->generate('order_view.php', 'template_view.php', $data);
                
	}
        
        function action_his() {
            
                $data = $this->model->get_his();
                
		$this->view->generate('his_view.php', 'template_view.php',$data);
        }
        
        function action_providers() {
            
            $data = $this->model->get_providers();
            
            $this->view->generate('providers_view.php', 'template_view.php',$data);
            
        }
        
        function action_departs()
	{
		$data = $this->model->get_departs();		
		$this->view->generate('departs_view.php', 'template_view.php', $data);
	}
        
        function action_prices()
	{
            $data = $this->model->get_prices();
            
            $this->view->generate('prices_view.php', 'template_view.php',$data);
	}
        
        function action_report($param) {
                $data = $this->model->get_report($param);
                $this->view->generate('reports_view.php', 'template_view.php', $data);
        }
        
        function action_price() {
            
            $data = $this->model->getPrice($_POST);
            return $data;
        }
        function action_kub() {
            $data = $this->model->getKub($_POST);
            return $data;
        }
        function action_saveW() {
            $data = $this->model->setW($_POST['query']);
            return $data;
        }
        
        function action_add() {
            $data = $this->model->setW($_POST['query']);
            return $data;
        }
        
        function action_del() {
            $data = $this->model->setUpdate($_POST['query']);
            return $data;
        }
        
        function action_edit() {
            $data = $this->model->setUpdate($_POST['query']);
            return $data;
        }
        function action_received($list,$param) {
            
            $pid = NULL;
            if(stripslashes($list) === 'sel'){
                $query = "SELECT wd.`id` , wd.`num_doc` AS 'order', p.`name` AS 'customer',wd.`date_doc` AS 'date_order' FROM `woods_doc` AS wd, `providers` AS p WHERE wd.`providers` = p.`id` AND wd.`providers` = '{$param}'";
               $pid = $param;
            }else{
                $query = "SELECT wd.`id` , wd.`num_doc` AS 'order', p.`name` AS 'customer',wd.`date_doc` AS 'date_order' FROM `woods_doc` AS wd, `providers` AS p WHERE wd.`providers` = p.`id` AND wd.`date_doc` BETWEEN '{$list}' AND '{$param}'";
            }
            
            $data = $this->model->getReceived($query, $pid);
            
            $data['list'] = stripslashes($list);
            
            $data['param'] = stripslashes($param);
            
            $this->view->generate('received_view.php', 'template_view.php', $data);
        }
}
