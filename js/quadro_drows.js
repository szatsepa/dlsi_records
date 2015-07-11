Drows = function (){
    
    var obj = new Object();
    obj = document.getElementById("a");
    var context = obj.getContext("2d");
    this.building = new Object();
    this.sizes = new Object();
    this.sizes['num'] = 0;
    this.gamma = 0;
    this.gamma1 = 0;
    this.snow = 150;
    this.wind = 45;
    this.AB = 0;
    this.BC = 0;
    this.Halpha = 0;
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
    //        розрахунок ноги EG        
            this.sizes['ce'] = Math.pow((Math.pow(this.building['cd'],2)+Math.pow(this.building['cf'],2)),.5);
            this.sizes['eg'] = Math.pow(Math.pow(this.sizes['ce'],2)+Math.pow(this.building['cf'],2),.5);
            this.sizes['Eg'] = (this.sizes['Dg']*this.sizes['ag'])/this.sizes['dg'];
    ////        розрахунок ноги FG         
            this.sizes['fg'] = Math.pow((Math.pow(this.building['cf'],2)+Math.pow(this.building['cg'],2)),1/2);
            this.sizes['angleF'] = Math.asin(this.building['cg']/this.sizes['fg']);
            this.sizes['Fg'] = Math.pow(Math.pow(this.sizes['Ag'],2) - Math.pow((this.sizes['Ag']*this.building['bc'])/this.sizes['ag'],2),1/2);
            this.sizes['m'] = (this.sizes['Fg']-this.sizes['fg'])*this.building['cf']/this.sizes['fg']-this.building['D']/2;
    //        розрахунок стріхи gg
            this.sizes['L'] = 100*this.building['L'] - 2*this.building['cf'];
            
            if(this.sizes['m'] >= (this.building['m']-3)){
                break;
            }
        }
        
        return this.sizes;
        
        
        
        
//        if(this.sizes['m'] >= this.building['m']){
////           
//           return {'joppa':'pizdets'};           
//        }else{
//            this.resize(); 
//        }
    };
    
    this.resize = function(){
        
      this.building['cf'] += 5;
     
      this.geometry(this.building);
    };
};


