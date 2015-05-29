<div id="d_wr">
    <h1>Поставщікі</h1>
    <input type="hidden" id="user_count" value="<?php echo count($data['providers']);?>"/>
    <input type="hidden" id="uid" value=""/>
    <div id="back_v_zad">
        <a id="a_v_zad"></a>
    </div>
    <div id="paragraff">
        <p>&nbsp;</p>
    </div>
    <div id="content">
            <div id="div_providers">
                <table class="info_tables" id="table_providers" width="80%">
                    <thead>
                        <tr>
                            <th>Номер п/п</th><th>Тип</th><th>Наименование</th><th>Коментарий</th><th>Action</th>
                        </tr>                
                    </thead>
                    <tbody>
                    <?php
                    foreach ($data['providers'] as $value){
                        echo "<tr id='r_{$value['id']}'>
                            <td>".$value['id']."</td>
                                <td>".$value['providers_type']."</td>
                                <td>".$value['name']."</td>
                                <td>".$value['comment']."</td>
                                <td>
                                    <a id='e_{$value['id']}' class='ico-info' title='Смотреть'></a>
                                    <a id='d_{$value['id']}' class='ico-delete' title='Удалить'></a>
                                </td>
                             </tr>";
                    }
                    
                ?>    
                    </tbody>
                </table>
                <p style="text-align: center;"><input id="new_donor" type="button" value="Додати нового" class="btn-save"/></p>
            </div>
        <div class="right_block">
            <br/>
            <br/>
            <select id="dtype">
                <option selected value="0">Тип поставщика</option>
                <?php
                                foreach ($data['type'] as $value) {
                                    echo "<option value='{$value['id']}'>{$value['providers_type']}</option>";
                                }
                ?>
            </select>
            <br/>
            <br/>
            <span id='ps'>
                <input id="dname" type="text" value="" size="64" required placeholder="Наименование"/>
                <br/>
                <br/>
                <input id="dcomment" type="text" value="" size="64" required placeholder="Описание"/>
                <br/>
                <br/>
                <p style="text-align: center;"><input  class="btn-save" id="back" type="button" value="Вернуцца в зад"/>&nbsp;&nbsp;<input  class="btn-save" id="d_save" type="button" value="Сохранить"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <br/>
                <br/>
            </span>
            
        </div>
    </div>
</div>
<script type="text/javascript" src="/js/providers.js"></script>