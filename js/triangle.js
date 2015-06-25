$(document).ready(function(){
    
    $("input#pmath").mousedown(function(){
        count();
    });
    
    $("input#pa").keypress(function(e){
       if(e.which === 13){
           
       } 
    });
    
    $("input#pb").keypress(function(e){
       if(e.which === 13){
           
       } 
    });
    
    $("input#pc").keypress(function(e){
       if(e.which === 13){
           
       } 
    });
    
    $("select#pside").change(function(){
        if($("select#pside option:selected").text() === 'A'){
                $("input#pb").focus();
            }else if($("select#pside option:selected").text() === 'B'){
                $("input#pa").focus();
            }else if($("select#pside option:selected").text() === 'C'){
                $("input#pa").focus();    
            }
    });
    
    $("select#ssho").change(function(){
        
            $("span#tsinS").show();
            $("input#sa").focus();
            
        if($("select#ssho option:selected").val() === '0'){
            
            $("span#tsinS").hide();
        }
    });
    
    function count(){
        
        var tmp = $("input#pb").val();
        tmp = tmp.replace(',','.');
        var b = parseFloat(tmp);
        tmp = $("input#pc").val();
        tmp = tmp.replace(',','.');
        var c = parseFloat(tmp);
        tmp = $("input#pa").val();
        tmp = tmp.replace(',','.');
        var a = parseFloat(tmp);
        
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
    }
});


