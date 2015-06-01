$(document).ready(function(){
   
    $("#getdate").datepick({minDate: new Date(2014, 1, 0)});
    
    $("#workers").change(function(){$("#how_many").focus()});
    
    $("#workers").find("option:eq(0)").attr('selected',true);
    
    $("a.ico-done").live('click',function(){
        
        var id = $(this).attr('id');
        var obj = $(this).parent().parent();
        
        var query = '';
        var url = '';
        
        var mark = $(obj).find("td:eq(2)").is("#workers");
        
        if(!mark){
            
            if(id === 'edit-ivo'){
                
            }else{
                url = '/pay/add';
                query = "INSERT INTO `imprest`(`staff`, `cost`, `details`, `recorded`) VALUES ('"+$("#workers").find("option:selected").val()+"','"+$("input#how_many").val()+"','"+$("#comment option:selected").val()+"','"+$("input#getdate").val()+"')";
            }
            
        }else{
            var rid = $(obj).attr('id');
            url = '/pay/add';
            rid = rid.substr(2);
            
            query = "INSERT INTO `imprest`(`staff`, `cost`, `details`, `recorded`) VALUES ('"+rid+"','"+$(obj).find("td:eq(3)").text()+"','1','"+$("input#getdate").val()+"')";
        }

        action(url,query);
    }); 
    
    $("#getdate").live('change',function(e){
//        if(e.which === 13){}
        var id = $(this).attr('id');
        var obj = $(this).parent().parent();
        
        var query = '';
        var mark = $(obj).find("td:eq(2)").is("#workers");

        if(!mark)
        {
            
            var rid = $(obj).attr('id');
            
            rid = rid.substr(2);
            
            query = "INSERT INTO `imprest`(`staff`, `cost`, `details`, `recorded`) VALUES ('"+rid+"','"+$(obj).find("td:eq(3)").text()+"','1','"+$("input#getdate").val()+"')";
        }

        action('/pay/add',query);
        
    });
        
        $("#how_many").live('keypress',function(e){
            
           if(e.which === 13){
               var query = query = "INSERT INTO `imprest`(`staff`, `cost`, `details`, `recorded`) VALUES ('"+$("#workers").find("option:selected").val()+"','"+$("input#how_many").val()+"','"+$("#comment option:selected").val()+"','"+$("input#getdate").val()+"')";
               action('/pay/add',query);
           } 
        });
        
        
        
        function action(url,query){
            
//                alert(query);
                $.ajax({
                   asinc:false,
                   url:url,
                   type:'post',
                   response:'text',
                   data:{'query':query},
                   success:function(){
                           document.location="/pay";

                   }
                });
//            if(confirm("Зберегти - чи що?")){}else{}               
            
        }
    
});


