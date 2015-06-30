$(document).ready(function(){
    
    if($("input#page").val() === ''){
        $("select#rej option:eq(0)").attr('selected',true);
    }
    
    $("table.info_tables thead tr th").css({'text-align':'center','font-weight':'bold','font-size':'1.1em','color':'black'});
    $("table.info_tables tbody tr td").css({'text-align':'center','font-weight':'bold'});
    
    $("select#rej").change(function(){
       document.location = "/siona/rej/"+$("select#rej option:selected").val(); 
    });
});

