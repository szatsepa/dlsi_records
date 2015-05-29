$(document).ready(function(){

    _show(true);

    var func = '';
    var tariff = '';
    var count = '';
    var numrows = 0;
    
    $("#function_list option:eq(0)").attr('selected',true);
    $("#tariff_list option:eq(0)").attr('selected',true);
    
    $("#printTab").mousedown(function(){
        $('table#table_sheet').printElement();
    });
    
    $("#a_v_zad").mousedown(function(){
        history.go(-1);
    });

    if($("input").is("#paket")){
        $("a.ico-info").remove();
    }
    
    $("a.ico-user-03").live('click',function(){
        alert("NU SHO?");
    });
    
    $("a.ico-plus").live('click',function(){
        var count = $("#count").val();
        if(count === '' || count === undefined){
            alert("Не заполнено поле КОЛИЧЕСТВО!");
            return;
        }        
        var staff = $("#user_list option:selected").val();
        var name = $("#user_list option:selected").text();
        var fn = $("#function_list option:selected").val();
        var fun = $("#function_list option:selected").text();
        var tariff = $("#tariff_list option:selected").val();
        var tar = $("#tariff_list option:selected").attr('alt');
        var count = $("#count").val();
        var paket = $("#paket").val();
        var obj = $(this).parent().parent();
        var id = $(obj).attr('id');
//                alert(id);
        if($(obj).find("td:eq(1) select")){
            $("#user_list").remove();
            $(obj).find("td:eq(1)").text(name);            
            $("#table_sheet tbody").append("<tr class='c"+staff+numrows+"'><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
            $("#function_list").clone().appendTo($("#table_sheet tbody tr.c"+staff+numrows+" td:eq(2)"));
            $(obj).find("td:eq(2) #function_list").remove();
            $(obj).find("td:eq(2)").text(fun);
            $("#tariff_list").clone().appendTo($("#table_sheet tbody tr.c"+staff+numrows+" td:eq(3)"));
            $(obj).find("td:eq(3) #tariff_list").remove();
            $(obj).find("td:eq(3)").text(tar);
            $("#count").clone().appendTo($("#table_sheet tbody tr.c"+staff+numrows+" td:eq(4)"));
            $(obj).find("td:eq(4) #count").remove();
            $(obj).find("td:eq(4)").text(count);
            $("#table_sheet tbody tr.c"+staff+numrows+" td:eq(5)").append($("a.ico-user-03"));
            $("#table_sheet tbody tr.c"+staff+numrows+" td:eq(5)").append($("a.ico-plus"));
            $(obj).find("td:eq(5) a.ico-plus").remove();
            numrows++;
        }else{
        }
                
    });

    $("a.ico-info").live('click',function(){
        var trobj = $(this).parent().parent();           
        func = $(trobj).find("td:eq(2)").text();
        tariff = $(trobj).find("td:eq(3)").text();
        count = $(trobj).find("td:eq(4)").text();
        $(trobj).find("td:eq(2)").empty();
        $("#function_list").clone().appendTo($(trobj).find("td:eq(2)"));
        $(trobj).find("td:eq(3)").empty();
        $("#tariff_list").clone().appendTo($(trobj).find("td:eq(3)"));
        $(trobj).find("td:eq(4)").empty().html("<input type='text' id='edit-count' value='' size='6'/>");
        $(trobj).find("td:eq(5)").empty().html("<a class='ico-done' id='edit-ivo' title='Зберегти'></a><a class='ico-arrow-left' title='Вернуться'></a><a class='ico-delete' title='Удалить строку'></a>");

    });

    $("#edit-count").live('keypress',function(e){
        if(e.which === 13){
            var out = {'id':0, 'imprest':0,'staff':false,'function':0,'tariff':0,'count':0};
            var trobj = $(this).parent().parent();
            var rowid = parseFloat($(trobj).attr('id').substr(1));
            out['id'] = rowid;
            var staff = $(trobj).find("td:eq(1)").attr('id');
            out['staff'] = staff.substr(2);
            out['function'] = $(trobj).find("td:eq(2) #function_list option:selected").val();
            out['tariff'] = $(trobj).find("td:eq(3) #tariff_list option:selected").val();
            out['count'] = $(trobj).find("td:eq(4) input:text").val(); 
            var url = "action/edit_timesheet.php";

            var func = parseFloat(out['function']);
            if(out['function'] === 14){
              out['imprest'] = 1;
          }
            addRecord(url,out);
        }
    });

    $("a.ico-arrow-left").live('click',function(){
        var trobj = $(this).parent().parent();
        $(trobj).find("td:eq(2)").empty().text(func);
        $(trobj).find("td:eq(3)").empty().text(tariff);
        $(trobj).find("td:eq(4)").empty().text(count);
        $(trobj).find("td:eq(5)").empty().html("<a class='ico-info' title='Изменить'></a>");
    });

    $("a.ico-done").live('click', function(){
        var query = '';
        var id = this.id;
        var trobj = $(this).parent().parent(); 
        var rowid = 0;
        var url = '';
        var count = $("#count").val();
        if(count === '' || count === undefined){
            alert("Не заполнено поле КОЛИЧЕСТВО!");
            return;
        }
        if(id !== 'edit-ivo'){
            
            query = "INSERT INTO `timesheet`(`staff`, `function`, `tariff`, `produced`,`paket`) VALUES ('"+$("#user_list option:selected").val()+"','"+$("#function_list option:selected").val()+"','"+$("#tariff_list option:selected").val()+"','"+$("#count").val()+"','0')";
            url = "pay/add";
        }else{
            rowid = parseFloat($(trobj).attr('id').substr(1));
            var staff = $(trobj).find("td:eq(1)").attr('id');
            url = "action/edit_timesheet.php";

          }
          var func = $("#function_list option:selected").val();

          var func = $("#function_list option:selected").val();
             
            var lag = false;
             
            addRecord(url,query,(func === '14'));
            
            
              if(func === '14'){
                  var today = new Date();
                  var YY = today.getFullYear();
                  var mm = today.getMonth();
                  var dd = today.getDate();
                  
                  addRecord(url,"INSERT INTO `imprest` (`staff`, `cost`, `recorded`) VALUES ('"+$("#user_list option:selected").val()+"','"+$("#count").val()+"','"+YY+"-"+mm+"-"+dd+"')",true);              
            
            }
    });

    $("#tariff_list").change(function(){
        $("#count").select();
    });
    
    $("a.ico-delete").live('click',function(){
        var obj = $(this).parent().parent();
        var id = $(obj).attr('id');
        id = id.substr(1);
        if(confirm("Удалить строку?")){
//            $.ajax({
//                asinc:false,
//                url:'action/del_row_timesheet.php',
//                type:'post',
//                dataType:'json',
//                data:{'row':id},
//                success:function(data){
//                    document.location.reload();
//                },
//                error:function(data){
//                    document.write(data['responseText']);
//                }
//            });
        }else{
            return false;
        }

    });

    $("#count").keypress(function(e){
        
        var url = 'pay/add';
        var query = '';
        if(e.which === 13){
            
            var count = $("#count").val();
            
            if(count === '' || count === undefined){
                alert("Не заполнено поле КОЛИЧЕСТВО!");
                return false;
            }
            
            query = "INSERT INTO `timesheet`(`staff`, `function`, `tariff`, `produced`,`paket`) VALUES ('"+$("#user_list option:selected").val()+"','"+$("#function_list option:selected").val()+"','"+$("#tariff_list option:selected").val()+"','"+$("#count").val()+"','"+$("#paket").val()+"')";
            
            var func = $("#function_list option:selected").val();
             
//            var flag = false;
             
            if(func === '14'){
                
                  var today = new Date();
                  var YY = today.getFullYear();
                  var mm = today.getMonth();
                  var dd = today.getDate();
                  
                  addRecord(url,"INSERT INTO `imprest` (`staff`, `cost`, `recorded`) VALUES ('"+$("#user_list option:selected").val()+"','"+$("#count").val()+"','"+YY+"-"+mm+"-"+dd+"')",true);              
            
            }
            
            addRecord(url,query,false);
        }
    });
    
    $("#function_list").live("change",function(tar_obj){
        
        var id = $(this).val();
        
        $("#tariff_list option").remove();
        
        $.each(tariff_list, function(){
         $("#tariff_list").append("<option value='"+this['id']+"' selected name='"+this['action']+"' alt='"+this['tariff']+"'>"+this['short']+"</option>");   
        });
        
        $.each($("#tariff_list option"),function(){
            if(id !== $(this).attr('name')){
                $(this).remove();
            }
        });
        $("#tariff_list").find("option:eq(0)").attr('selected',true);
    });
    function _show(flag){
        if(flag){
            $("#tablesheet").show();
            $("#staff_tab").hide();
        }else{
            $("#tablesheet").hide();
            $("#staff_tab").show();
        }
    }
    function addRecord(url,out,flag){
        var flag = flag;
        $.ajax({
            asinc:false,
            url:url,
            type:'post',
            responce:'text',
            data:{'query':out},
            success:function(data){
                if(!flag){
                    document.location.reload();
                }
                
            }
        });
    }
});