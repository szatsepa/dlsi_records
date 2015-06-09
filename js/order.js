  $(document).ready(function(){
        
        var provider = 0;
        
        var price = 0;
        
        var numrow = 0;

        $("#tk").css({'display': 'none'});
        
        $("#kub_summ").hide();
        
        $("#savetab").hide();
        
//        $("#saveorder").hide();
        
        $("div.right_block").hide();
        
        $("#datepicker").datepick({minDate: new Date(2014, 1, 0)});
        
        $("#foot").hide();
        
        $("#sprice").hide();
        
        $("#dtype").change(function(){
            
           setProviders(); 
           
           $("div.right_block").show();
            
        });
    
        $("#providers").change(function(){
                  
           getDep();            
        });
        
        $("#datepicker").change(function(){
           provider = $("#providers").find("option:selected").val(); 
            
        });
        
        function setProviders(){
            
            $("#providers").empty();
            $("#foot").show();
            
            var tp = $("#dtype").find("option:selected").text();

            $.each(providers, function(id){
                
                if(tp === this['type']){
                   $("#providers").append("<option value='"+id+"'>"+this['name']+"</option>"); 
                   $("#dname").focus();
                }
            });
            
            $("#sprice").show();

            $("#pr").append("&nbsp;&nbsp;&nbsp<select id='pdep'></select>");
            
            var str = $("#providers").find("option:selected").text();
            var num_str = 0;
            $.each(depart, function(id){
                if(str === this['prov']){
                    $("#pdep").append("<option value='"+this['id']+"'>"+this['name']+"</option>");
                    num_str++;
                }                
            });
            if(num_str === 0){
                $("#pdep").remove();
            }
            return false;
        }
        
        function getDep(){
            $("#pdep").empty();
            var str = $("#providers").find("option:selected").text();
            var num_str = 0;
            $.each(depart, function(id){
                if(str === this['prov']){
                    $("#pdep").append("<option value='"+this['id']+"'>"+this['name']+"</option>");
                    num_str++;
                }                
            });
            if(num_str === 0){
                $("#pdep").remove();
            }
            
            return false;
        }
                
        $("#kub_summ tfoot").css({'font-weight':'bold','font-size':'110%','text-align':'center'});
        
        $("#kub_result").hide();
        
        $("#itogi").hide();
        
        $("#colapse").hide();
        
        $(".ctr").css({'font-weight':'bold','font-size':'180%'});
        

        
        $("#diameters").change(function(){
            
            var id = "#r_"+$(this).find("option:selected").val();
                        
            $("#act tbody tr").append("<td style='border:0'></td>");
            
            $("#act tbody tr td:eq(2)").html('<select id="long"><option value="0" selected>Довжина</option></select>');
   
                $("#long").append("<option value='"+$(id).find("td:eq(1)").text()+"'>3</option>");
                $("#long").append("<option value='"+$(id).find("td:eq(2)").text()+"'>3.5</option>");
                $("#long").append("<option value='"+$(id).find("td:eq(3)").text()+"'>4</option>");
                $("#long").append("<option value='"+$(id).find("td:eq(4)").text()+"'>4.5</option>");
                $("#long").append("<option value='"+$(id).find("td:eq(5)").text()+"'>5</option>");
                $("#long").append("<option value='"+$(id).find("td:eq(6)").text()+"'>5.5</option>");
                $("#long").append("<option value='"+$(id).find("td:eq(7)").text()+"'>6</option>");
                $("#long").append("<option value='"+$(id).find("td:eq(8)").text()+"'>6.5</option>");
                $("#long").append("<option value='"+$(id).find("td:eq(9)").text()+"'>7</option>");
                $("#long").append("<option value='"+$(id).find("td:eq(10)").text()+"'>7.5</option>");
                $("#long").append("<option value='"+$(id).find("td:eq(11)").text()+"'>8</option>");
                $("#long").append("&nbsp;");;
                

            $.ajax({
               url:'/order/price',
               asinc:false,
               type:'post',
               dataType:'text',
               cache: false,
               data:{'id':$("#providers").find("option:selected").val(),'sort':$("#sort").find("option:selected").val(),'d':$("#diameters").find("option:selected").val()},
               success:function(responce){
                   
                   var p = responce.toString();
//                   p = p.substr(3);
                   $("#hprice").empty().val(p);
                }
            });
           
            $("#long").focus();
            
        });
        
        $("#long").live('change',function(){
            $("#act tbody tr").append("<td style='border:0'></td>");
            $("#act tbody tr td:eq(3)").html('<input id="cnt" placeholder="Количество?" size="4"/>&nbsp;');
            $("#cnt").focus();
            var d = $("#diameters").find("option:selected").val();
            var l = $("#long").find("option:selected").text();
             $.ajax({
               url:'/order/kub',
               asinc:false,
               type:'post',
               dataType:'text',
               cache: false,
               data:{'d':d,'l':l},
               success:function(responce){
                   
                   var p = responce;
//                   p = p.substr(3);
                   p = p.replace(',','.');
                   $("#hvolume").empty().val(p);
                }
            });
    });
    
    
    $("#rah").live('mousedown',function(){
        calculate();
    });

        
        $("#cnt").live('keypress',function(e){
            if(e.which === 13){
                $("#act tbody tr").append("<td></td>");
                $("#act tbody tr td:eq(4)").html('<input id="price" placeholder="Ціна за куб?" size="4"/>&nbsp;');
                $("#price").focus().val($("#hprice").val());
                $("#act tbody tr").append("<td></td>");
                $("#act tbody tr td:eq(5)").html('<input id="rah" type="button" value="Расчитать!"/>&nbsp;');
            } 
        });
        
        $("#price").live('keypress',function(e){
        
            if(e.which === 13){
                 calculate();   
            }
        
        });
        
        $("#savetab").mousedown(function(){
            
            var obj = {};
            
            var docid = 0; //TO DO
            
            var dt = $("#datepicker").val();
            
            var fr = '';
            
            if($("#freight").val() !== undefined){
                fr = $("#freight").val();
            }
            
            var pd = '';
            
            if($("#pdep").find("option:selected").val() !== undefined){
                pd = $("#pdep").find("option:selected").val();
            }
            
            var str = "INSERT INTO `woods_doc`(`shipped`, `num_doc`, `date_doc`, `freighter`, `V_type`, `V_num`, `V_man`, `accepted`, `providers`, `pdep`, `freighte`) VALUES ('"+$("#shipped").val()+"','"+$("#num_doc").val()+"','"+$("#datepicker").val()+"','"+$("#freighter").val()+"','"+$("#vtype").val()+"','"+$("#vnum").val()+"','"+$("#vman").val()+"','"+$("#accepted").val()+"','"+$("#providers").find('option:selected').val()+"','"+pd+"','"+fr+"')";
                       
            numrow = 0;
            
            var query = "INSERT INTO `woods` (`create`,`list`,`d`,`l`,`n`,`v`,`sort`,`price`,`itog`,`doc`) VALUES ";
            
            $.each($("#table_sum tbody tr"),function(){

               var out = this;
               
               query += "(Now(),'"+$("#list").val()+"','"+$(this).find("td:eq(0)").text()+"','"+$(this).find("td:eq(1)").text()+"','"+$(this).find("td:eq(2)").text()+"','"+$(this).find("td:eq(3)").text()+"','"+$(this).find("td:eq(4)").text()+"','"+$(this).find("td:eq(5)").text()+"','"+$(this).find("td:eq(6)").text()+"','DOCID'),";              
               
//
                numrow++;
            });
            
            query  = query.slice(0,-1)+";";
            
            if(confirm("Вирішуй - дійсно зберети?")){
                saveresult(query, str);
            }
            
        });
        
        function delzajve(){
                $("#long").remove();
                $("#cnt").remove();
                $("#rah").remove();
                $("#price").remove();
                var numcoll = 0;
                $.each($("#act tbody tr td"),function(){
                    if(numcoll > 3){
                        $(this).remove();
                    }
                    numcoll++;
                });                
        }
    
        function saveresult(query, str){
            
            
            var docid = 0;
            var str = str;
            var query = query;
//            alert(str);
            $.ajax({
                   url:'/order/saveW',
                   asinc:false,
                   type:'post',
                   dataType:'text',
                   cache: false,
                   data:{'query':str},
                   success:function(responce){
//                       alert('Data - '+responce);
                       docid = responce;
//                       docid = docid.substr(2);
                       query = query.replace('DOCID',docid);
//                       alert('DOCID - '+docid);
                       _cont(query);
                    }
            });
            
            function _cont(query){
               
                var query = query;
//                 alert(query);
                $.ajax({
                   url:'/order/saveW',
                   asinc:false,
                   type:'post',
                   dataType:'text',
                   cache: false,
                   data:{'query':query},
                   success:function(responce){
                       document.location = '/order';
                   }
                });            
        }
            
    }
        function calculate(){
            
            var obj = $("#cnt");
            var  SUMM = 0;//za vse
            var volume = 0;
            var log = 0;
            
            var d = $("#diameters").find("option:selected").val();//dimeter
            var l = $("#long").find("option:selected").text();
            
            var sq = '';//long
            sq = $("#hvolume").val();
            
            var count = 0;//кількість
            count = parseFloat($("#cnt").val());
            if(isNaN(count)){
                    alert("Поле кількість не заповнена");
                    return false;
            }
            
            var sort = $("#sort").find("option:selected").val();//сорт
            
            var price = 0;//ціна за м куб
            price = parseFloat($("#price").val());
            if(isNaN(price)){
                    price=0;
            }
            
            var csum = 0;
            csum = Math.ceil(1000*(sq*count))/1000;
            var summ = 0;//Всього за позицію 
            summ = Math.ceil(1000*price*csum)/1000;
            
            $("#table_sum tbody").append('<tr id="rw_'+numrow+'"><td>'+d+'</td><td>'+l+'</td><td>'+count+'</td><td>'+csum+'</td><td>'+sort+'</td><td>'+price+'</td><td>'+summ+'</td><td><a id="d_'+numrow+'" class="ico-delete" title="Удалить"></a></td></tr>');
            
            $.each($("#table_sum tbody tr"),function(){
                
//               
                var num = parseFloat($(this).find("td:eq(2)").text());
                log += num;
                var V = parseFloat($(this).find("td:eq(3)").text());
                volume += V;
                volume = Math.ceil(1000*volume)/1000;
                var S = parseFloat($(this).find("td:eq(6)").text());
                SUMM += S;
                SUMM = Math.ceil(100*SUMM)/100;
            });
    
            $("#table_sum tfoot tr").find('td:eq(2)').text(log+" шт.");
            $("#table_sum tfoot tr").find('td:eq(3)').text(volume+" м3");
            $("#table_sum tfoot tr").find('td:eq(6)').text(SUMM+" грн.");
            $("#savetab").show();
            $("#kub_summ").show();
            numrow++;
            delzajve();
            $("#diameters").find("option").attr({'selected':false});
            $("#diameters option:eq(0)").attr({'selected':true});
            $("#sort option:eq(0)").attr({'selected':true});
            }
        
        $("#save").mousedown(function(){
            var out = {'cat':$("#categories option:selected").val(),'nom':$("#nom_cat option:selected").val(),'count':$("#count").val()};
            _save('action/add_to_sklad.php',out);
        });
        
        $(".ico-delete").live('mousedown',function(){
            var id = this.id;
            id = "rw_"+id.substr(2);
            var brns = 0;
            var volume = 0;
            var summ = 0;
                if(confirm("Дійсно видалити цей рядок?")){
                    $("#"+id).remove();
                    $.each($("#table_sum tbody tr"),function(){
                        brns += parseFloat($(this).find('td:eq(2)').text());
                        
                        volume += parseFloat($(this).find('td:eq(3)').text());
                        
                        summ += parseFloat($(this).find('td:eq(6)').text());
                        
                    });
                    
                $("#table_sum tfoot tr").find('td:eq(2)').text(brns+" шт.");
                        
                $("#table_sum tfoot tr").find('td:eq(3)').text(Math.ceil(1000*volume)/1000+" м3");
                 
                $("#table_sum tfoot tr").find('td:eq(6)').text(Math.ceil(1000*summ)/1000+" грн."); 
            }
    });
}); 

