<?php

class Controller_His extends Controller
{

	        
        function __construct()
	{
		$this->model = new Model_His();
                
		$this->view = new View();
	}
        
        function action_index()
	{	
                $data = $this->model->get_data();
                
		$this->view->generate('his_view.php', 'template_view.php',$data);
	}
}

