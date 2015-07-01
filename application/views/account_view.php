<?php
var_dump($data);
echo "<input type='hidden' id='page' value='{$data['page']}'/>";
?>
<h1>Кошти видані під звіт</h1>
<div id="content">
        <div id="staff_tab">
            <div id="sortN">
                <label>Виберіть будь ласка персону: </label>
                <?php
//                print_r($data['selector']);
                if(count($data['selector'])>0){
                    echo "<select id='type'>";
                    echo "<option value='0'>Все</option>";
                    foreach ($data['selector'] as  $value){
                         if($data['page'] === $value['id']){
                                echo "<option value='{$value['id']}' selected>{$value['staff']}</option>";
                            }else{
                                echo "<option value='{$value['id']}'>{$value['staff']}</option>";
                            }

                    }
                    echo "</select>";
                }
                ?>
                <br/>
                <br/>
        </div>
            <table class="info_tables" id="table_onaccount">
                <thead>
                    <tr>
                    <th>Индекс</th><th>Кому</th><th>Коли</th><th>Скільки</th><th>Для чього</th><th>Коли повернув</th><th>Підтверж. витрати</th><th>Скілко повернув</th><th>Action</th>
                    </tr>                
                </thead>
                <tbody>
                <?php
                $summ = 0;
                $delta = 0;
                $returned = 0;
                foreach ($data['onaccount'] as $value){
                    echo "<tr id='r_{$value['id']}'>
                        <td>".$value['id']."</td>
                            <td>{$value['staff']}</td>
                            <td>".$value['where']."</td>
                            <td>".sprintf("%01.2f", $value['received'])."</td>
                            <td>".$value['use']."</td>    
                            <td>".$value['whereR']."</td> 
                            <td>".$value['outlay']."</td>    
                            <td>".sprintf("%01.2f", $value['returned'])."</td>";
                            $sum = round(($value['received']-$value['returned']),2);
                            $returned += $value['returned'];
                            $summ += ($value['received']-$value['returned']);
//                           echo "<td>".sprintf("%01.2f", $sum)."</td>";    
                           echo " <td>
                                <a id='e_{$value['id']}' class='ico-plus' title='Додати'></a>
                                <a id='d_{$value['id']}' class='ico-minus' title='Зменшити'></a>
                            </td>
                         </tr>";
                }
//                $delta = round(($summ-$returned),2); 
            ?>    
                </tbody>
            </table>
            <div style="width: 63%">
                <br/><br/>
                <h2 style="text-align: center;">
                    Витрати склали&colon;&nbsp;&nbsp;<?php echo sprintf("%01.2f", $summ); ?> грн.
                    
                    
                </h2>
                <h2 style="text-align: center;">
                    Різниця складає&colon;&nbsp;&nbsp;<?php echo sprintf("%01.2f", $summ); ?> грн.
                </h2>
                    <br/>
                    <br/>
                </div>
            <p style="text-align: center;"><input id="new_products" class="btn-save" type="button" value="Добавить позицию"/></p>
        </div>
    <div class="right_block">
        <br/>
        <br/>
        <input id="type" type="text" value="" size="48" required placeholder="До якого типу віднести?"/>
        <br/>
        <br/>
        <input id="name" type="text" value="" size="48" required placeholder="Найменування"/>
        <br/>
        <br/>
        <input id="sname" type="text" value="" size="48" placeholder="Найменування коротенько"/>
        <br/>
        <br/>
        <input id="price" type="text" value="" size="48" required placeholder="Ціна/Коштує"/>
        <br/>
        <br/>
        <input id="count" type="text" value="" size="48" required placeholder="Кількіість"/>
        <br/>
        <br/>
        <textarea id="comment" cols="48" rows="3">
            Коментар
        </textarea>
        <br/>
        <br/>
        <p style="text-align: center;">
            <input id="save" class="btn-save" type="button" value="Зберегти"/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
            <input id="back" type="button" class="btn-save" value="Повернутися"/>
            &nbsp;&nbsp;
        </p>
        <br/>
        <br/>
        
    </div>
</div>
<script type="text/javascript" src="/js/equipment.js"></script>