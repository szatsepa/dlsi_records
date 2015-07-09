$(document).ready(function(){
    
    var huynja =  new Drows();
    
    var dataobj = new Object();

    
    huynja.init();
    
//    $("#print").mousedown(function(){
//        
//        $('diw#dPrint').printElement({
//                overrideElementCSS:[
//		'/css/print_element.css',
//		{ href:'/css/print_element.css',media:'print'}],
//                leaveOpen:true,
//                printMode:'popup'
//            });
//    });
    
    $("canvas#a").css('outline','1px solid #ccc');
    
    $("input#rigel").change(function(){
        if($("input#rigel").attr('checked') === 'checked'){
            huynja.drowRigel(true);
        }else{
            huynja.drowRigel(false);
        }
    });
    
    $("select#ws").change(function(){
        huynja.setWidth($("select#ws option:selected").val());
//        $("input#Hh").focus().select();
    });
    
    $("select#hs").change(function(){
        huynja.setHeight($("select#hs option:selected").val());
        $("input#Hh").focus().select();
    });        
    
    $("select#type").change(function(){
        huynja.setP($("select#type option:selected").val());
//        $("input#Hh").focus().select();
    });
    
    $("input#Hh").keypress(function(e){
        if(e.which === 13){
            huynja.setHh($("input#Hh").val());
            $("input#D").focus().select();
        }
    });
    $("input#D").keypress(function(e){
        if(e.which === 13){
            dataobj['D'] = parseFloat($("input#D").val());
            huynja.setD($("input#D").val());
            $("input#L").focus().select();
        }
    });

    $("input#L").keypress(function(e){
        if(e.which === 13){
            dataobj['L'] = parseFloat($("input#L").val());
            huynja.setL($("input#L").val());
            $("input#L1").focus().select();
        }
    });
    
    $("input#L1").keypress(function(e){
        if(e.which === 13){
            dataobj['L1'] = parseFloat($("input#L1").val());
            huynja.setL1($("input#L1").val());
            $("input#H").focus().select();
        }
    });
    
    $("input#H").keypress(function(e){
        if(e.which === 13){
            dataobj['H'] = parseFloat($("input#H").val());
            huynja.setH($("input#H").val());
            $("input#m").focus().select();
        }
    });
    $("input#m").keypress(function(e){
        if(e.which === 13){
            dataobj['m'] = parseFloat($("input#m").val());            
            huynja.setM($("input#m").val());
            $("input#step").focus().select();
//            huynja.calculate(dataobj);
        }
    });
    
    $("input#step").keypress(function(e){
        if(e.which === 13){
            
            dataobj['step'] = parseFloat($("input#step").val());
            huynja.calculate(dataobj);
        }
    });
    
    $("input.btn-save").mousedown(function(){
        dataobj['D'] = parseFloat($("input#D").val());
        dataobj['L'] = parseFloat($("input#L").val());
        dataobj['L1'] = parseFloat($("input#L1").val());
        dataobj['H'] = parseFloat($("input#H").val());
        dataobj['m'] = parseFloat($("input#m").val());
        obj['step'] = parseFloat($("input#step").val());
        huynja.calculate(obj);
    });
    
    
    
});

//var obj = new Object();

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
               
        var wood = new Image();
        wood.src = "../images/wood.png";
        wood.onload = function() {

            var y = 600;
            var x = 90;

            for(var i = 0; i < 3; i++){

                y -=(30); 
                context.drawImage(wood, x,y,30,30);
                context.drawImage(wood, (x+350),y,30,30);
            }
        };
        context.beginPath();
        context.zindex = 3;
        context.moveTo(105, 510);
        context.lineTo(455, 510);
        
        context.moveTo(280, 510);
        context.lineTo(280, 390);
        
        context.moveTo(280, 390);
        context.lineTo(50, 540);
        
        context.moveTo(280, 390);
        context.lineTo(510, 540);
        
        context.moveTo(135, 510);
        context.lineTo(125, 490);
        
        context.moveTo(425, 510);
        context.lineTo(435, 490);
        
        context.strokeStyle = "#777";
        context.stroke();
        
        context.beginPath();
        context.moveTo(50, 540);
        context.lineTo(32, 510);
        
        context.moveTo(50, 540);
        context.lineTo(50, 570);
        
        context.moveTo(50, 565);
        context.lineTo(90, 565);
        
        context.moveTo(280, 390);
        context.lineTo(260, 363);
        
        context.moveTo(37, 515);
        context.lineTo(265, 370);
        
        context.moveTo(280, 390);
        context.lineTo(300, 363);
        
        context.moveTo(510, 540);
        context.lineTo(530, 510);
        
        context.moveTo(297, 370);
        context.lineTo(522, 519);
        
        context.moveTo(105, 570);
        context.lineTo(450, 570);
        
        context.moveTo(280, 390);
        context.lineTo(250, 390);
        
        context.moveTo(280, 510);
        context.lineTo(250, 510);
        
        context.moveTo(255, 390);
        context.lineTo(255, 510);
        
        context.moveTo(50, 585);
        context.lineTo(135, 585);
        
        context.strokeStyle = "green";
        context.stroke();
        
        
            
        context.beginPath();
        context.zindex = 1;
        
        context.beginPath();
        context.zindex = 2;
        context.moveTo(280, 0);
        context.lineTo(280, 600);
        
        

        context.strokeStyle = "#aaa";
        context.stroke();
        
        
    };
    
    this.drowRigel = function(parm){
        
        this.rigel = parm;
        
        if(parm){
            context.beginPath();
            context.zindex = 2;
            context.moveTo(200, 440);
            context.lineTo(360, 440);
            context.strokeStyle = "#aaa";
            context.stroke(); 
        }else{
            context.clearRect(200, 439, 160, 2);
        }

        
    };
    
    this.calculate = function (obj){
        
        var d = obj['D'];
        var l = obj['L'];
        var l1 = obj['L1'];
        var h = obj['H'];
        var m = obj['m'];
        this.step = (obj['step'])/100;
        
        var alpha = Math.ceil((Math.atan(h/l))*100)/100;
        var alpha1 = Math.ceil((Math.atan(h/l1))*100)/100;
//    degree    
        this.gamma = Math.ceil((180*alpha/Math.PI)*100)/100;
        this.gamma1 = Math.ceil((180*alpha1/Math.PI)*100)/100;
//       stropilo do opor 
        
        var partAB = 0;
        var partBC = 0;
        if(this.rigel){
            partAB = (h/3)/Math.sin(alpha);
            partBC = (h/3)/Math.sin(alpha1);
        }
        this.AB = Math.pow((Math.pow(h,2)+Math.pow(l,2)),.5)-partAB;
        this.BC = Math.pow((Math.pow(h,2)+Math.pow(l1,2)),.5)-partBC;
//        stropilo s vyletom
        this.long = Math.ceil((Math.pow((Math.pow(h,2)+Math.pow(l,2)),.5)+(m+.5*d)/Math.cos(alpha))*100)/100;
        this.long1 = Math.ceil((Math.pow((Math.pow(h,2)+Math.pow(l1,2)),.5)+(m+.5*d)/Math.cos(alpha))*100)/100;
        
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
        
        var tmplong = this.AB;
        
        if(this.BC > this.AB){
            tmplong = this.BC;
        }
        
        var Contr = (3.125*QR*Math.pow(tmplong/100,3))/(this.widthS*Math.pow(this.heightS,3));
        
        if(Contr > 1){
            if(confirm("Хуйня війшла виберіть дебеліший брус!\nПродовжити?")){
               Hp = this.calc_height(Hp,QR,tmplong);
            }else{
                return false;
            }           
            
        }else{
            alert("Вибраний брус "+this.widthS+"Х"+this.heightS+" відповідає умовам міцності!("+Contr+")");
            this.drowingRes();
        }
    };
    
    this.drowingRes = function(){
        
//        context.color = "#f69";
        context.textAlign = "left";
        context.textBaseline = "bottom";
        context.fillText(this.long, 105, 455);
        
        context.textAlign = "left";
        context.textBaseline = "bottom";
        context.fillText(this.long1, 435, 455);
        
        context.textAlign = "left";
        context.textBaseline = "bottom";
        context.fillText("A="+this.gamma, 140, 505);
        
        context.textAlign = "left";
        context.textBaseline = "bottom";
        context.fillText("B="+this.gamma1, 375, 505);
        
        context.fillStyle = "#753";
        context.beginPath();
        context.fillRect(60,90,75,120);
        
        context.fillStyle = "#f69";
        context.font = "bold 16px sans-serif";
        
        context.textAlign = "left";
        context.textBaseline = "bottom";
        context.fillText((this.widthS*10), 80, 85);
        
        context.textAlign = "left";
        context.textBaseline = "bottom";
        context.fillText((this.heightS*10), 140, 150);
        
        context.fillStyle = "#000";
        context.font = "normal 16px sans-serif";
        
        context.textAlign = "left";
        context.textBaseline = "bottom";
        context.fillText("Довжина стропильної ноги L="+this.long+" см", 190, 110);
        context.fillText("Довжина стропильної ноги L1="+this.long1+" см", 190, 140);
        context.fillText("Перетин стропильного бруса "+this.widthS+"X"+this.heightS+" см", 190, 170);
        
    };
    
    this.calc_height = function (hp, QR,L){
            
            var Hp = hp;
            
            Hp = Math.ceil(Math.pow((3.125*QR*Math.pow(L,3)/this.widthS),1/3)*1000)/100000;
        
            this.heightS = prompt("Вишина брусу "+(this.heightS)+", розрахована не меньш за "+(Hp)+" sm",this.heightS);
            
            this.hardness();
        };
    
    this.setWidth = function(W){
        this.widthS = parseFloat(W);
    };
    
    this.setHeight = function(W){
        this.heightS = parseFloat(W);
    };
    
    this.setHh = function(Hh){
        this.Hwood = parseFloat(Hh);
    };
    
    this.setP = function(P){
        this.pokr = parseFloat(P)/100;
    };
    
    this.setD = function(d){
        
        context.textAlign = "left";
        context.textBaseline = "bottom";
        context.fillText(d, 60, 585);

    };
    
    this.setL = function(l){
        context.textAlign = "right";
        context.textBaseline = "bottom";
        context.fillText(l, 200, 570);
    };
    
    this.setL1 = function(l){
        context.textAlign = "right";
        context.textBaseline = "bottom";
        context.fillText(l, 370, 570);
    };
    
    this.setH = function(h){
        context.textAlign = "right";
        context.textBaseline = "bottom";
        context.fillText(h, 260, 455);
    };
    
    this.setM = function(m){
        context.textAlign = "right";
        context.textBaseline = "bottom";
        context.fillText(m, 80, 565);
    };    

};

