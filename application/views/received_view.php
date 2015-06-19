<script type="text/javascript" src="/js/jquery.datepick.js"></script> 
<!--<script type="text/javascript" src="/js/jquery.json.min.js"></script>-->
<div id="content">
    <?php
    
//var_dump($data['orders'][0]);

$all = sprintf("%01.2f", $data['sum'][0]['all']);
$sum = sprintf("%01.2f", $data['sum'][0]['sum']);
?>
    <h1>
        Пийшло лісу&nbsp;&nbsp;
        <?php
        if($data['list'] === 'sel'){
            echo "від {$data['orders'][0]['customer']}";
        }  else {
            echo "з {$data['list']} по {$data['param']}";
        }
        
        
        ?>
    </h1>
    <p>
        <input id="open" type="text" value="" size="18" placeholder="Дата початку"/>
        &nbsp;&nbsp;
        <input id="close" placeholder="Дата кінця" type="text" value="" size="18"/>
        &nbsp;&nbsp;
        <input type="button" id="view" class="btn-save" value="Вибрати"/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <strong>або</strong>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <select id="provider">
            <option value="0" selected>Виберіть когось</option>
            <?php
            foreach ($data['providers'] as $value) {
                echo "<option value='{$value['id']}'>{$value['name']}</option>";
            }
            ?>
        </select>
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
                </table><br/>
                <?php
                }
                if(count($data['woods'])){
                    ?>
                 <table class="info_tables" id="tab_woods">
                    <thead>
                        <tr>
                            <th>Індекс</th> 
                            <th>Дата</th> 
                            <th>Діаметер</th>
                            <th>Довжина</th>
                            <th>Об'єм</th>
                            <th>Ціна</th>
                            <th>Коштує</th> 
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                                            foreach ($data['woods'] as $value) {
                                                echo "<tr><td>{$value['id']}</td><td>{$value['create']}</td><td>{$value['d']}</td>"
                                                . "<td>{$value['l']}</td><td>{$value['v']}</td><td>{$value['price']}</td><td>{$value['itog']}</td></tr>";
                                            }
                                            echo "<tr><td colspan='4'>Усього:</td><td>{$all}</td><td></td><td>{$sum}</td></tr>";
                        ?>
                        </tbody>
                </table><br/>
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
    <script type="text/javascript" src="/js/received.js"></script>