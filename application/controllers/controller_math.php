<?php

class Controller_Math extends Controller
{

	function action_index()
	{	
            $this->view->generate('math_view.php', 'template_view.php');
	}
        function action_pif() {
            
            $data = array('theoreme'=>'Піфагора');
            
            $this->view->generate('triangle_view.php', 'template_view.php',$data);
        }
        function action_sin() {
            
            $data = array('theoreme'=>'Синусів');
            
            $this->view->generate('triangle_view.php', 'template_view.php',$data);
        }
        function action_cos() {
            
            $data = array('theoreme'=>'Косинусів');
            
            $this->view->generate('triangle_view.php', 'template_view.php',$data);
        }
}
