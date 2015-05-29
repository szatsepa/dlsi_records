<?php

class Controller_Tariff extends Controller
{
        function __construct()
	{
		$this->model = new Model_Tariff();
		$this->view = new View();
	}
        
	function action_index()
	{
            $data = $this->model->get_data();
            
            $this->view->generate('tariff_view.php', 'template_view.php',$data);
	}
        function action_add() {
            $data = $this->model->addNew($_POST['query']);
        }
        
        function action_edit() {
            $data = $this->model->update($_POST['query']);
        }
}
