<?php
//var_dump($data['page']);
echo "<input type='hidden' id='page' value='{$data['page']}'/>";
echo "<input type='hidden' id='ptype' value='{$data['type']}'/>";
?>
<h1>Устаткування</h1>
<div id="content">
        <div id="staff_tab">
            <div id="sortN">
                <label>Выберите тип оборудования: </label>
                <?php
//                print_r($data['selector']);
                if(count($data['selector'])>0){
                    echo "<select id='type'>";
                    echo "<option value='0'>Все</option>";
                    foreach ($data['selector'] as  $value){
                         if($data['type'] === $value['type']){
                                echo "<option value='{$value['type']}' selected>{$value['type']}</option>";
                            }else{
                                echo "<option value='{$value['type']}'>{$value['type']}</option>";
                            }

                    }
                    echo "</select>";
                }
                ?>
                <br/>
                <br/>
        </div>
            <table class="info_tables" id="table_products">
                <thead>
                    <tr>
                    <th>Индекс</th><th>Тип</th><th>Наименование</th><th>Ед. измерения</th><th>Кількість</th><th>Цена/Стоимость</th><th>Сума</th><th>Action</th>
                    </tr>                
                </thead>
                <tbody>
                <?php
                $summ = 0;
                foreach ($data['eq'] as $value){
                    echo "<tr id='r_{$value['id']}'>
                        <td>".$value['id']."</td>
                            <td>{$value['etype']}</td>
                            <td>".$value['name']."</td>
                            <td>".$value['unit']."</td> 
                            <td>".$value['amount']."</td>    
                            <td>".$value['cost']."</td>";
                            $sum = round(($value['amount']*$value['cost']),2);
                            $summ += $sum;
                           echo "<td>".sprintf("%01.2f", $sum)."</td>";    
                           echo " <td>
                                <a id='e_{$value['id']}' class='ico-plus' title='Додати'></a>
                                <a id='d_{$value['id']}' class='ico-minus' title='Зменшити'></a>
                            </td>
                         </tr>";
                }
                
            ?>    
                </tbody>
            </table>
            <div style="width: 63%">
                <br/><br/>
                <h2 style="text-align: center;">ВСЕГО НА СУММУ <?php echo sprintf("%01.2f", $summ); ?> грн.</h2>
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