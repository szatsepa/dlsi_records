$(document).ready(function(){
    
    var huynja =  new Drows();
    huynja.init();
    var dataobj = new Object();
    var resume = new Object();
    
    $("canvas#a").css('outline','1px solid #ccc');
    $("canvas#a").init();
    
//    $("input#rigel").change(function(){
//        if($("input#rigel").attr('checked') === 'checked'){
//            huynja.drowRigel(true);
//        }else{
//            huynja.drowRigel(false);
//        }
//    });
//    
    $("select#ws").change(function(){
        dataobj['ws'] = $("select#ws option:selected").val();
    });
    
    $("select#hs").change(function(){
        dataobj['hs'] = $("select#hs option:selected").val();
        $("input#Hh").focus().select();
    });        
    
    $("select#type").change(function(){
        dataobj['type'] = ($("select#type option:selected").val());
    });
    
    $("input#Hh").keypress(function(e){
        if(e.which === 13){
            dataobj['Hh'] = ($("input#Hh").val());
            $("input#D").focus().select();
        }
    });
    $("input#D").keypress(function(e){
        if(e.which === 13){
            dataobj['D'] = parseFloat($("input#D").val());
            $("input#bc").focus().select();
        }
    });

    $("input#bc").keypress(function(e){
        if(e.which === 13){
            dataobj['bc'] = parseFloat($("input#bc").val());
            $("input#cd").focus().select();
        }
    });
    
    $("input#cd").keypress(function(e){
        if(e.which === 13){
            dataobj['cd'] = parseFloat($("input#cd").val());
            $("input#cf").focus().select();
        }
    });
    
    $("input#cf").keypress(function(e){
        if(e.which === 13){
            dataobj['cf'] = parseFloat($("input#cf").val());
            $("input#cg").focus().select();
        }
    });
    
    $("input#cg").keypress(function(e){
        if(e.which === 13){
            dataobj['cg'] = parseFloat($("input#cg").val());
            $("input#m").focus().select();
        }
    });
    $("input#m").keypress(function(e){
        if(e.which === 13){
            dataobj['m'] = parseFloat($("input#m").val());
            $("input#step").focus().select();
        }
    });
    
    $("input#step").keypress(function(e){
        if(e.which === 13){
            
            dataobj['step'] = parseFloat($("input#step").val());
            resume = huynja.geometry(dataobj);
            view(resume);
        }
    });
    
    
    $("input.btn-save").mousedown(function(){
        
        $.each($("select option:selected"), function(){
            
            dataobj[$(this).parent().attr('id')] = $(this).val();
        });
        
        $.each($("input"),function(e){
            dataobj[e] = $(this).val();
        });
        resume = huynja.geometry(dataobj);
        
        view(resume);
    });
    
    function view(obj){
        var str = '';
        for(var param in obj){
            str += param+":"+obj[param]+";\n";
        }
        
        $("table tbody tr td#res").empty();
//        $("table tbody tr:eq(0) td").empty();
//        $("table tbody tr:eq(0)").find("td:eq(0)").append("<a>Перерахувати</a>");
        alert(str);
    }
    
});
