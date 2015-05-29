$(document).ready(function(){

    var brns = 0;
    var volume = 0;

    $("#table_history tbody tr td").css({'text-align':'center'});
    $("#table_history thead tr th").css({'text-align':'center'});
//        $("#table_history tbody tr").find('td:eq(1)').css({'cursor':'pointer','background':'#eee'}).mouseover(function(){$(this).css({'font-weight':'bolder','font-size':'110%'})}).mouseout(function(){$(this).css({'font-weight':'normal','font-size':'0.8em'})}).attr({'title':'Щоби вибрати тиць сюди!'});
    $(".btnV").css({'cursor':'pointer'}).mouseover(function(){$(this).css({'font-weight':'bolder','font-size':'110%','color':'red'})}).mouseout(function(){$(this).css({'font-weight':'normal','font-size':'0.8em','color':'black'})}).attr({'title':'Щоби вибрати тиць сюди!'});
    $(".btnV").mousedown(function(){
        console.log($(this).val());
        var num = parseInt($(this).val());
        document.location = '/pay/part/'+num;
    });
});

