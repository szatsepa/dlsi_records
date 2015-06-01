<script type="text/javascript" src="js/jquery.json-2.4.js"></script>
<script type="text/javascript" src="js/jquery.datepick.js"></script>
<script type="text/javascript" src="js/jquery.printElement.js"></script>
<script type="text/javascript">
var providers = {};
var depart = {};
<?php

foreach ($data['providers'] as $value) {
    echo "providers['{$value['id']}']  = {'name':'{$value['name']}','type':'{$value['providers_type']}'};";

}
$str = '';
foreach ($data['depart'] as $key => $value) {
    $str .= "depart['{$key}']= {'id':'{$value['id']}','name':'{$value['name']}','prov':'{$value['prov']}'};";
}
echo "$str";
?>
   
// console.log(depart['1'])   ;
</script>
<h1>Приходный ордер - кубатурник</h1>
<?php
$list = 1+$data['list'][0]['list'];
?>
<!--<div id="d_wr">-->
    
    <input type="hidden" id="list" value="<?php echo $list;?>"/>
    <input type="hidden" id="hprice" value=""/>
    <input type="hidden" id="hvolume" value=""/>
    <div id="paragraff">
        
    </div>
    <div id="content">
        <div id="staff_tab">
            <select id="dtype">
                <option selected value="0">Тип поставщика</option>
                <?php
                                foreach ($data['dtype'] as $value) {
                                    echo "<option value='{$value['id']}'>{$value['providers_type']}</option>";
                                }
                ?>
            </select>&nbsp;&nbsp;&nbsp;
            <input type="button" id="savetab" value="Зберегти назавжди!" class="btn-save"/>
             <br/>
            <br/>
            <span id="foot"><p id="pr">
                <select id="providers">
                
                </select><p id="pr"></p>
            </span>
            <span id="sprice">
                <p><input type="text" id="datepicker" size="18" placeholder="Дата вх док"/></p> 
                <p><input type="text" id="num_doc" placeholder="Номер документа"/></p>
                <p><input type="text" id="freighter" placeholder="Перевозчик"/>&nbsp;&nbsp;
                    
                </p>
                <p>
                    <input type="text" id="vman" placeholder="Водитель"/>&nbsp;&nbsp;
                    <input type="text" id="vtype" placeholder="Модель"/>&nbsp;&nbsp;
                    <input type="text" id="vnum" placeholder="Госномер"/>&nbsp;&nbsp;
                </p>
                <p>
                   <input type="text" id="shipped" placeholder="Отпустил"/>&nbsp;&nbsp;
                   <input type="text" id="accepted" placeholder="Принял"/>&nbsp;&nbsp; 
                   <input type="text" id="freight" placeholder="Стоимость г/п"/>&nbsp;&nbsp;
                </p>
            </span>
            </div>
        <div id="kub_summ">
            <table class="info_tables" id="table_sum" width="80%">
                <caption class="ctr">
                    Расчет 
                </caption>
                <thead>
                        <tr>
                            <th>D</th><th>Длина</th><th>Количество</th><th>Обьем</th><th>Сорт</th><th>Цена</th><th>Всего</th><th>Action</th>
                        </tr>                
                    </thead>
                    <tfoot>
                        <tr>
                            <td></td><td>Итого:</td><td></td><td></td><td></td><td></td><td></td>
                        </tr>
                    </tfoot>
                    <tbody>
                        
                    </tbody>
            </table>
        </div>

        <div class="right_block">
            
            <br/><br/>
            <table id="act" width="80%" border="0">
                <tbody>
                    <tr>
                        <td>
                            <select id="sort">
                                <?php
                                $sort = array('1','2','3');
                               echo  "<option value='0' selected>Сорт</option>";
                                foreach ($sort as $value) {

                                        echo "<option value='{$value}'>{$value}</option>";


                                }
                                ?>
                            </select>
                        </td>
                        <td>
                          <select id="diameters">
                                <?php
                               echo  "<option value='0' selected>Діаметер</option>";
                                foreach ($data['length'] as $value) {

                                        echo "<option value='{$value['d']}'>{$value['d']}</option>";


                                }
                                ?>
                            </select>  
                        </td>
                      </tr>
                </tbody>
            </table>
  <?php
//  print_r($price_list);
  ?>
            &nbsp;
            
            &nbsp;
            
        </div>
         
    </div>   
        
    
</div>
<script type="text/javascript" src="./js/order.js"></script>


