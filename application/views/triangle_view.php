<?php

//var_dump($data);
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
            }
            if($data['theoreme'] !== 'Піфагора'){
                echo '<p align="center">
                        <select id="ssho">
                            <option value="0" selected>Шо відомо?</option>
                            <option value="1">Сторона та два прилеглих кута</option>
                            <option value="2">Сторона та прилеглий і протилежний кути</option>
                            <option value="3">Всі три сторони</option>
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
            }
            
            
            ?>
        </p>
                </td>
                <td>
                   <?php
            
            switch ($data['theoreme']){
                case 'Синусів':
                   ?>
                    
                    <span id='tsinS'>
                        <small>Заповніть, будь ласка, те що відомо!</small><br/><br/> 
                        A&nbsp;<input id="sa" class="sside" placeholder="A" value="" size="12" disabled/>&nbsp;
                        <input id="ksa" class="sdegree" placeholder="&alpha;&deg;" value="" size="12" disabled/>
                        <br/><br/> 
                        B&nbsp;<input id="sb" class="sside" placeholder="B" value="" size="12" disabled/>&nbsp;
                        <input id="ksb" class="sdegree" placeholder="&beta;&deg;" value="" size="12" disabled/>
                        <br/><br/> 
                        C&nbsp;<input id="sc" class="sside" placeholder="C" value="" size="12" disabled/>&nbsp;
                        <input id="ksc" class="sdegree" placeholder="&gamma;&deg;" value="" size="12" disabled/>
                        <br/><br/> 
                        <input type="button" id="smath" value="Порахувати"/><br/> <br/>  
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
                    A&nbsp;<input id="pa" class="side" placeholder="A" value="" size="12" disabled/>&nbsp;
                    <input id="kpa" class="degree" placeholder="&alpha;&deg;" value="" size="12" disabled/>
                    <br/><br/> 
                    B&nbsp;<input id="pb" class="side" placeholder="B" value="" size="12" disabled/>
                    &nbsp;<input id="kpb" class="degree" placeholder="&beta;&deg;" value="" size="12" disabled/>
                    <br/><br/> 
                    C&nbsp;<input id="pc" class="side" placeholder="C" value="" size="12" disabled/>
                    &nbsp;<input id="kpc" class="degree" placeholder="&gamma;&deg;" value="90" size="12" disabled/>
                    <br/><br/> 
                    <input type="button" id="pmath" value="Порахувати"/><br/> <br/> 
                    <?php
                    break;
            }
            
            
            ?>  
                    
                </td>
            </tr>
        </table>
        
        
    </div>
</div>
<script type="text/javascript" src="/js/triangle.js"></script>

