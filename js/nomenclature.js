$(document).ready(function(){

    if($("#user_count").val()!=0){
        _show(false);
    }else{
        _show(true);
    }

    $("#new_products").mousedown(function(){
        _show(true);
    });

     $("#sort").change(function(){
        document.location = "/produce/nomenclature/"+$("#sort option:selected").val();
    });

    $("#d_save").live('click',function(){

        _save("action/add_product.php", {'cat':$("#categories option:selected").val(),'name':$("#name").val(),'price':$("#price_pos").val(), 'unit':$("#unit option:selected").text()});

    }).css({"cursor":"pointer"});

    $("#edit").live('click',function(){
        _save("action/edit_product.php", {'name':$("#name").val(),'comment':$("#price_pos").val(), 'unit':$("#unit option:selected").text(),'id':$("#uid").val()});
    });


    $("a.ico-info").live('click',function(){
        var id = this.id;
        id = id.substr(2);
        var obj = $(this).parent().parent();

        var name = $(obj).find("td:eq(2)").text();
        $(obj).find("td:eq(2)").empty().html("<input id='name' type='text' value='"+name+"' size='48' required placeholder='"+name+"'/>");

        var price = $(obj).find("td:eq(4)").text();

        $(obj).find("td:eq(4)").empty().html("<input id='price_pos' type='text' value='"+price+"' size='12' required placeholder='"+price+"'/>");

        getSelect($(obj).find("td:eq(3)"));
        $("#uid").val(id);

        $(obj).find("td:eq(5)").empty().html("<a class='ico-done' title='Изменить'></a><a class='ico-arrow-left' title='Вернуцца'></a>");

    });

    $("a.ico-done").live('click',function(){
        var obj = $(this).parent().parent();
        var id = $(obj).attr('id');
        id=id.substr(2);
        var out = {'id':id,'categories':$(obj).find('td:eq(1)').text(),'nomenclature':$(obj).find("td:eq(2) input").val(),'unit':$(obj).find("td:eq(3) select option:selected").val(),'price':$(obj).find("td:eq(4) input").val()};
//      alert(out['unit'])      ;
        _editNom(out);
    });

    function _editNom(out){
        $.ajax({
            asinc:false,
            url:'action/edit_nomenclature.php',
            type:'post',
            dataType:'json',
            data:out,
            success:function(data){
//                    document.write(data['query']);

                document.location.reload();
            },
             error:function(data){
                document.write(data['responseText']);
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
//              // console.log(id);  
          _save("action/del_product.php", {'uid':id});
        }
    });

    function getSelect(obj){

//            var select = '';
        $.ajax({
           url:'query/unit_list.php',
           type:'post',
           dataType:'text',
           success:function(data){
               $(obj).html(data);
           },
           error:function(data){
               document.write(data['responseText']);
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

    function _save(url, out){
        var url = url;
        var out = out;
        $.ajax({
            asinc:false,
            url:url,
            type:'post',
            dataType:'json',
            data:out,
            success:function(data){
                if(url==="action/add_product.php"){
                    $("#table_staff tbody").append("<tr id='r_"+data['uid']+"><td>"+data['id']+"</td><td>"+data['type']+"</td><td>"+data['surname']+"</td><td>"+data['phone']+"</td ><td>"+data['address']+"</td><td><a id='e_"+data['id']+"' class='ico-info' title='Смотреть'></a><a id='d_"+data['id']+"' class='ico-delete' title='Удалить'></a></td></tr>"); 
                    _show(false);
                }else if(url==="action/del_product.php"){
                    // console.log(data['ok']);
                    if(data['ok']>0){
                       $("#r_"+data['uid']).remove(); 
                    }
                }else if(url==="action/edit_product.php"){
                    document.location.reload();
                }
                _changeButton(false);
            },
            error:function(data){
                document.write(data['responseText']);
            } 
        });
    }
});