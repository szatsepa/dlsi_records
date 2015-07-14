Drows = function (){
    
    var obj = new Object();
    obj = document.getElementById("a");
    var context = obj.getContext("2d");
    this.building = new Object();
    this.sizes = new Object();
    this.sizes['num'] = 0;
    
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
        context.fillRect(90, 300,2,2);
        context.fillRect(194, 380,2,2);
        context.fillRect(367, 580,2,2);
        context.fillRect(471, 540,2,2);
        
        context.fillRect(298, 220,2,2);        
        context.fillRect(194, 260,4,4);
        context.fillRect(367, 460,2,2);
        context.fillRect(471, 420,4,4);
        
        context.fillRect(330.5, 340,4,4);
        context.fillRect(330.5, 260,4,4);
        
        context.textAlign = "left";
        context.textBaseline = "bottom";
        
        context.fillText('a', 80, 315);
        context.fillText('A', 30, 305);
        context.fillText('b', 199, 255);
        context.fillText('B', 159, 255);
        context.fillText('c', 315, 355);
        context.fillText('d', 471, 420);
        context.fillText('D', 501, 465);
        context.fillText('e', 367, 460);
        context.fillText('E', 377, 515);
        context.fillText('f', 228.5, 380);
        context.fillText('F', 188.5, 420);
        context.fillText('g', 320.5, 255);
        
        context.beginPath();
        
        context.moveTo(194, 260);
        context.lineTo(471, 420);
        
        context.moveTo(194, 260);
        context.lineTo(194, 380);
        
        context.moveTo(330.5, 340);
        context.lineTo(330.5, 260);
        
        context.moveTo(228.5, 380);
        context.lineTo(330.5, 340);
        
        context.moveTo(471, 420);
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
        
        context.moveTo(90, 300);
        context.lineTo(330.5, 340);
        
        context.moveTo(330.5, 340);
        context.lineTo(367, 460);
        
        context.strokeStyle = "#f9d";
        context.stroke();
        
        context.beginPath();
        
        context.moveTo(208.5, 400);
        context.lineTo(330.5, 260);        
        
        context.moveTo(501, 450);
        context.lineTo(330.5, 260);
        
        context.moveTo(172, 260);
        context.lineTo(330.5, 260);
        
        context.strokeStyle = "#6f6";
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
    
    this.geometry = function(obj){
        
        this.building = obj;
//        alert("A");
        for(var i=0; i < 150;i++){
//            alert("B");
            this.building['cf'] += 5; 
            this.sizes['cf'] = this.building['cf'];
            this.sizes['num']++;
    //        розрахунок ноги BG
            this.sizes['bg'] = Math.pow((Math.pow(this.building['bc'],2)+Math.pow(this.building['cg'],2)),1/2);
            this.sizes['angleB'] = Math.asin(this.building['cg']/this.sizes['bg']);
            this.sizes['Bg'] = (this.building['m']+.5*this.building['D']+this.building['bc'])*this.sizes['bg']/this.building['bc'];
    //        розрахунок ноги CG    
            this.sizes['dg'] = Math.pow((Math.pow(this.building['cd'],2)+Math.pow(this.building['cg'],2)),1/2);
            this.sizes['angleD'] = Math.asin(this.building['cg']/this.sizes['dg']);
            this.sizes['Dg'] = (this.building['m']+.5*this.building['D']+this.building['cd'])*this.sizes['dg']/this.building['cd'];
    //        розрахунок ноги ag  
            this.sizes['ac'] = Math.pow((Math.pow(this.building['bc'],2)+Math.pow(this.building['cf'],2)),.5);
            this.sizes['ag'] = Math.pow(Math.pow(this.sizes['ac'],2)+Math.pow(this.building['cf'],2),.5);
            this.sizes['Ag'] = (this.sizes['Bg']*this.sizes['ag'])/this.sizes['bg'];
            this.sizes['angleA'] = Math.asin(this.building['cg']/this.sizes['dg']);;
    //        розрахунок ноги EG        
            this.sizes['ce'] = Math.pow((Math.pow(this.building['cd'],2)+Math.pow(this.building['cf'],2)),.5);
            this.sizes['eg'] = Math.pow(Math.pow(this.sizes['ce'],2)+Math.pow(this.building['cf'],2),.5);
            this.sizes['Eg'] = (this.sizes['Dg']*this.sizes['eg'])/this.sizes['dg'];
            this.sizes['angleE'] = Math.asin(this.building['cg']/this.sizes['dg']);
    ////        розрахунок ноги FG         
            this.sizes['fg'] = Math.pow((Math.pow(this.building['cf'],2)+Math.pow(this.building['cg'],2)),1/2);
            this.sizes['angleF'] = Math.asin(this.building['cg']/this.sizes['fg']);
            this.sizes['Fg'] = Math.pow(Math.pow(this.sizes['Ag'],2) - Math.pow((this.sizes['Ag']*this.building['bc'])/this.sizes['ag'],2),1/2);
            this.sizes['ms'] = (this.sizes['Fg']-this.sizes['fg'])*this.building['cf']/this.sizes['fg']-this.building['D']/2;
    //        розрахунок стріхи gg
            this.sizes['L'] = 100*this.building['L'] - 2*this.building['cf'];
            this.sizes['mf'] = this.building['m'];
            
            if(this.sizes['ms'] >= (this.building['m']-3)){
                break;
            }
        }
        
        var raft = {'A':this.sizes['ag'],'B':this.sizes['bg'],'C':this.sizes['dg'],'E':this.sizes['eg'],'F':this.sizes['fg']};
        
        var tmp = this.maxsize(raft);
        
        this.sizes['maxraft'] = tmp['raft'];
        
        this.sizes['angle'] = tmp['angle'];
        
        this.hardness(this.building['ws'],this.building['hs'],this.sizes[tmp['angle']]);
        
        return this.sizes;

    };
    
    this.hardness = function(w,h,ang){
        var W = w;
        var H = h;
        var angle = parseFloat(ang);
        var mu = 0;
        var gamma = 180*angle/Math.PI;
        
        this.building['hs'] = h;
//        alert(gamma+"degree");
        if(gamma <= 30){
            mu = 1;
        }else if(gamma > 30 && gamma <= 60){
            mu =  .033*(60-gamma);
        }
        var Snow = mu*150;
        
        var K = .75;
        
        if(this.building['Hh'] > 500 && this.building['Hh'] < 1000){
            K = 1;
        }else if(this.building['Hh'] > 1000 && this.building['Hh'] < 2000){
            K = 1.25;
        }
        
        var Wind = 45*K*.8;
// суммарная нагрузка ветровая снегрвая и человег на м кв       
        var SUM = Snow+Wind+this.building['type']+50;
        
// с учетом шага стропил на пог м      
        var QR = SUM*(this.building['step']/100);
        
        var Contr = (3.125*QR*Math.pow(this.sizes['maxraft']/100,3))/(W*Math.pow(H,3));
        
         if(Contr > 1){
            if(confirm("Хуйня війшла виберіть дебеліший брус!\nПродовжити?")){
               H = this.calc_height(H,QR,(this.sizes['maxraft']),W,angle);
            }else{
                return false;
            }           
            
        }else{
//            alert("Вибраний брус "+W+"Х"+H+" відповідає умовам міцності!("+Contr+")");
            this.sizes['W'] = W;
            this.sizes['H'] = H;
            this.sizes['QR'] = QR;
            this.sizes['C'] = Contr;
        }
        
        
    };
    
    this.calc_height = function (hp, QR,l,W,angle){
            
            var Hp = 0;
            
            var L = l/100;
            
            var W = W;
            
            if(angle < 30){
                Hp = 8.6*L*Math.pow((QR/(130*W)),1/2);
            }else{
                Hp = 9.5*L*Math.pow((QR/(130*W)),1/2);
            }
            
            if(Hp < hp){
                Hp = hp;
            }
            
            var tmp = Math.ceil(Hp*100)/100;
            
            if(tmp > 20){
                var tmpw = parseFloat(W)+1;
                W = prompt("Ширина брусу "+(W)+", має бути збільшена шонайменьше на 1 sm",(tmpw));
                if(!W){
                    return false;
                }
                this.building['ws'] = W;
            }else{
                Hp = prompt("Вишина брусу "+(this.building['hs'])+", розрахована не меньш за "+(tmp)+" sm",tmp);
                if(!Hp){
                    return false;
                }
                this.building['hs'] = Hp;
            }
        
            
            
            this.hardness(this.building['ws'],this.building['hs'],this.sizes[this.sizes['angle']]);
        };
    
    this.maxsize = function(obj){
        
        var maxraft = 0;
        var angle = 0;
        
        for(var i in obj){
            if(obj[i] > maxraft){
                maxraft = obj[i];
                angle = 'angle'+i;
            }
        }
        return {'raft':maxraft,'angle':angle};
    };
    
    this.resize = function(){
        
      this.building['cf'] += 5;
     
      this.geometry(this.building);
    };
    
    this.drowFront = function(){
        
        var objb = new Object();
        var points = new Array();
        objb = document.getElementById("b");
        var cont = objb.getContext("2d");
        cont.font = "bold 12px sans-serif";
        cont.fillStyle = "#fa6";
//        определим коэфф по осям коорд

        var K = 820/(this.building['L']*100+2*this.sizes['ms']+this.building['D']);
        
        if(K > (560/(this.building['Hh']*100))){
            
            K = 560/(this.building['Hh']*100);
        }
        
//  left point

        var x = 60; 
        var y = Math.floor(45+this.building['cg']*K) ;        
        cont.fillRect(x, y,4,4);
        points.push([x,y]);
        
        x += Math.floor(this.sizes['ms']*K);
        cont.fillRect(x, y,4,4);        
        points.push([x,y]);
        
        y += Math.floor((this.building['Hh']*100 - this.building['cg'])*K);
        cont.fillRect(x, y,4,4);        
        points.push([x,y]);
        
        x += Math.floor((this.building['L']*100+this.building['D'])*K);
        cont.fillRect(x, y,4,4);        
        points.push([x,y]);
        
        y -= Math.floor((this.building['Hh']*100 - this.building['cg'])*K);
        cont.fillRect(x, y,4,4);        
        points.push([x,y]);
        
        x += Math.floor(this.sizes['ms']*K);
        cont.fillRect(x, y,4,4);        
        points.push([x,y]);
        
        x -= Math.floor((this.sizes['ms']+this.building['cd'])*K);
        y -= Math.floor(40+this.building['cg']*K);
        cont.fillRect(x, y,4,4);        
        points.push([x,y]);
        
        x -= Math.floor((this.sizes['ms']+this.building['cb'])*K);
        y += Math.floor(45+this.building['cg']*K);
        cont.fillRect(x, y,4,4);        
        points.push([x,y]);
        
        cont.beginPath();
        
        var n = 0;
        for(var i in points){
            var a = parseFloat(i);
            var b = a+1;
            if(points[b] === undefined){
                break;
            }
            cont.moveTo(points[a][0], points[a][1]);
            cont.lineTo(points[b][0], points[b][1]);
            n++;
        }
        cont.moveTo(points[n][0], points[n][1]);
        cont.lineTo(points[0][0], points[0][1]);
        cont.strokeStyle = "#333";
        cont.stroke();
        
    };
};


