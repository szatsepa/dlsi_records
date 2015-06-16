<script type="text/javascript" src="/js/jquery.datepick.js"></script> 
<div id="content">
    <?php
//    echo $data['query'];
//var_dump($data['orders']);
?>
    <h1>
        Видаткові накладні покупців
    </h1>
    <p>
        <select id="customer">
            <option value='0' selected>Виберіть кого треба</option>
            <?php
            foreach ($data['customers'] as $value) {
                echo "<option value='{$value['id']}'>{$value['customer']}</option>";
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
                </table>
                <?php
                }
                ?>
            </div>

        </div>
    <script type="text/javascript" src="/js/orders_view.js"></script>