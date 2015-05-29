<?php
//print_r($data);
?>
<h1>Заробітня плата - історія!</h1>
    <div id="content">
        <div id="woods_tab">

            <div id="woods">
                <table class="info_tables" id="table_history" width='100%'>
                    <thead>
                        <tr>
                        <th>Дата</th><th>NUMBER</th>
                        </tr>                
                    </thead>
                    
                    <tbody>
                    <?php
                    foreach ($data as $key => $value){
                        echo "<tr id='r_{$key}'>";
                        echo "<td>{$value['create']}</td><td><input type='button' id='b_{$value['list']}' class='btnV' value='&nbsp;&nbsp;{$value['list']}&nbsp;&nbsp;'></td>";
                        echo     "</tr>";
                    }
                ?>    
                    </tbody>
                </table>
                <br/>
                <br/>
               </div>
            </div>

         
    </div>   

<script type="text/javascript" src="/js/pay_his.js"></script>