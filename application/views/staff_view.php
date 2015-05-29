<!--<div id="d_wr">-->
    <h1>Персонал</h1>

    <input type="hidden" id="uid" value=""/>
    <div id="back_v_zad">
        <a id="a_v_zad"></a>
    </div>
    <div id="paragraff">
        <p>&nbsp;</p>
    </div>
    <div id="content">
            <div id="staff_tab">
                <table class="info_tables" id="table_staff">
                    <thead>
                        <tr>
                            <th>Таб. номер</th><th>ФИО</th><th>Телефон</th><th>Адрес</th><th>Action</th>
                        </tr>                
                    </thead>
                    <tbody>
                    <?php
                    foreach ($data['staff'] as $value){
                        echo "<tr id='r_{$value['id']}'>
                            <td>".$value['id']."</td>
                                <td>".$value['surname']."</td>
                                <td>".$value['phone']."</td>
                                <td>".$value['address']."</td>
                                <td>
                                    <a id='e_{$value['id']}' class='ico-info' title='Смотреть'></a>
                                    <a id='d_{$value['id']}' class='ico-delete' title='Удалить'></a>
                                </td>
                             </tr>";
                    }
                ?>    
                    </tbody>
                </table>
                <p style="text-align: center;"><input id="new_staff" class="btn-save" type="button" value="Додати нового"/></p>
            </div>
        <div class="right_block">
            <br/>
            <br/>
            <input id="surname" type="text" value="" size="48" required placeholder="Введите ФИО"/>
            <br/>
            <br/>
            <input id="phone" type="text" value="" size="48" required placeholder="Номер телефона"/>
            <br/>
            <br/>
            <input id="address" type="text" value="" size="48" required placeholder="Адрес регистрации"/>
            <br/>
            <br/>
            <p style="text-align: center;"><input id="back" class="btn-save" type="button" value="Вернуцца в зад"/>&nbsp;&nbsp;<input id="d_save" class="btn-save" type="button" value="Сохранить"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <br/>
            <br/>
        </div>
    </div>
<!--</div>-->
<script type="text/javascript" src="/js/staff.js"></script>