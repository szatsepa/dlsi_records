<div id="content">
        <div id="staff_tab">
            <div id="sort">
                <label>Выберите категорию продукции: </label>
                <?php
                print_r($data['selector']);
                if(count($data['selector'])>0){
                    echo "<select id='sort'>";
                    echo "<option value='0'>Все</option>";
                    foreach ($data['selector'] as  $value){
//                        if($attributes['sort'] == $key){
//                            echo "<option value='{$key}' selected>{$value}</option>";
//                        }else{}
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
            <p style="text-align: center;"><input id="new_products" type="button" value="Добавить позицию"/></p>
        </div>
    <div class="right_block">
        <br/><br/>
        <label>Выберите тип продукции.</label>
        <br/><br/>
        <select id="categories">
            <?php
            $n = 0;
            foreach ($data['categories'] as $value) {
//                if($n === 0){
//                    echo "<option value='{$value['id']}' selected>{$value['categories']}</option>"; 
//                }else{}
                    echo "<option value='{$value['id']}'>{$value['categories']}</option>";
                
                $n++;
            }
            ?>
        </select>
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
            <option selected>шт</option>
            <option>м.куб</option>
            <option>м.кв</option>
            <option>м.пог</option>
            <option>кг.</option>
        </select>
        <p style="text-align: center;"><input id="d_save" type="button" value="Сохранить"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp<input id="back" type="button" value="Вернуцца в зад"/>&nbsp;&nbsp;;</p>
        <br/>
        <br/>
    </div>
</div>
<script type="text/javascript" src="/js/nomenclature.js"></script>