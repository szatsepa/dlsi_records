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
        $("input#pa").focus();
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
            
            $("input#pa").val(a).css({'font-weight':'bolder','color':'red'});
            
        }else if($("select#pside option:selected").val() === '2'){
            
            b = 0;
            
            b = Math.sqrt(Math.pow(c,2)-Math.pow(a,2));
            
            $("input#pb").val(b).css({'font-weight':'bolder','color':'red'});
            
        }else if($("select#pside option:selected").val() === '3'){
            
            c = 0;            
            c = Math.sqrt(Math.pow(a,2)+ Math.pow(b,2));
            
            $("input#pc").val(c).css({'font-weight':'bolder','color':'red'});
        }else{
            return false;
        }
    }
});


