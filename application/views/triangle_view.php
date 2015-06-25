<?php

var_dump($data);
?>
<h1>Трикутники теорема&nbsp;&nbsp;<?php echo "{$data['theoreme']}"; ?></h1>
<div id="sn">    
    <div>
        <table width="90%">
            <tr>
                <td colspan="2">
                    <p align="center">
            <?php
            
            switch ($data['theoreme']){
                case 'Синусів':
                    echo '<img src="/images/cos.png" alt="Sho popalo" width="360"/>';
                    break;
                case 'Піфагора':
                    echo '<img src="/images/pif.png" alt="Sho popalo" width="360"/>';
                    break;
                
                case 'Косинусів':
                    echo '<img src="/images/cos.png" alt="Sho popalo" width="360"/>';
                    break;
            }
            
            
            ?>
        </p>
                </td>
                
            </tr>
            <tr>
                <td>
                    <p align="left">
            <?php
            
            switch ($data['theoreme']){
                case 'Синусів':
                    echo '<img src="/images/fsin.png" alt="Sho popalo" width="360"/>';
                    break;
                case 'Піфагора':
                    echo '<img src="/images/fpif.png" alt="Sho popalo" width="360"/>';
                    break;
                
                case 'Косинусів':
                    echo '<img src="/images/cos_af.png" alt="Sho popalo" width="360"/><br/>'
                    . '<img src="/images/cos_bf.png" alt="Sho popalo" width="360"/><br/>'
                        . '<img src="/images/cos_cf.png" alt="Sho popalo" width="360"/>';
                    break;
            }
            
            
            ?>
        </p>
                </td>
                <td>
                   <?php
            
            switch ($data['theoreme']){
                case 'Синусів':
                   
                    break;
                case 'Піфагора':
                   ?>
                    <select id="pside">
                        <option value='0' selected>Яку сторону шукаємо?</option>
                        <option value='1'>A</option>
                        <option value='2'>B</option>
                        <option value='3'>C</option>
                    </select><br/><br/> <br/>   
                    <input id="pa" placeholder="A" value="" size="12"/><br/><br/> 
                    <input id="pb" placeholder="B" value="" size="12"/><br/><br/> 
                    <input id="pc" placeholder="C" value="" size="12"/><br/><br/> 
                    <input type="button" id="pmath" value="Порахувати"/><br/> <br/> 
                    <?php
                    break;
                
                case 'Косинусів':
                    
                    break;
            }
            
            
            ?>  
                    
                </td>
            </tr>
        </table>
        
        
    </div>
</div>
<script type="text/javascript" src="/js/triangle.js"></script>

