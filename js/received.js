$(document).ready(function(){
    
    $("#open").datepick({minDate: new Date(2014, 1, 0)});
    
    $("#close").datepick({minDate: new Date(2014, 1, 0)});
    
    $("input#view").mousedown(function(){
        
        if($("input#open").val() === '' || $("input#close").val() === ''){
            alert("Не заповнені поля дат початку або кінця періоду!");
            
            return false;
        }
        
       document.location = "/order/received/"+$("input#open").val()+"/"+$("input#close").val(); 
    });
    
    $("a.ico-view").mousedown(function(){
        var id = $(this).attr('id');
        id = id.substr(1);
        
        $.ajax({
            url:"/order/getlist/"+id,
            asinc:false,
            dataType:'text',
            success:function(data){
//                        alert(data);
                document.location = "/order/report/"+data; 

            }
        });
        
        
       
    });
    
    $("select#provider").change(function(){
        document.location = "/order/received/sel/"+$(this).find("option:selected").val(); 
    });
});


