<script type="text/javascript" src="/js/jquery.datepick.js"></script>
<h1>Боржники та інша наволоч</h1>                    
<div id="staff_tab">
    <?php
    print_r($data['staff'][0]);
    echo "<br>".$data['staff'][0]['surname'];

    ?>
                            <table class="info_tables" id="table_i">
                                <thead>
                                    <tr>
                                        <th>№ з/п</th><th>Дата</th><th>Кому видано</th><th>Сумма</th><th>Комментарий</th><th>&nbsp;&nbsp;</th>
                                    </tr>                
                                </thead>
                                <tbody>
                                <?php
                                $row = 1;
                                $details = 'Аванс';
                                if(isset($data['cost'])){
                                    echo "<tr id='r_{$data['staff'][0]['id']}'>
                                                <td>$row</td>
                                                <td><input type='text' id='getdate' value='' placeholder='Виберіть дату аkції'/></td>
                                                <td>{$data['staff'][0]['surname']}</td>
                                                <td>{$data['cost']}</td>
                                                    <td>{$details}</td>
                                                        <td><a class='ico-done' title='Принять'></a></td>
                                              </tr>";
                                          $row++;          
                                }
                                
                                                    
    
                                if(count($data['imprest']) > 0){
                                    foreach ($data['imprest'] as $value){
                                        if($value['type'] != 'payment') $details = $value['type'];
                                        echo "<tr id='r_{$value['id']}'>
                                                <td>$row</td>
                                                <td>".$value['recorded']."</td>
                                                <td>{$value['staff']}</td>
                                                <td>{$value['cost']}</td>
                                                    <td>{$details}</td>
                                                        <td><a class='ico-info' title='Изменить'></a></td>
                                              </tr>";
                                                $row++;
                                    }
                                }
                                if(!isset($data['cost'])){
                            ?>   
                                    <tr>
                                        <td>
                                            <?php 
                                            echo $row; 
                                            ?>
                                        </td>
                                        <td>
                                            <input type="text" id="getdate" value="" placeholder="Виберіть дату аkції"/>
                                        </td>
                                            
                                            
                                        
                                        <td>
                                            <select id="workers">
                                                <option value='0' selected>Виберіть когось</option>
                                            <?php
//                                            $urow = 0;
                                            foreach ($data['staff'] as $value) {
    
//                                                if($urow === 0){
//                                                    echo ;
//                                                }else{}
                                                    echo "<option value='{$value['id']}'>{$value['surname']}</option>";
                                                
//                                                $urow++;
                                            }
                                            ?>
                                        </select> 
                                        </td>
                                        <td>
                                            <input type="text" id="how_many" value="" required placeholder="Получил на руки"/>
                                        </td>
                                        <td>
                                            <select id="comment">
                                                <?php
                                                $rows = 0;
                                                foreach ($data['types'] as $value) {
                                                    if($rows === 0){
                                                        echo "<option value='{$value['id']}' selected>{$value['type']}</option>";
                                                    }else{
                                                        echo "<option value='{$value['id']}'>{$value['type']}</option>";
                                                    }
                                                    $rows++;
                                                }

                                                ?>
                                            </select>
                                        </td>
                                        <td>
                                           <a class='ico-done' title='Зберегти'></a> 
                                        </td>
                                    </tr>
                                    <?php
                                }
                                ?>
                                </tbody>
                            </table>
                        </div>

<script type="text/javascript" src="/js/imprest.js"></script>