<script type="text/javascript">
var providers = {};
<?php
foreach ($data['providers'] as $value) {
    echo "providers['{$value['id']}']  = {'name':'{$value['name']}','type':'{$value['providers_type']}'};";
}
?>
//    console.log(providers);
</script>
    <h1>Поставщікі - подраздєлєнія</h1>
    <?php
//    print_r($data['departs']);
//    echo "<br><br>";
//    print_r($data['dtype']);
//    echo "<br><br>";
//    print_r($data['providers']);
    ?>
    <input type="hidden" id="uid" value=""/>

    <div id="content">
            <div id="div_providers">
                <table class="info_tables" id="table_providers" width="80%">
                    <thead>
                        <tr>
                            <th>Номер п/п</th><th>Тип</th><th>Установа</th><th>Наименование</th><th>Коментарий</th><th>Action</th>
                        </tr>                
                    </thead>
                    <tbody>
                    <?php
                    foreach ($data['departs'] as $value){
                        echo "<tr id='r_{$value['pid']}'>
                            <td>".$value['pid']."</td>
                                <td>".$value['type']."</td>
                                <td>".$value['name']."</td>    
                                <td>".$value['patr']."</td>
                                <td>".$value['pcomm']."</td>
                                <td>
                                    <a id='e_{$value['pid']}' class='ico-info' title='Смотреть'></a>
                                    <a id='d_{$value['pid']}' class='ico-delete' title='Удалить'></a>
                                </td>
                             </tr>";
                    }
                    
                ?>    
                    </tbody>
                </table>
                <p style="text-align: center;"><input id="department" class="btn-save" type="button" value="Додати нового"/></p>
            </div>
        <div class="right_block">
            <br/>
            <br/>
            <select id="dtype">
                <option selected value="0">Тип поставщика</option>
                <?php
                                foreach ($data['dtype'] as $value) {
                                    echo "<option value='{$value['id']}'>{$value['providers_type']}</option>";
                                }
                ?>
            </select>
            <br/>
            <br/>
            <select id="providers">
                <option value="0" selected>Поставщик</option>
                <?php
                                foreach ($data['providers'] as $value) {
                                    echo "<option value='{$value['id']}'>{$value['name']}</option>";
                                }
                ?>
                
            </select>
            <br/>
            <br/>
            <input id="dname" type="text" value="" size="64" required placeholder="Наименование"/>
            <br/>
            <br/>
            <input id="dcomment" type="text" value="" size="64" required placeholder="Описание"/>
            <br/>
            <br/>
            <p style="text-align: center;"><input id="back" type="button" value="Вернуцца в зад" class="btn-save"/>&nbsp;&nbsp;
                <input id="d_save"  class="btn-save" type="button" value="Сохранить"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <br/>
            <br/>
        </div>
    </div>

<script type="text/javascript" src="/js/departs.js"></script>