<?php

class Controller_Siona extends Controller
{
     function __construct()
	{
		$this->model = new Model_Siona();
		$this->view = new View();
	}

    function action_index()
	{
            $data = $this->model->get_data($list);
            
            $this->view->generate('siona_view.php', 'template_view.php',$data);
	}
        
}
