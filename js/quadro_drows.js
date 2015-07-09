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
    this.rigel = false;
    
    context.font = "bold 12px sans-serif";
    
    this.init = function(){
        
        for (var x = 0.5; x < 580; x += 10) {
            context.moveTo(x, 0);
            context.lineTo(x, 600);
            }
        for (var y = 0.5; y < 600; y += 10) {
            context.moveTo(0, y);
            context.lineTo(580, y);
            }

        context.strokeStyle = "#eee";
        context.stroke();        
        
        
        
        context.fillRect(90, 420,2,2);
        context.fillRect(194, 380,2,2);
        context.fillRect(367, 580,2,2);
        context.fillRect(471, 540,2,2);
        
        context.fillRect(298, 220,2,2);        
        context.fillRect(194, 260,4,4);
        context.fillRect(367, 460,2,2);
        context.fillRect(471, 420,4,4);
        
        context.fillRect(330.5, 340,4,4);
        context.fillRect(330.5, 260,4,4);
        
        context.beginPath();
        
        context.moveTo(194, 260);
        context.lineTo(471, 420);
        
        context.moveTo(330.5, 340);
        context.lineTo(330.5, 260);
        
        context.moveTo(90, 300);
        context.lineTo(367, 460);
        
        context.moveTo(90, 300);
        context.lineTo(298, 220);
        
        context.moveTo(367, 460);
        context.lineTo(575, 380);
        
        context.moveTo(90, 300);
        context.lineTo(90, 420);
        
        context.moveTo(298, 340);
        context.lineTo(298, 220);
        
        context.moveTo(367, 580);
        context.lineTo(367, 460);
        
        context.moveTo(471, 540);
        context.lineTo(471, 420);
        
        context.strokeStyle = "#f9d";
        context.stroke();
        
        context.beginPath();
        
        context.moveTo(444.5, 220);
        context.lineTo(603, 412);
        
        context.moveTo(330.5, 260);
        context.lineTo(374.5, 500);
        
        context.moveTo(374.5, 500);
        context.lineTo(603, 412);
        
        context.moveTo(330.5, 260);
        context.lineTo(42, 308);
        
        context.moveTo(374.5, 500);
        context.lineTo(42, 308);
//        v
        context.moveTo(444.5, 220);
        context.lineTo(270, 220);
        
        context.moveTo(42, 308);
        context.lineTo(270, 220);
        
        context.moveTo(330.5, 260);
        context.lineTo(444.5, 220);
        
        context.strokeStyle = "#666";
        context.stroke();
    };
//    
//    this.drowRigel = function(parm){
//        
//        this.rigel = parm;
//        
//        if(parm){
//            context.beginPath();
//            context.zindex = 2;
//            context.moveTo(200, 440);
//            context.lineTo(360, 440);
//            context.strokeStyle = "#aaa";
//            context.stroke(); 
//        }else{
//            context.clearRect(200, 439, 160, 2);
//        }
//
//        
//    };
//    
//    this.calculate = function (obj){
//        
//        var d = obj['D'];
//        var l = obj['L'];
//        var l1 = obj['L1'];
//        var h = obj['H'];
//        var m = obj['m'];
//        this.step = (obj['step'])/100;
//        
//        var alpha = Math.ceil((Math.atan(h/l))*100)/100;
//        var alpha1 = Math.ceil((Math.atan(h/l1))*100)/100;
////    degree    
//        this.gamma = Math.ceil((180*alpha/Math.PI)*100)/100;
//        this.gamma1 = Math.ceil((180*alpha1/Math.PI)*100)/100;
////       stropilo do opor 
//        
//        var partAB = 0;
//        var partBC = 0;
//        if(this.rigel){
//            partAB = (h/3)/Math.sin(alpha);
//            partBC = (h/3)/Math.sin(alpha1);
//        }
//        this.AB = Math.pow((Math.pow(h,2)+Math.pow(l,2)),.5)-partAB;
//        this.BC = Math.pow((Math.pow(h,2)+Math.pow(l1,2)),.5)-partBC;
////        stropilo s vyletom
//        this.long = Math.ceil((Math.pow((Math.pow(h,2)+Math.pow(l,2)),.5)+(m+.5*d)/Math.cos(alpha))*100)/100;
//        this.long1 = Math.ceil((Math.pow((Math.pow(h,2)+Math.pow(l1,2)),.5)+(m+.5*d)/Math.cos(alpha))*100)/100;
//        
//        this.hardness();
//    };
//    
//    this.hardness = function(){
//        
//        var mu = 0;
//        
//        if(this.gamma <= 30){
//            mu = 1;
//        }else if(this.gamma > 30 && this.gamma <= 60){
//            mu =  .033*(60-this.gamma);
//        }
//        
//        var S = mu*this.snow;
//        
//        var K = .75;
//        
//        if(this.Hwood > 500 && this.Hwood < 1000){
//            K = 1;
//        }else if(this.Hwood > 1000 && this.Hwood < 2000){
//            K = 1.25;
//        }
//        
//        var W = this.wind*K*.8;
//        
//        var SUM = S+W+this.pokr+50;
//        
//        var QR = SUM*this.step;
//        
//        var Hp = 0;
//        
//        var tmplong = this.AB;
//        
//        if(this.BC > this.AB){
//            tmplong = this.BC;
//        }
//        
//        var Contr = (3.125*QR*Math.pow(tmplong/100,3))/(this.widthS*Math.pow(this.heightS,3));
//        
//        if(Contr > 1){
//            if(confirm("Хуйня війшла виберіть дебеліший брус!\nПродовжити?")){
//               Hp = this.calc_height(Hp,QR,tmplong);
//            }else{
//                return false;
//            }           
//            
//        }else{
//            alert("Вибраний брус "+this.widthS+"Х"+this.heightS+" відповідає умовам міцності!("+Contr+")");
//            this.drowingRes();
//        }
//    };
//    
//    this.drowingRes = function(){
//        
////        context.color = "#f69";
//        context.textAlign = "left";
//        context.textBaseline = "bottom";
//        context.fillText(this.long, 105, 455);
//        
//        context.textAlign = "left";
//        context.textBaseline = "bottom";
//        context.fillText(this.long1, 435, 455);
//        
//        context.textAlign = "left";
//        context.textBaseline = "bottom";
//        context.fillText("A="+this.gamma, 140, 505);
//        
//        context.textAlign = "left";
//        context.textBaseline = "bottom";
//        context.fillText("B="+this.gamma1, 375, 505);
//        
//        context.fillStyle = "#753";
//        context.beginPath();
//        context.fillRect(60,90,75,120);
//        
//        context.fillStyle = "#f69";
//        context.font = "bold 16px sans-serif";
//        
//        context.textAlign = "left";
//        context.textBaseline = "bottom";
//        context.fillText((this.widthS*10), 80, 85);
//        
//        context.textAlign = "left";
//        context.textBaseline = "bottom";
//        context.fillText((this.heightS*10), 140, 150);
//        
//        context.fillStyle = "#000";
//        context.font = "normal 16px sans-serif";
//        
//        context.textAlign = "left";
//        context.textBaseline = "bottom";
//        context.fillText("Довжина стропильної ноги L="+this.long+" см", 190, 110);
//        context.fillText("Довжина стропильної ноги L1="+this.long1+" см", 190, 140);
//        context.fillText("Перетин стропильного бруса "+this.widthS+"X"+this.heightS+" см", 190, 170);
//        
//    };
//    
//    this.calc_height = function (hp, QR,L){
//            
//            var Hp = hp;
//            
//            Hp = Math.ceil(Math.pow((3.125*QR*Math.pow(L,3)/this.widthS),1/3)*1000)/100000;
//        
//            this.heightS = prompt("Вишина брусу "+(this.heightS)+", розрахована не меньш за "+(Hp)+" sm",this.heightS);
//            
//            this.hardness();
//        };
//    
//    this.setWidth = function(W){
//        this.widthS = parseFloat(W);
//    };
//    
//    this.setHeight = function(W){
//        this.heightS = parseFloat(W);
//    }
//    
//    this.setHh = function(Hh){
//        this.Hwood = parseFloat(Hh);
//    };
//    
//    this.setP = function(P){
//        this.pokr = parseFloat(P)/100;
//    };
//    
//    this.setD = function(d){
//        
//        context.textAlign = "left";
//        context.textBaseline = "bottom";
//        context.fillText(d, 60, 585);
//
//    };
//    
//    this.setL = function(l){
//        context.textAlign = "right";
//        context.textBaseline = "bottom";
//        context.fillText(l, 200, 570);
//    };
//    
//    this.setL1 = function(l){
//        context.textAlign = "right";
//        context.textBaseline = "bottom";
//        context.fillText(l, 370, 570);
//    };
//    
//    this.setH = function(h){
//        context.textAlign = "right";
//        context.textBaseline = "bottom";
//        context.fillText(h, 260, 455);
//    };
//    
//    this.setM = function(m){
//        context.textAlign = "right";
//        context.textBaseline = "bottom";
//        context.fillText(m, 80, 565);
//    };    

};


