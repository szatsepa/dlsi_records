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
    });

//    $("#staff_tab tbody tr td").css('text-align','center');

//    $("#categories").change(function(){
//
//            var id = $(this).find("option:selected").val();
//            var out = {'cat':id};
//            $.ajax({
//               url:'query/select_nomenclature.php',
//               type:'post',
//               dataType:'json',
//               asinc:false,
//               data:out,
//               success:function(data){
//                   $("#nom_cat").append("<option>Выберите позицию</option>");
//                   $.each(data,function(i){
//                       $("#nom_cat").append("<option value='"+i+"'>"+this+"</option>");
//                   });
//                   $("#nom").show();
//                   $("#nom_cat").focus();
//               },
//               error:function(data){
//                    document.write(data['responseText']);
//               }
//            });
//
//    });
//
//    $("#nom_cat").change(function(){
//        $("#count").focus();
//    });
//
//    $("#count").keypress(function(e){
//        if(e.which === 13){
//            $("#save").focus();
//        } 
//    });
//
//    $("#save").mousedown(function(){
//        var out = {'cat':$("#categories option:selected").val(),'nom':$("#nom_cat option:selected").val(),'count':$("#count").val()};
//        _save('action/add_to_sklad.php',out);
//    });
//
//    function _save(url,out){
//        $.ajax({
//           url:url,
//           asinc:false,
//           type:'post',
//           dataType:'json',
//           data:out,
//           success:function(data){
//               if(data['ok']){
//                   document.location = "index.php?part=pro&chapter=skl";
//               }
//           },
//           error:function(data){
//                document.write(data['responseText']);
//           }
//        });
//    }
//
//var count = 0;
////    var obj = {};
//    $("a.ico-plus").live('mousedown',function(){
//
//   var obj = $(this).parent().parent();
//        count = $(obj).find("td:eq(4)").text();
//
//        $(obj).find("td:eq(4)").empty().html("<input type='text' value='' id='count-plus' size='8'/>");
//        $(this).parent().empty().html("<a class='ico-done' title='Добавиь'></a>&nbsp;&nbsp;<a class='ico-arrow-left' title='Вернутся'></a>");
//
//        $("#count-plus").select().attr("flag",'0').attr('placeholder','Добавка');
////            // console.log($("#count-plus").attr('flag'));
//
//    });
//
//     $("a.ico-minus").live('mousedown',function(){
//
//   var obj = $(this).parent().parent();
//        count = $(obj).find("td:eq(4)").text();
//
//        $(obj).find("td:eq(4)").empty().html("<input type='text' value='' id='count-plus' size='4'/>");
//        $(this).parent().empty().html("<a class='ico-done' title='Добавиь'></a>&nbsp;&nbsp;<a class='ico-arrow-left' title='Вернутся'></a>");
//
//        $("#count-plus").select().attr("flag",'1').attr('placeholder','Отбавка');
////            // console.log($("#count-plus").attr('title'));
//    });
//
//    function _addPosition(flag,count,id){
////            // console.log(flag);
//        if(flag==='1'){
//            count = (-1)*parseInt(count);
////                // console.log(count);
//        }
//
//        $.ajax({
//            asinc:false,
//            url:'action/add_position.php',
//            type:'post',
//            dataType:'json',
//            data:{'count':count,'id':id},
//            success:function(data){
////                    document.write(data['query']);
//                document.location.reload();
//            },
//            error:function(data){
//                document.write(data['responseText']);
//            }
//        });
//    }
//
//    $("a.ico-done").live('click',function(){
////        // console.log($(this).parent().parent().find("td input:text").val());
//            var cnt = $(this).parent().parent().find("td input:text").val();
//            var id = $(this).parent().parent().find("td:eq(0)").text();
//            var flag = $(this).parent().parent().find("td input:text").attr('flag');
//            _addPosition(flag,cnt,id);
//
//    });
//
//    $("#count-plus").live('keypress',function(e){;
//            if(e.which === 13){
//                var cnt = $(this).parent().parent().find("td input:text").val();
//                var id = $(this).parent().parent().find("td:eq(0)").text();
//                var flag = $(this).parent().parent().find("td input:text").attr('flag');
//                _addPosition(flag,cnt,id);
//            }
//    });
//
//
//
//    $("a.ico-arrow-left").live('mousedown',function(){
//        document.location.reload();           
//    });
});