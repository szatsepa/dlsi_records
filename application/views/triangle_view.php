<?php

var_dump($data);
?>
<h1>Трикутники теорема&nbsp;&nbsp;<?php echo "{$data['theoreme']}"; ?></h1>
<div id="sn">    
    <div>
        <table width="90%">
            <tr>
                <td colspan="2">
                    
            <?php
            
            switch ($data['theoreme']){
                case 'Синусів':
                    echo '<p align="center"><img src="/images/cos.png" alt="Sho popalo" width="360"/> </p>';
                    break;
                case 'Піфагора':
                    echo '<p align="center"><img src="/images/pif.png" alt="Sho popalo" width="360"/> </p>';
                    break;
                
                case 'Косинусів':
                    echo '<p align="center"><img src="/images/cos.png" alt="Sho popalo" width="360"/> </p>';
                    break;
            }
            if($data['theoreme'] !== 'Піфагора'){
                echo '<p align="center">
                        <select id="ssho">
                            <option value="0" selected>Шо шукаємо?</option>
                            <option value="1">Сторону</option>
                            <option value="2">Кут</option>
                        </select>
                    </p>';
            }
            
            ?>
       
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
                   ?>
                    
                    <span id='tsinS' style="display: none">
                        <small>Заповніть, будь ласка, те що відомо!</small><br/><br/> 
                        <input id="sa" placeholder="A" value="" size="12"/>&nbsp;<input id="ka" placeholder="&alpha;&deg;" value="" size="12"/><br/><br/> 
                        <input id="sb" placeholder="B" value="" size="12"/>&nbsp;<input id="kb" placeholder="&beta;&deg;" value="" size="12"/><br/><br/> 
                        <input id="sc" placeholder="C" value="" size="12"/>&nbsp;<input id="kb" placeholder="&gamma;&deg;" value="" size="12"/><br/><br/> 
                        <input type="button" id="pmath" value="Порахувати"/><br/> <br/>  
                    </span>

                    <?php
                    break;
                case 'Піфагора':
                   ?>
                    <select id="pside">
                        <option value='0' selected>Яку сторону шукаємо?</option>
                        <option value='1'>A</option>
                        <option value='2'>B</option>
                        <option value='3'>C</option>
                    </select><br/><br/> <br/>   
                    A&nbsp;<input id="pa" class="side" placeholder="A" value="" size="12" disabled/>&nbsp;<input id="kpa" class="degree" placeholder="&alpha;&deg;" value="" size="12" disabled/><br/><br/> 
                    B&nbsp;<input id="pb" class="side" placeholder="B" value="" size="12" disabled/>&nbsp;<input id="kpb" class="degree" placeholder="&beta;&deg;" value="" size="12" disabled/><br/><br/> 
                    C&nbsp;<input id="pc" class="side" placeholder="C" value="" size="12" disabled/>&nbsp;<input id="kpc" class="degree" placeholder="&gamma;&deg;" value="90" size="12" disabled/><br/><br/> 
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

