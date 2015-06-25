<div id="d_wr">
    <h1>Поставщікі - цєни(прайси інимє словамі)</h1>
    <script type="text/javascript">
var providers = {};
<?php

foreach ($data['providers'] as $value) {
    echo "providers['{$value['id']}']  = {'name':'{$value['name']}','type':'{$value['providers_type']}'};";
}

?>
//    console.log(providers[1]);
</script>
    <input type="hidden" id="user_count" value="<?php echo count($data['providers']);?>"/>
    <input type="hidden" id="uid" value="<?php           echo "{$data['pid']}";?>"/>
<?php
//    var_dump($data['providers']);
?>
    <div id="content">
            <div id="div_providers">
                <p>
                    <select id='prov'>
                        
                        <?php
                        
                        if($data['pid']){
                            echo '<option value="0" name="0">Вибирайте</option>';
                        }else{
                            echo '<option value="0" selected name="0">Вибирайте</option>';
                        }
                        
                            foreach ($data['providers'] as $value) {
                                
                                if($data['pid'] === $value['id']){
                                    echo "<option value='{$value['id']}' name='{$value['typeid']}' class='{$value['typename']}' selected>{$value['name']}</option>";
                                }else{
                                    echo "<option value='{$value['id']}' name='{$value['typeid']}' class='{$value['typename']}'>{$value['name']}</option>";
                                }
                                
                            }
                        ?>
                    </select>
                </p>
                <?php
               if(count($data['prices'])){
                ?>
                <table class="info_tables" id="table_providers" width="80%">
                    <thead>
                        <tr>
                            <th>Номер п/п</th><th>Тип</th><th>Наименование</th><th>Diameter</th><th>Sort</th><th>Цена</th><th>Action</th>
                        </tr>                
                    </thead>
                    <tbody>
                    <?php
                    foreach ($data['prices'] as $value){
                        echo "<tr id='r_{$value['id']}'>
                            <td>".$value['id']."</td>
                                <td>".$value['pt']."</td>
                                <td>".$value['name']."</td>
                                <td>".$value['d_min']." - ".$value['d_max']."</td>
                                        <td>".$value['sort']."</td>
                                            <td>".$value['p1']."</td>
                                                
                                <td>
                                    <a id='e_{$value['id']}' class='ico-info' title='Смотреть'></a>
                                    <a id='d_{$value['id']}' class='ico-delete' title='Удалить'></a>
                                </td>
                             </tr>";
                    }
//                 <td>".$value['p2']."</td>
//                                                    <td>".$value['p3']."</td>   
                ?>    
                    </tbody>
                </table>
                <?php
               }
                ?>
                <p style="text-align: center;"><input id="new_price" class="btn-save" type="button" value="Додати нового"/></p>
            </div>
        <div class="right_block">
            <p id="pprov">
                
            </p>
            
            <p>
                <a id="v_zad">Повернутися в зад</a>
            </p> 

            <div id="foot">
                <table id="tprice" class="info_tables" width="90%">
                        <thead>
                            <tr>
                                <th>Diameter</th><th>Sort</th><th>Price</th>><th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <select id="dwoods">
                                        <option value="0" selected>Диаметры</option>
                                        <option value="14 - 19">14 - 19</option>
                                        <option value="20 - 25">20 - 25</option>
                                        <option value="26 - 35">26 - 35</option>
                                        <option value="36 >>">36 >></option>
                                    </select>
                                </td>
                                <td>
                                    <select id="swoods">
                                        <option value="0" selected>Б/С</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </td>
                                <td>
                                    <input id="p1" value="0" placeholder="" size="6"/>
                                </td>
                                <td>
                                    <a id='' class='ico-done' title='Зберегти'></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                
                <br/>
                
                <br/>
                <br/>
            </div>
            
        </div>
    </div>
</div>
<script type="text/javascript" src="/js/prices.js"></script>