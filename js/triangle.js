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
        
        $.each($("input.sside"),function(){
            $(this).attr('disabled',true).val('').css({'font-weight':'bolder','color':'black'});
        });
        
        $.each($("input.sdegree"),function(){
            $(this).attr('disabled',true).val('').css({'font-weight':'bolder','color':'black'});
        });
        
        var sho = $("select#ssho option:selected").val();
        
        if(sho === '1'){
                $("input#sa").attr('disabled',false).focus().select();
                $("input#ksb").attr('disabled',false);
                $("input#ksc").attr('disabled',false);
            }else if(sho === '2'){
                $("input#sa").attr('disabled',false).focus().select();
                $("input#ksa").attr('disabled',false);
                $("input#ksb").attr('disabled',false);
            }else if(sho === '3'){
                $("input#sa").attr('disabled',false).focus().select();
                $("input#sb").attr('disabled',false);
                $("input#sc").attr('disabled',false);
            }
    });
    
    $("input#smath").mousedown(function(){
        _sin();
    });
    
    $("input#sa").keypress(function(e){
        
        var sho = $("select#ssho option:selected").val();
       
       if(e.which === 13){
           
           if(sho === '1'){
              $("input#ksb").focus().select(); 
           }else if(sho === '3'){
              $("input#sb").focus().select(); 
           }
           
                      
       } 
    });
    
    $("input#sb").keypress(function(e){
        
        var sho = $("select#ssho option:selected").val();
       
       if(e.which === 13){
           
           if(sho === '3'){
              $("input#sc").focus().select(); 
           }
           
                      
       } 
    });
    
    $("input#sc").keypress(function(e){
        
       var sho = $("select#ssho option:selected").val();
       
       if(e.which === 13){
           
           if(sho === '1'){
              $("input#ksb").focus().select(); 
           }else{
              _sin(); 
           }
           
       } 
    });
    
    $("input#ksa").keypress(function(e){
        
        var sho = $("select#ssho option:selected").val();
        
       if(e.which === 13){
           if(sho === '2'){
              $("input#ksb").focus().select(); 
           }else{
//              _sin(); 
           }
       } 
    });
    
    $("input#ksb").keypress(function(e){
        
        var sho = $("select#ssho option:selected").val();
        
       if(e.which === 13){
           if(sho === '1'){
              $("input#ksc").focus().select(); 
           }else{
              _sin(); 
           }
       } 
    });
    
    $("input#ksc").keypress(function(e){
        
        var sho = $("select#ssho option:selected").val();
        
       if(e.which === 13){
           if (sho === '1'){
              _sin(); 
           }
       } 
    });
    
    $("input#sa").keypress(function(e){
        
        var sho = $("select#ssho option:selected").val();
        
       if(e.which === 13){
           if (sho === '2'){
              $("input#ksa").focus().select(); 
           }else if(sho === '3'){
              $("input#sb").focus().select();
           }
       } 
    });
    
    function _sin(){
        
        var tmp = $("input#sb").val();
        tmp = tmp.replace(',','.');
        var b = parseFloat(tmp);
        tmp = $("input#sc").val();
        tmp = tmp.replace(',','.');
        var c = parseFloat(tmp);
        tmp = $("input#sa").val();
        tmp = tmp.replace(',','.');
        var a = parseFloat(tmp);
        tmp = $("input#ksa").val();
        tmp = tmp.replace(',','.');
        var alpha = parseFloat(tmp);
        tmp = $("input#ksb").val();
        tmp = tmp.replace(',','.');
        var betta = parseFloat(tmp);
        tmp = $("input#ksc").val();
        tmp = tmp.replace(',','.');
        var gamma = parseFloat(tmp);
        var sho = $("select#ssho option:selected").val();
       
        if(sho === '1'){
            alpha = Math.ceil((180 - (betta + gamma))*100)/100;
            
            b = Math.ceil((a*(Math.sin(betta*Math.PI/180)/Math.sin(alpha*Math.PI/180)))*100)/100;
            
            c = Math.ceil((a*(Math.sin(gamma*Math.PI/180)/Math.sin(alpha*Math.PI/180)))*100)/100;
            
        }else if(sho === '2'){
            
            gamma = Math.ceil((180 - (betta + alpha))*100)/100;
            
            b = Math.ceil((a*(Math.sin(betta*Math.PI/180)/Math.sin(alpha*Math.PI/180)))*100)/100;
            
            c = Math.ceil((a*(Math.sin(gamma*Math.PI/180)/Math.sin(alpha*Math.PI/180)))*100)/100;
            
        }else if(sho === '3'){
            
            if((a+b)<= c || (b + c) <= a || (a+c) <= b){
                
                alert ("Помилка в довжинах сторін");
                return false;
            }
            
            alpha = Math.ceil((Math.acos((Math.pow(b,2)+Math.pow(c,2)-Math.pow(a,2))/(2*b*c))*180/Math.PI)*100)/100;
            
            betta = Math.ceil((Math.acos((Math.pow(a,2)+Math.pow(c,2)-Math.pow(b,2))/(2*a*c))*180/Math.PI)*100)/100;
            
            gamma = Math.ceil((Math.acos((Math.pow(a,2)+Math.pow(b,2)-Math.pow(c,2))/(2*b*a))*180/Math.PI)*100)/100;
            
        }
        
        $("input#sa").val(a);
        $("input#sb").val(b);
        $("input#sc").val(c);
        $("input#ksa").val(alpha);
        $("input#ksb").val(betta);
        $("input#ksc").val(gamma);
        
        _square(c,alpha,betta,gamma);
    }
    
    function _square(c,alpha,betta,gamma){
        
        var rad = 0;
        var sqrt = 0;
        
        rad = Math.ceil((c/(2*Math.sin(Math.PI*gamma/180)))*100)/100;
        sqrt = Math.ceil((2*Math.pow(rad,2)*Math.sin(Math.PI*alpha/180)*Math.sin(Math.PI*betta/180)*Math.sin(Math.PI*gamma/180))*100)/100;
        
        $("input#ST").val(sqrt);
        $("input#rc").val(rad);
        $("input").css({'font-weight':'bolder','color':'red'});
        $("input:button").css({'color':'black','font-weight':'normal'});
    }
    
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
                        
        }else if($("select#pside option:selected").val() === '2'){
            
            b = 0;
            
            b = Math.sqrt(Math.pow(c,2)-Math.pow(a,2));
            
            b = Math.ceil(b*1000)/1000;
            
        }else if($("select#pside option:selected").val() === '3'){
            
            c = 0;            
            c = Math.sqrt(Math.pow(a,2)+ Math.pow(b,2));
            c = Math.ceil(c*1000)/1000;
            
        }else{
            return false;
        }
        
        alpha = Math.ceil(((Math.asin(a/c)*180)/Math.PI)*1000)/1000;
        betta = Math.ceil((gamma - alpha)*1000)/1000;
        
        $("input#kpa").val(alpha);
        $("input#kpb").val(betta);
        $("input#pa").val(a);
        $("input#pb").val(b);
        $("input#pc").val(c);
        
        _square(c,alpha,betta,gamma);
    }
});


