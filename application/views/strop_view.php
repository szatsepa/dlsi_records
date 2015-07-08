<h1>Розрахунок стропильної сістеми</h1>
 
  
 <div id="strop"> 
     <table>
         <tbody>
             <tr>
                 <td>
                     <select id="type">
                         <option value="0" selected>Виберіть тип кровельного матеріалу</option>
                         <option value="5">Ондулин (битумный шифер)</option>
                         <option value="5">Металлочерепица</option>
                         <option value="5">Профнастил</option>
                         <option value="10">Битумная черепица</option>
                         <option value="15">Шифер</option>
                         <option value="40">Керамическая черепица</option>
                         <option value="50">Цементно-песчаная черепица</option>                         
                     </select>
                     <br/><br/>
                     <select id="ws">
                         <option value="0" selected>Виберіть ширшину бруса</option>
                         <option value="5">50</option>
                         <option value="6">60</option>
                         <option value="7.5">75</option>
                         <option value="10">100</option>                         
                     </select>
                     &nbsp;
                     <select id="hs">
                         <option value="0" selected>Виберіть вишину бруса</option>
                         <option value="8">80</option>
                         <option value="9">90</option>
                         <option value="10">100</option>
                         <option value="12">120</option>
                         <option value="15">150</option>
                         <option value="20">200</option> 
                     </select>
                 </td>
                 <td>
                     Вишина будівлі в метрах - <strong>Hh</strong><br/><br/>
                     <input type="text" id="Hh" placeholder="вишина" size="12"/>
                     
                 </td>
                 
             </tr>
             <tr>
                 <td>
                      <canvas id="a" width="560" height="600"></canvas>
                 </td>
                 <td>
                     *<small>все вимірюється в сантиметрах</small>*<br/><br/>
                     Діаметер стінового бревна - <strong>D</strong><br/><br/>
                     <input type="text" id="D" placeholder="діаметер" size="12"/><br/><br/>
                     Відстань вісь стіни 1 до центру - <strong>L</strong><br/><br/>
                     <input type="text" id="L" placeholder="міжосьове" size="12"/><br/><br/>
                     Відстань вісь стіни 2 до центру - <strong>L1</strong><br/><br/>
                     <input type="text" id="L1" placeholder="міжосьове" size="12"/><br/><br/>
                     Відстань від балок до стріхи - <strong>H</strong><br/><br/>
                     <input type="text" id="H" placeholder="вишина" size="12"/><br/><br/>
                     Відстань від стіни до краю - <strong>m</strong><br/><br/>
                     <input type="text" id="m" placeholder="відстань" size="12"/><br/><br/>
                     Крок стропил - <strong>Step</strong><br/><br/>
                     <input type="text" id="step" placeholder="відстань" size="12"/><br/><br/>
                     <input type="button" class="btn-save" value="Порахувати"/><br/><br/>
                 </td>
             </tr>
         </tbody>
     </table>
   
</div>