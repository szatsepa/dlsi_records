<script type="text/javascript" src="js/jquery.datepick.js"></script>
<script type="text/javascript" src="/js/jquery.printElement.js"></script>
<?php
//print_r($data);
?>
<div id="content">
    <h1>Розрахунок <?php echo $data['surname']; ?></h1>
    <p align="center"><a>Повернутися в зад</a></p>
 
        <div id="tab_details">
            <table class="info_tables" id="table_details">
                <thead>
                    <tr>
                        <th>Должность</th><th>Тариф</th><th>Тариф b гривнах</th><th>Произведено</th><th>Начислено</th><th>Подробно</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    echo "<tr id='r1'><td colspan='6'>{$data['surname']}</td></tr>";
                    $rows = 2;
                    $summ = 0;
foreach ($data['cost'] as $value) {
        $p = $value['prodused'];
        $c = $value['cost'];
        $pay = $p*$c;
        if($value['short'] === 'Аванс'){
           echo "<tr class='imprest' id='r{$rows}'><td>{$value['short']}</td><td></td><td></td><td></td><td>{$value['cost']}</td><td></td></tr>"; 
        }else{
           echo "<tr class='info' id='r{$rows}'><td>{$value['short']}</td><td>{$value['tariff']}</td><td>{$value['cost']}</td><td>{$value['produced']}</td><td>{$pay}</td><td>{$value['short']}&nbsp;{$value['produced']}&nbsp;X&nbsp;{$value['cost']}</td></tr>"; 
        }
        
    
}
                    
                    ?>
                    
                </tbody>
            </table>
            
        </div>

        <div class="right_block">
          <p style="text-align: center;"><input id="back_s" class="btn-save" type="button" value="Друкувати"/></p>
        </div>
</div>    

<script type="text/javascript" src="/js/details.js"></script>