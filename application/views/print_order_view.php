<script type="text/javascript" src="/js/jquery.printElement.js"></script>
<script type="text/javascript" src="/js/jquery.datepick.js"></script>

    <?php
    
//var_dump($data['list']);<div id="content">
?>
    <h1>Видаткова накладна</h1>
<!--    <p><input id="open" type="text" value="" size="24" placeholder="Дата початку"/>&nbsp;&nbsp;<input id="close" placeholder="Дата кінця" type="text" value="" size="24"/></p>-->
    
        <div id="sale_order">
            <div id="head_order">
                <p>
                    <strong>Адреса юр.:&nbsp;</strong>83055, м. Донецьк, вул. 50-річчя СРСР, 140<br/><br/>
                    <strong>Адреса вир.:&nbsp;</strong>64304, м. Ізюм, вул. Маршала Федоренко, 9<br/><br/>
                    <strong>Телефони:&nbsp;</strong>+(380)-50-368-33-93<br/><br/>
                    <strong>Отримувач:&nbsp;</strong><?php echo "{$data['order'][0]['customer']}";?><br/>
                </p>
                <p class="phead">
                    Видаткова накладна №&nbsp;<?php echo "{$data['order'][0]['order']}";?>
                </p>
                <p class="phead">
                    від&nbsp;<?php echo "{$data['order'][0]['date_order']}";?>
                </p>
                <br/>

            </div>
            <div id="order">
                <table id="tab_order">
                    <thead>
                        <tr>
                            <th>Ном.п\п</th> 
                            <th>Наименование</th>
                            <th>Ед.изм.</th>
                            <th>Колич.</th>
                            <th>Цена ед</th>
                            <th>Сумма</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <?php
                        $row = 1;
                        $SUM = 0;
                        foreach ($data['list'] as $value) {
                            $sum = round($value['amount']*$value['price'],3);
                            $sum = sprintf("%01.2f", $sum);
                            echo "<tr><td>{$row}</td><td>{$value['nom']}</td><td>{$value['unit']}</td><td>{$value['amount']}</td><td>{$value['price']}</td><td>{$sum}</td></tr>";
                            $row++;
                            $SUM += $sum;
                        }
                        $SUM = sprintf("%01.2f",$SUM);
                        ?>
                        <tr>
                            <td>&nbsp;</td><td></td><td></td><td></td><td></td><td></td>
                        </tr>
                        <tr id="sum">
                            <td>&nbsp;</td><td colspan="3">Итого:&nbsp;</td><td colspan="2"><?php echo "{$SUM}";?>&nbsp;грн.</td>
                        </tr>
                    </tbody>
                </table>
                <br/>
                <br/>
                <div id="tfoot">
                            <span>
                                <br/><br/>
                                Прийняв________________________&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Здав _______________________<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                (підпис, П.І.Б.)
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    (підпис, П.І.Б.)
                    
                            
                            </span>
                    <div id='stamp'>
                        <img src='/design/stamp.png' width="237"/>
                    </div>
                </div>
            </div>
            
        </div>
    <div>
                <p style="text-align: center;">
                    <input type="button" class="btn-save" id="print" value="Дуркувати"/>
                </p>
            </div>
            <div id="ctg" style="display: none">
                
            </div>
    <script type="text/javascript" src="/js/sale.js"></script>