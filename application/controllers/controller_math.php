<?php

class Controller_Math extends Controller
{

	function action_index()
	{	
		$this->view->generate('math_view.php', 'template_view.php');
	}
}
