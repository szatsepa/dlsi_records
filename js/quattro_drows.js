/* global this */
Drows = function (){
    
    var obj = new Object();
    obj = document.getElementById("a");
    var context = obj.getContext("2d");
    this.building = new Object();
    this.sizes = new Object();
    this.length = new Array();
    this.angles = new Array();
    
    context.font = "bold 16px sans-serif";
    
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
        context.closePath();
        context.beginPath();
        context.strokeStyle = "#000";
        context.moveTo(130,130);
        context.lineTo(30,130);
        context.lineTo(130,200);
        context.lineTo(110,200);
        context.moveTo(130,200);
        context.lineTo(125,180);
        context.stroke();
        context.font = "normal 12px sans-serif";
        context.fillText('Дивимося звідси!', 33, 130);
    };
    
    this.setData = function(obj){
        this.building = obj;
        
        this.sizes['type'] = obj['typeString'];
        this.sizes['size'] = obj['Hh']+" X "+obj['W']+" X "+obj['L'];
        this.sizes['log'] = obj['D'];
        this.sizes['bc'] = obj['bc'];
        this.sizes['cd'] = obj['cd'];
        this.sizes['cg'] = obj['cg'];
        this.sizes['step'] = obj['step'];
    };
    
    this.setCF = function(data){
        this.building['cf'] = data;
    };
    
    this.geometry2 = function(height){
        alert('Розрахунок геометрії двоскатного даху\n дещо відрізняється і його ще не зроблено! \n\t\t\t Tому звиняйте :-(');
//        return false;
//        вычисляем координаты реперных точек в трех координатной системе принимая за начало отсчета точку с 1 пкс = 1 см каждая точка объект с тремя свойствами при этом точка С центр координат СЕ - ось Х, СG - ось У, CF - ось Z.
        var str = '';
        var flag = false;
//        полбревна стены
        var log = .5*this.building['D'];
        
        this.sizes['distance'] = new Array();
//        вылет в задании
        this.sizes['distance'].push(Math.ceil(parseFloat(this.building['m'])*100)/100);
        
        this.sizes['a'] = {x:(-this.building['bc']),y:0,z:0};
        this.sizes['c'] = {x:0,y:0,z:0};
        this.sizes['e'] = {x:this.building['cd'],y:0,z:0};
        this.sizes['g'] = {x:0,y:this.building['cg'],z:0};
        this.sizes['a1'] = {x:(this.sizes['a']['x']),y:0,z: (- this.building['W'])*100};
        this.sizes['e1'] = {x:this.sizes['e']['x'],y:0,z:(- this.building['W'])*100};
        this.sizes['g1'] = {x:0,y:this.building['cg'],z:(- this.building['W'])*100};
        
        
        
//      Cc -> tmp нижний уровень кріши отн плоскости abcdef 
//      

        var x,y,z = 0;
        x = this.sizes['a']['x']-(this.building['m']+log);
        y = this.sizes['g']['y']-(this.sizes['g']['y']*x/this.sizes['a']['x']);
        z = this.building['m']+log;
        this.sizes['A'] = {'x':x,'y':y,'z':z};
        x += 100*this.building['L']+2*(this.building['m']+log);
        this.sizes['E'] = {'x':x,'y':y,'z':z};
        z += (- this.building['W'])*100-2*(this.building['m']+log);
        x = this.sizes['A']['x'];
        this.sizes['A1'] = {'x':x,'y':y,'z':z}; 
        x = this.sizes['E']['x'];
        z = this.sizes['A1']['z'];
        this.sizes['E1'] = {'x':x,'y':y,'z':z};
        
//        довжина стропильних ніг по осях
        
                this.sizes['Ag'] = Math.pow((Math.pow((this.sizes['A']['x']-this.sizes['g']['x']),2)+Math.pow((this.sizes['A']['y']-this.sizes['g']['y']),2)+Math.pow((this.sizes['A']['z']-this.sizes['g']['z']),2)),.5);
        this.sizes['Eg'] = Math.pow((Math.pow((this.sizes['E']['x']-this.sizes['g']['x']),2)+Math.pow((this.sizes['E']['y']-this.sizes['g']['y']),2)+Math.pow((this.sizes['E']['z']-this.sizes['g']['z']),2)),.5);
        
//        все размеры стропильных ног поместим в массив

        this.length.push(this.sizes['Ag']);
        this.length.push(this.sizes['Eg']);
        
//      углы наклона стропильных ног по реперным точкам

        this.sizes['angleA'] = Math.atan((this.sizes['g']['y']-this.sizes['c']['y'])/(this.sizes['c']['x']-this.sizes['a']['x']));
        this.sizes['angleE'] = Math.atan((this.sizes['g']['y']-this.sizes['c']['y'])/(this.sizes['c']['x']-this.sizes['e']['x']));
        
        for(var i in this.sizes){
            var parm = i.substr(0,5);
            if(parm==='angle'){
                this.angles.push(this.sizes[i]);
            }
        }
        
//        @todo control
        for(var i in this.sizes){
//            str += i+' -> ';
            for(var j in this.sizes[i]){
                if(j==='x' || j==='y' || j==='z'){
                    str += i+"("+j+") = "+this.sizes[i][j]+";\t";
                }else{
                    continue;
                } 
                
            }
            if(i==='Ag' || i==='Eg'){
                str += i+' -> '+ this.sizes[i];
            }
            str += '\n';
        }
        
        var raft = 'Ag';
        
        if(this.sizes['Ag'] < this.sizes['Eg']){
            raft = 'Eg';
        }
        
//        @todo 

        for(var i in this.angles){
            this.angles[i] = Math.pow(Math.pow(180*this.angles[i]/Math.PI,2),.5);
        }
        
        this.sizes['angles'] = this.angles;
        
        this.controlPower(raft,height); 
        alert(str);
    };
    
    this.controlPower = function(raft,height){
//        размеры стропильных ног для расчета сечения оных
        var rafter = new Object();
        var tmp = 0;
        var alpha = 0;
        var W = this.building['ws'];
        var ks = 0.0098;
        var SIZE = new Array();
        var index = '';
        if(raft === 'Ag'){
            index = 'a';
        }else{
            index = 'e';
        }
        
//        расчитаем длину наибольшей ноги
        
        tmp = Math.pow(Math.pow((this.sizes['g']['x']-this.sizes[index]['x']),2)+Math.pow((this.sizes['g']['y']-this.sizes[index]['y']),2)+Math.pow((this.sizes['g']['z']-this.sizes[index]['z']),2),0.5)*2/300;
        alpha = this.sizes['angleA'];
        rafter = {'alpha':alpha,'l':tmp};
        
//            угол наклона стропила
        var gamma = rafter['alpha']*180/Math.PI;

        var mu = 0;

        if(gamma <= 30){
            mu = 1;
        }else if(gamma > 30 && gamma <= 60){
            mu =  .033*(60-gamma);
        }
//            все нагрузки в килоньютонах
//            снеговая нагрузка для нашего региона
        var Snow = ks*mu*150;

        var K = .75;

        if(this.building['Hh'] > 500 && this.building['Hh'] < 1000){
            K = 1;
        }else if(this.building['Hh'] > 1000 && this.building['Hh'] < 2000){
            K = 1.25;
        }
//  ветровая нагрузка для нашего региона      
        var Wind = ks*45*K*.8;
// суммарная нагрузка ветровая снегрвая и человег на м кв// (ks*this.building['type'])+1.2 - суммарная нагрузка кровли и человека с инструментом      
        var SUM = Snow+Wind+(ks*this.building['type'])+1.2;

// с учетом шага стропил на пог м      
        var QR = SUM*(this.building['step']/100);
//            изгибающий момент kN*m
        var Mi = (QR*(Math.pow(rafter['l'],2))/8)+(1.2*(rafter['l']*Math.cos(rafter['alpha']))/4);

//            Определяем расчетное сопротивление древесины изгибу MPa - 10^3 kN/m^2
        var Ri = 14*Math.pow(10,3)*0.8;

//            Определяемтребуемый момент сопротивления сечения

        var Wt = Math.pow(100,3)*Mi/Ri; 

//            высота сечения стропильной ноги не менее sm

        var Hr = Math.pow((6*Wt/W),1/2);

        tmp = Math.ceil(Hr*10)/10;
        for(var hs=0;hs < height.length;hs++){

            if(!(tmp >= height[hs])){  
                var hh = height[hs];
                SIZE.push({'W':W,'H':hh,'QR':QR});
                break;
            }

        }
        
        this.sizes['W'] = W;
        this.sizes['H'] = hh;
        this.sizes['QR'] = QR/ks;
                
        return false;
    };
    
    
    
    this.geometry = function(){ 
        
        
//        вычисляем координаты реперных точек в трех координатной системе принимая за начало отсчета точку с 1 пкс = 1 см каждая точка объект с тремя свойствами при этом точка С центр координат СЕ - ось Х, СG - ось У, CF - ось Z.

        var flag = false;
//        полбревна стены
        var log = .5*this.building['D'];
        
        this.sizes['distance'] = new Array();
//        вылет в задании
        this.sizes['distance'].push(Math.ceil(parseFloat(this.building['m'])*100)/100);
        
        this.sizes['a'] = {x:(-this.building['bc']),y:0,z:this.building['cf']};
        this.sizes['b'] = {x:(-this.building['bc']),y:0,z:0};
        this.sizes['c'] = {x:0,y:0,z:0};
        this.sizes['d'] = {x:this.building['cd'],y:0,z:0};
        this.sizes['e'] = {x:this.building['cd'],y:0,z:this.building['cf']};
        this.sizes['f'] = {x:0,y:0,z:this.building['cf']};
        this.sizes['g'] = {x:0,y:this.building['cg'],z:0};
//      Cc -> tmp нижний уровень кріши отн плоскости abcdef 
//      
        var x,y,z = 0;
        x = this.sizes['b']['x']-this.building['m']-log;
        y = this.sizes['g']['y']-(this.sizes['g']['y']*x/this.sizes['b']['x']);
        this.sizes['B'] = {'x':x,'y':y,'z':z};
        x = log+this.sizes['d']['x']-(this.sizes['d']['x'])*(y)/(this.sizes['g']['y']);
        var ds = Math.ceil((x-this.sizes['d']['x']-log)*100)/100;
//        вылет с тыльной стороны
        this.sizes['distance'].push(ds);
        this.sizes['D'] = {'x':x,'y':y,'z':z};
        z = log+this.sizes['f']['z']-this.sizes['f']['z']*(y)/(this.sizes['g']['y']);
        this.sizes['F'] = {'x':0,'y':y,'z':z};
//        вылет по бокам
        ds = Math.ceil((z-this.sizes['f']['z']-log)*100)/100;
        this.sizes['distance'].push(ds);
        this.sizes['A'] = {'x':this.sizes['B']['x'],'y':y,'z':z};
        this.sizes['E'] = {'x':this.sizes['D']['x'],'y':y,'z':z};
                
//        довжина стропильних ніг по осях

        this.sizes['Ag'] = Math.pow((Math.pow((this.sizes['A']['x']-this.sizes['g']['x']),2)+Math.pow((this.sizes['A']['y']-this.sizes['g']['y']),2)+Math.pow((this.sizes['A']['z']-this.sizes['g']['z']),2)),.5);
        this.sizes['Bg'] = Math.pow((Math.pow((this.sizes['B']['x']-this.sizes['g']['x']),2)+Math.pow((this.sizes['B']['y']-this.sizes['g']['y']),2)+Math.pow((this.sizes['B']['z']-this.sizes['g']['z']),2)),.5);
        this.sizes['Dg'] = Math.pow((Math.pow((this.sizes['D']['x']-this.sizes['g']['x']),2)+Math.pow((this.sizes['D']['y']-this.sizes['g']['y']),2)+Math.pow((this.sizes['D']['z']-this.sizes['g']['z']),2)),.5);
        this.sizes['Eg'] = Math.pow((Math.pow((this.sizes['E']['x']-this.sizes['g']['x']),2)+Math.pow((this.sizes['E']['y']-this.sizes['g']['y']),2)+Math.pow((this.sizes['E']['z']-this.sizes['g']['z']),2)),.5);
        this.sizes['Fg'] = Math.pow((Math.pow((this.sizes['F']['x']-this.sizes['g']['x']),2)+Math.pow((this.sizes['F']['y']-this.sizes['g']['y']),2)+Math.pow((this.sizes['F']['z']-this.sizes['g']['z']),2)),.5);
        
//        все размеры стропильных ног поместим в массив

        this.length.push(this.sizes['Ag']);
        this.length.push(this.sizes['Bg']);
        this.length.push(this.sizes['Dg']);
        this.length.push(this.sizes['Eg']);
        this.length.push(this.sizes['Fg']);
        this.length.push(this.sizes['Ag']);
        this.length.push(this.sizes['Bg']);
        this.length.push(this.sizes['Dg']);
        this.length.push(this.sizes['Eg']);
        this.length.push(this.sizes['Fg']);
        
//      углы наклона стропильных ног по реперным точкам

        this.sizes['angleA'] = Math.atan((this.sizes['g']['y']-this.sizes['c']['y'])/(this.sizes['c']['x']-this.sizes['a']['x']));
        this.sizes['angleB'] = Math.atan((this.sizes['g']['y']-this.sizes['c']['y'])/(this.sizes['c']['x']-this.sizes['b']['x']));
        this.sizes['angleD'] = Math.atan((this.sizes['g']['y']-this.sizes['c']['y'])/(this.sizes['c']['x']-this.sizes['d']['x']));
        this.sizes['angleE'] = Math.atan((this.sizes['g']['y']-this.sizes['c']['y'])/(this.sizes['c']['x']-this.sizes['e']['x']));
        this.sizes['angleF'] = Math.atan((this.building['cg'])/(this.building['cf']));
        
//        this.calculateHeight(this.building['']);
        
//        var str = '';
        
        for(var i in this.sizes){
            var parm = i.substr(0,5);
            if(parm==='angle'){
                this.angles.push(this.sizes[i]);
            }
        }   
        
//      вылет крыши М

        if(!flag){
            for(var i in this.sizes['distance']){
                if(this.sizes['distance'][i]<40){
                    if(confirm("Відстань від краю даха до стіни менша ніж 40 см.\nХай буде так, чи перерахуємо?")){
                        flag = !flag;

                    }else{
                        return false;
                    }
                }
                
            }
        }
        this.sizes['cf'] = this.building['cf'];
        this.sizes['L'] = 100*this.building['W']-2*this.building['cf'];
        
        this.Square();
        
        return this.sizes;

    };
    
    this.getSizes = function(){
        return this.sizes;
    };
    
    this.calculateHeight = function(height){
        
//        размеры стропильных ног для расчета сечения оных
        var rafter = new Object();
        var tmp = 0;
        var alpha = 0;
        var W = this.building['ws'];
        var ks = 0.0098;
        var SIZE = new Array();
        
        tmp = Math.pow(Math.pow((this.sizes['g']['x']-this.sizes['a']['x']),2)+Math.pow((this.sizes['g']['y']-this.sizes['a']['y']),2)+Math.pow((this.sizes['g']['z']-this.sizes['a']['z']),2),0.5)*2/300;
        alpha = this.sizes['angleA'];
        rafter['a'] = {'alpha':alpha,'l':tmp};
        tmp = Math.pow(Math.pow((this.sizes['g']['x']-this.sizes['b']['x']),2)+Math.pow((this.sizes['g']['y']-this.sizes['b']['y']),2)+Math.pow((this.sizes['g']['z']-this.sizes['b']['z']),2),0.5)*2/300;
        alpha = this.sizes['angleB'];
        rafter['b'] = {'alpha':alpha,'l':tmp};
        tmp = Math.pow(Math.pow((this.sizes['g']['x']-this.sizes['d']['x']),2)+Math.pow((this.sizes['g']['y']-this.sizes['d']['y']),2)+Math.pow((this.sizes['g']['z']-this.sizes['d']['z']),2),0.5)*2/300;
        alpha = this.sizes['angleD'];
        rafter['d'] = {'alpha':alpha,'l':tmp};
        tmp = Math.pow(Math.pow((this.sizes['g']['x']-this.sizes['e']['x']),2)+Math.pow((this.sizes['g']['y']-this.sizes['e']['y']),2)+Math.pow((this.sizes['g']['z']-this.sizes['e']['z']),2),0.5)*2/300;
        alpha = this.sizes['angleE'];
        rafter['e'] = {'alpha':alpha,'l':tmp};
        tmp = Math.pow(Math.pow((this.sizes['g']['x']-this.sizes['f']['x']),2)+Math.pow((this.sizes['g']['y']-this.sizes['f']['y']),2)+Math.pow((this.sizes['g']['z']-this.sizes['f']['z']),2),0.5)*2/300;
        alpha = this.sizes['angleF'];
        rafter['f'] = {'alpha':alpha,'l':tmp};        
        
        for(var i in rafter){
//            угол наклона стропила
            var gamma = rafter[i]['alpha']*180/Math.PI;
            
            var mu = 0;
            
            if(gamma <= 30){
                mu = 1;
            }else if(gamma > 30 && gamma <= 60){
                mu =  .033*(60-gamma);
            }
//            все нагрузки в килоньютонах
//            снеговая нагрузка для нашего региона
            var Snow = ks*mu*150;

            var K = .75;

            if(this.building['Hh'] > 500 && this.building['Hh'] < 1000){
                K = 1;
            }else if(this.building['Hh'] > 1000 && this.building['Hh'] < 2000){
                K = 1.25;
            }
//  ветровая нагрузка для нашего региона      
            var Wind = ks*45*K*.8;
// суммарная нагрузка ветровая снегрвая и человег на м кв// (ks*this.building['type'])+1.2 - суммарная нагрузка кровли и человека с инструментом      
            var SUM = Snow+Wind+(ks*this.building['type'])+1.2;
        
// с учетом шага стропил на пог м      
            var QR = SUM*(this.building['step']/100);
//            изгибающий момент kN*m
            var Mi = (QR*(Math.pow(rafter[i]['l'],2))/8)+(1.2*(rafter[i]['l']*Math.cos(rafter[i]['alpha']))/4);
          
//            Определяем расчетное сопротивление древесины изгибу MPa - 10^3 kN/m^2
            var Ri = 14*Math.pow(10,3)*0.8;
            
//            Определяемтребуемый момент сопротивления сечения
            
            var Wt = Math.pow(100,3)*Mi/Ri; 
            
//            высота сечения стропильной ноги не менее sm

            var Hr = Math.pow((6*Wt/W),1/2);
            
            tmp = Math.ceil(Hr*10)/10;
            for(var hs=0;hs < height.length;hs++){
                
                if(!(tmp >= height[hs])){  
                    var hh = height[hs];
                    SIZE.push({'W':W,'H':hh,'QR':QR});
                    break;
                }
             
                }
        }
        var out = {};
        tmp = 0;
        for(var i in SIZE){ 
            
            if(tmp < SIZE[i]['H']){
                tmp = SIZE[i]['H'];
                out = SIZE[i];
            }
       }
       this.sizes['W'] = out['W'];
       this.sizes['H'] = out['H'];
       this.sizes['QR'] = out['QR']/ks;
       return out;
    };
    
    this.drowTwoside = function(){
// Пам'ятай що => при этом точка С центр координат СЕ - ось Х, СG - ось У, CF - ось Z.       
        var objb = new Object();
        objb = document.getElementById("b");
        var cont = objb.getContext("2d");
        objb.width = objb.width;
        cont.lineWidth = .5;
        cont.strokeStyle = 'black';
        
        var K = 1;
        
        var param = Math.abs((K*(this.sizes['A']['z']-this.sizes['A1']['z'])));
        
        if(param > 450){
            K = 2*420/param;
        }
        
//        габарит по осям стен
        
        var l = K*param;
        
//        x0 смещаем позицию отн точки А соотв схеме вправо
//alert('a a1  '+this.sizes['a']['z']+';'+this.sizes['a1']['z']);
        var x0 = 900-(900 - K*(this.sizes['a']['z']-this.sizes['a1']['z']))/2;
        
        var y0 = K*this.building['cg']+40;
        
//        высота от 0000 до чердака

        var h = K*(100*this.building['Hh']-this.building['cf']);
        
//        высота бруса стропильной ноги
        
        var hraft = K*this.sizes['H'];
        
//        диаметр бревна

        var w = K*this.building['D'];
        
        var radius = w/2;
        
        var xn = 0,yn = 0;
        
//        уровень чердака

        cont.beginPath();
        
        xn = x0+K*(this.sizes['a']['z']);
        yn = y0-K*(this.sizes['a']['y']);
        cont.fillText ('a',xn,yn-2);
        cont.moveTo(xn, yn);
        xn += K*(this.sizes['a1']['z']);
        cont.fillText ('a1',xn,yn-2);
        cont.lineTo(xn,yn);
        cont.stroke();
        
//        уровень свеса крыши point 'A' 'A1'

        xn = x0+K*this.sizes['A']['z'];
        yn = y0-K*this.sizes['A']['y'];
        cont.fillRect(xn,yn,2,2);
        cont.fillText('A',xn,yn-2);
        cont.moveTo(xn,yn);
        xn = x0 + K*this.sizes['A1']['z'];
        cont.fillRect(xn,yn,2,2);
        cont.fillText('A1',xn,yn-2);
        cont.lineTo(xn,yn);
        
//        уровень конька

        xn = x0+K*this.sizes['A']['z'];
        yn = y0 - K*this.sizes['g']['y'];
        cont.fillRect (xn,yn,2,2);
        cont.fillText('g',xn,yn-3);
        cont.moveTo(xn,yn);
        xn = x0+K*this.sizes['A1']['z'];
        cont.fillRect (xn,yn,2,2);
        cont.fillText('g1',xn,yn-3);
        cont.lineTo(xn,yn);
        xn = x0+K*this.sizes['A']['z'];
        yn = y0 - K*this.sizes['g']['y'];
        cont.moveTo(xn,yn);
        yn = y0-K*this.sizes['A']['y'];
        cont.lineTo(xn,yn);
        xn = x0+K*this.sizes['A1']['z'];
        cont.moveTo(xn,yn);
        yn = y0 - K*this.sizes['g']['y'];
        cont.lineTo(xn,yn);
        yn = y0-K*this.sizes['A']['y'];
        cont.moveTo(xn,yn);
        xn = x0 + K*this.sizes['a1']['z'];
        yn = y0 - K*this.sizes['a1']['y'];
        cont.lineTo(xn,yn);
        xn = x0+K*this.sizes['a']['z'];
        yn = y0 - K*this.sizes['a']['y'];
        cont.moveTo(xn,yn);
        xn = x0+K*this.sizes['A']['z'];
        yn = y0-K*this.sizes['A1']['y'];
        cont.lineTo(xn,yn);
        cont.stroke ();
        
//        a woll
        cont.beginPath ();
        xn = x0+K*(this.sizes['a']['z']);
        yn = y0-K*(this.sizes['a']['y'])+radius;
        for(var i = 0;i<9;i++){
           cont.beginPath ();
           cont.arc(xn, yn+(1.8*radius*i), radius, 0, Math.PI*2, true); 
           cont.stroke ();
        }
        
//        cont.strokeRect(xn-radius,yn+radius,2*radius,150);
        
        cont.beginPath ();
        xn = x0+K*(this.sizes['a1']['z']);
        var y = 0;
        for(var i = 0;i<9;i++){
           cont.beginPath ();
           y = yn+(1.8*radius*i);
           cont.arc(xn, y, radius, 0, Math.PI*2, true); 
           cont.stroke ();
        }
        
//        null level

        cont.beginPath();
        cont.moveTo(xn,y+radius);
        xn = x0+K*(this.sizes['a']['z']);
        cont.lineTo(xn,y+radius);
        
//        крньковий брус
        xn = x0+K*this.sizes['g1']['z'];
        yn = y0 - K*this.sizes['g1']['y'];
        var br = K*(this.sizes['a']['z']-this.sizes['a1']['z']);
        alert(xn+"\n"+yn);
        cont.strokeRect(xn,yn,br,hraft);
        
        cont.stroke ();
        
//        прорисовка стропильных ног

        var kraft = br;
        var Vraft = hraft;
        Vraft = Math.pow(Math.pow(Vraft,2),.5);
        var Hraft = hraft;
        Hraft = Math.pow(Math.pow(Hraft,2),.5);

//        xn = x0-K*(this.sizes['g']['z']);
        yn = y0-K*(this.sizes['g']['y']);
        
        var ws = K*this.sizes['W'];
        
        var hs = K*(this.sizes['g']['y']-this.sizes['A']['y']);
       
        var N = Math.ceil(br/this.building['step']);
        
        var delta = kraft/N;
        
        var rigel = new Array();
        
        if(N === 0){
            delta = 0;
        }
        if(Math.floor(delta*10)/10>0){
            
            this.sizes['step'] = Math.floor(delta*10)/(10*K);
            
        }else{
            this.sizes['step'] = this.building['step'];
        }
        var str = 'PI\n'+N+'\n'+br+'\n'+delta+'\n';
        
        for(var i = 0;i<(N+1);i++){
            var x = xn+(i*delta);;
            
            if(i>0 && i<(N)){
                x -= .5*ws;
            }else if(i>=(N)){
                x -= ws;
            }
            str += 'x '+x+' y '+yn+"\n";
            cont.strokeRect(x,yn,ws,hs);
            
//            var ri = ((this.sizes['E']['x']-this.sizes['A']['x'])*(this.sizes['g']['y']-this.sizes['F']['y'])/3)/(this.sizes['g']['y']-this.sizes['F']['y']);
//            rigel.push(ri);
            
            
            
            
            
            this.length.push(Math.pow(Math.pow((hs/Math.sin(this.sizes['angleB']))/K,2),.5));
            this.length.push(Math.pow(Math.pow((hs/Math.sin(this.sizes['angleD']))/K,2),.5));

        }
//        alert(str);
    };
    
    this.drowFront = function(){
// Пам'ятай що => при этом точка С центр координат СЕ - ось Х, СG - ось У, CF - ось Z.       
        var objb = new Object();
        objb = document.getElementById("b");
        var cont = objb.getContext("2d");
        objb.width = objb.width;
        cont.lineWidth = .5;
        cont.strokeStyle = 'black';
        
//        var str = '';
        
        var K = 1;
        
        var param = (K*(this.sizes['A']['z']+this.sizes['distance'][2]+.5*this.building['D']+.5*this.building['W']*100));
        
        if(param > 450){
            K = 450/(this.sizes['A']['z']+this.sizes['distance'][2]+.5*this.building['D']+.5*this.building['W']*100);
        }
        
//        габарит по осям стен
        
        var l = K*this.building['W']*100;
        
//        x0 смещаем позицию отн точки А соотв схеме вправо

        var x0 = (900 - l - 2*K*(this.sizes['distance'][2]+.5*this.building['D'])+K*2*this.building['cf'])/2;
        
        var y0 = K*this.building['cg']+40;
        
//        высота от 0000 до чердака

        var h = K*(100*this.building['Hh']-this.building['cf']);
        
//        высота бруса стропильной ноги
        
        var hraft = K*this.sizes['H'];
        var angleF = Math.atan((this.sizes['g']['y']-this.sizes['F']['y'])/(this.sizes['F']['z']-this.sizes['B']['z']));
        
        this.angles.push(angleF);
//        диаметр бревна

        var w = K*this.building['D'];
        
        var radius = w/2;
        
//        уровень чердака

        cont.beginPath();
        
        xn = x0-K*(this.sizes['a']['z']);
        yn = y0-K*(this.sizes['a']['y']);
        cont.moveTo(xn, yn);
        var a = {'x':xn,'y':yn};
        xn = x0-K*(this.sizes['a']['z'])+l;
        cont.lineTo(xn,yn);
        cont.stroke();
        var a1 = {'x':xn,'y':yn};
//        уровень свеса крыши point 'A'
        
//        xn = x0-K*(this.sizes['A']['z']);
        var side2 = radius+K*this.sizes['distance'][2];
        xn = a['x']- side2;
        yn = y0-K*(this.sizes['A']['y']);
        cont.fillRect(xn,yn,2,2);
        cont.beginPath();
        cont.moveTo(xn, yn);
        var A = {'x':xn,'y':yn};
        
//        point 'A1'

        xn = a1['x']+side2;
        cont.lineTo(xn,yn);
        cont.stroke();
        cont.closePath();
        cont.fillRect(xn,yn,2,2);
        var A1 = {'x':xn,'y':yn};

        
//TODO это вид со стороны где видно g & g1

        var xn = 0;
        var yn = 0;
        
        var xn = x0-K*(this.sizes['g']['z']);
        var yn = y0-K*((this.sizes['g']['y']));
        
//        g-g1
        
//        коньковый брус
        var kraft = K*(this.sizes['L']);
        var Vraft = hraft;
        Vraft = Math.pow(Math.pow(Vraft,2),.5);
        var Hraft = hraft;
        Hraft = Math.pow(Math.pow(Hraft,2),.5);
        cont.strokeRect(xn,yn,kraft,Vraft);
        var g = {x:xn,y:yn};
        
//        a wholl
        
        xn = x0-K*(this.sizes['a']['z'])-.5*w;
        yn = y0-K*(this.sizes['a']['y'])+radius;
        
        cont.strokeRect(xn,yn,w,h-radius);
        
        cont.beginPath();
        cont.arc(xn+radius, yn, radius, 0, Math.PI*2, true);
        cont.stroke();
        
//        a1 wholl
        xn += (l);
        
        cont.strokeRect(xn,yn,w,h-radius); 
        
        cont.beginPath();
        cont.arc(xn+radius, yn, radius, 0, Math.PI * 2, true);
        cont.stroke();
        
//        Ag TODO
        xn = x0-K*(this.sizes['g']['z']);
        yn = y0-K*(this.sizes['g']['y']);
        cont.moveTo(xn, yn); 
        var g = {'x':xn,y:yn};
        xn = A['x'];
        yn = A['y'];
        cont.lineTo(xn,yn);
        cont.moveTo(xn, yn);
        var angleGAF = Math.atan(this.sizes['Fg']/(this.sizes['E']['x']-this.sizes['A']['x']));
        var Av = (hraft/Math.cos(this.sizes['angleA']))*Math.cos(angleGAF);
        xn += Av;
        cont.lineTo(xn,yn);
        cont.moveTo(xn, yn);
        xn = g['x'];
        yn = g['y']+Hraft;
        cont.lineTo(xn,yn);
        
//        A1g
        xn = g['x']+kraft;
        yn = g['y'];
        
        cont.moveTo(xn, yn);
        
        xn = A1['x'];
        yn = A1['y'];
        
        cont.lineTo(xn,yn);
        xn -= Av;
        
        cont.lineTo(xn,yn);
        xn = g['x']+kraft;
        yn = g['y']+Hraft;
        
        cont.lineTo(xn,yn);
        
        cont.stroke();
        cont.closePath();
        
//        прорисовка стропильных ног

        xn = x0-K*(this.sizes['g']['z']);
        yn = y0-K*(this.sizes['g']['y']);
        
        var ws = K*this.sizes['W'];
        
        var hs = K*(this.sizes['g']['y']-this.sizes['A']['y']);
       
        var N = Math.ceil(this.sizes['L']/this.building['step']);
        
        var delta = kraft/N;
        
        var rigel = new Array();
        
        if(N === 0){
            delta = 0;
        }
        if(Math.floor(delta*10)/10>0){
            
            this.sizes['step'] = Math.floor(delta*10)/(10*K);
            
        }else{
            this.sizes['step'] = this.building['step'];
        }
        
        for(var i = 0;i<(N+1);i++){
            var x = x0-K*(this.sizes['g']['z'])+(i*delta);;
            
            if(i>0 && i<(N)){
                x -= .5*ws;
            }else if(i>=(N)){
                x -= ws;
            }
            cont.strokeRect(x,yn,ws,hs);
            
            var ri = ((this.sizes['E']['x']-this.sizes['A']['x'])*(this.sizes['g']['y']-this.sizes['F']['y'])/3)/(this.sizes['g']['y']-this.sizes['F']['y']);
            rigel.push(ri);
            
            
            
            
            
            this.length.push(Math.pow(Math.pow((hs/Math.sin(this.sizes['angleB']))/K,2),.5));
            this.length.push(Math.pow(Math.pow((hs/Math.sin(this.sizes['angleD']))/K,2),.5));

        }
        
        ri = ((this.sizes['E']['x']-this.sizes['A']['x'])/3);
        this.sizes['rigel2'] = {'count':2,'long':Math.ceil(ri*100)/100};
//            alert(ri);
//        стропильные ноги на участках cf & c1f1

        if(this.building['cf'] > 0){
            
            var AB = K*(this.building['cf']+this.sizes['distance'][2]+this.building['D']/2);
            N = Math.ceil(K*AB/this.sizes['step']);
            
            var step = AB/(N);
            while(step/K > this.building['step']){
                N++;
                step = AB/(N);
            }
            
            for(var i = 1;i < (N);i++){
                
                var ys = (A['y']-g['y'])/N;
                x = A['x']+step*i;
                yn = A['y']-ys*i;
                var ls = A['y']-yn;
                cont.strokeRect(x,yn,ws,ls);
                
                this.length.push(Math.pow(Math.pow((ls/Math.sin(this.sizes['angleB']))/K,2),.5));
                this.length.push(Math.pow(Math.pow((ls/Math.sin(this.sizes['angleD']))/K,2),.5));
                
                x = A1['x']-step*i-1*ws;
                cont.strokeRect(x,yn,ws,ls);
                
                this.length.push(Math.pow(Math.pow((ls/Math.sin(this.sizes['angleB']))/K,2),.5));
                this.length.push(Math.pow(Math.pow((ls/Math.sin(this.sizes['angleD']))/K,2),.5));
            }
            
        }
        
        var rig = {'long':0,'count':0};
        
        for(var i in rigel){
              rig['count']++; 
              rig['long'] = Math.ceil(rigel[i]*100)/100; 
            }  
        
        this.sizes['rigel'] = rig;
//alert(rigel.join('\n'));        
//        нулевой уровень

        cont.beginPath();
        
        yn = y0-K*(this.sizes['a']['y'])+h;
        cont.moveTo(0,yn);
        cont.lineTo(900,yn);
        
        cont.stroke();
        cont.closePath();
        
        //        оси стен a & a1
        cont.beginPath();
        cont.strokeStyle = 'green';
        
        xn = x0-K*(this.sizes['a']['z']);
        yn = y0-K*(this.sizes['a']['y'])-20;
        cont.moveTo(xn, yn);
        yn += h+20;
        cont.lineTo(xn,yn);
        
        xn = x0-K*(this.sizes['a']['z'])+l;
        yn = y0-K*(this.sizes['a']['y'])-20;
        cont.moveTo(xn, yn);
        yn += h+20;
        cont.lineTo(xn,yn);
        cont.closePath();
        cont.stroke();
        
        this.drowSide(hraft,Av,Hraft);
        
    };
    
    this.drowSide = function(hraft,Av,Hraft){
        // Пам'ятай що => при этом точка С центр координат СЕ - ось Х, СG - ось У, CF - ось Z.
        var hraft = hraft;
        var objb = new Object();
        objb = document.getElementById("c");
        var cont = objb.getContext("2d");
        cont.lineWidth = .5;
        cont.strokeStile = 'black';
        objb.width = objb.width;
        
//        var radius = K*this.building['D']/2;
        
        var K = 1;
        
        var xn = 0;
        var yn = 0;
        
        var param = (K*(this.sizes['E']['x']-this.sizes['A']['x']));
        
//        TODO view K
        if(param > 820){
            K = 800/param;
        }
        
        var angleA = Math.atan((this.sizes['g']['y']-this.sizes['F']['y'])/(this.sizes['F']['x']-this.sizes['A']['x']));
        var angleE = Math.atan((this.sizes['g']['y']-this.sizes['F']['y'])/(this.sizes['F']['x']-this.sizes['E']['x']));
        
        this.angles.push(angleA);
        this.angles.push(angleE);
        
        var h = K*(100*this.building['Hh']-this.building['cg']-(this.sizes['A']['y']-this.sizes['a']['y']));
        
//        x0 смещаем позицию отн точки А соотв схеме вправо


        var w = K*this.building['D'];
        
        var x0 = 40-K*this.sizes['A']['x']+2*w;

        var y0 = K*this.building['cg']+40;
        
        
        
//        уровень чердака
        
        cont.strokeRect(x0,y0,6,6);

        cont.beginPath();
        
        xn = x0+K*(this.sizes['b']['x']);
        yn = y0+K*(this.sizes['a']['y']);
        cont.moveTo(xn, yn);
        xn = x0+K*(this.sizes['e']['x']);
        cont.lineTo(xn,yn);
        cont.stroke();
        
//        уровень свеса крыши point 'A'
        
        xn = x0+K*(this.sizes['A']['x']);
        yn = y0-K*(this.sizes['A']['y']);
        cont.fillRect(xn,yn,3,3);
        cont.moveTo(xn, yn);
        var A = {x:xn,y:yn};
        
//        point 'A1'

        xn = x0+K*(this.sizes['E']['x']);
        cont.lineTo(xn,yn);
        
        cont.stroke();
        cont.fillRect(xn,yn,3,3);
        var A1 = {x:xn,y:yn};

//                a wholl

               
        xn = x0+K*(this.sizes['b']['x'])-.5*w;
        yn = y0-K*(this.sizes['b']['y'])+.5*w;
        
        cont.strokeRect(xn,yn,w,h-.5*w);
        var radius = .5*w;
        cont.beginPath();
        cont.arc(xn+radius, yn, radius, 0, Math.PI*2, true);
        cont.stroke();
        
//        a1 wholl

        xn += K*(this.sizes['d']['x']-this.sizes['b']['x']);
        
        cont.strokeRect(xn,yn,w,h-.5*w); 
        cont.beginPath();
        cont.arc(xn+radius, yn, radius, 0, Math.PI*2, true);
        cont.stroke();
        
//        коньковый брус 
        var ws = K*this.sizes['W'];
        xn = x0-.5*ws;
        yn = y0-K*this.sizes['g']['y'];
        var g  = {x:xn,y:yn};
        var hs = K*(this.sizes['g']['y']-this.sizes['A']['y']);
        cont.strokeRect(xn,yn,ws,hs);
        this.length.push(hs/K);
        
//        Ag
        cont.beginPath();
        cont.moveTo(xn,yn);
        xn = A['x'];
        yn = A['y'];
        cont.lineTo(xn,yn);
        xn += Av;
        cont.lineTo(xn,yn);
        xn = g['x'];
        yn = g['y']+Hraft;
        cont.lineTo(xn,yn);
        yn = g['y'];
        cont.moveTo(xn,yn);
        xn += .5*ws;
        cont.lineTo(xn,yn);
        xn = A['x']+.5*ws;
        yn = A['y'];
        cont.lineTo(xn,yn);
        
//        gD
        xn = x0+.5*ws;
        yn = g['y'];
        cont.moveTo(xn,yn);
        xn = A1['x'];
        yn = A1['y'];
        cont.lineTo(xn,yn);
        xn -= Av;
        cont.lineTo(xn,yn);
        xn = x0+.5*ws;
        yn = g['y']+Hraft;
        cont.lineTo(xn,yn);
        cont.stroke();
        xn = x0+.5*ws;
        yn = g['y'];
        cont.moveTo(xn,yn);
        xn -= .5*ws;
        cont.lineTo(xn,yn);
        xn = A1['x']-.5*ws;
        yn = A1['y'];
        cont.lineTo(xn,yn);
        
//        нулевой уровень

        
        yn = y0-K*(this.sizes['a']['y'])+h;
        cont.moveTo(0,yn);
        cont.lineTo(900,yn);
        
        
        
//        rigel

        xn = A['x']+2*(g['x']-A['x'])/3;
        yn = A['y']-2*(A['y']-g['y'])/3;
        cont.moveTo(xn,yn);
        xn = A1['x']+ws - 2*(+A1['x'] - g['x'])/3;
        cont.lineTo(xn,yn);
        yn += Hraft*Math.cos(this.sizes['angleF']);
        cont.lineTo(xn,yn);
        xn = A['x']+2*(g['x']-A['x'])/3;
        cont.lineTo(xn,yn);
        yn -= Hraft*Math.cos(this.sizes['angleF']);
        cont.lineTo(xn,yn);
        cont.stroke();
        cont.closePath();
//        cont.strokeRect(xn,yn,this.sizes['rigel2']['long']*K,Hraft*.5);
        
//        стропильные ноги на участках Bc & cD
//    points A & F 
        
            
        var AB = K*(this.sizes['F']['x']-this.sizes['A']['x']);
        var N = Math.ceil(K*AB/this.sizes['step']);
        
        var step = AB/(N);
        while(step/K > this.building['step']){
            N++;
            step = AB/(N);
        }
        
        var x = 0;
        var dz = 0;
   
        for(var i = 1;i < (N);i++){
            
            var ys = (A['y']-g['y'])/N;
            x = A['x']+step*i;
            yn = A['y']-ys*i;
            var ls = A['y']-yn;
            
            cont.strokeRect(x,yn,ws,ls);
            ls = Math.pow(Math.pow(ls,2)+Math.pow(dz,2),1/2)/K;
            this.length.push(ls);
        }
        
//        points F & E
        AB = K*(this.sizes['E']['x']-this.sizes['F']['x']);
        N = Math.ceil(K*AB/this.sizes['step']);
        step = AB/(N);
        while(step/K > this.building['step']){
            N++;
            step = AB/(N);
        }
        
        for(var i = 1;i < (N);i++){
            var ys = (A1['y']-g['y'])/N;
            x = A1['x']-step*i-.5*w;
            yn = A1['y']-ys*i;
            var ls = A1['y']-yn;
            
            cont.strokeRect(x,yn,ws,ls);
            
            this.length.push(ls);
            
        }
        
        for(var i in this.length){
            this.length[i]=Math.ceil(Math.pow(Math.pow(this.length[i],2),1/2)*10)/10;
        }
                
//        оси стен a & a1
        cont.beginPath();
        cont.strokeStyle = 'green';
        
        xn = x0+K*(this.sizes['b']['x']);
        yn = y0-K*(this.sizes['b']['y'])-20;
        cont.moveTo(xn, yn);
        yn += h+40;
        cont.lineTo(xn,yn);
        
        xn += K*(this.sizes['d']['x']-this.sizes['b']['x']);;;
        yn = y0-K*(this.sizes['b']['y'])-20;
        cont.moveTo(xn, yn);
        yn += h+40;
        cont.lineTo(xn,yn);
        cont.closePath();
        cont.stroke();
        
        
        for(var i in this.angles){
            this.angles[i] = Math.pow(Math.pow(180*this.angles[i]/Math.PI,2),.5);
        }
        
        this.sizes['angles'] = this.angles;
    };
    
    this.Square = function(){
        var h = 0,b = 0,square = [],str = '',summ = 0, tmp = 0;
//        front
        h = this.sizes['Bg']/100;
        b = (this.sizes['A']['z']-this.sizes['B']['z'])/100;
//        tmp['comment'] = 'Перед';
        tmp=Math.ceil(h*b*100)/100;
        summ = Math.ceil(h*b*100)/100;
        b = this.building['L'];
        tmp += Math.ceil(h*b*100)/100;
        summ+=Math.ceil(h*b*100)/100;
        square.push({'comment':'Перед','val':tmp});
//        rear
        h = this.sizes['Dg']/100;
        b = (this.sizes['E']['z']-this.sizes['D']['z'])/100;
//        tmp['comment'] = '';
        tmp = Math.ceil(h*b*100)/100;
        summ+=Math.ceil(h*b*100)/100;
        b = this.building['L'];
        tmp += Math.ceil(h*b*100)/100;
        summ+=Math.ceil(h*b*100)/100;
        square.push({'comment':'Тил','val':tmp});
//        side
        h = this.sizes['Fg']/100;
        b = (this.sizes['E']['x']-this.sizes['A']['x'])/100;
//        tmp['comment'] = '';
        tmp = Math.ceil(h*b*100)/100;
        summ+=Math.ceil(h*b*100)/100;
        square.push({'comment':'Бік','val':tmp});
        
//        tmp['comment'] = '';
        tmp = Math.ceil(summ*100)/100;
        square.push({'comment':'Загальна','val':tmp});
        this.sizes['square'] = square;
        
    };
};


