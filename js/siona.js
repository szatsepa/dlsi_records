$(document).ready(function(){
    
    if($("input#page").val() === ''){
        $("select#rej option:eq(0)").attr('selected',true);
    }
    
    $("table.info_tables thead tr th").css({'text-align':'center','font-weight':'bold','font-size':'1.1em'});
    $("table.info_tables tbody tr td").css({'text-align':'center','font-weight':'bold'});
    
    $("select#rej").change(function(){
       document.location = "/siona/rej/"+$("select#rej option:selected").val(); 
    });
    
    $("a.arej").mousedown(function(){
        var tmp = $(this).text();
        var rej = tmp.split('-');
        
        if(rej.length > 1){
            var out = prompt("Який режим - "+rej[0]+" або "+rej[1]+"\n",rej[0]);
            
            document.location = "/siona/rej/"+out;            
        }else{
            document.location = "/siona/rej/"+rej[0];
        }
         
    });
    
    $("a#back").mousedown(function(){
       document.location = "/siona/modes";
    });
});

