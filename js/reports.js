$(document).ready(function(){

    var brns = 0;
    var volume = 0;

    $("#printTab").mousedown(function(){
        $("#content").css({'font-size':'0.8em'});
        $('div#report').printElement();
    });


    $("#date").css({'font-size':'120%','font-weight':'bold'});

    $("#table_woods tbody tr td").css({'text-align':'center'});

    $("#table_woods tfoot tr td").css({'text-align':'center','font-size':'120%','font-weight':'bold'});
    
    var count = 0;
    
    var volume = 0;
    
    var summ = 0;
    
    $.each($("table.info_tables tbody tr"),function(){
        count += parseFloat($(this).find("td:eq(3)").text());
        volume += parseFloat($(this).find("td:eq(4)").text());
        summ += parseFloat($(this).find("td:eq(6)").text());
    });
    
    volume = Math.ceil(1000*volume)/1000;
    var car = $("span#st").text();
    car = car.replace('грн.','');
    var count_car = parseFloat(car);

    $("table.info_tables tfoot tr td:eq(3)").prepend(count); 
    $("table.info_tables tfoot tr td:eq(4)").prepend(volume);
    $("table.info_tables tfoot tr td:eq(6)").prepend(summ);
// alert(summ);   
    if(!isNaN(count_car)){
        summ += count_car;
        
    }
    
    $("p#res").append("&nbsp;"+summ+" грн.");

    $("#a_v_zad").mousedown(function(){
        history.go(-1);
    });
});

