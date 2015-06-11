<script type="text/javascript" src="/js/jquery.datepick.js"></script> 
<script type="text/javascript" src="/js/jquery.json.min.js"></script>
<div id="content">
    <?php
    
//var_dump($data['cat']);
?>
    <h1>Видаткова накладна</h1>
<!--    <p><input id="open" type="text" value="" size="24" placeholder="Дата початку"/>&nbsp;&nbsp;<input id="close" placeholder="Дата кінця" type="text" value="" size="24"/></p>-->
    
        <div id="sale_order">
            <div id="head_order">
                <p>
                    <label>Номер накладной</label><br/>
                    <input type="text" id="num_order" value="<?php echo "{$data['doc']}";?>" size="12"/>
                </p>
                <p>
                    <label>Дата отгрузkи/накладной</label><br/>
                    <input type="text" id="date_order" placeholder="<?php echo date("Y - m - d");?>" size="27" value=""/></p>
                <p>
                    <label>ФИО получателя</label><br/>
                    <input type="text" id="customer" value="" size="64"/>
                </p>
                <p>
                    <label>ФИО отгрузил</label><br/>
                    <input type="text" id="shipped" value="" size="64"/>
                </p>

            </div>
            <div id="table_order">
                <table class="info_tables" id="tab_order">
                    <thead>
                        <tr>
                            <th>Ном.п\п</th> 
                            <th>Категория</th>
                            <th>Наименование</th>
                            <th>Ед.изм.</th>
                            <th>Колич.</th>
                            <th>Цена ед</th>
                            <th>Сумма</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <select id="cat">
                                    <option value='0'>Виберіть категорію</option>
                                    <?php
                                        foreach ($data['cat'] as $value) {
                                        
                                        echo "<option value='{$value['id']}'>{$value['cat']}</option>";
                                        
                                    }
                                   
                                    ?>
                                </select>
                            </td>
                            <td>
                                
                            </td><td></td><td></td><td></td><td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <p style="text-align: center;">
                    <input type="button" id="save" class="btn-save" value="Сохранить" disabled/>
                    <!--&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" class="btn-save" id="print" value="Печатать" disabled/>-->
                </p>
            </div>
            <div id="ctg" style="display: none">
                
            </div>
        </div>
    <script type="text/javascript" src="/js/sale.js"></script>