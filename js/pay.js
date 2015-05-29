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
//        $("a.ico-info").remove();
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
        $("div#content").prepend("<input type='hidden' id='edit' value=''/>");
        var trobj = $(this).parent().parent();           
        func = $(trobj).find("td:eq(2)").text();
        tariff = $(trobj).find("td:eq(3)").text();
        count = $(trobj).find("td:eq(4)").text();
        $(trobj).find("td:eq(2)").empty();
        $("#function_list").clone().appendTo($(trobj).find("td:eq(2)"));
        $(trobj).find("td:eq(3)").empty();
        $("#tariff_list").clone().appendTo($(trobj).find("td:eq(3)"));
        $(trobj).find("td:eq(4)").empty().html("<input type='text' id='edit_count' value='' size='6'/>");
        $(trobj).find("td:eq(4) input").focus();
        $(trobj).find("td:eq(6)").empty().html("<a class='ico-done' id='edit-ivo' title='Зберегти'></a><a class='ico-arrow-left' title='Вернуться'></a><a class='ico-delete' title='Удалить строку'></a>");

    });
    
    $("input:text").live('change',function(){
        $("input#edit").val($(this).val());
    });
    

    $("input:text").live('keypress',function(e){
        
        if(e.which === 13){
            
            
            var trobj = $(this).parent().parent();
            
            var rowid = $(this).parent().parent().attr('name');
            
            var count = $(trobj).find("td:eq(4) input:text").val();
            
            if(count === '' || count === undefined){
                alert("Не заполнено поле КОЛИЧЕСТВО!");
                return;
            }else{
                count = count.replace(',','.');
            }
            
            var url = "pay/update";
            var query = "UPDATE `timesheet` SET `function`= '"+$("#function_list option:selected").val()+"',`tariff`='"+$("#tariff_list option:selected").val()+"',`produced`='"+count+"',`recorded`=Now() WHERE `id` = "+rowid;
            
            var func = $("#function_list option:selected").val();
                    
            
            if(func === '14'){
              query = "UPDATE `imprest` SET `cost` = '"+count+"', `recorded` = Now() WHERE `id` = "+rowid
          }
            
            
         
             addRecord(url,query);
//        if(confirm(query)){ }else{
//             document.location.reload();
//         }
        }
    });

    $("a.ico-arrow-left").live('click',function(){
        var trobj = $(this).parent().parent();
        $(trobj).find("td:eq(2)").empty().text(func);
        $(trobj).find("td:eq(3)").empty().text(tariff);
        $(trobj).find("td:eq(4)").empty().text(count);
        $(trobj).find("td:eq(6)").empty().html("<a class='ico-info' title='Изменить'></a>");
    });

    $("a.ico-done").live('click', function(){
        
        var query = '';
        var id = this.id;
        var trobj = $(this).parent().parent();
        var url = '';
        var count = $("input#edit").val();
        
        if(count === '' || count === undefined){
            alert("Не заполнено поле КОЛИЧЕСТВО!");
            return;
        }else{
            count = count.replace(',','.');
        }
        if(id !== 'edit-ivo'){
            
            query = "INSERT INTO `timesheet`(`staff`, `function`, `tariff`, `produced`,`paket`) VALUES ('"+$("#user_list option:selected").val()+"','"+$("#function_list option:selected").val()+"','"+$("#tariff_list option:selected").val()+"','"+count+"','"+$("#paket").val()+"')";
            url = "pay/add";
            
        }else{
            
            var rowid = $(trobj).attr('name');
//            alert(rowid);
//            rowid = rowid.substr(2);
            query="UPDATE `timesheet` SET `function`= '"+$("#function_list option:selected").val()+"',`tariff`='"+$("#tariff_list option:selected").val()+"',`produced`='"+count+"',`recorded`=Now() WHERE `id` = "+rowid;
            url = "pay/update";

          }
          var func = $("#function_list option:selected").val();
         
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
        var id = $(obj).attr('name');
        var func = $("#function_list option:selected").val();
        var query = '';
            query = "DELETE FROM `imprest` WHERE `id` = "+id;
        if(func === '14'){
            
        } else{
            query = "DELETE FROM `timesheet` WHERE `id` = "+id;
        }
             
        
        if(confirm("Удалить строку?"+query)){
            $.ajax({
                asinc:false,
                url:'pay/del',
                type:'post',
                dataType:'text',
                data:{'query':query},
                success:function(data){
                    alert(data);
                    document.location.reload();
                }
            });
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
                alert(data);
                if(!flag){
                    document.location.reload();
                }
                
            }
        });
    }
});