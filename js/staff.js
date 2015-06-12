$(document).ready(function(){

    if($("#user_count").val()!=0){
        _show(false);
    }else{
        _show(true);
    }
    
    $("table#table_staff tbody tr td").css('text-align','left');

    $("#new_staff").mousedown(function(){
        _show(true);
    });

    $("#d_save").live('click',function(){
        
        _save("staff/add", "INSERT INTO `staff` (`surname`, `phone`, `address`) VALUES ('"+$("#surname").val()+"','"+$("#phone").val()+"','"+$("#address").val()+"')");

    }).css({"cursor":"pointer"});

    $("#edit").live('click',function(){
        
        _save("staff/update", "UPDATE `staff` SET `surname`='"+$("#surname").val()+"', `phone`='"+$("#phone").val()+"', `address`='"+$("#address").val()+"' WHERE `id`="+$("#uid").val());
    });


    $("a.ico-info").live('click',function(){
        var id = this.id;
        id = id.substr(2);
        var obj = $(this).parent().parent();
        $("#surname").val($(obj).find("td:eq(1)").text());
        $("#phone").val($(obj).find("td:eq(2)").text());
        $("#address").val($(obj).find("td:eq(3)").text());
        $("#uid").val(id);
        _show(true);
        _changeButton(true);
    });

    $("#back").mousedown(function(){
        _show(false);
        _changeButton(false);
    });

    $("a.ico-delete").live('click',function(){
        var id = this.id;
        id = id.substr(2);
        if(confirm("Дійсно видалити працівника зі штату?")){
            
          _save("staff/update", "UPDATE staff SET activity = 0 WHERE id = "+id);
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
            $("#staff_tab").hide();
        }else{
            $("div.right_block").hide();
            $("#staff_tab").show();
        }
    }

    function _save(url, out){
        var url = url;
        var out = {'query':out};
        
        $.ajax({
            asinc:false,
            url:url,
            type:'post',
            responce:'text',
            data:out,
            success:function(data){
                
                document.location.reload();
            }
        });
    }
});


