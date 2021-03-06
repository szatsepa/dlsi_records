$(document).ready(function(){
    
    var prov = '';
    
    var flagNew = false;
    
    if($("#user_count").val()!==0){
        _show(true);
    }else{
        _show(false);
    }
    
    if($("input#uid").val() !== ''){
        $.each($("select#prov option"),function(){
            $(this).attr('selected',false);
            if($("input#uid").val() === $(this).val()){
               $(this).attr('selected',true); 
            }
        });
//        alert();
        $("h1#title").append(" "+$("select#prov option:selected").text());
    }else{
        $("h1#title").append(" (всі)");
    }

    $("#providers").hide();
    
    $("p#provider").text($("select#prov option:selected").text()).attr('class',$("select#prov option:selected").val());

    $("#dtype").change(function(){
        if(!flagNew){
            setProviders();
        }else{
            $("#providers").show();
        }
        
    });

    $("#dname").keypress(function(e){
        if(e.which === 13){
            $("#dcomment").focus();
        }
    });

    function setProviders(){

        $("#providers").empty().show();

        var tp = $("#dtype").find("option:selected").text();
        
        var str = '';

        $.each(providers, function(id){
            
            if(tp === this['type']){
               $("#providers").append("<option value='"+id+"'>"+this['name']+"</option>"); 
               $("#dname").focus();
            }else{
                $("#foot").hide();
               alert("Необходимо добавить поставщиков!");
               history.go(-1);
            }
        });
        
        $.each($("#providers option"), function(){
            if($(this).text()===prov){
                str += $(this).text()+'==='+prov+'\n';
                
                $(this).attr('selected',true);
                return;
            }
        });
        
    }
    
    $("select#prov").change(function(){
         document.location = '/order/departs/'+$(this).find("option:selected").val(); 
     });



    $("#providers").live('change',function(){

        $("#dname").focus();
    });

    $("#department").live('mousedown',function(){
        flagNew = true;
        _show(false);
    });

    $("#d_save").live('click',function(){

        _save("/order/add", "INSERT INTO `providers_department`(`providers`, `name`, `comment`, `recorded`) VALUES ('"+$("p#provider").attr('class')+"','"+$("#dname").val()+"','"+$("#dcomment").val()+"',Now())" );

    }).css({"cursor":"pointer"});

    $("#edit").live('click',function(){

        _save("/order/edit", "UPDATE `providers_department` SET `name`= '"+$("#dname").val()+"',`providers`='"+$("p#provider").attr('class')+"',`comment`= '"+$("#dcomment").val()+"' WHERE `id` = '"+$("#uid").val()+"'");
    });


    $("a.ico-info").live('click',function(){

        var id = this.id;
        id = id.substr(2);
        var obj = $(this).parent().parent();
        prov = $(obj).find("td:eq(2)").text();
        
        $.each($("#dtype option"),function(){
            
            if($(this).text() === $(obj).find("td:eq(1)").text()){
               $(this).attr('selected',true); 
            }else{
               $(this).attr('selected',false);  
            }
        });

        $("#dname").val($(obj).find("td:eq(3)").text()).focus();
        $("#dcomment").val($(obj).find("td:eq(4)").text());
        $("#uid").val(id);
        
         setProviders();
         
        _show(false);
        _changeButton(true);
    });

    $("#back").mousedown(function(){
        _show(true);
        _changeButton(false);
    });

    $("a.ico-delete").live('click',function(){
        var id = this.id;
        id = id.substr(2);
        if(confirm("Дійсно видалити поставщика зі списку?")){
          _save("/order/del", "UPDATE `providers_department` SET `activ`= 0 WHERE `id` = "+id);
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

        if(!flag){
            $("div.right_block").show();
            $("#div_providers").hide();
        }else{
            
            $("div.right_block").hide();
            $("#div_providers").show();
        }
    }

});

