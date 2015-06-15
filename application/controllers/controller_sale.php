<?php

class Controller_Sale extends Controller
{

	function __construct()
	{
		$this->model = new Model_Sale();
		$this->view = new View();
	}
	
	function action_index()
	{
		$data = $this->model->get_data();
                
                $this->view->generate('sale_view.php', 'template_view.php', $data);
                
	}
        
        function action_selector($list,$param) {
            
            $data = $this->model->get_selector($list);
            
            echo $data;
            
        }
        
        function action_unit($list,$param) {
            
            $data = $this->model->get_unit($list);
            
            echo json_encode($data[0]);
            
        }
        
        function action_invoice() {
            
            $obj = $this->model->set_invoice($_POST['table'],$_POST['query']);
            
            echo $obj;
        }
        
        function action_order($list, $param) {
            
            $data = $this->model->get_order($list);
                
            $this->view->generate('print_order_view.php', 'template_view.php', $data);
        }
        
        function action_view($list,$param) {
            
            $data = $this->model->get_view($list,$param);
            
            $this->view->generate('orders_view.php','template_view.php', $data);
        }
        function action_customer($list, $param) {
            
            $data = $this->model->get_customer($list,$param);
            
            $this->view->generate('customer_view.php','template_view.php', $data);
        }
}
