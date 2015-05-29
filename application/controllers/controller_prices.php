<?php

class Controller_Prices extends Controller
{
        function __construct()
	{
		$this->model = new Model_Prices();
		$this->view = new View();
	}
        
	function action_index()
	{
            $data = $this->model->get_data();
            
            $this->view->generate('prices_view.php', 'template_view.php',$data);
	}
        function action_add() {
            $data = $this->model->addNew($_POST['query']);
        }
        function action_del() {
            $data = $this->model->delProvider($_POST['query']);
        }
        function action_edit() {
            $data = $this->model->updateProvider($_POST['query']);
        }
}
