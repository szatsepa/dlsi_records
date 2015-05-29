$(document).ready(function(){

    $("tr.sum td").css('text-align','center');


    $("#printTab").mousedown(function(){
        
        $("table tbody tr").css({'font-weight':'normal','font': '0.6em/1.5 "arial",sans-serif'});
        $("table tbody tr.cost").css({'background-color':'RGB(255, 255, 255)'});
//        $('div#tablesheet').printElement();
    });

    $("#a_v_zad").mousedown(function(){
        history.go(-1);
    });

    $("table tbody tr.sum").css({'text-align':'left','font-weight':'bold','background-color':'RGB(249, 201, 16)'});
    $("table tbody tr.surname").css({'text-align':'left','font-weight':'bold','background-color':'RGB(19, 255, 116)'});
    $("table tbody tr.cost").css({'text-align':'center','font-weight':'normal','background-color':'RGB(222, 222, 222)'});
    $("table tbody tr.imprest").css({'text-align':'center','font-weight':'normal','background-color':'#ff6633'});
    $("table tbody tr").find("td:eq(1)").css({'font-weight':'bold'});
    $("table tbody tr").find("td:eq(0)").css({'text-align':'left','font-weight':'bold'});
    $("#tab_details").hide();
});