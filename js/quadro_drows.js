Drows = function (){
    
    var obj = new Object();
    obj = document.getElementById("a");
    var context = obj.getContext("2d");
    this.building = new Object();
    this.sizes = new Object();
//    this.sizes['num'] = 0;
    
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
        context.fillRect(194, 260,1,1);
        context.fillRect(367, 460,2,2);
        context.fillRect(471, 420,1,1);
        
        context.fillRect(330.5, 340,1,1);
        context.fillRect(330.5, 260,1,1);
        
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
    
    this.setData = function(obj){
        this.building = obj;
    };
    
    this.setCF = function(data){
        this.building['cf'] = data;
    };
    
    this.geometry = function(){
        
//        this.building = obj;obj
        
//        вычисляем координаты реперных точек в трех координатной системе принимая за начало отсчета точку с 1 пкс = 1 см каждая точка объект с тремя свойствами
        var tmp = 0;
        this.sizes['a'] = {x:(-this.building['bc']),y:0,z:this.building['cf']};
        this.sizes['b'] = {x:(-this.building['bc']),y:0,z:0};
        this.sizes['c'] = {x:0,y:0,z:0};
        this.sizes['d'] = {x:this.building['cd'],y:0,z:0};
        this.sizes['e'] = {x:this.building['cd'],y:0,z:this.building['cf']};
        this.sizes['f'] = {x:0,y:0,z:this.building['cf']};
        this.sizes['g'] = {x:0,y:this.building['cg'],z:0};
//      Cc -> tmp нижний уровень кріши отн плоскости abcdef 
        tmp = ((this.building['bc']+this.building['m']+.5*this.building['D'])*this.building['cg']/this.building['bc']) - this.building['cg'];
        
        this.sizes['A'] = {x:(-(this.building['bc']+this.building['m']+.5*this.building['D'])),y:(-tmp),z:(this.building['cg']+tmp)*this.building['cf']/this.building['cg']};
        this.sizes['B'] = {x:(-(this.building['bc']+this.building['m']+.5*this.building['D'])),y:(-tmp),z:0};
        this.sizes['D'] = {x:(this.building['bc']+this.building['m']+.5*this.building['D']),y:(-tmp),z:0};
        this.sizes['E'] = {x:(this.building['bc']+this.building['m']+.5*this.building['D']),y:(-tmp),z:(this.building['cg']+tmp)*this.building['cf']/this.building['cg']};
        this.sizes['F'] = {x:0,y:(-tmp),z:(this.building['cg']+tmp)*this.building['cf']/this.building['cg']};
        
//        довжина стропильних ніг по осях

        this.sizes['Ag'] = Math.pow((Math.pow((this.sizes['A']['x']-this.sizes['g']['x']),2)+Math.pow((this.sizes['A']['y']-this.sizes['g']['y']),2)+Math.pow((this.sizes['A']['z']-this.sizes['g']['z']),2)),.5);
        this.sizes['Bg'] = Math.pow((Math.pow((this.sizes['B']['x']-this.sizes['g']['x']),2)+Math.pow((this.sizes['B']['y']-this.sizes['g']['y']),2)+Math.pow((this.sizes['B']['z']-this.sizes['g']['z']),2)),.5);
        this.sizes['Dg'] = Math.pow((Math.pow((this.sizes['D']['x']-this.sizes['g']['x']),2)+Math.pow((this.sizes['D']['y']-this.sizes['g']['y']),2)+Math.pow((this.sizes['D']['z']-this.sizes['g']['z']),2)),.5);
        this.sizes['Eg'] = Math.pow((Math.pow((this.sizes['E']['x']-this.sizes['g']['x']),2)+Math.pow((this.sizes['E']['y']-this.sizes['g']['y']),2)+Math.pow((this.sizes['E']['z']-this.sizes['g']['z']),2)),.5);
        this.sizes['Fg'] = Math.pow((Math.pow((this.sizes['F']['x']-this.sizes['g']['x']),2)+Math.pow((this.sizes['F']['y']-this.sizes['g']['y']),2)+Math.pow((this.sizes['F']['z']-this.sizes['g']['z']),2)),.5);
        
//      углы наклона стропильных ног по реперным точкам

        this.sizes['angleA'] = Math.atan((this.sizes['g']['y']-this.sizes['c']['y'])/(this.sizes['c']['x']-this.sizes['a']['x']));
        this.sizes['angleB'] = Math.atan((this.sizes['g']['y']-this.sizes['c']['y'])/(this.sizes['c']['x']-this.sizes['b']['x']));
        this.sizes['angleD'] = Math.atan((this.sizes['g']['y']-this.sizes['c']['y'])/(this.sizes['c']['x']-this.sizes['d']['x']));
        this.sizes['angleE'] = Math.atan((this.sizes['g']['y']-this.sizes['c']['y'])/(this.sizes['c']['x']-this.sizes['e']['x']));
        this.sizes['angleF'] = Math.atan((this.sizes['g']['y']-this.sizes['c']['y'])/(this.sizes['c']['x']-this.sizes['f']['x']));
        
//      вылет крыши М
        
        var m = new Array();
        
        m.push((this.sizes['b']['x']-this.sizes['B']['x']-.5*this.building['D']));
        m.push((this.sizes['D']['x']-this.sizes['d']['x']-.5*this.building['D']));
        m.push((this.sizes['F']['z']-this.sizes['f']['z']-.5*this.building['D']));
        
        this.sizes['mar'] = m;
        this.sizes['cf'] = this.building['cf'];
        this.sizes['L'] = 100*this.building['L']-2*this.building['cf'];
        
//        индексы стропильных ног
        
        var Sindex = new Array('A','B','D','E','F');
        
        var raft = this.maxsize(Sindex);
        
        alert('W '+this.building['ws']+'\nH '+this.building['hs']);
        
        this.hardness(this.building['ws'],this.building['hs'],raft['angle'],raft['raft']);
        
        return this.sizes;

    };
    
    this.hardness = function(w,h,ang,raft){
        var W = w;
        var H = h;
        var angle = parseFloat(ang);
        var mu = 0;
        var gamma = 180*angle/Math.PI;
        var raft = raft;
        
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
        
        var Contr = (3.125*QR*Math.pow(raft/100,3))/(W*Math.pow(H,3));
        
         if(Contr > 1){
            if(confirm("Хуйня війшла виберіть дебеліший брус!\nПродовжити?")){
               H = this.calc_height(H,QR,(raft),W,angle);
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
    
    this.maxsize = function(arr){
        
        var maxraft = 0;
        var angle = 0;
//        var str = '';
        for(var i in arr){
            if(this.sizes[(arr[i]+'g')] > maxraft){
                maxraft = this.sizes[(arr[i]+'g')];
                angle = this.sizes[('angle'+arr[i])];
            }
//            str += arr[i]+'; '+this.sizes[(arr[i]+'g')]+'\n';
        }
//        alert(str);
        return {'raft':maxraft,'angle':angle};
    };
    
    this.resize = function(){
        
      this.building['cf'] += 5;
     
      this.geometry(this.building);
    };
    
    this.resizeM = function(){
        
      this.building['m'] += 5;
     
      this.geometry(this.building);
    };
    
    this.drowFront = function(){
//        alert(this.sizes['mr']);
        var objb = new Object();
        var points = new Array();
        objb = document.getElementById("b");
        objb.width = objb.width;
        var cont = objb.getContext("2d");
        cont.font = "bold 12px sans-serif";
        cont.fillStyle = "#fa6";
//        определим коэфф по осям коорд

        var K = 860/(this.building['L']*100+2*this.sizes['ms']+this.building['D']);
        
        if(K > (630/(this.building['Hh']*100))){
            
            K = 630/(this.building['Hh']*100);
        }
        
//        оси координат
        
        cont.fillStyle = "yelow";
        var x0 = 430;
        var y0 = 10;
        cont.fillRect(x0, y0,4,4);
        points.push([x0,y0]);
        var dy = (x0-10)*Math.sin(7.17*Math.PI/180);
//        alert((x0-10)+'\n'+Math.sin(7.17*Math.PI/180)+'\n'+dy);
        var y = y0+dy;
        var x = x0 - 420;
        cont.fillRect(x, y,4,4);
        points.push([x,y]);
        dy = (850-x0)*Math.sin(41.42*Math.PI/180);
        x = 850;
        y = y0+dy;
        cont.fillRect(x, y,4,4);
        points.push([x,y]);
        
        y = 620;
        x = x0;
        cont.fillRect(x, y,4,4);
        points.push([x,y]);
        
        cont.beginPath();
        
        cont.moveTo(points[0][0], points[0][1]);
        cont.lineTo(points[1][0], points[1][1]);
        
        cont.moveTo(points[0][0], points[0][1]);
        cont.lineTo(points[2][0], points[2][1]);
        
        cont.moveTo(points[0][0], points[0][1]);
        cont.lineTo(points[3][0], points[3][1]);
        
        cont.strokeStyle = "#ff0";
        cont.stroke();
        
//        центр строения

        points.length = 0;
        
        x = Math.sin(41.42*Math.PI/180)*K*(this.building['L']*100/2);
        
//  left point
//
//        var x = Math.floor((860 -(this.building['L']*100+this.building['D'])*K)/2); 
//        var y = 625;        
//        cont.fillRect(x, y,1,1);
//        points.push([x,y]);
//        
//        x += Math.floor((this.building['L']*100+this.building['D'])*K);
//        cont.fillRect(x, y,1,1);        
//        points.push([x,y]);
//        
//        y -= Math.floor(625 - (this.building['Hh']*100 - this.building['cg'])*K);
//        cont.fillRect(x, y,1,1);        
//        points.push([x,y]);
//        
//        x -= Math.floor((this.building['L']*100+this.building['D'])*K);
//        cont.fillRect(x, y,1,1);        
//        points.push([x,y]);
//        
//        cont.beginPath();
//        
//        var n = 0;
//        for(var i in points){
//            var a = parseFloat(i);
//            var b = a+1;
//            if(points[b] === undefined){
//                break;
//            }
//            cont.moveTo(points[a][0], points[a][1]);
//            cont.lineTo(points[b][0], points[b][1]);
//            n++;
//        }
//        cont.moveTo(points[n][0], points[n][1]);
//        cont.lineTo(points[0][0], points[0][1]);
//        cont.strokeStyle = "brown";
//        cont.stroke();
//        
//        points.length = 0;
//        
//        cont.fillStyle = "green";
//        
//        x = Math.floor((860 -(this.building['L']*100+this.building['D'])*K)/2+(this.building['cf']*K)-this.sizes['H']*K/Math.sin(this.sizes['angleF'])/2);
//        y -= Math.floor(this.building['cg']*K);        
//        cont.fillRect(x, y,1,1);
//        points.push([x,y]);
//        
//        x += Math.floor((this.sizes['L'])*K+1*this.sizes['H']*K/Math.sin(this.sizes['angleF']));
//        cont.fillRect(x, y,1,1);        
//        points.push([x,y]);
//
//        x += Math.floor((this.sizes['Fg']*this.sizes['cf']/this.sizes['fg'])*K);
//        y += Math.floor((this.sizes['Fg']*this.building['cg']/this.sizes['fg'])*K-this.sizes['H']*K/Math.cos(this.sizes['angleF'])/2);
//        cont.fillRect(x, y,1,1);        
//        points.push([x,y]);
//        
//        x -= Math.floor((2*this.building['m'] + (this.building['L']*100+this.building['D']))*K);
//        cont.fillRect(x, y,1,1);        
//        points.push([x,y]);
//        
//        cont.beginPath();
//        
//        var n = 0;
//        for(var i in points){
//            var a = parseFloat(i);
//            var b = a+1;
//            if(points[b] === undefined){
//                break;
//            }
//            cont.moveTo(points[a][0], points[a][1]);
//            cont.lineTo(points[b][0], points[b][1]);
//            n++;
//        }
//        cont.moveTo(points[n][0], points[n][1]);
//        cont.lineTo(points[0][0], points[0][1]);
//        cont.strokeStyle = "green";
//        cont.stroke();
    };
    
    this.drowSide = function(){
        var objb = new Object();
        var points = new Array();
        objb = document.getElementById("b");
        objb.width = objb.width;
        var cont = objb.getContext("2d");
        cont.font = "bold 12px sans-serif";
        cont.fillStyle = "#fa6";
//        определим коэфф по осям коорд

        var K = 820/(this.building['W']*100+2*this.building['m']+this.building['D']);
        
        if(K > (560/(this.building['Hh']*100))){
            
            K = 560/(this.building['Hh']*100);
        }
        
        var x = Math.floor((860 -(this.building['W']*100+this.building['D'])*K)/2); 
        var y = 625;        
        cont.fillRect(x, y,1,1);
        points.push([x,y]);
        
        x += Math.floor((this.building['W']*100+this.building['D'])*K);
        cont.fillRect(x, y,1,1);        
        points.push([x,y]);
        
        y -= Math.floor(625 - (this.building['Hh']*100 - this.building['cg'])*K);
        cont.fillRect(x, y,1,1);        
        points.push([x,y]);
        
        x -= Math.floor((this.building['W']*100+this.building['D'])*K);
        cont.fillRect(x, y,1,1);        
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
        cont.strokeStyle = "brown";
        cont.stroke();
        
        points.length = 0;
        
        cont.fillStyle = "green";
        
        x += Math.floor(this.building['bc']*K);
        y -= Math.floor(this.building['cg']*K+this.sizes['H']*K/Math.sin(this.sizes['angleD'])/2);        
        cont.fillRect(x, y,1,1);
        points.push([x,y]);
        
        var tmpx = x;
        x += Math.floor((this.building['cd']*this.sizes['Dg']/this.sizes['dg'])*K+this.sizes['H']*K/Math.cos(this.sizes['angleD'])/2);
        
        y += Math.floor((this.building['cg']*this.sizes['Dg']/this.sizes['dg'])*K+this.sizes['H']*K/Math.sin(this.sizes['angleD'])/2);
        cont.fillRect(x, y,1,1);        
        points.push([x,y]);
        
        x = Math.floor(tmpx - ((this.building['bc']*this.sizes['Bg']/this.sizes['bg'])*K+this.sizes['H']*K/Math.cos(this.sizes['angleB'])/2));
//        y += Math.floor((this.building['cg']*this.sizes['Dg']/this.sizes['dg'])*K+this.sizes['H']*K/Math.sin(this.sizes['angleD'])/2);
        cont.fillRect(x, y,4,4);        
        points.push([x,y]);
//        alert("x1 "+tmpx+'\nx2 '+x)
        
//
//        x -= Math.floor((this.building['W']*100+this.building['D'])*K+this.sizes['H']*K/Math.cos(this.sizes['angleB'])/2+this.sizes['ms']*2*K);
//        cont.fillRect(x, y,1,1);        
//        points.push([x,y]);

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
        cont.strokeStyle = "green";
        cont.stroke();
    };
};


