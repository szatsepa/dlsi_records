<script type="text/javascript" src="/js/jquery.datepick.js"></script> 
<!--<script type="text/javascript" src="/js/jquery.json.min.js"></script>-->
<div id="content">
    <?php
    
//var_dump($data['orders']);
?>
    <h1>
        Видаткова накладна за пройдешній період
    </h1>
    <p>
        <input id="open" type="text" value="" size="24" placeholder="Дата початку"/>
        &nbsp;&nbsp;
        <input id="close" placeholder="Дата кінця" type="text" value="" size="24"/>
        &nbsp;&nbsp;
        <input type="button" id="view" class="btn-save" value="Показати"/>
    </p>
    
        <div id="sale_order">
            
            <div id="table_order">
                <?php
                if(count($data['orders'])){
                ?>
                <table class="info_tables" id="tab_order">
                    <thead>
                        <tr>
                            <th>Індекс</th> 
                            <th>Ном.док.</th> 
                            <th>Отримувач</th>
                            <th>Від</th>
                            <th>Дія</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                                        foreach ($data['orders'] as $value) {
                                            echo "<tr>
                            <td>{$value['id']}</td><td>{$value['order']}</td> <td>{$value['customer']}</td> <td>{$value['date_order']}</td><td><a id='v{$value['id']}' class='ico-view' title='Дивитися'></a></td>
                        </tr>";
                                        }
                        
                        ?>
                        
                    </tbody>
                </table>
                <?php
                }
                ?>
            </div>
<!--            <div>
                <p style="text-align: center;">
                    <input type="button" id="save" class="btn-save" value="Сохранить" disabled/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" class="btn-save" id="print" value="Печатать" disabled/>
                </p>
            </div>
            <div id="ctg" style="display: none">
                
            </div>-->
        </div>
<script type="text/javascript" src="/js/orders_view.js"></script>