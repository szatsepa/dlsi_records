$(document).ready(function(){
    var month_arr = new Array('січень','лютий','березень','квітень','травень','червень','липень','серпень','вересень','жовтень','листопад','грудень');
    $("#head_order").css('padding','16px');
    $("#num_order").focus();
//    $("#table_order").css({'margin-left':'12px'});
//    $("#tab_order").css({'width':'1012px'});
    $("#date_order").datepick({minDate: new Date(2014, 1, 0)});
    $("select#cat").find("option:eq(0)").attr('selected',true);

    var order = '';

//    $.ajax({
//       url:'query/num_order.php',
//       type:'post',
//       dataType:'json',
//       data:{},
//       success:function(data){
//
//           $("#num_order").val(data['order']+"/"+data['date']);
//
//       }
//
//    });

    $("#save").mousedown(function(){
        if(confirm("Дійсно?")){
            
            $("#tab_order tbody tr:last").remove();
            var order = $("#num_order").val();
            var date_order = $("#date_order").val();
            var customer = $("#customer").val();
            var shipped = $("#shipped").val();
            var out = {};
            var order_query = "INSERT INTO `orders`(`order`, `customer`, `shipped`, `created`,`date_order`) VALUES ('"+order+"','"+customer+"','"+shipped+"',Now(),'"+date_order+"')";


            $.each($("#tab_order tbody tr"),function(){

                out[$(this).find("td:eq(0)").text()] = {'cat':$(this).find("td:eq(1)").attr('sel'),'nom':$(this).find("td:eq(2)").attr('sel'),'amount':$(this).find("td:eq(4)").text(),'price':$(this).find("td:eq(5)").text()};

            });

            createOrder(order_query,out);

//            $("#print").attr('disabled',false);
            $(this).remove();
        }
        
    });

    function createOrder(query,out){
        
        var str = $.toJSON(out);
        
        alert(str);
        
        $.ajax({
           url:'/sale/invoice',
           type:'post',
           dataType:'text',
           data:{'table':str,'query':query},
           success:function(data){
               alert(data);
           }
        });
    }

    $("#print").mousedown(function(){
        document.location = "index.php?part=sale&chapter=prnt&order="+order;
    });


    var query = "SELECT `id`, `categories` FROM `categories` WHERE `activity`=1";

//    getSelect(query,$("#tab_order tbody tr:eq(0) td:eq(1)"),'cat');


    $("#cat").live('change',function(){

        var tro = $(this).parent().parent();

        var select = $("#cat option:selected").val();

        var category = $("#cat option:selected").text();

//        var query = "SELECT n.`id`, n.`nomenclature` AS 'nom' FROM `nomenclature` AS n WHERE n.`categories`="+select;
        
        getNom(select,$(tro).find("td:eq(2)"));
        
        $("#cat").clone().appendTo($("#ctg")).attr('id','cat');

        $(tro).find("td:eq(1)").empty().text(category).attr('sel',select);

    });

    $("#nom").live('change',function(){
        var select = $(this).find("option:selected").val();
        var nom = $(this).find("option:selected").text();
        var tro = $(this).parent().parent();
        $(this).parent().attr('sel',select);
        $.ajax({
           url:'/sale/unit/'+select,
           dataType:'json',
           success:function(data){
               
               $(tro).find("td:eq(3)").text(data['unit']);
               $(tro).find("td:eq(5)").text(data['price']);
               $(tro).find("td:eq(4)").append('<input type="text" id="count" value="" size="8"/>');
               $("#count").focus();
           }
        });

        $(this).parent().empty().text(nom);
    });

    $("#count").live('keypress',function(e){
        if(e.which === 13){
            var count = $(this).val();
            var summ = (parseFloat($(this).val())*parseFloat($(this).parent().parent().find("td:eq(5)").text()));
            $(this).parent().parent().find("td:eq(6)").text(summ);
            addRow($(this).parent().parent().find("td:eq(0)").text(),count,$(this).parent()); 
            $("#save").attr('disabled',false);
        }
    });

    function addRow(nr,txt,obj){
        $(obj).empty().text(txt);
        var num = parseFloat(nr);
        num++;           
        $("#tab_order tbody").append('<tr id="r'+num+'"><td>'+num+'</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>');
        
        $("#cat").clone().appendTo($("#tab_order tbody").find("#r"+num+" td:eq(1)"));
        
        $("div#ctg").empty();

    }

    function getNom(id,obj){
        var id= id;
        var obj = obj;
        $.ajax({
           url:'/sale/selector/'+id,
           dataType:'html',
           success:function(data){
                 $(obj).append(data);
           }
        });

        return ;
    }
});
