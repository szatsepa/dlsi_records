<?php

//var_dump($data);
//print_r($data['data'][0]);
//echo "<br/>";
//print_r($data['rej']);
?>
<h1>Режими сушки деревини в камері SIONA</h1>
<div id="sn"> 
    <input type="hidden" id="page" value="<?php           echo "{$data['page']}";?>"/>
    <div>
        <p><a id="back">Повернутися до вибору</a></p>
        <table id ="sw" class="info_tables">
            <thead>
                <tr>
                    <th rowspan="2">
                        Час
                    </th>
                    <th>
                        Години
                    </th>
                    <th colspan="4">
                        <?php                        echo "{$data['data'][0]['Hlong']}";?>&nbsp;год.
                    </th>
                    
                </tr>
                <tr>
                    
                    <th>
                        Дні
                    </th>
                    <th colspan="4">
                        <?php                        echo "{$data['data'][0]['Dlong']}";?>&nbsp;дн.
                    </th>
                </tr>
                <tr>
                    <th colspan="5" style="text-align: center;">
                        Режим&nbsp;&nbsp;&nbsp;
                        <select id="rej">
                            <?php
                            foreach ($data['rej'] as $value) {
                                if($value['rej'] === $data['page']){
                                   echo "<option value='{$value['rej']}' selected>{$value['rej']}</option>";  
                                }else{
                                   echo "<option value='{$value['rej']}'>{$value['rej']}</option>"; 
                                }
                                
                            }
                            ?>
                        </select>
                        
                    </th>
                </tr>
                <tr>
                    <th rowspan="2">
                        Вологість&nbsp;деревени&nbsp;&lpar;в&nbsp;&percnt;&rpar;W
                    </th>
                    <th rowspan="2">
                        Температура&nbsp;в&nbsp;&deg;С
                    </th>
                    <th colspan="2">
                        Психрометрична&nbsp;різниця&nbsp;&lpar;в&nbsp;&deg;С&rpar;
                    </th>
                    <th>
                        Тривалість&nbsp;сушки
                    </th>
                </tr>
                <tr>
                    <th>
                        єстєствєнная
                    </th>
                    <th>
                        СРЦ
                    </th>
                    <th>
                        &lpar;в годинах&rpar;
                    </th>
                </tr>
            </thead>
            <tbody>
                
                <?php
                foreach ($data['data'] as $value) {
                    echo "<tr>
                    
                    <td>
                        {$value['w']}
                    </td>
                    <td>
                        {$value['deg']}
                    </td>
                    <td>
                        {$value['deltaN']}
                    </td>
                    <td>
                        {$value['deltaSRC']}
                    </td>
                    <td>
                        {$value['longTime']}
                    </td>
                </tr>";
                }
                
                ?>
                
            </tbody>
        </table> 
    
    </div>
</div>
<script type="text/javascript" src="/js/siona.js"></script>

