$(document).ready(function(){
    
    var circle = false;
    
    if($("input#rd2").attr('checked')){
        $("span#circle").css({'display':'block'});
        $("span#rectangle").css({'display':'none'});
    }
    
    $(":radio").change(function(){
        $(":radio").attr('checked',false);
        $(this).attr('checked',true);
        var val = $(this).val();
        if(val === '1'){
            $("span#rectangle").css({'display':'block'});
            $("span#circle").css({'display':'none'});
            circle = false;
        }else{
            $("span#circle").css({'display':'block'});
            $("span#rectangle").css({'display':'none'});
            circle = true;
        }
    }); 
    
    $("input#count").mousedown(function(){
//            2. Статический расчет.  
//            По  условию  задачи  имеем  расчетную  схему  однопролетной  шарнирно 
//            опертой балки, загруженной равномерно распределенной нагрузкой. Для такой 
//            расчетной  схемы  максимальный  момент  в  середине  балки  и  равен  M=ql2/8, 
//            перерезывающая  сила  максимальна  на  опоре  и  равна  Q=ql/2,  максимальный 
//             15 
//            относительный прогиб в середине балки и равен f/l = (5qнl3)/(384EJ). Численные 
//            значения этих величин равны: M=ql2/8  кг*м => кг*см,  
//            Q=ql/2 , 

            var M = 0,Q=0;
            
            var q = parseFloat($("input#Q").val()),l = parseFloat($("input#L").val()),b=parseFloat($("select#b option:selected").val()),h=parseFloat($("select#h option:selected").val());
            ;
            
            
            M = Math.ceil((q*Math.pow(l,2)/8)*10000)/10000;
            
            var Msm = Math.ceil(M*10000)/100;
            
            Q = Math.ceil(10000*q*l/2)/10000;
            
//            По  таблице 3  определяем  расчетное  сопротивление  растяжению  сосны, 
//            ели,  лиственницы 2-го  сорта (п. 2а)  Rск=1,6мПа (16 кг/см2)  и  расчетное 
//            сопротивление изгибу (п. 1а) Rи=13 мПа (130 кг/см2).  Rи=13*0,85*0,8 
            
            var Ri = 13*.85*.8, Rs = 1.6*.85*.8;
            
//            6. Вычисление геометрических характеристик для проверяемого сечения элемента. Необходимые геометрические характеристики в данном случае это: Wрасч=bh2/6= см3, Jбр=bh3/12 см3, S=bh2/8 см3 . 
            
            var Wr = b*Math.pow(h,2)/6, Jb =b*Math.pow(h,3),S=b*Math.pow(h,2)/8;
            
//            7. Проверки двух предельных состояний изгибаемого элемента. Проверяем  нормальные  напряжения  по  формуле  sи=M/Wрасч≤Rи, sи=7910,16/125=63,28 (кг/см2) < 88,4 (кг/см2) = Rи . Проверяем  касательные  напряжения  по  формуле  tск=(QS)/(Jбрbрасч)≤Rск, tск=(140,625*93,75)/(625*7,5)=2,81 (кг/см2) < 10,88 (кг/см2) = Rск . Проверяем жесткость (второе предельное состояние) по формуле  (f/l) ≤ [f/l] f/l = (5qнl3)/(384EJ) = (5*125*2,253*104)/(384*100000*625) = (71191406,25/24000000000) = 1/337. f/l = 1/337 < 1/200  = [f/l]. Здесь [f/l] = 1/200 (для прогонов и стропильных ног покрытия, таблица 16 п. 3а). 
            var si = M/Wr;
            
            if(si <= Ri){
                alert("PIZGIB OK");
            }else{
                alert("IZGIB MALO");
                return false;
            }
            
            var ts = (Q*S)/(Jb*b);
//            alert('ts->'+ts+'\nRs->'+Rs);
            if(ts <= Rs){
                alert("PISKOLL OK");
            }else{
                alert("SKOLL MALO");
                return false;
            }
            
            var jsk = (5*Q*Math.pow(l,3))/(384*100000*Jb);
            
            if(jsk < 1/200){
                alert("JESTKO");
            }else{
                alert("MJAGKO");
            }
            
//            alert(q+'\n'+l+'\n'+M+'\n'+Msm+'\n'+Q+'\n'+jsk);

            
    });
});


