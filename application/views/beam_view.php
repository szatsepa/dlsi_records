<h1>Розрахунок міцності БАЛКИ</h1>
 
<div id="strop"> 
     <table>
         <tbody>
             <tr>
                 <td>
                     <form>
                         <input type="radio" id="rd1" value="1"/>&nbsp;&nbsp;Прямокутна
                         <input type="radio" id="rd2" value="2"/>&nbsp;&nbsp;Кругла
                     </form>
                     <br/>
                     <span id="circle" style="display: none">
                         <input type="number" min="16" max="32" step="1" placeholder="діаметер см."/>
                     </span>
                     <span id="rectangle">
                            <strong>По ГОСТ 24454-80</strong><br/><br/>
                         <select id="b">
                             <option value="0" selected>Виберіть ширшину бруса</option>
                             <option value="5">50</option>
                             <option value="6">60</option>
                             <option value="7.5">75</option>
                             <option value="10">100</option>
                             <option value="12.5">125</option>
                             <option value="15">150</option>
                             <option value="17.5">175</option>
                             <option value="20">200</option>
                             <option value="22.5">225</option>
                         </select>
                         &nbsp;
                         <select id="h">
                             <option value="0" selected>Виберіть вишину бруса</option>
                             <option value="7.5">75</option>
                             <option value="10">100</option>
                             <option value="12.5">125</option>
                             <option value="15">150</option>
                             <option value="17.5">175</option>
                             <option value="22.5">225</option>
                             <option value="25">250</option> 
                             <option value="27.5">275</option>
                         </select> 
                     </span>
                     
                 </td>
                 <td>
                     Довжина між опорами - <strong>L</strong><br/>
                     <input type="number" min="1" max="12" step="0.250"  id="L" value="1"/><br/>
                     Навантаження Кг на м.п. <strong>Q</strong><br/>
                     <input type="number" id="Q" min="50" max="2500" step="50" value="50"/>
                     
                 </td>
                 
             </tr>
             <tr>
                 <td>
                     
                     <img src="/images/beam.jpg" width="560" alt="beam.jpg"/>
                      
                 </td>
                 <td id="res">
                    
                     <p style="text-align: center">
                         <input type="button" class="btn-save" id="count" value="Порахувати"/>
                     </p>
                 </td>
             </tr>
             
         </tbody>
     </table>
   </div>
  
 
<script type="text/javascript" src="js/jquery.printElement.js"></script>
<script type="text/javascript" src="/js/beam.js"></script>


