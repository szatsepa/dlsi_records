$(document).ready(function(){

    $("tr.sum td").css('text-align','center');


    $("#printTab").mousedown(function(){
        
        $("table tbody tr").css({'font-weight':'normal','font': '0.6em/1.5 "arial",sans-serif'});
        $("table tbody tr.cost").css({'background-color':'RGB(255, 255, 255)'});
        $('div#tablesheet').printElement({
            printMode:'popup',
             overrideElementCSS:[
		'print_element.css',
		{ href:'/css/print_element.css',media:'print'}]
         });
    });

    $("#a_v_zad").mousedown(function(){
        history.go(-1);
    });
    
    $("input#recoil").mousedown(function(){
        var query = "UPDATE `timesheet` SET `marked`=0 WHERE `paket`="+$("input#part").val();
//        
         if(confirm("Відкатити розрахунок?")){
                $.ajax({
                    asinc:false,
                    url:'/pay/update',
                    type:'post',
                    dataType:'text',
                    data:{'query':query},
                    success:function(data){
//                        alert(data);
                        document.location = "/pay";

                    }
                });
           }
    });

    $("table tbody tr.sum").css({'text-align':'left','font-weight':'bold','background-color':'RGB(249, 201, 16)'});
    $("table tbody tr.surname").css({'text-align':'left','font-weight':'bold','background-color':'RGB(19, 255, 116)'});
    $("table tbody tr.cost").css({'text-align':'center','font-weight':'normal','background-color':'RGB(222, 222, 222)'});
    $("table tbody tr.imprest").css({'text-align':'center','font-weight':'normal','background-color':'#ff6633'});
    $("table tbody tr").find("td:eq(1)").css({'font-weight':'bold'});
    $("table tbody tr").find("td:eq(0)").css({'text-align':'left','font-weight':'bold'});
    $("#tab_details").hide();
});