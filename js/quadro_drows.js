Drows = function (){
    
    var obj = new Object();
    obj = document.getElementById("a");
    var context = obj.getContext("2d");
    this.building = new Object();
    this.sizes = new Object();
    this.length = new Array();
    
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
        
        
//        вычисляем координаты реперных точек в трех координатной системе принимая за начало отсчета точку с 1 пкс = 1 см каждая точка объект с тремя свойствами при этом точка С центр координат СЕ - ось Х, СG - ось У, CF - ось Z.
        var tmp = 0;
        var flag = false;
        
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
        
        var points = {'a':this.sizes['a'],'b':this.sizes['b'],'c':this.sizes['c'],'d':this.sizes['d'],'e':this.sizes['e'],'f':this.sizes['f'],'g':this.sizes['g'],'A':this.sizes['A'],'B':this.sizes['B'],'D':this.sizes['D'],'E':this.sizes['E'],'F':this.sizes['F']};
        this.sizes['points'] = points;
        
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
        this.sizes['angleF'] = Math.atan((this.sizes['g']['y']-this.sizes['c']['y'])/(this.sizes['c']['x']-this.sizes['f']['x']));
        
//      вылет крыши М
        
        var m = new Array();
        
        m.push((this.sizes['b']['x']-this.sizes['B']['x']-.5*this.building['D']));
        m.push((this.sizes['D']['x']-this.sizes['d']['x']-.5*this.building['D']));
        m.push((this.sizes['F']['z']-this.sizes['f']['z']-.5*this.building['D']));
        if(!flag){
            for(var i in m){
                if(m[i]<40){
                    if(confirm("Відстань від краю даха до стіни менша ніж 40 см.\nХай буде так, чи перерахуємо?")){
                        flag = !flag;

                    }else{
    //                    flag = !flag;
                        return false;
                    }
                }
                
            }
        }
        this.sizes['mar'] = m;
        this.sizes['cf'] = this.building['cf'];
        this.sizes['L'] = 100*this.building['W']-2*this.building['cf'];
        
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
    
    this.drowFront = function(){
// Пам'ятай що => при этом точка С центр координат СЕ - ось Х, СG - ось У, CF - ось Z.       
        var objb = new Object();
        objb = document.getElementById("b");
        var cont = objb.getContext("2d");
        cont.lineWidth = .5;
        
//        var str = '';
        
        var K = 1;
        
        var param = (K*(this.sizes['points']['A']['z']+this.sizes['mar'][2]+.5*this.building['D']+.5*this.building['W']*100));
        
        if(param > 430){
            K = 430/(this.sizes['points']['A']['z']+this.sizes['mar'][2]+.5*this.building['D']+.5*this.building['W']*100);
        }
        
        var l = K*this.building['W']*100;
        
//        x0 смещаем позицию отн точки А соотв схеме вправо

        var x0 = (900 - l - 2*K*(this.sizes['mar'][2]+.5*this.building['D'])+K*2*this.building['cf'])/2;
        
//        var x0 = 20+(K*(this.sizes['points']['A']['z']+(this.sizes['mar'][2]+.5*this.building['D']))); 
        
        var y0 = K*this.building['cg']+40;
        
//        K*2*this.building['cf']+
        var h = K*(100*this.building['Hh']-this.building['cg']-(this.sizes['points']['A']['y']-this.sizes['points']['a']['y']));
        
//        высота бруса стропильной ноги
//        
        var hraft = K*this.sizes['H']/Math.cos(this.sizes['angleA']);
        
//        уровень чердака

        cont.beginPath();
        
        xn = x0-K*(this.sizes['points']['a']['z']);
        yn = y0-K*(this.sizes['points']['a']['y']);
        cont.moveTo(xn, yn);
        xn = x0-K*(this.sizes['points']['a']['z'])+l;
        cont.lineTo(xn,yn);
        cont.stroke();
        
        cont.beginPath();
        
//        уровень свеса крыши point 'A'
        
        xn = x0-K*(this.sizes['points']['A']['z']);
        yn = y0-K*(this.sizes['points']['A']['y'])+hraft/Math.cos(this.sizes['angleB']);
        cont.moveTo(xn, yn);
        
//        point 'A1'

        xn = x0-K*(this.sizes['points']['a']['z'])+l+(this.sizes['mar'][2]+this.building['D']);
        cont.lineTo(xn,yn);
        
        cont.stroke();
        
//TODO это вид со стороны где видно g & g1

        var xn = 0;
        var yn = 0;
        
        var xn = x0-K*(this.sizes['points']['g']['z']);
        var yn = y0-K*((this.sizes['points']['g']['y']));
        
////        g-g1
//        коньковый брус
        var kraft = K*(this.sizes['L']+this.building['D']);
        cont.strokeRect(xn,yn,kraft,hraft);
//        
//        a wholl
        var w = K*this.building['D'];
        xn = x0-K*(this.sizes['points']['a']['z']);
        yn = y0-K*(this.sizes['points']['a']['y']);
        
        cont.strokeRect(xn,yn,w,h);
        
//        a1 wholl
        xn += (l);
        
        cont.strokeRect(xn,yn,w,h); 
        
        cont.beginPath();
        
//        Ag
        xn = x0-K*(this.sizes['points']['g']['z']);
        yn = y0-K*(this.sizes['points']['g']['y'])+hraft;
        cont.moveTo(xn, yn);   
        xn = x0-K*(this.sizes['points']['A']['z']);
        yn = y0-K*(this.sizes['points']['A']['y'])+hraft/Math.cos(this.sizes['angleB']);
        cont.lineTo(xn,yn);
        cont.moveTo(xn, yn);
        yn -= hraft/Math.cos(this.sizes['angleB']);
        cont.lineTo(xn,yn);
        cont.moveTo(xn, yn);
        xn = x0-K*(this.sizes['points']['g']['z']);
        yn = y0-K*(this.sizes['points']['g']['y']);
        cont.lineTo(xn,yn);
        
//        A1g
        xn = x0+K*(this.sizes['points']['g']['z'])+kraft;
        yn = y0-K*(this.sizes['points']['g']['y'])+hraft;
        
        cont.moveTo(xn, yn);
        
        xn = x0-K*(this.sizes['points']['a']['z'])+l+this.sizes['mar'][2]+this.building['D'];
        yn = y0-K*(this.sizes['points']['A']['y'])+hraft/Math.cos(this.sizes['angleB']);
        
        cont.lineTo(xn,yn);
        
        cont.moveTo(xn, yn);
        
        yn -= hraft/Math.cos(this.sizes['angleB']);
        
        cont.lineTo(xn,yn);
        
        cont.moveTo(xn, yn);
        
        xn = x0+K*(this.sizes['points']['g']['z'])+kraft;
        yn = y0-K*(this.sizes['points']['g']['y']);
        
        cont.lineTo(xn,yn);
        
        cont.stroke();
        

        
//        прорисовка стропильных ног

        xn = x0-K*(this.sizes['points']['g']['z']);
        yn = y0-K*(this.sizes['points']['g']['y']);
        
        var ws = K*this.sizes['W'];
        
        var hs = K*(this.sizes['points']['g']['y']-this.sizes['points']['A']['y'])+hraft/Math.cos(this.sizes['angleB']);
       
        var N = Math.ceil(this.sizes['L']/this.building['step']);
        
        var delta = kraft/N;
        
        if(N === 0){
            delta = 0;
        }
        if(Math.floor(delta*10)/10>0){
            
            this.sizes['step'] = Math.floor(delta*10)/(10*K);
        
//            delta = delta;
            
        }else{
            this.sizes['step'] = this.building['step'];
        } 
        this.length.push(0);
        for(var i = 0;i<(N+1);i++){
            var x = x0-K*(this.sizes['points']['g']['z'])+(i*delta);;
            
            if(i>0 && i<(N)){
                x -= .5*ws;
            }else if(i>=(N)){
                x -= ws;
            }
            cont.strokeRect(x,yn,ws,hs);
            
            this.length.push((hs/Math.sin(this.sizes['angleB'])/K));
            this.length.push((hs/Math.sin(this.sizes['angleD'])/K));

        }
//        стропильные ноги на участках cf & c1f1

        if(this.building['cf'] > 0){
            
            var AB = K*(this.building['cf']+this.sizes['mar'][2]+this.building['D']/2);
            N = Math.ceil(K*AB/this.sizes['step']);
            var xA1 = x0-K*(this.sizes['points']['a']['z'])+l+(this.sizes['mar'][2]+this.building['D'])+ws;
            var step = AB/(N);
            while(step/K > this.building['step']){
                N++;
                step = AB/(N);
            }
            this.length.push(1);
            for(var i = 1;i < (N);i++){
                var ls = K*(this.sizes['Bg']*step*i/AB)*Math.sin(this.sizes['angleB'])+hraft/Math.cos(this.sizes['angleB']);
                x = x0-K*(this.sizes['points']['A']['z'])+step*i;
                yn = y0-K*(this.sizes['points']['A']['y'])-ls+hraft/Math.cos(this.sizes['angleB']);
                cont.strokeRect(x,yn,ws,ls);
                
                this.length.push((ls/Math.sin(this.sizes['angleB'])/K));
                this.length.push((ls/Math.sin(this.sizes['angleD'])/K));
                x = xA1- step*i-K*this.sizes['W']-(hraft*Math.sin(this.sizes['angleA'])/2)- (hraft*Math.sin(this.sizes['angleA'])/2);
                cont.strokeRect(x,yn,ws,ls);
                this.length.push((ls/Math.sin(this.sizes['angleB'])/K));
                this.length.push((ls/Math.sin(this.sizes['angleD'])/K));
            }
            
        }
        
//        нулевой уровень

        cont.beginPath();
        
        yn = y0-K*(this.sizes['points']['a']['y'])+h;
        cont.moveTo(0,yn);
        cont.lineTo(900,yn);
        
        cont.stroke();
        
        this.drowSide();
        
    };
    
    this.drowSide = function(){
        // Пам'ятай що => при этом точка С центр координат СЕ - ось Х, СG - ось У, CF - ось Z.       
        var objb = new Object();
        objb = document.getElementById("c");
        var cont = objb.getContext("2d");
        cont.lineWidth = .5;
        
//        var str = '';
        
        var K = 1;
        
        var xn = 0;
        var yn = 0;
        
        var param = (K*(this.sizes['points']['A']['x']+this.sizes['mar'][2]+.5*this.building['D']+.5*this.building['L']*100));
        
        if(param > 305){
            K = 305/(this.sizes['points']['A']['x']+(this.sizes['mar'][0]+this.sizes['mar'][1])/2+.5*this.building['D']+.5*this.building['L']*100);
        }
        
        var l = K*this.building['L']*100;
        
        var h = K*(100*this.building['Hh']-this.building['cg']-(this.sizes['points']['A']['y']-this.sizes['points']['a']['y']));
        
//        x0 смещаем позицию отн точки А соотв схеме вправо

        var x0 = (900 - l  - K*(this.sizes['mar'][0]+this.sizes['mar'][1]+.5*this.building['D']))/2;
        
//        var x0 = 20+(K*(this.sizes['points']['A']['z']+(this.sizes['mar'][2]+.5*this.building['D'])));+K*2*this.building['cf'] 
        
        var y0 = K*this.building['cg']+40;
        
        //        уровень чердака

        cont.beginPath();
        
        xn = x0-K*(this.sizes['points']['a']['x']);
        yn = y0-K*(this.sizes['points']['a']['y']);
        cont.moveTo(xn, yn);
        xn = x0-K*(this.sizes['points']['a']['x'])+l;
        cont.lineTo(xn,yn);
        cont.stroke();
        
        cont.beginPath();
        
//        уровень свеса крыши point 'A'
        
        xn = x0-K*(this.sizes['points']['A']['x']);
        yn = y0-K*(this.sizes['points']['A']['y'])+hraft/Math.cos(this.sizes['angleB']);
        cont.moveTo(xn, yn);
        
//        point 'A1'

        xn = x0-K*(this.sizes['points']['a']['x'])+l+(this.sizes['mar'][2]+this.building['D']);
        cont.lineTo(xn,yn);
        
        cont.stroke();
        
        //        нулевой уровень

        cont.beginPath();
        
        yn = y0-K*(this.sizes['points']['a']['y'])+h;
        cont.moveTo(0,yn);
        cont.lineTo(900,yn);
        
        cont.stroke();
    };
};


