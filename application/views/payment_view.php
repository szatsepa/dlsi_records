<script type="text/javascript" src="js/jquery.datepick.js"></script>
<script type="text/javascript" src="/js/jquery.printElement.js"></script> 
<div id="content">
    <?php
echo '<input type="hidden" id="paket" value="'.$data['paket'].'"/>';
//print_r($data['credit']);
?>
    <h1>Розрахунок за період</h1>
    <p><input id="open" type="text" value="" size="24" placeholder="Дата початку"/>&nbsp;&nbsp;<input id="close" placeholder="Дата кінця" type="text" value="" size="24"/></p>
    
            <div id="staff_tab">
                <table class="info_tables">
                    <thead>
                        <tr>
                            <th>Таб. номер</th><th>ФИО</th><th>Должен</th><th>Начислено</th><th>Подробно</th>
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
                             echo "<td colspan='4'>{$value['surname']}</td>";
                         $adv = 0;
                         $ADV = 0;
                         foreach ($value['cost'] as $cost) {
                             
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
                                       echo "<td>Аванс</td><td align='left'>{$cost['short']}</td>";
                                       echo "<td>{$adv}</td>";
                                   } else {
                                       echo "<tr class='cost'>";
                                       echo "<td>{$cost['fn']}</td><td align='left'>{$cost['short']}</td>";                                       
                                       echo "<td></td>";
                                   }
                               
                                 echo    "<td>$pay</td><td>{$cost['short']}&nbsp;{$cost['produced']}&nbsp;X&nbsp;{$cost['cost']}</td></tr>";
                             
                          }
                         
                        if($sum != 0) echo "<tr class='sum'><td></td><td colspan='3'>Начислено: {$sum} грн.</td><td><a id='e_{$key}' class='ico-info' title='Подробно'></a></td></tr>";                         
 

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
                
                <p style="text-align: center; font-size: 1.2em; font-weight: bolder; text-decoration: underline;">ИТОГО: <?php echo $SSUM; ?> грн.</p>
                
            </div>
        <div>
            <p style="text-align: center;"><input id="calculate" class="btn-save" type="button" value="Заархивировать расчет"/>&nbsp;&nbsp;&nbsp;<input class="btn-save" type="button" id="printTab" value="Друкувати"/></p>
        </div>
    </div>

<script type="text/javascript" src="/js/payment.js"></script>