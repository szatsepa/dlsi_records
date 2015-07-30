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
                     &nbsp;&nbsp;
                     <input type="checkbox" id="skate" title="Кількисть скатів даху"/>&nbsp;Чотире, або Двохскатий
                     <br/><br/>
                     <select id="ws">
                         <option value="0" selected>Виберіть ширшину бруса</option>
                         <option value="5">50</option>
                         <option value="6">60</option>
                         <option value="8">80</option>
                         <option value="9">90</option>
                         <option value="10">100</option>
                         <option value="12">120</option>
                         <option value="15">150</option>
                     </select>
                     &nbsp;
                     <select id="hs">
                         <option value="0" selected>Виберіть вишину бруса</option>
                         <option value="8">80</option>
                         <option value="9">90</option>
                         <option value="10">100</option>
                         <option value="12">120</option>
                         <option value="15">150</option>
                         <option value="18">180</option>
                         <option value="20">200</option> 
                         <option value="22">220</option>
                         <option value="25">250</option>
                     </select>
                 </td>
                 <td>
                     Вишина будівлі в метрах - <strong>Hh</strong><br/>
                     <input type="text" id="Hh" placeholder="вишина" size="12"/><br/>
                     Рoзмір будівлі по осях стін <strong>S</strong><br/>
                     <input type="text" id="W" placeholder="W - m." size="6"/>
                     &nbsp;X&nbsp;
                     <input type="text" id="L" placeholder="L - m." size="6"/>
                     
                 </td>
                 
             </tr>
             <tr>
                 <td>
                     
                         <canvas id="a" width="560" height="600"></canvas>
                      
                 </td>
                 <td id="res">
                     *<small>все вимірюється в сантиметрах</small>*<br/><br/>
                     Діаметер стінового бревна - <strong>D</strong><br/><br/>
                     <input type="text" id="D" placeholder="діаметер" size="12"/><br/><br/>                     
                     Відстань <strong>bc</strong><br/><br/>
                     <input type="text" id="bc" placeholder="bc - sm." size="12"/><br/><br/>
                     Відстань <strong>cd</strong><br/><br/>
                     <input type="text" id="cd" placeholder="cd - sm." size="12"/><br/><br/>
                     Відстань <strong>cf</strong><br/><br/>
                     <input type="text" id="cf" placeholder="cf - sm." size="12"/><br/><br/>
                     Відстань від балок до стріхи - <strong>cg</strong><br/><br/>
                     <input type="text" id="cg" placeholder="cg - sm." size="12"/><br/><br/>
                     Відстань від стіни до краю даху з боку фасаду- <strong>m</strong><br/><br/>
                     <input type="text" id="m" placeholder="відстань" size="12"/><br/><br/>
                     Крок стропил - <strong>Step</strong><br/><br/>
                     <input type="text" id="step" placeholder="відстань" size="12"/><br/><br/>
                     <p style="text-align: center">
                         <input type="button" class="btn-save" id="count" value="Порахувати"/>
                     </p>
                 </td>
             </tr>
             
         </tbody>
     </table>
   <div id='front' style="display: none;"><canvas id='b' width='900' height='630'></canvas></div>
   <div id='side' style="display: none;"><canvas id='c' width='900' height='630'></canvas></div>
   <div id="re" style="display: none">
      <div id="resume">
       <table id="resumeTab" width="90%">
           <tbody>
               
           </tbody>
       </table>
   </div> 
       <p style="text-align: center">
           <a id="print">Друквати?</a>
       </p>
   </div>
   <script type="text/javascript" src="/js/jquery.printElement.js"></script>
<script type="text/javascript" src="/js/quattro.js"></script>
<script type="text/javascript" src="/js/quattro_drows.js"></script>
