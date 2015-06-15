<div style="display: none;">
  <a class="ico-user-03" title="Вибрати нового працівника"></a>  
</div>
<?php
//print_r($data);
?>
<div id="content">
    <h1>Нараховано за  період з&nbsp;&nbsp;<?php echo "{$data['open']}&nbsp;по&nbsp{$data['close']}";  ?></h1>
    <input type="hidden" id="part" value="<?php           echo "{$data['part']}";?>"/>
    <div id="back_v_zad">
    <p style="text-align: center;">
        <a id="a_v_zad">Повернутися в зад</a>
    </p>
        
        </div>
    <div id="tablesheet">
        <p><?php echo "{$data['open']}&nbsp;-&nbsp{$data['close']}";  ?></p>
            <table class="info_tables">
                <thead>
                    <tr>
                        <th>Посада</th><th>Тариф</th><th>Од. виміру</th><th>Грн. за од.</th><th>Зроблено</th><th>Всього</th> 
                    </tr>
                </thead>
                <tbody>
                    <?php
                 if(count($data['credit'])>0){
                  $SSUM = 0;
                  $uid = 0;
                     foreach ($data['credit'] as $key => $value) {
                        
                         $sum = 0;
                         $uid = $key;
                         echo "<tr id='r_{$key}' class='surname'>";
                             echo "<td align='center'>{$key}</td>";
                             echo "<td colspan='5'>{$value['surname']}</td>";
                         $adv = 0;
                         $ADV = 0;
                         foreach ($value['cost'] as $cost) {
//                             echo "{$cost['produced']}";
                             $pay = round(($cost['produced']*$cost['cost']),2);
                             
                             if($pay <= 0){
                                 $pay = 0;
                                 $adv = round(($cost['produced']*$cost['cost']),2);
                                 $adv = (ceil($adv)*100)/100;
                             }
                             
                                 $sum += $pay;
                                 $ADV += $adv;
                                 
                                   if($cost['short']==='Аванс') {
                                       echo "<tr class='imprest'>";
                                       echo "<td>Аванс</td><td align='left'>{$cost['short']}</td><td>грн.</td>";
                                       echo "<td></td><td>{$cost['cost']}</td>";
                                       echo    "<td></td></tr>";
                                   } else {
                                       echo "<tr class='cost'>";
                                       echo "<td>{$cost['fn']}</td><td align='left'>{$cost['short']}</td>";                                       
                                       echo "<td>{$cost['tariff']}</td><td>{$cost['cost']}</td><td>{$cost['produced']}</td>";
                                       echo    "<td>{$pay}</td></tr>";
                                   }
                               
                                 
                             
                          }
                         
                        if($sum != 0) echo "<tr class='sum'><td></td><td colspan='5'>Начислено: {$sum} грн.</td></tr>";                         
 

$SSUM += $sum;
                         }                        
//        echo "</td></tr>";
//                         
//
//echo "</td></tr>";

                     }
                    ?>
                    
                </tbody>
            </table>
        <p style="text-align: center;font-weight: bolder">Всього нараховано <?php echo "{$SSUM}";  ?>&nbsp;&nbsp;грн.</p>   
        </div>
    <p style="text-align: center;">
        <input type="button" class='btn-save' id="printTab" value="Дуркувати"/>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="button" class='btn-save' id="recoil" value="Відкатити"/>
    </p>
</div>
<script type="text/javascript" src="/js/jquery.printElement.js"></script>
<script type="text/javascript" src="/js/pay_part.js"></script>