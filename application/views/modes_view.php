<?php

//var_dump($data);
//print_r($data['data'][0]);
//echo "<br/>";
//print_r($data['rej']);
?>
<h1>Підбір режимів сушки деревини в камері SIONA</h1>
<div id="sn"> 
    <!--<input type="hidden" id="page" value="<?php           echo "{$data['page']}";?>"/>-->
    <div>
        <table id ="mode" class="info_tables">
            <thead>
                <tr>
                    <th rowspan="2">
                        Товщина пиломатеріала&nbsp;&lpar;в&nbsp;мм&rpar;
                    </th>
                    <th colspan="5">
                        Номера режимів для різних порід деревини
                    </th>
                </tr>
                <tr>
                    <th>
                        єль и пихта
                    </th>
                    <th>
                        сосна и кедр
                    </th>
                    <th>
                        береза
                    </th>
                    <th>
                       бук, клен и лиственница 
                    </th>
                    <th>
                        дупп
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>19-22</td><td><a class="arej">1-2</a></td><td><a class="arej">2</a></td><td><a class="arej">3</a></td><td><a class="arej">5</a>	</td><td><a class="arej">10</a></td>
                </tr>
                <tr>
                    <td>25-30</td><td><a class="arej">	2-3</a></td><td><a class="arej">	2-3</a></td><td><a class="arej">	4</a></td><td><a class="arej">	6</a></td><td><a class="arej">	12</a></td>
                </tr>
                <tr>
                    <td>30-40</td><td><a class="arej">	3</a></td><td><a class="arej">	3</a></td><td><a class="arej">	5</a></td><td><a class="arej">	6-8</a></td><td><a class="arej">	15</a></td>
                </tr>
                <tr>
                    <td>40-50</td><td><a class="arej">	3-4</a></td><td><a class="arej">	4</a></td><td><a class="arej">	6</a></td><td><a class="arej">	10</a></td><td><a class="arej">	20</a></td>
                </tr>
                <tr>
                    <td>50-60</td><td><a class="arej">	4-5</a></td><td><a class="arej">	5</a></td><td><a class="arej">	8</a></td><td><a class="arej">	12</a></td><td><a class="arej">	25</a></td>
                </tr>
                <tr>
                    <td>60-70</td><td><a class="arej">	6</a></td><td><a class="arej">	6</a></td><td><a class="arej">	10</a></td><td><a class="arej">	15</a></td><td><a class="arej">	30</a></td>
                </tr>
                <tr>
                    <td>70-80</td><td><a class="arej">	6-8</a></td><td><a class="arej">	8</a></td><td><a class="arej">	12</a></td><td><a class="arej">	20</a></td><td>-</td>
                </tr>
                <tr>
                    <td>80-90</td><td><a class="arej">	8-10</a></td><td><a class="arej">	10</a></td><td><a class="arej">	15</a></td><td><a class="arej">	25</a></td><td>-</td>
                </tr>
                <tr>
                    <td>90-100</td><td><a class="arej">10-12</a></td><td><a class="arej">12</a></td><td><a class="arej">20</a></td><td><a class="arej">30</a></td><td>-</td>
                </tr>
                <tr>
                    <td>100-120</td><td><a class="arej">12-15</a></td><td><a class="arej">15</a></td><td><a class="arej">25</a></td><td>-</td><td>-</td>
                </tr>
               
            </tbody>
        </table> 
        <!--<span></span>-->
        <p><strong>Выбор режима сушки пиломатериалов производится в соответствии с их размерами и степенью влажности.</strong> </p> 
            <p style="text-align: justify;">&nbsp;&nbsp;
                Например, требуется высушить в сушилке периодического действия с реверсивной 
                   циркуляцией (СРЦ) сосновые доски толщиной 50 мм от начальной влажности в 
                   60% до конечной абсолютной влажности 10%.
            </p> 
            <p style="text-align: justify;">
                &nbsp;&nbsp;
                По табл. 5 устанавливаем, что следует применить режим 4, который предусматривает (табл.4) следующее состояние воздуха в камере. От начала сушки до достижения влажности 40% в камере следует поддерживать температуру (по сухому термометру) 69 градусов С и психрометрическую разность 4,5 градусов С (мокрый термометр должен показывать 64,5 градусов С). Затем при достижении пиломатериалом влажности 30% следует поддерживать в камере температуру (по сухому термометру) 73 градусов С и психрометрическую разность 6 градусов С; далее до достижения 20% влажности температуру держать 77 градусов С и разность 11 градусов С; до 15% поддерживать температуру 79 градусов С и разность 14 градусов С и, наконец, до достижения конечной влажности 10% держать температуру 81 градусов С и разность 19 градусов С. 
            </p>
        
    </div>
</div>
<script type="text/javascript" src="/js/siona.js"></script>

