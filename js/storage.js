$(document).ready(function(){
    
        _show(false);
        
        $("#nom").hide();
    
//        если таблица пустая то не показываем

    function _show(flag){
        if(flag){
            $("div.right_block").show();
            $("#staff_tab").hide();
        }else{
            $("div.right_block").hide();
            $("#staff_tab").show();
        }
    }
    

    $.each($("select#sort option"),function(){
        
           if($("input#S").val() === $(this).val()){
               $(this).attr('selected',true);
           } 
    });

    $("#sort").live('change',function(){
        
            var cat = $(this).find("option:selected") .val();

            document.location = "/produce/select/"+cat;

    });

    $("#new_products").mousedown(function(){
        
        
            _show(true);
            
//            $("#sort").clone().attr('id','categories').appendTo("#ctg");
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
//            
//            var id = $("select #sort").find("option:selected").val();
//            
//            $.ajax({
//               url:'/produce/getNom',
//               type:'post',
//               dataType:'json',
//               asinc:false,
//               data:{'id':id},
//               success:function(data){
//                   
//                   
//
//                   $("#nom_cat").append("<option>Выберите позицию</option>");
//                   $.each(data,function(){
//                       $("#nom_cat").append("<option value='"+this['id']+"'>"+this['nomenclature']+"</option>");
//                   });
////                   $("#right_block").show();
////                   $("#nom").show();
////                   $("#nom_cat").focus();
//               }
//
//        });
//                   $("#nom").show();
//                   $("#nom_cat").focus();
    });


    $("#categories").change(function(){

            var id = $(this).find("option:selected").val();
            
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

    $("#nom_cat").change(function(){
        $("#count").focus();
    });

    $("#count").keypress(function(e){
        if(e.which === 13){
             _save('/produce/add',"INSERT INTO `production`(`category`, `name`,  `unit`, `recorded`,`count`) VALUES ('"+$("#categories").attr('alt')+"','"+$("#nom_cat option:selected").val()+"',(SELECT `unit` FROM `nomenclature` WHERE `id` = '"+$("#nom_cat option:selected").val()+"'),Now(),'"+$("#count").val()+"')");
        } 
    });

    $("#save").mousedown(function(){       
        
        _save('/produce/add',"INSERT INTO `production`(`category`, `name`,  `unit`, `recorded`,`count`) VALUES ('"+$("#categories").attr('alt')+"','"+$("#nom_cat option:selected").val()+"',(SELECT `unit` FROM `nomenclature` WHERE `id` = '"+$("#nom_cat option:selected").val()+"'),Now(),'"+$("#count").val()+"')");
    });
    
    function _save(url,out){
        var cat = $("#categories").attr('alt');
        var query = out;
//        alert(out);
        $.ajax({
           url:url,
           asinc:false,
           type:'post',
           dataType:'text',
           data:{'query':query},
           success:function(){
               
                   document.location='/produce/select/'+cat;
              
           }
        });
    }

    $("a.ico-plus").live('mousedown',function(){

       var obj = $(this).parent().parent();
        count = $(obj).find("td:eq(4)").text();

        $(obj).find("td:eq(4)").empty().html("<input type='text' value='' id='count-plus' size='8'/>");
        $(this).parent().empty().html("<a class='ico-done' title='Добавиь'></a>&nbsp;&nbsp;<a class='ico-arrow-left' title='Вернутся'></a>");

        $("#count-plus").attr("flag",'0').attr('placeholder','Добавка');
        $("#count-plus").focus();

    });

     $("a.ico-minus").live('mousedown',function(){

   var obj = $(this).parent().parent();
        count = $(obj).find("td:eq(4)").text();

        $(obj).find("td:eq(4)").empty().html("<input type='text' value='' id='count-plus' size='4'/>");
        $(this).parent().empty().html("<a class='ico-done' title='Добавиь'></a>&nbsp;&nbsp;<a class='ico-arrow-left' title='Вернутся'></a>");

        $("#count-plus").select().attr("flag",'1').attr('placeholder','Отбавка');

    });
//
    function _addPosition(flag,count,id){

        if(flag==='1'){
            count = (-1)*parseInt(count);
            
        }
        
        $.ajax({
            asinc:false,
            url:'/produce/edit',
            type:'post',
            dataType:'text',
            data:{'query':"UPDATE `production` SET `count`= (`count` + ("+count+"))WHERE `id`="+id},
            success:function(){
                
                document.location.reload();
            }
        });
    }

    $("a.ico-done").live('click',function(){
        
            var cnt = $(this).parent().parent().find("td input:text").val();
            var id = $(this).parent().parent().find("td:eq(0)").text();
            var flag = $(this).parent().parent().find("td input:text").attr('flag');
            _addPosition(flag,cnt,id);

    });

    $("#count-plus").live('keypress',function(e){;
            if(e.which === 13){
                var cnt = $(this).parent().parent().find("td input:text").val();
                var id = $(this).parent().parent().find("td:eq(0)").text();
                var flag = $(this).parent().parent().find("td input:text").attr('flag');
                _addPosition(flag,cnt,id);
            }
    });



    $("a.ico-arrow-left").live('mousedown',function(){
        document.location.reload();           
    });
    
    $("#back").live('mousedown',function(){
        document.location.reload();
    });
});