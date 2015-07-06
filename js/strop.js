$(document).ready(function(){
    
    var huynja =  new Drows();
    
    $("input#D").focus();
    
    $("input#D").keypress(function(e){
        if(e.which === 13){
            huynja.setD($("input#D").val());
            $("input#L").focus();
        }
    });

    $("input#L").keypress(function(e){
        if(e.which === 13){
            huynja.setL($("input#L").val());
            $("input#H").focus();
        }
    });
    $("input#H").keypress(function(e){
        if(e.which === 13){
            huynja.setH($("input#H").val());
            $("input#m").focus();
        }
    });
    $("input#m").keypress(function(e){
        if(e.which === 13){
            huynja.setM($("input#m").val());
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
    context.font = "bold 12px sans-serif";
    
    this.calculate = function (dd,ll,hh,mm){
        
        var d = parseFloat(dd);
        var l = parseFloat(ll);
        var h = parseFloat(hh);
        var m = parseFloat(mm);
        
        var alpha = Math.ceil((Math.atan(2*h/l))*100)/100;
        this.gamma = Math.ceil((180*alpha/Math.PI)*100)/100;
        var ab = Math.ceil(Math.pow((Math.pow(h,2)+Math.pow((.5*l),2)),.5)*1000)/1000;
        var ac = Math.ceil(((m+.5*d)/Math.cos(alpha))*1000)/1000;
        this.long = Math.ceil((ab+ac)*100)/100;
        
        context.beginPath();
        context.moveTo(70, 270);
        context.lineTo(60, 250);
        context.moveTo(275, 185);
        context.lineTo(265, 165);
        context.moveTo(63, 255);
        context.lineTo(268, 169);
        
        context.strokeStyle = "#000";
        context.stroke();
        
        context.textAlign = "left";
        context.textBaseline = "bottom";
        context.fillText("Ls "+this.long, 148, 205);
        
        context.textAlign = "left";
        context.textBaseline = "bottom";
        context.fillText("Кут наклона даху -"+this.gamma, 5, 105);        
    };
    
    this.setD = function(d){
        
//        context.textAlign = "right";
//        context.textBaseline = "bottom";
//        context.fillText("Діаметер бревна - "+d, 150, 64);
        context.textAlign = "left";
        context.textBaseline = "bottom";
        context.fillText(d, 478, 308)

    };
    
    this.setL = function(l){
        context.textAlign = "right";
        context.textBaseline = "bottom";
        context.fillText(l, 315, 310);
    };
    
    this.setH = function(h){
        context.textAlign = "right";
        context.textBaseline = "bottom";
        context.fillText(h, 335, 245);
    };
    
    this.setM = function(m){
        context.textAlign = "right";
        context.textBaseline = "bottom";
        context.fillText(m, 105, 315);
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
    
    context.beginPath();
    
    context.strokeStyle = "#000";
    
    context.moveTo(400, 280);
    context.lineTo(456, 310);
    context.lineTo(506, 310);
    context.stroke();
    
    context.textAlign = "left";
    context.textBaseline = "bottom";
    context.fillText("D", 458, 308);
    

};

