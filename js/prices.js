$(document).ready(function(){
//    TO DO доопрацувати в сенсі додати ціни з урахуванням вибраного типу та інше
                
        if($("#user_count").val()!=0){
            _show(false);
        }else{
            _show(true);
        }
        
        if($("input#uid").val() !== ''){
            $.each($("select#prov option"),function(){
                $(this).attr('selected',false);
                if($("input#uid").val() === $(this).val()){
                   $(this).attr('selected',true); 
                }
            });
            
            $("h1#title").append(" "+$("select#prov option:selected").text());
        }else{
            $("h1#title").append(" (всі)");
        }
        
        $("select#prov").change(function(){
             document.location = '/order/prices/'+$(this).find("option:selected").val(); 
         });

        $("#foot").hide();

        $("#tprice thead tr th").css({"text-align": "center"});
        $("#table_providers thead tr th").css({"text-align": "center"});
        $("#table_providers tbody tr td").css({"text-align": "center"});
        $("#tprice tbody tr td").css({"text-align": "center"});
        $("#ico-done").css({'cursor':'pointer'});

        $("#dtype").change(function(){

           setProviders(); 

        });
        
        $("#v_zad").mousedown(function(){
           document.location.reload(); 
        });


        $("#swoods").live('change',function(){
            $("#p1").focus().select();
        });

        $("#p1").live('keypress',function(e){
            if(e.which === 13){
                var shipp = $("input#nameprov").attr('name');
                var d = $(this).parent().parent().find("td:eq(0)").find("option:selected").val();
                var dm = d.substr(0,2);
                var dM = d.substr(5,2);
                var sort = $(this).parent().parent().find("td:eq(1)").find("option:selected").val();
                var p1 = $(this).val();
                var query = "INSERT INTO `providers_prices`(`created`, `shipper`, `d_min`, `d_max`,`sort`, `p1`) VALUES (Now(),'"+shipp+"','"+dm+"','"+dM+"','"+sort+"','"+p1+"')";
                _save("/order/add",query);
                }

        });

        $("#new_price").mousedown(function(){
            
            var tid = $("select#prov option:selected").attr('name');
            var tname = $("select#prov option:selected").attr('class');
            var id = $("select#prov option:selected").val();
            var name = $("select#prov option:selected").text();
            
            $("p#pprov").empty();
            $("p#pprov").append("<input id='typeprov' name='"+tid+"' value='"+tname+"' size='32'/>");
            $("p#pprov").append("<br/><br/><input id='nameprov' name='"+id+"' value='"+name+"' size='32'/>");
//            alert(id+" "+name);
            _show(true);
            _changeButton(true);
            $("#foot").show();
        });

        $(".ico-done").live('mousedown',function(){

            var shipp = $("input#nameprov").attr('name');
            var d = $(this).parent().parent().find("td:eq(0)").find("option:selected").val();
            var dm = d.substr(0,2);
            var dM = d.substr(5,2);
            var sort = $(this).parent().parent().find("td:eq(1)").find("option:selected").val();
            var p1 = $(this).parent().parent().find("td:eq(2)").find("input").val();
            var query = "INSERT INTO `providers_prices`(`created`, `shipper`, `d_min`, `d_max`,`sort`, `p1`) VALUES (Now(),'"+shipp+"','"+dm+"','"+dM+"','"+sort+"','"+p1+"')";

            _save("/order/add",query);

        });

        $("#chg").live('mousedown',function(){

            var price = $(this).parent().parent().find("td:eq(5) input").val();
            var id = $(this).parent().parent().find("td:eq(0)").text();
            price = price.replace(',','.');
            var query = "UPDATE `providers_prices` SET `p1`='"+price+"' WHERE `id` = "+id;
            _save("/order/edit",query);
            //TO DO
            $(this).parent().parent().find("td:eq(5)").empty().text(price);
        });

        $("#new_p").live('keypress',function(e){
            if(e.which === 13){
               var id = $(this).parent().parent().attr('id');
               id = id.substr(2);
               var price = $(this).val();
               price = price.replace(',','.');
               var query = "UPDATE `providers_prices` SET `p1`='"+price+"' WHERE `id` = "+id;
               _save("/order/edit",query);
               //TO DO
               $("#r_"+id).parent().parent().find("td:eq(5)").empty().text(price);
            }


        });

        $("a.ico-info").live('click',function(){
            var id = this.id;
            id = id.substr(2);
            var obj = $(this).parent().parent();

            $(obj).find("td:eq(5)").empty().append("<input id='new_p' type='text' size='6' value='0'/>");
            $(obj).find("td:eq(6)").empty().append("<input id='chg' type='image' src='../design/ico-done.gif' title='Змінити'/>");
            $(obj).find("td:eq(5) input").focus().select();

        });

        $("#back").mousedown(function(){

            _show(false);
            _changeButton(false);
        });

        $("a.ico-delete").live('click',function(){

            var id = this.id;
            id = id.substr(2);
            if(confirm("Дійсно видалити позиційу зі списку?")){

              _save("/order/del", "UPDATE `providers_prices` SET `activ`= 0 WHERE `id` = "+id);
            }
        });

        function _changeButton(action){

            if(action){
               $("#d_save").attr('id','edit').css({"cursor":"pointer"});
            }else{
                $("#edit").attr('id','d_save').css({"cursor":"pointer"});
            }
        }

        function _show(flag){

            if(flag){
                $("div.right_block").show();
                $("#div_providers").hide();
            }else{
                $("div.right_block").hide();
                $("#div_providers").show();
            }

            $("#tprice tbody tr").find('td').attr('align','center');
        }

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
        }

});

