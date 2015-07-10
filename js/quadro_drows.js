Drows = function (){
    
    var obj = new Object();
    obj = document.getElementById("a");
    var context = obj.getContext("2d");
    this.building = new Object();
    this.sizes = new Object();
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
//        розрахунок ноги BG
        this.sizes['BG'] = Math.pow((Math.pow(this.building['bc'],2)+Math.pow(this.building['cg'],2)),1/2);
        this.sizes['angB'] = Math.asin(this.building['cg']/this.sizes['BG']);
        this.sizes['BGL'] = this.sizes['BG'] + (this.building['m']+.5*this.building['D'])*Math.cos(this.building['cg']/this.sizes['BG']);
//        розрахунок ноги CG        
        this.sizes['DG'] = Math.pow((Math.pow(this.building['cd'],2)+Math.pow(this.building['cg'],2)),1/2);
        this.sizes['angD'] = Math.asin(this.building['cg']/this.sizes['DG']);
        this.sizes['DGL'] = this.sizes['DG'] + (this.building['m']+.5*this.building['D'])*Math.cos(this.building['cg']/this.sizes['DG']);
//        розрахунок ноги AG  
        this.sizes['AC'] = Math.pow((Math.pow(this.building['bc'],2)+Math.pow(this.building['cf'],2)),.5);
        this.sizes['AG'] = Math.pow(Math.pow(this.sizes['AC'],2)+Math.pow(this.building['cf'],2),.5);
        this.sizes['angAGB'] = Math.acos(this.sizes['AC']/this.sizes['AG']);
        this.sizes['AGL'] = this.sizes['BGL']/Math.cos(this.sizes['angAGB']);
//        розрахунок ноги EG        
        this.sizes['CE'] = Math.pow((Math.pow(this.building['cd'],2)+Math.pow(this.building['cf'],2)),.5);
        this.sizes['EG'] = Math.pow(Math.pow(this.sizes['CE'],2)+Math.pow(this.building['cf'],2),.5);
        this.sizes['angDGE'] = Math.acos(this.sizes['CE']/this.sizes['EG']);
        this.sizes['AGL'] = this.sizes['DGL']/Math.cos(this.sizes['angDGE']);
//        розрахунок ноги FG         
        this.sizes['FG'] = Math.pow((Math.pow(this.building['cf'],2)+Math.pow(this.building['cg'],2)),1/2);
        this.sizes['anfF'] = Math.asin(this.building['cg']/this.sizes['FG']);
        this.sizes['FGL'] = this.sizes['BG'] + (this.building['m']+.5*this.building['D'])*Math.cos(this.building['cg']/this.sizes['BG']);
        this.sizes['m'] = (this.sizes['FGL'] - this.sizes['FG'])*Math.cos(this.sizes['anfF']);
        
        return this.sizes;
    };
};


