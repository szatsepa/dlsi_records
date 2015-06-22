$(document).ready(function(){

    if($("#user_count").val()!=0){
        _show(false);
    }else{
        _show(true);
    }

    $("#new_products").mousedown(function(){
        _show(true);
        
                    $("#categories").val($("#sort").find("option:selected").text()).attr('alt',$("#sort").find("option:selected").val());
             var id = $("#sort").find("option:selected").val();
            
            $.ajax({
               url:'/produce/getNom',
               type:'post',
               dataType:'json',
               asinc:false,
               data:{'id':id},
               success:function(data){
                   
                   

                   $("#nom_cat").append("<option>Выберите позицию</option>");
                   $.each(data,function(){
                       $("#nom_cat").append("<option value='"+this['id']+"'>"+this['nomenclature']+"</option>");
                   });
                   $("#nom").show();
                   $("#nom_cat").focus();
               }
               
        });
    });

     $("#sort").change(function(){
        document.location = "/produce/nomenclature/"+$("#sort option:selected").val();
    });

    $("#d_save").live('click',function(){
//        alert($("#units").find("option:selected").text());
        _save("/produce/add","INSERT INTO `nomenclature`(`categories`, `nomenclature`, `price`, `unit`) VALUES ('"+$("#categories").attr('alt')+"','"+$("#name").val()+"','"+$("#price_pos").val()+"','"+$("#units").find("option:selected").val()+"')" );

    });

    $("#edit").live('click',function(){
        _save("/produce/edit", "UPDATE `nomenclature` SET `categories`=(SELECT `id` FROM `categories` WHERE `categories` = '"+$("#categories").attr('alt')+"'),`nomenclature`='"+$("#name").val()+"',`price`='"+$("#price_pos").val()+"',`unit`='"+$("#units").find("option:selected").val()+"' WHERE `id`= "+$("#uid").val());
    });
    
    $("#price_pos").live('keypress',function(e){
        if(e.which === 13){
           _save("/produce/edit", "UPDATE `nomenclature` SET `categories`=(SELECT `id` FROM `categories` WHERE `categories` = '"+$("#categories").attr('alt')+"'),`nomenclature`='"+$("#name").val()+"',`price`='"+$("#price_pos").val()+"',`unit`='"+$("#units").find("option:selected").val()+"' WHERE `id`= "+$("#uid").val()); 
        }
    });


    $("a.ico-info").live('click',function(){
        var id = this.id;
        id = id.substr(2);
        var obj = $(this).parent().parent();

        var name = $(obj).find("td:eq(2)").text();
        $(obj).find("td:eq(2)").empty().html("<input id='name' type='text' value='"+name+"' size='48' required placeholder='"+name+"'/>");

        var price = $(obj).find("td:eq(4)").text();

        $(obj).find("td:eq(4)").empty().html("<input id='price_edit' type='text' value='"+price+"' size='12' required placeholder='"+price+"'/>");
        
        $("input#price_edit").focus().select();

        getSelect($(obj).find("td:eq(3)"));
        
        $("#uid").val(id);

        $(obj).find("td:eq(5)").empty().html("<a class='ico-done' title='Изменить'></a><a class='ico-arrow-left' title='Вернуцца'></a>");

    });
    
    $("input#price_edit").live('keypress',function(e){
        if(e.which === 13){
            var obj = $(this).parent().parent();
            var id = $(obj).attr('id');
            id=id.substr(2);
            var query = "UPDATE `nomenclature` SET `categories`=(SELECT `id` FROM `categories` WHERE `categories` = '"+$(obj).find('td:eq(1)').text()+"'),`nomenclature`='"+$(obj).find("td:eq(2) input").val()+"',`price`='"+$(obj).find("td:eq(4) input").val()+"',`unit`='"+$(obj).find("td:eq(3) select option:selected").val()+"' WHERE `id`= "+id;
            _editNom(query);
        }
    });

    $("a.ico-done").live('click',function(){
        var obj = $(this).parent().parent();
        var id = $(obj).attr('id');
        id=id.substr(2);
        var query = "UPDATE `nomenclature` SET `categories`=(SELECT `id` FROM `categories` WHERE `categories` = '"+$(obj).find('td:eq(1)').text()+"'),`nomenclature`='"+$(obj).find("td:eq(2) input").val()+"',`price`='"+$(obj).find("td:eq(4) input").val()+"',`unit`='"+$(obj).find("td:eq(3) select option:selected").val()+"' WHERE `id`= "+id;
        _editNom(query);
    });

    function _editNom(out){
        
       var query = out;
        $.ajax({
            asinc:false,
            url:'/produce/edit',
            type:'post',
            dataType:'text',
            data:{'query':query},
            success:function(data){

                document.location.reload();
            }      
        });
        return false;
    }

    $("#back").mousedown(function(){
        _show(false);
        _changeButton(false);
    });

    $("a.ico-delete").live('click',function(){
        var id = this.id;
        id = id.substr(2);
        if(confirm("Дійсно видалити позицию зі списку?")){
            
          _save("/produce/edit", "DELETE FROM `nomenclature` WHERE `id`="+id);
        }
    });

    function getSelect(obj){
        
        $.ajax({
           url:'/produce/unit',
           type:'post',
           dataType:'text',
           success:function(data){
               
               $(obj).html(data);
           }
        });

        return false;
    }

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
            $("#staff_tab").hide();
        }else{
            $("div.right_block").hide();
            $("#staff_tab").show();
        }
    }

//    function _save(url, out){
//        var url = url;
//        var out = out;
//        
//        $.ajax({
//            asinc:false,
//            url:url,
//            type:'post',
//            responce:'text',
//            data:{'query':out},
//            success:function(data){
//                
//                document.location.reload();
//            } 
//        });
//    }
});