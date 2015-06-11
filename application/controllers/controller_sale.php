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
            
            $obj = $this->model->set_invoice($_POST['table']);
            
//            $str = ;
            
            echo $obj;
        }
}
