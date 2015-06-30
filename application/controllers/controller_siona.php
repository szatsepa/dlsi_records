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
            $data = $this->model->get_data();
            
            $this->view->generate('modes_view.php', 'template_view.php',$data);
	}
        
    function action_rej($list) {

        $data = $this->model->get_page($list);

        $this->view->generate('siona_view.php', 'template_view.php',$data);
    }
    
    function action_modes() {

        $this->view->generate('modes_view.php', 'template_view.php',$data);
    }    
}
