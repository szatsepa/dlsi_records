<?php

class Controller_Func extends Controller
{
        function __construct()
	{
		$this->model = new Model_Func();
		$this->view = new View();
	}
        
	function action_index()
	{
            $data = $this->model->get_data();
            
            $this->view->generate('func_view.php', 'template_view.php',$data);
	}
        function action_add() {
            $data = $this->model->add($_POST['query']);
        }
        function action_del() {
            $data = $this->model->del($_POST['query']);
        }
        function action_update() {
            $data = $this->model->update($_POST['query']);
        }
}
