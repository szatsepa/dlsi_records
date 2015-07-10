$(document).ready(function(){
    
    var huynja =  new Drows();
    huynja.init();
    
    var resume = new Object();
    
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
            
            prepare();
        }
    });
    
    
    $("input.btn-save").mousedown(function(){
        
        prepare();
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
            resume = huynja.geometry(dataobj);
        
            view(resume);
        }
        
    }
    
    function view(obj){
        var str = '';
        for(var param in obj){
            str += param+":"+obj[param]+";<br/>";
        }


        $("table tbody tr td#res").empty().append("<a>Перерахувати</a>");
        $("table tbody tr td#res").append("<br/>"+str+"<br/>");
//        alert(str);
    }
    
});
