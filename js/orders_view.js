$(document).ready(function(){
    
    $("#open").datepick({minDate: new Date(2014, 1, 0)});
    
    $("#close").datepick({minDate: new Date(2014, 1, 0)});
    
    $("input#view").mousedown(function(){
        
        if($("input#open").val() === '' || $("input#close").val() === ''){
            alert("Не заповнені поля дат початку або кінця періоду!");
            
            return false;
        }
        
       document.location = "/sale/view/"+$("input#open").val()+"/"+$("input#close").val(); 
    });
    
    $("a.ico-view").mousedown(function(){
        var id = $(this).attr('id');
        
        id = id.substr(1);
        
       document.location = "/sale/order/"+id; 
    });
    
    $("select#customer").change(function(){
        document.location = "/sale/customer/"+$(this).find("option:selected").val(); 
    });
});


