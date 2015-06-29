$(document).ready(function(){
    $("p").css({'font-size':'1.4em','font-weight':'bold'});
    $("p input").css({'font-size':'1.1em','font-weight':'bold'});
    $("input#current").focus().select();
    
    $("input#current").keypress(function(e){
       if(e.which === 13){
           $("input#cos").focus().select();
       } 
    }).focus(function(){
        $("input#P").remove();
        $(this).select();
    });
    
    $("input#cos").keypress(function(e){
       if(e.which === 13){
           var tmp = $("input#current").val();
           tmp = tmp.replace(',','.');
           var current = parseFloat(tmp);
           tmp = $("input#cos").val();
           tmp = tmp.replace(',','.');
           var cf = parseFloat(tmp);
           var p = Math.ceil(((Math.pow(3,0.5)*380*current*cf)/1000)*100)/100;
           $("p#pow").append("<input id='P' value='&nbsp;&nbsp;&nbsp;P = "+p+"&nbsp;kBт.' disabled/>");
           $("input#P").css({'font-size':'1.1em','font-weight':'bold','color':'green'});
       } 
    }).focus(function(){
        $("input#P").remove();
        $(this).select();
    });
    
    $("input#currentR").keypress(function(e){
       if(e.which === 13){
           $("input#sin").focus().select();
       } 
    }).focus(function(){
        $("input#Q").remove();
        $(this).select();
    });
    
    $("input#sin").keypress(function(e){
       if(e.which === 13){
           var tmp = $("input#currentR").val();
           tmp = tmp.replace(',','.');
           var current = parseFloat(tmp);
           tmp = $("input#sin").val();
           tmp = tmp.replace(',','.');
           var sf = parseFloat(tmp);
           var p = Math.ceil(((Math.pow(3,0.5)*380*current*sf)/1000)*100)/100;
           $("p#powR").append("<input id='Q' value='&nbsp;&nbsp;&nbsp;P = "+p+"&nbsp;квар.' disabled/>");
           $("input#Q").css({'font-size':'1.1em','font-weight':'bold','color':'green'});
       } 
    }).focus(function(){
        $("input#Q").remove();
        $(this).select();
    });
    
    $("input#currentS").keypress(function(e){
       if(e.which === 13){
           var tmp = $("input#currentS").val();
           tmp = tmp.replace(',','.');
           var current = parseFloat(tmp);
           tmp = $("input#sin").val();
           
           var p = Math.ceil(((Math.pow(3,0.5)*380*current)/1000)*100)/100;
           
           $("p#powS").append("<input id='S' value='&nbsp;&nbsp;&nbsp;P = "+p+"&nbsp;кВА.' disabled/>");
           $("input#S").css({'font-size':'1.1em','font-weight':'bold','color':'green'});
       } 
    }).focus(function(){
        $("input#S").remove();
        $(this).select();
    });
    
    $("input#powerI").keypress(function(e){
       if(e.which === 13){
           $("input#cosI").focus().select();
       } 
    }).focus(function(){
        $("input#I").remove();
        $(this).select();
    });
    
    $("input#cosI").keypress(function(e){
       if(e.which === 13){
           var tmp = $("input#powerI").val();
           tmp = tmp.replace(',','.');
           var power = parseFloat(tmp);
           tmp = $("input#cosI").val();
           tmp = tmp.replace(',','.');
           var cf = parseFloat(tmp);
           
           var i = Math.ceil(1000*power/(Math.pow(3,0.5)*380*cf)*100)/100;
           
           $("p#currentX").append("<input id='I' value='&nbsp;&nbsp;&nbsp;P = "+i+"&nbsp;A.' disabled/>");
           $("input#I").css({'font-size':'1.1em','font-weight':'bold','color':'green'});
       } 
    }).focus(function(){
        $("input#I").remove();
        $(this).select();
    });
});


