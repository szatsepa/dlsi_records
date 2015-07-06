$(document).ready(function(){
tut();
});



function tut(){
    
    var obj = {};
    obj = document.getElementById("a");
    var context = obj.getContext("2d");
    
    var wood = new Image();
    wood.src = "../images/wood.png";
    wood.onload = function() {
        for(var y = 370;y > 280;y-=30){
            context.drawImage(wood, 150,y,30,30);
        }
        for(var y = 370;y > 280;y-=30){
            context.drawImage(wood, 530,y,30,30);
        }
        
        };
        
//    context.fillRect(50, 25, 150, 100);
    for (var x = 0.5; x < 680; x += 10) {
        context.moveTo(x, 0);
        context.lineTo(x, 400);
        }
    for (var y = 0.5; y < 400; y += 10) {
        context.moveTo(0, y);
        context.lineTo(680, y);
        }
    context.strokeStyle = "#eee";
    context.stroke();
    
    context.beginPath();
    context.moveTo(0, 40);
    context.lineTo(330, 40);
    context.moveTo(360, 40);
    context.lineTo(680, 40);
    context.moveTo(675, 35);
    context.lineTo(680, 40);
    context.lineTo(675, 45);
    
    context.moveTo(50, 0);
    context.lineTo(50, 185);
    context.moveTo(50, 215);
    context.lineTo(50, 400);
    context.moveTo(55, 395);
    context.lineTo(50, 400);
    context.lineTo(45, 395);
    
    context.moveTo(165,310);
    context.lineTo(545, 310);
    context.moveTo(545,310);
    context.lineTo(545, 290);
    context.moveTo(545,290);
    context.lineTo(165, 290);
    context.moveTo(165,290);
    context.lineTo(165, 310);
    
    context.strokeStyle = "#000";
    context.stroke();
    
    context.textBaseline = "top";
    context.fillText("( 0 , 0 )", 8, 5);
    
    context.textAlign = "right";
    context.textBaseline = "bottom";
    context.fillText("( 600 , 400 )", 672, 395);
    
//    context.font = "bold 12px sans-serif";
//    context.fillText("x", 350, 43);
//    context.fillText("y", 58, 165);

    context.font = "bold 12px sans-serif";
    context.fillText("x", 350, 43);
    context.fillText("y", 53, 205);

    context.fillRect(0, 0, 3, 3);
    context.fillRect(677, 397, 3, 3);
    
//    wood = new Image();
//    wood.src = "../images/wood.png";
//    wood.onload = function() {
//        alert("wood.src");
////        for (var x = 0, y = 0;x < 500 && y < 375;x += 50, y += 37) {}
//        context.drawImage(wood, 380,200);
//        
//        };


}

