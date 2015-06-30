$(document).ready(function(){
    
    if($("input#page").val() === ''){
        $("select#rej option:eq(0)").attr('selected',true);
    }
    
    $("table.info_tables thead tr th").css({'text-align':'center','font-weight':'bold','font-size':'1.1em','color':'black'});
    $("table.info_tables tbody tr td").css({'text-align':'center','font-weight':'bold'});
    $("table.info_tables thead tr:eq(0) th:eq(2)").css({"color": '#ff6633','font-size': "1.2em"});
    $("table.info_tables thead tr:eq(1) th:eq(1)").css({"color": '#ff6633','font-size': "1.2em"});
    
    $("select#rej").change(function(){
       document.location = "/siona/rej/"+$("select#rej option:selected").val(); 
    });
    
    $("a.arej").mousedown(function(){
        var tmp = $(this).text();
        var rej = tmp.split('-');
        if(rej.length > 1){
            if(confirm("Який режим - "+rej[0]+" або "+rej[1]+"\n 'OK - перший' 'Отменить - другий'")){
                document.location = "/siona/rej/"+rej[0];
            }else{
                document.location = "/siona/rej/"+rej[1];
            }
        }else{
            document.location = "/siona/rej/"+rej[0];
        } 
    });
    
    $("a#back").mousedown(function(){
       document.location = "/siona/modes";
    });
});

