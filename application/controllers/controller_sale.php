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
        function action_invoice() {
            
        }
}
