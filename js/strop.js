$(document).ready(function(){
    
    var huynja =  new Drows();
    
    huynja.init();
    
    $("canvas#a").css('outline','1px solid #ccc');
    
    $("select#ws").change(function(){
        huynja.setWidth($("select#ws option:selected").val());
//        $("input#Hh").focus();
    });
    
    $("select#hs").change(function(){
        huynja.setHeight($("select#hs option:selected").val());
        $("input#Hh").focus();
    });        
    
    $("select#type").change(function(){
        huynja.setP($("select#type option:selected").val());
//        $("input#Hh").focus();
    });
    
    $("input#Hh").keypress(function(e){
        if(e.which === 13){
            huynja.setHh($("input#Hh").val());
            $("input#D").focus();
        }
    });
    $("input#D").keypress(function(e){
        if(e.which === 13){
            obj['D'] = parseFloat($("input#D").val());
            huynja.setD($("input#D").val());
            $("input#L").focus();
        }
    });

    $("input#L").keypress(function(e){
        if(e.which === 13){
            obj['L'] = parseFloat($("input#L").val());
            huynja.setL($("input#L").val());
            $("input#L1").focus();
        }
    });
    
    $("input#L1").keypress(function(e){
        if(e.which === 13){
            obj['L1'] = parseFloat($("input#L1").val());
//            huynja.setL1($("input#L1").val());
            $("input#H").focus();
        }
    });
    
    $("input#H").keypress(function(e){
        if(e.which === 13){
            obj['H'] = parseFloat($("input#H").val());
            huynja.setH($("input#H").val());
            $("input#m").focus();
        }
    });
    $("input#m").keypress(function(e){
        if(e.which === 13){
            obj['m'] = parseFloat($("input#m").val());            
            huynja.setM($("input#m").val());
            $("input#step").focus();
//            huynja.calculate(obj);
        }
    });
    
    $("input#step").keypress(function(e){
        if(e.which === 13){
            
            obj['step'] = parseFloat($("input#step").val());
            huynja.calculate(obj);
        }
    });
    
    $("input.btn-save").mousedown(function(){
        obj['D'] = parseFloat($("input#D").val());
        obj['L'] = parseFloat($("input#L").val());
        obj['L1'] = parseFloat($("input#L1").val());
        obj['H'] = parseFloat($("input#H").val());
        obj['m'] = parseFloat($("input#m").val());
        obj['step'] = parseFloat($("input#step").val());
        huynja.calculate(obj);
    });
    
    
    
});

var obj = new Object();

 Drows = function (){
    
    var obj = new Object();
    obj = document.getElementById("a");
    var context = obj.getContext("2d");
    this.gamma = 0;
    this.gamma1 = 0;
    this.long = 0;
    this.long1 = 0;
    this.snow = 150;
    this.wind = 45;
    this.AB = 0;
    this.BC = 0;
    this.Hwood = 0;
    this.pokr = 0;
    this.widthS = 0;
    this.heightS = 0;
    this.step = 0;
    context.font = "bold 12px sans-serif";
    
    this.init = function(){
        
            var wood = new Image();
            wood.src = "../images/wood.png";
            wood.onload = function() {
                
                var y = 600;
                var x = 90;
                
                for(var i = 0; i < 3; i++){

                    y -=(30); 
                    context.drawImage(wood, x,y,30,30);
                    context.drawImage(wood, (x+380),y,30,30);
                }
                
                

                

            };
        context.beginPath();
        context.zindex = 1;

        for (var x = 0.5; x < 560; x += 10) {
            context.moveTo(x, 0);
            context.lineTo(x, 600);
            }
        for (var y = 0.5; y < 600; y += 10) {
            context.moveTo(0, y);
            context.lineTo(560, y);
            }

        context.strokeStyle = "#eee";
        context.stroke();

        context.beginPath();
        context.zindex = 2;
        context.moveTo(280, 0);
        context.lineTo(280, 600);

        context.strokeStyle = "#aaa";
        context.stroke();
    };
    
    this.calculate = function (obj){
        
        var d = obj['D'];
        var l = obj['L'];
        var l1 = obj['L1'];
        var h = obj['H'];
        var m = obj['m'];
        this.step = (obj['step'])/100;
        
        var alpha = Math.ceil((Math.atan(h/l))*100)/100;
        var alpha1 = Math.ceil((Math.atan(h/l))*100)/100;
//    degree    
        this.gamma = Math.ceil((180*alpha/Math.PI)*100)/100;
        this.gamma1 = Math.ceil((180*alpha1/Math.PI)*100)/100;
//       stropilo do opor 
        this.AB = Math.pow((Math.pow(h,2)+Math.pow(l,2)),.5);
        this.BC = Math.pow((Math.pow(h,2)+Math.pow(l1,2)),.5);
//        stropilo s vyletom
        this.long = Math.ceil((Math.pow((Math.pow(h,2)+Math.pow(l,2)),.5)+(m+.5*d)/Math.cos(alpha))*100)/100;
        this.long1 = Math.ceil((Math.pow((Math.pow(h,2)+Math.pow(l1,2)),.5)+(m+.5*d)/Math.cos(alpha))*100)/100;
        
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
        
        this.hardness();
    };
    
    this.hardness = function(){
        
        var mu = 0;
        
        if(this.gamma <= 30){
            mu = 1;
        }else if(this.gamma > 30 && this.gamma <= 60){
            mu =  .033*(60-this.gamma);
        }
        
        var S = mu*this.snow;
        
        var K = .75;
        
        if(this.Hwood > 500 && this.Hwood < 1000){
            K = 1;
        }else if(this.Hwood > 1000 && this.Hwood < 2000){
            K = 1.25;
        }
        
        var W = this.wind*K*.8;
        
        var SUM = S+W+this.pokr+50;
        
        var QR = SUM*this.step;
        
        var Hp = 0;
        
        var Contr = (3.125*QR*Math.pow(this.AB/100,3))/(this.widthS*Math.pow(this.heightS,3));
        
        if(Contr > 1){
            if(confirm("Хуйня війшла виберіть дебеліший брус!\nПродовжити?")){
               Hp = this.calc_height(Hp,QR);
            }else{
                return false;
            }           
            
        }else{
            alert("Вибраний брус "+this.widthS+"Х"+this.heightS+" відповідає умовам міцності!");
        }
    };
    
    this.calc_height = function (hp, QR){
            
            var Hp = hp;
            
            Hp = Math.ceil(Math.pow((3.125*QR*Math.pow(this.AB,3)/this.widthS),1/3)*1000)/100000;
        
            this.heightS = prompt("Вишина брусу "+(this.heightS)+", розрахована не меньш за "+(Hp)+" sm",this.heightS);
            
            this.hardness();
        };
    
    this.setWidth = function(W){
        this.widthS = parseFloat(W);
    };
    
    this.setHeight = function(W){
        this.heightS = parseFloat(W);
    }
    
    this.setHh = function(Hh){
        this.Hwood = parseFloat(Hh);
    };
    
    this.setP = function(P){
        this.pokr = parseFloat(P)/100;
    };
    
    this.setD = function(d){
        
        context.textAlign = "left";
        context.textBaseline = "bottom";
        context.fillText(d, 478, 308);

    };
    
    this.setL = function(l){
        context.textAlign = "right";
        context.textBaseline = "bottom";
        context.fillText(l, 200, 310);
    };
    
    this.setL1 = function(l){
        context.textAlign = "right";
        context.textBaseline = "bottom";
        context.fillText(l, 400, 310);
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
    

    
    

    
//    context.beginPath();
//    
//    context.strokeStyle = "#000";
//    
//    context.moveTo(400, 280);
//    context.lineTo(456, 310);
//    context.lineTo(506, 310);
//    context.moveTo(280, 270);
//    context.lineTo(280, 330);
//    context.stroke();
//    
//    context.textAlign = "left";
//    context.textBaseline = "bottom";
//    context.fillText("D", 458, 308);
//    
//    context.textAlign = "left";
//    context.textBaseline = "bottom";
//    context.fillText("L", 170, 310);
//    
//    context.textAlign = "left";
//    context.textBaseline = "bottom";
//    context.fillText("L1", 310, 310);
    

};

