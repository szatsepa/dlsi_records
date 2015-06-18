<script type="text/javascript" src="/js/jquery.printElement.js"></script> 
<div id="d_wr">
    <?php
//    print_r($data);
    ?>
    <input type="hidden" id="list" value="<?php echo $data[0]['list'];?>"/>
<div id="back_v_zad">
    <p style="text-align: center;">
        <a id="a_v_zad">Повернутися в зад</a>
    </p>
        
        </div>
    <div id="report" class="dprint">
        
        <div id="staff_tab">
            
            <span id="sprice">
             <p><strong>Поставщик&nbsp;&nbsp;</strong><?php echo "{$data[0]['provider']}"; ?>&lsquor;&nbsp;&nbsp;&nbsp;<?php if($data[0]['dep'])echo "Подразделение&nbsp;&nbsp;{$data[0]['dep']}&period;"; ?></p>
                <p><?php echo "Від {$data[0]['date_doc']}"; ?>&nbsp;&nbsp;&nbsp;Док.№&nbsp;<?php echo "{$data[0]['num_doc']}"; ?></p> 
<!--                <p></p>-->
                <p><strong>Перевозчик&nbsp;-&nbsp;</strong><?php echo "{$data[0]['freighter']}";?>&nbsp;&nbsp;
                    
                </p>
                <p>
                    <strong>Водитель&nbsp;-&nbsp;</strong><?php echo "{$data[0]['V_man']}"; ?>&nbsp;&nbsp;
                    <strong>Модель&nbsp;-&nbsp;</strong><?php echo "{$data[0]['V_type']}"; ?>&nbsp;&nbsp;
                    <strong>Госномер&nbsp;-&nbsp;</strong><?php echo "{$data[0]['V_num']}"; ?>&nbsp;&nbsp;
                </p>
                <p>
                   <strong>Отпустил&nbsp;-&nbsp;</strong><?php echo "{$data[0]['shipped']}"; ?>&nbsp;&nbsp;
                   <strong>Принял&nbsp;-&nbsp;</strong><?php echo "{$data[0]['accepted']}"; ?>&nbsp;&nbsp; 
                   <strong>Стоимость г/п&nbsp;-&nbsp;</strong><span id="st"><?php echo "{$data[0]['freighte']}&nbsp;грн."; ?></span>&nbsp;&nbsp;
                </p>
            </span>
        <!--<p id="date"><?php  echo $date_doc; ?></p>-->
    </div>
        <div id="woods_tab">

            <div id="woods">
                <table class="info_tables" id="table_woods" width='100%'>
                    <thead>
                        <tr>
                        <th>Диаметер</th><th>Сорт</th><th>Довжина</th><th>Кількість</th><th>Об'єм</th><th>Ціна</th><th>Коштує</th>
                        </tr>                
                    </thead>
                    <tfoot>
                        <tr>
                            <td></td><td>Всього:</td><td></td><td>&nbsp;шт.</td><td>&nbsp;м3</td><td></td><td>&nbsp;грн.</td>
                        </tr>
                    </tfoot>
                    <tbody>
                    <?php
                    if(count($data)){
                        foreach ($data as $key => $value){
                            echo "<tr id='r_{$key}'>";
                            foreach ($value as $k => $val) {
//                                $val['price'] = sprintf("%01.2f", $val['price']);
                                if($k === 'provider')                                    break;
                               if($k !== 'create') echo "<td>{$val}</td>";
                                
                            }


                            echo     "</tr>";
                        }
                    }
                    
                ?>    
                    </tbody>
                </table>
                <p id="res" align="right">Итого с тр. раходами</p>
               </div>
            
            </div>
        
         
    </div> 
    
        <div>
            <p style="text-align: center;"><input type="button" class='btn-save' id="printTab" value="Распечатать"/></p>
        </div>
    
</div>
<script type="text/javascript" src="/js/reports.js"></script>