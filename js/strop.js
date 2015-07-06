$(document).ready(function(){
    
    var huynja =  new Drows();
    
    $("input#D").focus();
    
    $("input#D").keypress(function(e){
        if(e.which === 13){
            $("input#L").focus();
        }
    });

    $("input#L").keypress(function(e){
        if(e.which === 13){
            $("input#H").focus();
        }
    });
    $("input#H").keypress(function(e){
        if(e.which === 13){
            $("input#m").focus();
        }
    });
    $("input#m").keypress(function(e){
        if(e.which === 13){
            
            huynja.calculate($("#D").val(),$("#L").val(),$("#H").val(),$("#m").val());
        }
    });
    $("input.btn-save").mousedown(function(){
//        alert(huynja.calculate($("#D").val(),$("#L").val(),$("#H").val(),$("#m").val()));
        huynja.calculate($("#D").val(),$("#L").val(),$("#H").val(),$("#m").val());
    });
    
    
    
});



 Drows = function (){
    
    var obj = {};
    obj = document.getElementById("a");
    var context = obj.getContext("2d");
    this.gamma = 0;
    this.long = 0;
    this.calculate = function (dd,ll,hh,mm){
        var d = parseFloat(dd);
        var l = parseFloat(ll);
        var h = parseFloat(hh);
        var m = parseFloat(mm);
        var alpha = Math.ceil((Math.atan(2*h/l))*100)/100;
        this.gamma = Math.ceil((180*alpha/Math.PI)*100)/100;
        var ab = Math.ceil(Math.pow((Math.pow(h,2)+Math.pow((.5*l),2)),.5)*1000)/1000;
        var ac = Math.ceil(((m+.5*d)/Math.cos(alpha))*1000)/1000;
        this.long = ab+ac;
        alert(this.long+" - "+this.gamma);
    };
    
    var hous = new Image();
    hous.src = "../images/hous.png";
    hous.onload = function() {
        
        context.drawImage(hous, 0,0,560,330);
        
    };
    
    context.beginPath();
    
    for (var x = 0.5; x < 680; x += 10) {
        context.moveTo(x, 0);
        context.lineTo(x, 400);
        }
    for (var y = 0.5; y < 400; y += 10) {
        context.moveTo(0, y);
        context.lineTo(680, y);
        }
    context.strokeStyle = "#eee";
    context.stroke();

};

