<?php

class Controller_Order extends Controller
{

	function __construct()
	{
		$this->model = new Model_Order();
		$this->view = new View();
	}
	
	function action_index()
	{
		$data = $this->model->get_data();
                
                $this->view->generate('order_view.php', 'template_view.php', $data);
                
	}
        function action_price() {
            
            $data = $this->model->getPrice($_POST);
            return $data;
        }
        function action_kub() {
            $data = $this->model->getKub($_POST);
            return $data;
        }
        function action_saveW() {
            $data = $this->model->setW($_POST['query']);
            return $data;
        }
//        function action_saveO() {
//            $data = $this->model->setOrder($_POST['query']);
//            return $data;
//        }
}
