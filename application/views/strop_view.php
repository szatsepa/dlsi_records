<h1>Розрахунок стропильної сістеми</h1>
 
  
 <div id="strop"> 
     <table>
         <tbody>
             <tr>
                 <td colspan="2">
                     Додати вишину будівлі. Step strop.Вибір ширини стропильного бруса.
                 </td>
             </tr>
             <tr>
                 <td colspan="2">
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
                     Відстань вісь стіни 1 до стріхи - <strong>L</strong><br/><br/>
                     <input type="text" id="L" placeholder="міжосьове" size="12"/><br/><br/>
                     Відстань вісь стіни 2 до стріхи - <strong>L1</strong><br/><br/>
                     <input type="text" id="L1" placeholder="міжосьове" size="12"/><br/><br/>
                     Відстань від балок до верха - <strong>H</strong><br/><br/>
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