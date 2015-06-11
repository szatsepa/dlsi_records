<script type="text/javascript" src="js/jquery.datepick.js"></script>
<?php 
 if(count($data['credit'])!=0){
     echo '<input id="paket" type="hidden" value="'.$data['paket'].'"/>'; 
 }else{
     echo '<input id="paket" type="hidden" value="'.$pac = ($data['paket']+1).'"/>';
 }
// print_r($data['credit']);
?>
<script type="text/javascript">
var tariff_list = {};
<?php
    foreach ($data['tariff'] as $key => $value) {
        echo "tariff_list['{$key}'] = {'id':'{$value['id']}','action':'{$value['action']}','func':'{$value['function']}','short':'{$value['short']}','tariff':'{$value['tariff']}','cost':'{$value['cost']}'};";
    }

?>
</script>
<div style="display: none;">
  <a class="ico-user-03" title="Вибрати нового працівника"></a>  
</div>

<!--<div id="content">-->
    <h1>Табель</h1>
    <div id="tablesheet">
            <table class="info_tables" id="table_sheet">
                <thead>
                    <tr>
                        <th>№ з/ч</th><th>ФИО</th><th>Виконував</th><th>Тариф</th><th>Кількість</th><th>Всього</th><th>Action</th> 
                    </tr>
                </thead>
                <tbody>
                    <?php
                    $trow = 1;
                    if(count($data['credit'])!==0){
                        
                        foreach ($data['credit'] as $key => $value) {
                            
                            
                            $numrow = 0;
                            foreach ($value['cost'] as $val) {
                                
                                $all = round($val['cost']*$val['produced'],2);
                                echo "<tr id='r{$trow}' class='cr{$key}' name='{$val['row']}'>";
                                echo "<td>$trow</td><td id='td{$value['staff']}'>{$value['surname']}</td><td>{$val['short']}</td><td>{$val['cost']}</td><td>{$val['produced']}</td><td>{$all}</td>";
                                echo    "<td><a class='ico-info' title='Изменить'></a>&nbsp;&nbsp;<a class='ico-delete' title='Удалить строку'></a></td></tr>";
                                if($numrow > 0){
                                    
                                }
                                $numrow++;
                            }
                                   
                              
                    
                            
                                $trow++;
                        }
                    }
//                    if(!isset($attributes['num'])){}
                        
                        echo "<tr id='f{$trow}'>";
                    ?>"
                    
                    
                        <td><?php echo $trow; ?></td>
                        <td>
                            <select id="user_list">
                                <?php
                                $row = 0;
                                foreach ($data['staff'] as $value) {
                                    
                                    if($row === 0){
                                        echo "<option value='{$value['id']}' selected>{$value['surname']}</option>";
                                    }else{
                                        echo "<option value='{$value['id']}'>{$value['surname']}</option>";
                                    }
                                    $row++;
                                }
                                ?>
                            </select>  
                        </td>
                        <td>
                            <select id="function_list">
                          <?php
                                $row = 0;
                                foreach ($data['work'] as $value) {
                                    
                                    if($row === 0){
                                        echo "<option value='{$value['id']}' selected>{$value['function']}</option>";
                                    }else{
                                        echo "<option value='{$value['id']}'>{$value['function']}</option>";
                                    }
                                    $row++;
                               
                                    
                                }
                                ?> 
                            </select>
                        </td>
                        <td>
                            <select id="tariff_list">
                          <?php
                                $row = 0;
                                foreach ($data['tariff'] as $value) {
                                    
                                    if($row === 0){
                                        echo "<option value='{$value['id']}' selected name='{$value['action']}' alt='{$value['tariff']}'>{$value['short']}</option>";
                                    }else{
                                        echo "<option value='{$value['id']}' name='{$value['action']}' alt='{$value['tariff']}'>{$value['short']}</option>";
                                    }
                                    $row++;
                                       
                                }
                                ?> 
                            </select>
                        </td>
                        <td>
                            <input type="text" id="count" value="" size='6'/>
                        </td>
                        <td>
                            
                        </td>
                        <td>
                                
                            <a class='ico-done' title='Зберегти'></a> 
                        </td>
                    </tr>
                    <?php
                    
                    ?>
                    
                </tbody>
            </table>
        </div>
<script type="text/javascript" src="/js/pay.js"></script>