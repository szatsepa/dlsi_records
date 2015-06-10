<?php
//var_dump($data);

?>
<div id="d_wr">
    <input type="hidden" id="_count" value="<?php echo count($data);?>"/>
    <input type="hidden" id="uid" value=""/>
    <div id="back_v_zad">
        <a id="a_v_zad"></a>
    </div>
    <div id="paragraff">
        <p>&nbsp;</p>
    </div>
    <div id="content">
            <div id="staff_tab">
                <table class="info_tables" id="table_f">
                    <thead>
                        <tr>
                            <th>№</th><th>Тип продукции</th><th>Комментарий</th><th>Action</th>
                        </tr>                
                    </thead>
                    <tbody>
                    <?php
                    foreach ($data as $value){
                        echo "<tr id='r_{$value['id']}'>
                            <td>".$value['id']."</td>
                                <td>".$value['categories']."</td>
                                    <td>{$value['comment']}</td>
                                <td>
                                    <a id='e_{$value['id']}' class='ico-info' title='Смотреть'></a>
                                    <a id='d_{$value['id']}' class='ico-delete' title='Удалить'></a>
                                </td>
                             </tr>";
                    }
                ?>    
                    </tbody>
                </table>
                <p style="text-align: center;"><input id="new_categories" class="btn-save" type="button" value="Додати нового"/></p>
            </div>
        <div class="right_block">
            <br/>
            <br/>
            <input id="categories" type="text" value="" size="48" required placeholder="Введіть назву типу продукції"/>
            <br/>
            <br/>
            <textarea id="c_comment" placeholder="Ежели что добавте коментарий по этой теме"></textarea>
            <br/>
            <br/>
            <p style="text-align: center;"><input id="save" class="btn-save" type="button" value="Сохранить"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input id="back" class="btn-save" type="button" value="Вернуцца в зад"/>&nbsp;&nbsp;</p>
            <br/>
            <br/>
        </div>
    </div>
</div>
<script type="text/javascript" src="/js/categories.js"></script>