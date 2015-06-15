$(document).ready(function(){
    
     
     var summ = 0;
     $.each($("table tbody tr.info"),function(){
         var pay = parseFloat($(this).find("td:eq(2)").text())*parseFloat($(this).find("td:eq(3)").text());
         pay = Math.ceil(1000*pay)/1000;
         $(this).find("td:eq(4)").text(pay);
         summ += pay;
     });
     $("table tbody tr.info").css({'text-align':'center','font-weight':'normal','background-color':'RGB(222, 222, 222)'});
     $("#r1").css({'text-align':'left','font-weight':'bold','background-color':'RGB(19, 255, 116)'});
     $("#table_details tbody").append("<tr class='foot'><td colspan='6'>Итого начислено: "+summ+" грн.</td></tr>");
     $("#table_details tbody tr.foot").css({'text-align':'right','font-weight':'bold','background-color':'RGB(249, 201, 16)'});
     $("table tbody tr.imprest").css({'text-align':'center','font-weight':'normal','background-color':'#ff6633'});
     $("table tbody tr").find("td:eq(1)").css({'font-weight':'bold'});
     
     $("a").mousedown(function(){
        document.location = '/payment'; 
     });
     
     $(".btn-save").mousedown(function(){
         $("#tab_details").printElement({
             overrideElementCSS:[
		'/css/print_element.css',
		{ href:'/css/print_element.css',media:'print'}]
         });
     });
});

