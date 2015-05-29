<?php

class Controller_Payment extends Controller
{
        function __construct()
	{
		$this->model = new Model_Payment();
		$this->view = new View();
	}
        
	function action_index()
	{
            $data = $this->model->get_credits();
            
            $this->view->generate('payment_view.php', 'template_view.php',$data);
	}
        
        function action_details($param) {
            
            $data = $this->model->getDetails($param);
            
            $this->view->generate('details_view.php', 'template_view.php',$data);
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
        function action_archive() {
            $data = $this->model->update($_POST['query']);
            
        }
}
