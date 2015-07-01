$(document).ready(function(){
    
    $("select#staff").change(function(){
       document.location = "/produce/account/"+$("select#staff option:selected").val(); 
    });
});


