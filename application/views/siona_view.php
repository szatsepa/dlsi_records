<?php

//var_dump($data);
print_r($data['data']);
?>
<h1>Режими сушки деревини в камері SIONA</h1>
<div id="sn">    
    <div>
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
                        <?php                        echo "{$data['data'][0]['Hlong']}";?>
                    </th>
                    
                </tr>
                <tr>
                    
                    <th>
                        Дні
                    </th>
                    <th colspan="4">
                        <?php                        echo "{$data['data'][0]['Dlong']}";?>
                    </th>
                </tr>
            </thead>
            <tbody>
                
                <?php
                foreach ($data['data'] as $value) {
                    echo "<tr>
                    
                    <td>
                        
                    </td>
                    <td>
                        
                    </td>
                    <td>
                        
                    </td>
                    <td>
                        
                    </td>
                </tr>";
                }
                
                ?>
                
            </tbody>
        </table> 
    
    </div>
</div>
<script type="text/javascript" src="/js/power.js"></script>

