<?php

class Controller_Reports extends Controller
{

	function __construct()
	{
		$this->model = new Model_Reports();
		$this->view = new View();
	}
	
	function action_index()
	{
//		$data = $this->model->get_data();
//                
//                $this->view->generate('reports_view.php', 'template_view.php', $data);
                
	}
        
        function action_part($param) {
                $data = $this->model->get_data($param);
                $this->view->generate('reports_view.php', 'template_view.php', $data);
        }

}
