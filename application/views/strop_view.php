<h1>Розрахунок стропильної сістеми</h1>
 
  
 <div id="strop"> 
     <table>
         <tbody>
             <tr>
                 <td colspan="2">
                     <select id="type">
                         <option value="0" selected>Виберіть тип кровельного матеріалу</option>
                         <option value="1">М'яка</option>
                         <option value="2">Черепиця</option>
                         <option value="3">Профнастил</option>
                         <option value="4">Інше</option>
                     </select>
                 </td>
             </tr>
             <tr>
                 <td>
                      <canvas id="a" width="560" height="330"></canvas>
                 </td>
                 <td>
                     *<small>все вимірюється в сантиметрах</small>*<br/><br/>
                     Діаметер стінового бревна - <strong>D</strong><br/><br/>
                     <input type="text" id="D" placeholder="діаметер" size="12"/><br/><br/>
                     Межосьова відстань між стінами - <strong>L</strong><br/><br/>
                     <input type="text" id="L" placeholder="міжосьове" size="12"/><br/><br/>
                     Відстань від балок до верха - <strong>H</strong><br/><br/>
                     <input type="text" id="H" placeholder="вишина" size="12"/><br/><br/>
                     Відстань від стіни до краю - <strong>m</strong><br/><br/>
                     <input type="text" id="m" placeholder="відстань" size="12"/><br/><br/>
                     <input type="button" class="btn-save" value="Порахувати"/><br/><br/>
                 </td>
             </tr>
         </tbody>
     </table>
   
</div>