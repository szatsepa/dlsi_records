$(document).ready(function(){
    
    $("input#pa").focus();
    
    $("input#pmath").mousedown(function(){
        _pifagor();
    });
    
    $("input#pa").keypress(function(e){
       if(e.which === 13){
           if($("input#pb").attr('disabled')){
               $("input#pc").focus().select();
           }else{
               $("input#pb").focus().select();
           }
           
           $(this).attr('disabled',true);
       } 
    });
    
    $("input#pb").keypress(function(e){
       if(e.which === 13){
           $("input#pc").focus().select();
           $(this).attr('disabled',true);
           if($("input#pc").attr('disabled')){
               _pifagor();
           }
       } 
    });
    
    $("input#pc").keypress(function(e){
       if(e.which === 13){
           _pifagor();
       } 
    });
    
    $("select#pside").change(function(){
        
        $.each($("input.side"),function(){
            $(this).attr('disabled',true).val('').css({'font-weight':'bolder','color':'black'});
        });
        var n = 0;
        $.each($("input.degree"),function(){
            $(this).attr('disabled',true).val('').css({'font-weight':'bolder','color':'black'});
        });
        
        $("input#kpc").val('90');
        
        if($("select#pside option:selected").text() === 'A'){
                $("input#pc").attr('disabled',false);
                $("input#pb").attr('disabled',false).focus().select();
            }else if($("select#pside option:selected").text() === 'B'){
                $("input#pc").attr('disabled',false);
                $("input#pa").attr('disabled',false).focus().select();
            }else if($("select#pside option:selected").text() === 'C'){
                $("input#pb").attr('disabled',false);
                $("input#pa").attr('disabled',false).focus().select();    
            }
    });
    
    $("select#ssho").change(function(){
        
            $("span#tsinS").show();
            $("input#sa").focus();
            
        if($("select#ssho option:selected").val() === '0'){
            
            $("span#tsinS").hide();
        }
    });
    
    function _pifagor(){
        
        var tmp = $("input#pb").val();
        tmp = tmp.replace(',','.');
        var b = parseFloat(tmp);
        tmp = $("input#pc").val();
        tmp = tmp.replace(',','.');
        var c = parseFloat(tmp);
        tmp = $("input#pa").val();
        tmp = tmp.replace(',','.');
        var a = parseFloat(tmp);
        var alpha = 0;
        var betta = 0;
        var gamma = 90;
        
        if($("select#pside option:selected").val() === '1'){
            
            a= 0;
            
            a = Math.sqrt(Math.pow(c,2)-Math.pow(b,2));
            
            a = Math.ceil(a*1000)/1000;
            
            $("input#pa").val(a).css({'font-weight':'bolder','color':'red'});
                        
        }else if($("select#pside option:selected").val() === '2'){
            
            b = 0;
            
            b = Math.sqrt(Math.pow(c,2)-Math.pow(a,2));
            
            b = Math.ceil(b*1000)/1000;
            
            $("input#pb").val(b).css({'font-weight':'bolder','color':'red'});
            
        }else if($("select#pside option:selected").val() === '3'){
            
            c = 0;            
            c = Math.sqrt(Math.pow(a,2)+ Math.pow(b,2));
            c = Math.ceil(c*1000)/1000;
            
            $("input#pc").val(c).css({'font-weight':'bolder','color':'red'});
        }else{
            return false;
        }
        
        alpha = Math.ceil(((Math.asin(a/c)*180)/Math.PI)*1000)/1000;
        betta = Math.ceil((gamma - alpha)*1000)/1000;
        $("input#kpa").val(alpha);
        $("input#kpb").val(betta);
        $("input.degree").css({'font-weight':'bolder','color':'red'});
    }
});


