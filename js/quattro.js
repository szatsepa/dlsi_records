$(document).ready(function(){
    
    var project =  new Drows();
    
    project.init();
    
    
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
            var whot = prepare();
            if(whot){
               project.setData(whot);
               project.geometry();
               _size();
               view(project.getSizes());
            }else{
                return false;
            }
        }
    }).focus();
    
    
    $("input.btn-save").mousedown(function(){
        
            var whot = prepare();
            if(whot){
               project.setData(whot);
               project.geometry();
               _size();
               view(project.getSizes());
            }else{
                return false;
            }
     });
    
    function _size(){
        var height = new Array();
        $.each($("select#hs option"),function(){
            var h = parseFloat($(this).val());
            if($(this).val()!==0){
                height.push(h);
            }
        });
        
        return project.calculateHeight(height);
    }
    
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
        
        dataobj['typeString'] = $("select#type option:selected").text();
        
        if(!flag){
            alert("Не все заповнено - перевірте");
                return false;
        }else{
            
            return dataobj;
        }
   
    }
    
    function view(obj){
        var data = new Array({'comment':'Покрівельний матеріал','val':obj['type']},{'comment':'Габаритні розміри будівлі','val':obj['size']},{'comment':'Діметер стінової колоди','val':obj['log']},{'comment':'Відстань від фасаду до осі даха','val':obj['bc']},{'comment':'Відстань від осі даха до задньої стіни','val':obj['cd']},{'comment':'Відстань до осі бокових скатів','val':obj['cf']},{'comment':'Вишина від рівня горища до стріхи','val':obj['cg']},{'comment':'Вилыт даху','val':obj['distance'][0]},{'comment':'Крок стропил','val':obj['step']});
        
        var W = Math.ceil(obj['W']*10);
        var H = Math.ceil(obj['H']*10);
        var t = obj['typeString'];
        
        $.each($("select#ws option"),function(){
            $(this).attr('selected',false);
            var w = parseFloat($(this).text());
            if(W === w){
                $(this).attr('selected',true);
            }
        });
        
        $.each($("select#type option"),function(){
            var str = $(this).text();
            $(this).attr('selected',false);
            if(t === str){
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
        
        $("canvas#c").css({'outline':'1px solid #ccc'});
        $("canvas#b").css({'outline':'1px solid #ccc'});
        $("div#front").css({'display':'block'});
        $("div#side").css({'display':'block'});
        $("div#resume").css({'display':'block'});
        $("table#resumeTab tbody").empty();
        
        $.each(data,function(){
            $("table#resumeTab tbody").append("<tr><td>"+this['comment']+"</td><td align='center'>"+this['val']+"</td></tr>");
        });
        $("table#resumeTab tbody").append("<tr><td colspan='2' align='center'>Розміри стропильних ніг</td></tr><tr><td align='center'>Довжина в см.</td><td align='center'>Кількість шт.</td></tr>");
        $("table#resumeTab tbody").append("<tr><td>Перетин брусу стропильної ноги</td><td align='center'>"+obj['W']+" X "+obj['H']+" см.</td></tr>");
        $("table#resumeTab tbody").append("<tr><td>Розраховане навантаження</td><td align='center'>"+(Math.ceil(obj['QR']*100)/100)+" кг на м.п.</td></tr>");
//         var string = '';
         
        project.length.sort(compare);
        
        var oobj = onlyOrigin(project.length);
        
        oobj.sort(compare);
        
        oobj = countRafts(oobj,project.length);
        
        for(var i in oobj){
            
            $("table#resumeTab tbody").append("<tr><td align='center'>"+i+" см.</td><td align='center'>"+oobj[i]+" шт.</td></tr>");
        }
        $("table#resumeTab tbody").append("<tr><td colspan='2' align='center'>Kоньковий брус</td></tr><tr><td align='center'>Довжина в см.</td><td align='center' align='center'>Кількість шт.</td></tr>");
        $("table#resumeTab tbody").append("<tr><td align='center'>"+obj['L']+" см.</td><td align='center'>1 шт.</td></tr>");
        $("table#resumeTab tbody").append("<tr><td colspan='2' align='center'>Площа даху</td></tr>");
        
        for(var i in obj['square']){
            $("table#resumeTab tbody").append("<tr><td>"+obj['square'][i]['comment']+"</td><td align='center'>"+obj['square'][i]['val']+" м.кв</td></tr>");
        }
        
        
        
        project.drowFront();
//        $("table#resumeTab tbody tr td:eq(1)").attr('align','center');
            
        
    }
    
    function compare(a, b) {
          if (parseFloat(a) > parseFloat(b)) return 1;
          if (parseFloat(a) < parseFloat(b)) return -1;
        }
        
    function countRafts(arr1,arr2){
        var tmp = {};
        
        for(var i in arr1){
            var num = 0;
            for(var j in arr2){
                
                if(parseFloat(arr1[i]) === parseFloat(arr2[j])){
                    num++;
                    tmp[Math.ceil(parseFloat(arr1[i])*100)/100] = num;
                }
            }
            
        }
        return tmp;
    }    

    function onlyOrigin(arr) {
      var x, result = {}, num = 0;
      for (x = 0; x < arr.length; x++) {
        result[ arr[x] ] = x;
        num++;
      }
      return Object.keys( result );
    }   
    
});
