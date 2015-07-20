Drows = function (){
    
    var obj = new Object();
    obj = document.getElementById("a");
    var context = obj.getContext("2d");
    this.building = new Object();
    this.sizes = new Object();
    
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
//        вычисляем координаты реперных точек в трех координатной системе принимая за начало отсчета точку с 1 пкс = 1 см каждая точка объект с тремя свойствами
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
        this.sizes['L'] = 100*this.building['L']-2*this.building['cf'];
        
        return this.sizes;

    };
    
    this.getSizes = function(){
        return this.sizes;
    };
    
    this.sizeH = function(height){
        
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
    
    this.drowDach = function(){
//        Теперь относительно математического аппарата. Нам нужно уметь преобразовать реальные трехмерные 
//        координаты точек поверхности кубика в двухмерные (изометрическая проекция на экран).
//           Это мы сможем сделать с помощью следующих формул:
//      x' = (x — z) * sin 60о = (x — z) * 0.866
//      y' = (x + z) * cos 60о — y = (x + z) * 0.5 — y,
//      где x,y,z — реальные координаты точек куба, x',y' — координаты точек на экране.constructor
        var objb = new Object();
        objb = document.getElementById("b");
        var cont = objb.getContext("2d");
        var cosX = .866;
        var sinY = .5;
        var l = this.building['L']*100;
        var x0 = 1350;
        var y0 = 500;
        var str = '';
        var garret = new Object();
//        var tmp = ((this.sizes['points']['a']['x']-this.sizes['points']['a']['z'])*0.866) + x0;
//        alert(tmp);
        garret['a'] = {'x':.5*((this.sizes['points']['a']['x']-this.sizes['points']['a']['z'])*cosX + x0),'y':.5*((this.sizes['points']['a']['x']+this.sizes['points']['a']['z'])*sinY - this.sizes['points']['a']['y']+y0)};
        garret['a1'] = {'x':.5*((this.sizes['points']['a']['x']-(this.sizes['points']['a']['z']+l))*cosX +x0),'y':.5*((this.sizes['points']['a']['x']+(this.sizes['points']['a']['z']+l))*sinY - this.sizes['points']['a']['y']+y0)};
////        
        garret['e1'] = {'x':.5*(((this.sizes['points']['e']['x'])-(this.sizes['points']['e']['z']+l))*cosX + x0),'y':.5*(((this.sizes['points']['e']['x'])+(this.sizes['points']['e']['z']+l))*sinY - this.sizes['points']['e']['y']+y0)};
        garret['e'] = {'x':.5*((this.sizes['points']['e']['x']-this.sizes['points']['e']['z'])*cosX + x0),'y':.5*((this.sizes['points']['e']['x']+this.sizes['points']['e']['z'])*sinY - this.sizes['points']['e']['y']+y0)};
        
        cont.fillStyle = "green";
        
        var lines = new Array();
        
        for(var i in garret){
            var xn = garret[i]['x'];
            var yn = garret[i]['y'];
            cont.fillRect(xn, yn,6,6);
            lines.push({'x':xn,'y':yn});
            
        }

        cont.beginPath();
        for(var i=0;i<lines.length-1;i++){
            
        
            cont.moveTo(lines[i]['x'], lines[i]['y']);
            cont.lineTo(lines[i+1]['x'], lines[i+1]['y']);
        }
        cont.moveTo(lines[lines.length-1]['x'], lines[lines.length-1]['y']);
        cont.lineTo(lines[0]['x'], lines[0]['y']);
                
        cont.strokeStyle = "#ff0";
        cont.stroke();
        
        var lowerroof = new Object();
        
        var L = l+this.sizes['mar'][0]+.5*this.building['D']+this.sizes['mar'][1];
        var L1 = l+this.sizes['mar'][1]+.5*this.building['D'];
        
        lowerroof['A'] = {'x':.5*((this.sizes['points']['A']['x']-this.sizes['points']['A']['z'])*cosX + x0),'y':.5*((this.sizes['points']['A']['x']+this.sizes['points']['A']['z'])*sinY - this.sizes['points']['A']['y']+y0)};
        lowerroof['A1'] = {'x':.5*((this.sizes['points']['A']['x']-(this.sizes['points']['A']['z']+L))*cosX +x0),'y':.5*((this.sizes['points']['A']['x']+(this.sizes['points']['A']['z']+L))*sinY - this.sizes['points']['A']['y']+y0)};
//        
        lowerroof['E1'] = {'x':.5*(((this.sizes['points']['E']['x'])-(this.sizes['points']['E']['z']+L))*cosX + x0),'y':.5*(((this.sizes['points']['E']['x'])+(this.sizes['points']['E']['z']+L))*sinY - this.sizes['points']['E']['y']+y0)};
        lowerroof['E'] = {'x':.5*((this.sizes['points']['E']['x']-(this.sizes['points']['E']['z']))*cosX + x0),'y':.5*((this.sizes['points']['E']['x']+(this.sizes['points']['E']['z']))*sinY - this.sizes['points']['E']['y']+y0)};
        
        lines.length = 0;
        cont.fillStyle = "brown";
        for(var i in lowerroof){
            var xn = lowerroof[i]['x'];
            var yn = lowerroof[i]['y'];
            cont.fillRect(xn, yn,6,6);
            lines.push({'x':xn,'y':yn});
            
        }
        
        lowerroof['g'] = {'x':.5*((this.sizes['points']['g']['x']-this.sizes['points']['g']['z'])*cosX + x0),'y':.5*((this.sizes['points']['g']['x']+this.sizes['points']['g']['z'])*sinY - this.sizes['points']['g']['y']+y0)};
        cont.fillRect(lowerroof['g']['x'], lowerroof['g']['y'],6,6);
        var gg = this.sizes['L'];
        lowerroof['g1'] = {'x':.5*((this.sizes['points']['g']['x']-(this.sizes['points']['A']['z']+gg))*cosX +x0),'y':.5*((this.sizes['points']['g']['x']+(this.sizes['points']['g']['z']+gg))*sinY - this.sizes['points']['g']['y']+y0)};
        cont.fillRect(lowerroof['g1']['x'], lowerroof['g1']['y'],6,6);
        
        cont.beginPath();
        for(var i=0;i<lines.length-1;i++){
            
        
            cont.moveTo(lines[i]['x'], lines[i]['y']);
            cont.lineTo(lines[i+1]['x'], lines[i+1]['y']);
        }
        cont.moveTo(lines[lines.length-1]['x'], lines[lines.length-1]['y']);
        cont.lineTo(lines[0]['x'], lines[0]['y']);
        
        cont.moveTo(lowerroof['g']['x'], lowerroof['g']['y']);
        cont.lineTo(lowerroof['g1']['x'], lowerroof['g1']['y']);
        
        cont.moveTo(lowerroof['g']['x'], lowerroof['g']['y']);
        cont.lineTo(lowerroof['A']['x'], lowerroof['A']['y']);
        
        cont.moveTo(lowerroof['g1']['x'], lowerroof['g1']['y']);
        cont.lineTo(lowerroof['A1']['x'], lowerroof['A1']['y']);
        
        cont.moveTo(lowerroof['g']['x'], lowerroof['g']['y']);
        cont.lineTo(lowerroof['E']['x'], lowerroof['E']['y']);
        
        cont.moveTo(lowerroof['g1']['x'], lowerroof['g1']['y']);
        cont.lineTo(lowerroof['E1']['x'], lowerroof['E1']['y']);
        
        alert('e '+garret['e']['x']+' - '+garret['e']['y']+';\n'+'e1 '+garret['e1']['x']+' - '+garret['e1']['y']+';\n'+"g1 "+lowerroof['g1']['x']+' - '+ lowerroof['g1']['y']+";\nE1 "+lowerroof['E1']['x']+' - '+lowerroof['E1']['y']);
                
        cont.strokeStyle = "brown";
        cont.stroke();
        
    };
    
    this.drowFront = function(){
        
        var objb = new Object();
        objb = document.getElementById("b");
        var cont = objb.getContext("2d");
        var l = this.building['L']*100;
        var x0 = 450;
        var y0 = 250;
        var h = 100*this.building['Hh']-this.building['cg']-(this.sizes['points']['A']['y']-this.sizes['points']['a']['y']);
        var dx = this.sizes['points']['a']['x'] - this.sizes['points']['A']['x'];
        
        cont.fillStyle = "brown";
//TODO это вид со стороны где видно g & g1
//
//        cont.fillRect(x0+this.sizes['points']['a']['x'],y0+this.sizes['points']['a']['y'],6,6);
//        cont.fillRect(x0+this.sizes['points']['a']['x']+l,y0+this.sizes['points']['a']['y'],6,6);
//        cont.fillRect(x0+this.sizes['points']['g']['x'],y0-this.sizes['points']['g']['y'],6,6);
//        cont.fillRect(x0+this.sizes['points']['A']['x'],y0-this.sizes['points']['A']['y'],6,6);
//        
//        cont.fillRect((x0+this.sizes['points']['A']['x']+l+2*dx),y0-this.sizes['points']['A']['y'],6,6);
        cont.fillStyle = "brown"; 
        cont.beginPath();
        cont.strokeStyle = "brown";
        cont.strokeRect(x0+this.sizes['points']['a']['x'],y0-this.sizes['points']['a']['y'],this.building['D'],h);
        cont.strokeRect(x0+this.sizes['points']['a']['x']+l-this.building['D'],y0-this.sizes['points']['a']['y'],this.building['D'],h);
//        
        cont.strokeStyle = "brown";
        cont.stroke();
        cont.beginPath();
        
//        высота бруса стропильной ноги
        
        var hraft_a = this.sizes['H']*Math.cos(this.sizes['angleA']);
        var hraft_a = this.sizes['H']*Math.cos(this.sizes['angleA']);

        cont.moveTo(x0+this.sizes['points']['A']['x'], y0-this.sizes['points']['A']['y']);
        cont.lineTo((x0+this.sizes['points']['A']['x']+l+2*dx),y0-this.sizes['points']['A']['y']);
        
        
        cont.moveTo((x0+this.sizes['points']['A']['x']+l+2*dx),y0-this.sizes['points']['A']['y']);
        cont.lineTo(x0+this.sizes['points']['g']['x'],y0-this.sizes['points']['g']['y']);
        cont.moveTo(x0+this.sizes['points']['g']['x'],y0-this.sizes['points']['g']['y']);
        cont.lineTo(x0+this.sizes['points']['A']['x'], y0-this.sizes['points']['A']['y']);
        
        cont.strokeStyle = "brown";
        cont.stroke();
        
        cont.beginPath();
        
//        cont.moveTo(x0+this.sizes['points']['a']['x'],y0+this.sizes['points']['a']['y']+h);
//        cont.lineTo(x0+this.sizes['points']['a']['x'],y0+this.sizes['points']['a']['y']);
//        cont.moveTo(x0+this.sizes['points']['a']['x']+l,y0+this.sizes['points']['a']['y']);
//        cont.lineTo(x0+this.sizes['points']['a']['x']+l,y0+this.sizes['points']['a']['y']+h);
//        cont.moveTo(x0+this.sizes['points']['a']['x'],y0+this.sizes['points']['a']['y']+h);
//        cont.lineTo(x0+this.sizes['points']['a']['x']+l,y0+this.sizes['points']['a']['y']+h);
//        
//        cont.strokeStyle = "#f69";
//        cont.stroke();

    };
    
    this.drowSide = function(){
        var objb = new Object();
        var points = new Array();
        objb = document.getElementById("b");
//        objb.width = objb.width;
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
        cont.strokeStyle = "green";
        cont.stroke();
    };
};


