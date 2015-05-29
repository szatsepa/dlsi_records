<div id="d_wr">
    <h1>Tariffs</h1>
    <?php
//    print_r($data);
    ?>
    <div id="content">
            <div id="staff_tab">
                <table class="info_tables" id="table_staff">
                    <thead>
                        <tr>
                            <th>№ з\п</th><th>Посада</th><th>Скорочено</th><th>Подробиці</th><th>Коштує</th><th>Action</th>
                        </tr>                
                    </thead>
                    <tbody>
                    <?php
                    foreach ($data['tariff'] as $value){
                        echo "<tr id='r_{$value['id']}'>
                                <td>".$value['id']."</td>
                                <td>".$value['fn']."</td>
                                <td>".$value['short']."</td>
                                <td>".$value['tariff']."</td>
                                <td>".$value['cost']."</td>
                                <td>
                                    <a id='e_{$value['id']}' class='ico-info' title='Изменить?'></a>
                                    <a id='d_{$value['id']}' class='ico-delete' title='Удалить?'></a>
                                </td>
                             </tr>";
                    }
                ?>    
                    </tbody>
                </table>
                <p style="text-align: center;"><input id="new" class="btn-save" type="button" value="Додати нового"/></p>
            </div>
        
        <div class="right_block">
            <br/>
            <br/>
            <select id="action">
                <?php
                $row = 0;
                                foreach ($data['fn'] as $value) {
                                    
                                    if($row === 0){
                                        echo "<option value='{$value['id']}' selected>{$value['fn']}</option>";
                                    }else{
                                        echo "<option value='{$value['id']}'>{$value['fn']}</option>";
                                    }
                                    $row++;
                                }
                
                ?>
            </select>
            <br/>
            <br/>
            <input id="short" type="text" value="" size="48" required placeholder="Посада скорочено"/>
            <br/>
            <br/>
            <input id="tariff" type="text" value="" size="48" required placeholder="Тариф типа отак 'ОпОС_вын.'"/>
            <br/>
            <br/>
            <input id="cost" type="text" value="" size="48" required placeholder="Грошовий еквівалент"/>
            <br/>
            <br/>
            <p style="text-align: center;"><input id="back" class="btn-save" type="button" value="Повернутися в зад"/>&nbsp;&nbsp;<input id="d_save" class="btn-save" type="button" value="Зберегти"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <br/>
            <br/>
        </div>
    </div>
</div>
<script type="text/javascript" src="/js/tariff.js"></script>