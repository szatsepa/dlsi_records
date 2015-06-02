<script type="text/javascript" src="/js/jquery.datepick.js"></script>
<script type="text/javascript" src="/js/jquery.printElement.js"></script> 
<div id="content">
<?php
    $routes = explode('/', $_SERVER['REQUEST_URI']);
    echo "<input type='hidden' id='S' value='{$routes[3]}'/>";
?>
    <h1>Наявність продукції</h1>
    
    <div id="staff_tab">
            <div id="sort">
                <label>Выберите категорию продукции: </label>
                <?php
                if(count($data['selector'])>0){
                    echo "<select id='sort'>";
                    echo "<option value='0' selected>Все</option>";
                    foreach ($data['selector'] as $value){
                            echo "<option value='{$value['id']}'>{$value['category']}</option>";
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
                        <th>Индекс</th><th>Вид</th><th>Наименование</th><th>Ед. измерения</th><th>Количество</th><th>Стоимость</th><th>Action</th>
                        </tr>                
                    </thead>
                    <tbody>
                    <?php
                    $SSUM =0;
                    foreach ($data['depot'] as $value) 
                        {
                        
                            echo "<tr id='r_{$value['id']}'>
                            <td>".$value['id']."</td>
                                <td>".$value['category']."</td>
                                <td>".$value['name']."</td>    
                                <td>".$value['unit']."</td>
                                    <td>{$value['count']}</td>
                                <td>".round(($value['count']*$value['price']),2)."</td>
                                <td>
                                    <a id='e_{$value['id']}' class='ico-plus' title='Добавить в позицию'></a>&nbsp;&nbsp;
                                    <a id='d_{$value['id']}' class='ico-minus' title='Удалить из позиции'></a>
                                </td>
                             </tr>";
                                    $SSUM += round(($value['count']*$value['price']),2);
                        }
                ?>    
                    </tbody>
                </table>
                <br/>
                <br/>
                <div style="width: 63%">
                    <h1 style="text-align: center;">ВСЕГО НА СУММУ <?php echo $SSUM; ?> грн.</h1>
                    <br/>
                    <br/>
                </div>
                <p style="text-align: center;"><input id="new_products" class="btn-save" type="button" value="Добавить позицию"/></p>
            </div>
            <div class="right_block">
            <br/><br/>
            <label>Выберите тип продукции(два тыц - тыц).</label>
            <br/><br/>
            <select id="categories">
                <?php
               echo  "<option value='0' selected>Выберите тип</option>";
                foreach ($data['category'] as  $value) {
                    
                        echo "<option value='{$value['id']}'>{$value['categories']}</option>";
                    
                    
                }
                ?>
            </select>
            <br/><br/>
            <span id="nom">
            <label for input>Добавьте наименование далее по смыслу.</label>
            <br/><br/>
            <select id="nom_cat">
                
            </select>
            <br/>
            <br/>
            <input id="count" value="" size="8" required placeholder="Введите количество"/>
            <br/><br/>
<!--            <select id="units">
                <?php
                echo "<option>Выберите единицу измерения</option>";
                                foreach ($data['unit'] as $value) {
                                    echo "<option value='{$value['id']}'>{$value['unit']}</option>";
                                }
                ?>
            </select>-->
            <p style="text-align: center;"><input id="save" type="button" class="btn-save" value="Сохранить"/>&nbsp;&nbsp;<input id="back" type="button" value="Вернуцца в зад"/>&nbsp;&nbsp;</p>
            <br/>
            <br/>
            </span>
            
        </div>
    
    </div>

<script type="text/javascript" src="/js/storage.js"></script>