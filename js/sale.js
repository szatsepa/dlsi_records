$(document).ready(function(){
    
    $("#head_order").css('padding','16px');
    $("#num_order").focus();
    $("#date_order").datepick({minDate: new Date(2014, 1, 0)});
    $("select#cat").find("option:eq(0)").attr('selected',true);
    
    $("#tab_order").css('width','90%');
    $("#tab_order tbody").find("#sum td").css({'text-align':'center','font-weight':'bolder','text-size':'1.0em'});
    
    
    $("#print").mousedown(function(){
        
        $("div#tfoot").append("<div id='stamp'><img src='/design/stamp.png'/></div>");
        
        $('div#sale_order').printElement();
    });

    var order = '';

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
            
            $(this).remove();
        }
        
    });

    function createOrder(query,out){
        
        var str = $.toJSON(out);
        
        $.ajax({
           url:'/sale/invoice',
           type:'post',
           dataType:'text',
           data:{'table':str,'query':query},
           success:function(data){
               
               document.location.href = "/sale/order/"+data;
           }
        });
        
        return;
    }

//    $("#print").mousedown(function(){
//        document.location = "index.php?part=sale&chapter=prnt&order="+order;
//    });

    $("#cat").live('change',function(){

        var tro = $(this).parent().parent();

        var select = $("#cat option:selected").val();

        var category = $("#cat option:selected").text();
        
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
