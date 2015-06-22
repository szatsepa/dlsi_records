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
		$data = $this->model->get_select($list);
                
                $this->view->generate('produce_view.php', 'template_view.php', $data);
                
	}
        
        function action_nomenclature($list,$param)
	{
		$data = $this->model->get_nom($list);
                
                $this->view->generate('nomenclature_view.php', 'template_view.php', $data);
                
	}
        function action_category()
	{
		$data = $this->model->get_cat("SELECT * FROM `categories` WHERE `activity` = 1");
                
                $this->view->generate('categories_view.php', 'template_view.php', $data);
                
	}
        
        function action_getNom() {
            
            $data = $this->model->getNom("SELECT `id`, `nomenclature` FROM `nomenclature` WHERE `categories`='".(intval($_POST['id']))."' ORDER BY `nomenclature`");
            
            echo json_encode($data);
            
        }
        function action_add() {
            $data = $this->model->addNew($_POST['query']);
            
            echo $data;
        }
            
        function action_del() {
            $data = $this->model->delProvider($_POST['query']);
        }
        
        function action_edit() {
            
            $data = $this->model->update($_POST['query']);
            
            echo $data;
        }
        
        function action_unit() {
            
            $data = $this->model->getUnit();
            
            $select = "<select id='unit'>";

            foreach ($data as $row){
                
                $select .= "<option value='{$row['id']}'>{$row['unit']}</option>";
                

                }

            $select .= "</select>";

            echo $select;
            
        }
        
        function action_equipment($param) {
                       
            $data = $this->model->get_equipment($param);
            
            $this->view->generate('equipment_view.php', 'template_view.php', $data);
        }
        
        function action_expendables($param) {
                       
            $data = $this->model->get_equipment($param);
            
            $this->view->generate('equipment_view.php', 'template_view.php', $data);
        }
}
