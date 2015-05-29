$(document).ready(function(){

    $("tr.sum td").css('text-align','center');


    $("#printTab").mousedown(function(){

        $('div#tablesheet').printElement();
    });


    $("table tbody tr.sum").css({'text-align':'left','font-weight':'bold','background-color':'RGB(249, 201, 16)'});
    $("table tbody tr.surname").css({'text-align':'left','font-weight':'bold','background-color':'RGB(19, 255, 116)'});
    $("table tbody tr.cost").css({'text-align':'center','font-weight':'normal','background-color':'RGB(222, 222, 222)'});
    $("table tbody tr.imprest").css({'text-align':'center','font-weight':'normal','background-color':'#ff6633'});
    $("table tbody tr").find("td:eq(1)").css({'font-weight':'bold'});
    $("table tbody tr").find("td:eq(0)").css({'text-align':'left','font-weight':'bold'});
    $("#tab_details").hide();
});