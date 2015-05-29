$(document).ready(function(){
     if($("#_count").val()!=0){
        _show(false);
    }else{
        _show(true);
    }

    $("#new_function").mousedown(function(){
        _show(true);
    });

    $("#save").live('click',function(){
//{'function':}
        _save("func/add", "INSERT INTO `function` (`function`) VALUES ('"+$("#function").val()+"')");

    }).css({"cursor":"pointer"});

    $("#edit").live('click',function(){
//        {'function':,'uid':}
        _save("func/update", "UPDATE `function` SET `function`='"+$("#function").val()+"' WHERE `id`= "+$("#uid").val());

    });


    $("a.ico-info").live('click',function(){
        var id = this.id;
        id = id.substr(2);
        var obj = $(this).parent().parent();
        $("#function").val($(obj).find("td:eq(1)").text());
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
        if(confirm("Дійсно видалити посаду зі списку?")){
//              // console.log(id);  
          _save("func/update", "UPDATE function SET activity = 0 WHERE id = "+id);
        }
    });

    function _changeButton(action){
        if(action){
           $("#save").attr('id','edit').css({"cursor":"pointer"});
        }else{
            $("#edit").attr('id','save').css({"cursor":"pointer"});
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
//        alert(out);
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