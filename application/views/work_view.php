<!--<div id="d_wr">-->
    <h1>Посади</h1>
    <input type="hidden" id="uid" value=""/>

    <div id="content">
            <div id="staff_tab">
                <table class="info_tables" id="table_f">
                    <thead>
                        <tr>
                            <th>№</th><th>Должность</th><th>Action</th>
                        </tr>                
                    </thead>
                    <tbody>
                    <?php
                    foreach ($data['work'] as $value){
                        echo "<tr id='r_{$value['id']}'>
                            <td>".$value['id']."</td>
                                <td>".$value['function']."</td>
                                <td>
                                    <a id='e_{$value['id']}' class='ico-info' title='Смотреть'></a>
                                    <a id='d_{$value['id']}' class='ico-delete' title='Удалить'></a>
                                </td>
                             </tr>";
                    }
                ?>    
                    </tbody>
                </table>
                <p style="text-align: center;"><input id="new_function" class="btn-save" type="button" value="Додати нового"/></p>
            </div>
        <div class="right_block">
            <br/>
            <br/>
            <input id="function" type="text" value="" size="48" required placeholder="Введіть посаду"/>
            <br/>
            <br/>
            <p style="text-align: center;"><input id="back" class="btn-save" type="button" value="Вернуцца в зад"/>&nbsp;&nbsp;<input id="save" class="btn-save" type="button" value="Сохранить"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <br/>
            <br/>
        </div>
    </div>

    <script type="text/javascript" src="/js/work.js"></script>