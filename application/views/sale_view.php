<script type="text/javascript" src="/js/jquery.datepick.js"></script>
<script type="text/javascript" src="/js/jquery.printElement.js"></script> 
<div id="content">
    <?php
//echo '<input type="hidden" id="paket" value="'.$data['paket'].'"/>';
print_r($data['doc']);
?>
    <h1>Розрахунок за період</h1>
<!--    <p><input id="open" type="text" value="" size="24" placeholder="Дата початку"/>&nbsp;&nbsp;<input id="close" placeholder="Дата кінця" type="text" value="" size="24"/></p>-->
    
        <div id="sale_order">
            <div id="head_order">
                <p>
                    <label>Номер накладной&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><br/>
                    <input type="text" id="num_order" value="<?php echo "{$data['doc']}";?>" size="12"/>
                </p>
                <p>
                    <label>Дата отгрузkи/накладной</label><br/>
                    <input type="text" id="date_order" placeholder="<?php echo date("Y - m - d");?>" size="27" value=""/></p>
                <p>
                    <label>ФИО получателя&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><br/>
                    <input type="text" id="customer" value="" size="64"/>
                </p>
                <p>
                    <label>ФИО отгрузил&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><br/>
                    <input type="text" id="shipped" value="" size="64"/>
                </p>

            </div>
            <div id="table_order">
                <table class="info_tables" id="tab_order">
                    <thead>
                        <tr>
                            <th width="7%">Ном.п\п</th> 
                            <th width="15%">Категория</th>
                            <th>Наименование</th>
                            <th width="7%">Ед.изм.</th>
                            <th width="7%">Колич.</th>
                            <th width="9%">Цена ед</th>
                            <th width="12%">Сумма</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td><td></td><td></td><td></td><td></td><td></td><td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <p style="text-align: center;"><input type="button" id="save" value="Сохранить"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" id="print" value="Печатать" disabled/></p>
            </div>
        </div>
    <script type="text/javascript" src="/js/sale.js"></script>