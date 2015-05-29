$(document).ready(function(){

    if($("#user_count").val()!=0){
        _show(false);
    }else{
        _show(true);
    }

    $("#new").mousedown(function(){
        _show(true);
    });

    $("#d_save").live('click',function(){
        // {'action':,'short':, 'tariff':,'uid':,'cost':}
        _save("tariff/add","INSERT INTO `tariff` (`action`,`short`, `tariff`, `cost`) VALUES ('"+$("#action option:selected").val()+"','"+$("#short").val()+"','"+$("#tariff").val()+"','"+$("#cost").val()+"')");

    }).css({"cursor":"pointer"});

    $("#edit").live('click',function(){
        _save("tariff/edit", "UPDATE `tariff` SET `action`='"+$("#action").val()+"',`short` = '"+$("#short").val()+"',`tariff` = '"+$("#tariff").val()+"',`cost` = '"+$("#cost").val()+"' WHERE `id`="+$("#uid").val());
    });


    $("a.ico-info").live('click',function(){
            var id = this.id;
            id = id.substr(2);
            var obj = $(this).parent().parent();
            var tariff = $(obj).attr('id');
            tariff = tariff.substr(2);
            var cost = $(obj).find("td:eq(4)").text();
            $(obj).find("td:eq(4)").empty().html("<input type='text' id='ch_tariff' value='"+cost+"' size='4'/>");
            $(obj).find("td:eq(4) input").focus().select();
            $($(this).parent()).find("a.ico-delete").remove();
            $(this).css({'background':"url('../design/ico-done.gif') 0 0 no-repeat"});
            $(this).attr("title","Сохранить?");
            $(this).removeClass('ico-info').addClass('ico-done');
       });

       $("#ch_tariff").live('keypress',function(e){
           if(e.which === 13){
               changeCost($(this).parent().parent(),$(this).parent().parent().find("td:eq(5) a"));
           }
       });

       $("a.ico-done").live('click',function(){

            changeCost($(this).parent().parent(),this);
       });


    $("#back").mousedown(function(){
        _show(false);
        _changeButton(false);
    });

    $("a.ico-delete").live('click',function(){
        var id = this.id;
        id = id.substr(2);
        if(confirm("Дійсно видалити запис з таблиці?")){  
          _save("tariff/edit", "UPDATE `tariff` SET `activity` = 0 WHERE `id` = "+id);
        }
    });

    function changeCost(obj){
            var tariff = $(obj).attr('id');
            tariff = tariff.substr(2); 
            var out = "UPDATE `tariff` SET `cost` = '"+$("#ch_tariff").val()+"' WHERE `id` = "+tariff;
            alert(out);
               $.ajax({
                   url:'tariff/edit',
                   type:'post',
                   dataType:'text',
                   data:{'query':out},
                   success:function(data){
                       document.location.reload();
                  }
            });
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
alert(out);

        $.ajax({
            asinc:false,
            url:url,
            type:'post',
            dataType:'text',
            data:{'query':out},
            success:function(){
                
                document.location.reload();

                _changeButton(false);
            } 
        });
    }
});


