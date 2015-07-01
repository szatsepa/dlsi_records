$(document).ready(function(){
    
    $("div.right_block").hide();
    
    $("input#new_").mousedown(function(){
        $("div.right_block").show();
        $("div#staff_tab").hide();
    });
    
    $("input#back").mousedown(function(){
        $("div.right_block").hide();
        $("div#staff_tab").show();
    });
    
    $("select#staff").change(function(){
       document.location = "/produce/account/"+$("select#staff option:selected").val(); 
    });
});


