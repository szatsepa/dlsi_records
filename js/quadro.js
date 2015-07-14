$(document).ready(function(){
    
    var huynja =  new Drows();
    
    huynja.init();
    
    
    $("canvas#a").css('outline','1px solid #ccc');
    
    $("a").live('click',function(){
       document.location.reload();  
    });
    
    $("select#hs").change(function(){
        $("input#Hh").focus().select();
    }); 
    
    $("input#Hh").keypress(function(e){
        if(e.which === 13){
            
            $("input#W").focus().select();
        }
    });
    $("input#L").keypress(function(e){
        if(e.which === 13){
            
            $("input#D").focus().select();
        }
    });
    
    $("input#W").keypress(function(e){
        if(e.which === 13){
            
            $("input#L").focus().select();
        }
    });
    
    $("input#D").keypress(function(e){
        if(e.which === 13){
            
            $("input#bc").focus().select();
        }
    });

    $("input#bc").keypress(function(e){
        if(e.which === 13){
            
            var cd = parseFloat($("input#W").val())*100 - parseFloat($(this).val());
            
            $("input#cd").val(cd).focus().select();
        }
    });
    
    $("input#cd").keypress(function(e){
        if(e.which === 13){
            
            var bc = parseFloat($("input#W").val())*100 - parseFloat($(this).val());
            $("input#bc").val(bc);
            $("input#cf").focus().select();
        }
    });
    
    $("input#cf").keypress(function(e){
        if(e.which === 13){
            
            $("input#cg").focus().select();
        }
    });
    
    $("input#cg").keypress(function(e){
        if(e.which === 13){
            
            $("input#m").focus().select();
        }
    });
    $("input#m").keypress(function(e){
        if(e.which === 13){
            
            $("input#step").focus().select();
        }
    });
    
    $("input#step").keypress(function(e){
        if(e.which === 13){
            view(huynja.geometry(prepare()));
        }
    });
    
    
    $("input.btn-save").mousedown(function(){
        
        view(huynja.geometry(prepare()));
     });
    
    function prepare(){
        
        var flag = true;
        var dataobj = new Object();
        
        $.each($("select option:selected"), function(){
            
            if($(this).val() === undefined || $(this).val() === ''){
                flag = false;
            }
            
            dataobj[$(this).parent().attr('id')] = parseFloat($(this).val());
        });
        
        $.each($("input"),function(){
            if($(this).val() === undefined || $(this).val() === ''){
                flag =  false;
            }
            dataobj[$(this).attr('id')] = parseFloat($(this).val());
        });
        
        if(!flag){
            alert("Не все заповнено - перевірте");
                return false;
        }else{
            
            return dataobj;
        }
   
    }
    
    function view(obj){
        
        var Ag = Math.ceil(obj['Ag']*100)/100;
        var Bg = Math.ceil(obj['Bg']*100)/100;
        var Dg = Math.ceil(obj['Dg']*100)/100;
        var Eg = Math.ceil(obj['Eg'])*100/100;
        var Fg = Math.ceil(obj['Fg']*100)/100;
        var cf = Math.ceil(obj['cf']*100)/100;
        var L = Math.ceil(obj['L']*100)/100;
        var mf = Math.ceil(obj['mf']*100)/100;
        var ms = Math.ceil(obj['ms']*100)/100;
        var W = Math.ceil(obj['W']*10);
        var H = Math.ceil(obj['H']*10);
        var QR = Math.ceil(obj['QR']*100)/100;
        
        $("table tbody tr td#res").empty();
        $("table tbody tr td#res").append("<p><strong>Геометричні розміри</strong></p>Загальні:<br/>Габарити по осях - "+$("input#W").val()+" X "+$("input#L").val()+" m.;<br/><br/>Стропило Ag - "+Ag+" sm.<br/>Стропило Bg - "+Bg+" sm.<br/>Стропило Dg - "+Dg+" sm.<br/>Стропило Eg - "+Eg+" sm.<br/>Стропило Fg - "+Fg+" sm.<br/>Відстань cf - "+cf+" sm.<br/>Довжина конькового брусу - "+L+" sm.<br/>Виліт даху(фронт) - "+mf+" sm.<br/>Виліт даху(збоків) - "+ms+" sm.<br/>Перетин стропила щонайменше - "+W+"X"+H+" mm.<br/>Найбільше навантаження на стропило - "+QR+" кг/м<p><a>Перерахувати</a></p>");
        
        $.each($("select#ws option"),function(){
            $(this).attr('selected',false);
            var w = parseFloat($(this).text());
            if(W === w){
                $(this).attr('selected',true);
            }
        });
        
        $.each($("select#hs option"),function(){
            var h = parseFloat($(this).text());
            $(this).attr('selected',false);
            if(H === h){
                $(this).attr('selected',true);
            }
        });
        
        if(obj['C'] < 0.75){
            $("table tbody tr td#res").append("<p><strong>Запас міцності дещо завеликий - можна спробувати зменшити перетин стропила</strong></p>");
        }
        
//        $("table tbody").append("<tr id='resume'><td colspan='2'><canvas id='b' width='960' height='600'></canvas></td></tr>");
        $("canvas#b").css({'outline':'1px solid #ccc'});
        $("div#resume").css({'display':'block'});
        
        huynja.drowFront();
    }
    
});
