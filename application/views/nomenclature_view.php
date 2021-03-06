<?php
$routes = explode('/', $_SERVER['REQUEST_URI']);
$type = $routes[3];
?>
<h1>Номенклатура</h1>
<div id="content">
        <div id="staff_tab">
            <div id="sortN">
                <label>Выберите категорию продукции: </label>
                <?php
//                print_r($data['selector']);
                if(count($data['selector'])>0){
                    echo "<select id='sort'>";
                    echo "<option value='0'>Все</option>";
                    foreach ($data['categories'] as  $value){
                         if(!empty($routes[3]) and $routes[3] === $value['id']){
                                echo "<option value='{$value['id']}' selected>{$value['category']}</option>";
                            }else{
                                echo "<option value='{$value['id']}'>{$value['category']}</option>";
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
                    <th>Индекс</th><th>Тип</th><th>Наименование</th><th>Ед. измерения</th><th>Цена/Стоимость</th><th>Action</th>
                    </tr>                
                </thead>
                <tbody>
                <?php
                foreach ($data['nom'] as $value){
                    echo "<tr id='r_{$value['id']}'>
                        <td>".$value['id']."</td>
                            <td>{$value['type']}</td>
                            <td>".$value['nomenclature']."</td>
                            <td>".$value['unit']."</td>    
                            <td>".$value['price']."</td>
                            <td>
                                <a id='e_{$value['id']}' class='ico-info' title='Смотреть'></a>
                                <a id='d_{$value['id']}' class='ico-delete' title='Удалить'></a>
                            </td>
                         </tr>";
                }
            ?>    
                </tbody>
            </table>
            <p style="text-align: center;"><input id="new_products" class="btn-save" type="button" value="Добавить позицию"/></p>
        </div>
    <div class="right_block">
        <br/><br/>
        <label>Выберите тип продукции.</label>
        <br/><br/>
       <span id="ctg">
                <input id="categories" type="text" value="" readonly />
        </span>
        <br/><br/>
        <label>Добавьте наименование далее по смыслу.</label>
        <br/><br/>
        <input id="name" type="text" value="" size="48" required placeholder="Наименование позиции"/>
        <br/>
        <br/>
        <input id="price_pos" type="text" value="" size="48" required placeholder="Цена/Стоимость"/>
        <br/>
        <br/>
        <select id="units">
            <option value="0">Од. виміру</option>
            <option value="1">шт</option>
            <option value="2">м.куб</option>
            <option value="3">м.кв</option>
            <option value="4">м.пог</option>
            <option value="5">кг.</option>
        </select>
        <p style="text-align: center;"><input id="d_save" class="btn-save" type="button" value="Сохранить"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp<input id="back" type="button" class="btn-save" value="Вернуцца в зад"/>&nbsp;&nbsp;;</p>
        <br/>
        <br/>
    </div>
</div>
<script type="text/javascript" src="/js/nomenclature.js"></script>