<script type="text/javascript" src="/js/jquery.printElement.js"></script>
<div id="content">
    <?php
    
var_dump($data['order']);
?>
    <h1>Видаткова накладна</h1>
<!--    <p><input id="open" type="text" value="" size="24" placeholder="Дата початку"/>&nbsp;&nbsp;<input id="close" placeholder="Дата кінця" type="text" value="" size="24"/></p>-->
    
        <div id="sale_order">
            <div id="head_order">
                <p>
                    Адреса юр.:&nbsp;83055, м. Донецьк, вул. 50-річчя СРСР, 140<br/><br/>
                    Адреса вир.:&nbsp;64304, м. Ізюм, вул. Маршала Федоренко, 9<br/><br/>
                    Телефони:&nbsp;+38-050-368-33-93<br/><br/>
                    Отримувач:&nbsp;<?php echo "{$data['order'][0]['customer']}";?><br/>
                </p>
                <p style="text-align: center;">
                    Видаткова накладна №&nbsp;<?php echo "{$data['order'][0]['order']}";?>
                </p>
                <p style="text-align: center;">
                    від&nbsp;<?php echo "{$data['order'][0]['date_order']}";?>
                </p>
                <br/>

            </div>
            <div id="order">
                <table id="tab_order">
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
                            </td>
                            <td>
                                
                            </td><td></td><td></td><td></td><td></td>
                        </tr>
                    </tbody>
                </table>
                <p>
                    Прийняв________________________&nbsp;&nbsp;&nbsp;&nbsp;Здав __<?php echo "{$data['order'][0]['shipped']}";?>_____________________<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    (підпис, П.І.Б.)
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    (підпис, П.І.Б.)
                </p>
            </div>
            <div>
                <p style="text-align: center;">
                    <!--<input type="button" id="save" class="btn-save" value="Сохранить" disabled/>-->
                    <input type="button" class="btn-save" id="print" value="Дуркувати"/>
                </p>
            </div>
            <div id="ctg" style="display: none">
                
            </div>
        </div>
    <script type="text/javascript" src="/js/sale.js"></script>