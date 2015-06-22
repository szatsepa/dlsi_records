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
    
    $("a.ico-plus").mousedown(function(){
        
        var obj = $(this).parent().parent();
        
        var count = $(obj).find("td:eq(4)").text();
        
        $(obj).find("td:eq(4)").empty().append("<input id='plus' class='"+count+"' value='"+count+"' size='6'/>");
        
        $(obj).find("td:eq(7)").empty().append("<a class='ico-done' title='Зберегти'></a>");
        
        $(obj).find("td:eq(4) input").focus().select();

    });
    
    $("a.ico-minus").mousedown(function(){
        
        var obj = $(this).parent().parent();
        
        var count = $(obj).find("td:eq(4)").text();
                
        $(obj).find("td:eq(4)").empty().append("<input id='minus' class='"+count+"' value='"+count+"' size='6'/>");
        
        $(obj).find("td:eq(7)").empty().append("<a class='ico-done' title='Зберегти'></a>");
        
        $(obj).find("td:eq(4) input").focus();       
        
    });
    
    $("table.info_tables tbody tr td input").live('keypress',function(e){
        if(e.which === 13){
            
            var obj = $(this).parent().parent();
        
            var count = parseFloat($(obj).find("td:eq(4) input").val());

            var act = $(obj).find("td:eq(4) input").attr('id');        

            var bulo = parseFloat($(obj).find("td:eq(4) input").attr('class'));

            if(act === 'plus'){
                count = bulo + count;
            }else{
                count = bulo - count;
            }

            var query = "UPDATE `equipment` SET `amount`="+count+" WHERE `id`="+$(obj).find("td:eq(0)").text(); 

            alert(query);

            _save('/produce/edit',query); 
        }
    });
    
    $("a.ico-done").live('click',function(){
        
        var obj = $(this).parent().parent();
        
        var count = parseFloat($(obj).find("td:eq(4) input").val());
        
        var act = $(obj).find("td:eq(4) input").attr('id');        
        
        var bulo = parseFloat($(obj).find("td:eq(4) input").attr('class'));
        
        if(act === 'plus'){
            count = bulo + count;
        }else{
            count = bulo - count;
        }
        
        var query = "UPDATE `equipment` SET `amount`="+count+" WHERE `id`="+$(obj).find("td:eq(0)").text(); 
        
        _save('/produce/edit',query);
    });
    
    $("textarea#comment").keypress(function(e){
        if(e.which === 13){
            
            var url = "/produce/add";
        
            var query = "INSERT INTO `equipment`(`recorded`, `etype`, `name`, `short_name`, `cost`, `amount`, `comment`) VALUES (Now(),'"+$("input#type").val()+"','"+$("input#name").val()+"','"+$("input#sname").val()+"','"+$("input#price").val()+"','"+$("input#count").val()+"','"+$("textarea#comment").val()+"')";

            _save(url,query);
        }
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


