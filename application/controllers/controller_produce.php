<?php

class Controller_Produce extends Controller
{

	function __construct()
	{
		$this->model = new Model_Produce();
		$this->view = new View();
	}
	
	function action_index()
	{
		$data = $this->model->get_data();
                
                $this->view->generate('produce_view.php', 'template_view.php', $data);
                
	}
        
        function action_select($list,$param)
	{
//            echo "LIST _ ".$list." ".$param;
		$data = $this->model->get_select($list);
                
                $this->view->generate('produce_view.php', 'template_view.php', $data);
                
	}
        
        function action_nomenclature()
	{
		$data = $this->model->get_nom();
                
                $this->view->generate('produce_view.php', 'template_view.php', $data);
                
	}
        function action_category()
	{
		$data = $this->model->get_cat();
                
                $this->view->generate('produce_view.php', 'template_view.php', $data);
                
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
