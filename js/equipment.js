$(document).ready(function(){
   
    if($("#user_count").val()!=0){
        _show(false);
    }else{
        _show(true);
    }
    
    $("#new_products").mousedown(function(){
        
        _show(true);     
    });
    
    $("#back").mousedown(function(){
        _show(false);
    });
    
    $("input#type").keypress(function(e){
        if(e.which === 13){
            $("input#name").focus();
        }
    });
    
    $("input#name").keypress(function(e){
        if(e.which === 13){
            $("input#sname").focus();
        }
    });
    
    $("input#sname").keypress(function(e){
        if(e.which === 13){
            $("input#price").focus();
        }
    });
    
    $("input#price").keypress(function(e){
        if(e.which === 13){
            $("input#count").focus();
        }
    });
    
    $("input#count").keypress(function(e){
        if(e.which === 13){
            $("textarea#comment").empty().focus();
        }
    });
    
    $("select#type").change(function(){
        document.location = "/produce/equipment/"+$(this).find("option:selected").val();
    });
    
    $("input#save").mousedown(function(){
        
        var url = "/produce/add";
        
        var query = "INSERT INTO `equipment`(`recorded`, `etype`, `name`, `short_name`, `cost`, `amount`, `comment`) VALUES (Now(),'"+$("input#type").val()+"','"+$("input#name").val()+"','"+$("input#sname").val()+"','"+$("input#price").val()+"','"+$("input#count").val()+"','"+$("textarea#comment").val()+"')";
        
        _save(url,query);
    });
    
    function _show(flag){
        if(flag){
            $("div.right_block").show(300, function(){$("input#type").focus()});
            $("#staff_tab").hide();
//            $("input#type").focus();
        }else{
            $("div.right_block").hide();
            $("#staff_tab").show();
        }
    }
});


