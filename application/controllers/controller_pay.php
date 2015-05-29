<?php

class Controller_Pay extends Controller
{
        function __construct()
	{
		$this->model = new Model_Pay();
		$this->view = new View();
	}
        
	function action_index()
	{
            $data = $this->model->get_credits();
            
            $this->view->generate('pay_view.php', 'template_view.php',$data);
	}
        
        function action_his() {
            
            $data = $this->model->get_history();
            
            $this->view->generate('pay_his_view.php', 'template_view.php',$data);
        }
        
        function action_part($list) {
            
            $data = $this->model->get_part($list);
            
            $this->view->generate('pay_part_view.php', 'template_view.php',$data);
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
