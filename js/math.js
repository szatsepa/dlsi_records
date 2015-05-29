$(document).ready(function(){
        $("table tbody tr").find("td:eq(0)").css({'font-size':'120%','font-weight':'bolder','color':'#f00'});
        $("table thead tr th").css({'text-align':'center'});
        $("#out").css({'font-size':'150%','font-weight':'bolder','color':'#f00'});
        $("#ms").mousedown(function(){
            calc_sin();
        });
        $("#is").focus().keypress(function(e){
            if(e.which === 13){
                calc_sin();
            } 
        }); 
        function calc_sin(){
            var str = $("#is").val().replace(',','.');
            var ad = 0;
            if(str.length !== 0){               
               ad = parseFloat(str);
            }
           
            $("#rs").val(Math.ceil(Math.sin((ad*Math.PI)/180)*10000)/10000);
            $("#out").text($("#rs").val().replace('.',','));
        }
        $("#mc").mousedown(function(){
            calc_cos();
        });
        $("#ic").keypress(function(e){
            if(e.which === 13){
                calc_cos();
            } 
        }); 
        function calc_cos(){
            
            var str = $("#ic").val().replace(',','.');
            var ad = 0;
            if(str.length !== 0){               
               ad = parseFloat(str);
            }
            
            $("#rc").val(Math.ceil(Math.cos((ad*Math.PI)/180)*10000)/10000);
            $("#out").text($("#rc").val().replace('.',','));
        }
        $("#mt").mousedown(function(){
            calc_tan();
        });
        $("#it").keypress(function(e){
            if(e.which === 13){
                calc_tan();
            } 
        }); 
        function calc_tan(){
            
            var str = $("#it").val().replace(',','.');
            var ad = 0;
            if(str.length !== 0){               
               ad = parseFloat(str);
            }
            $("#rt").val(Math.ceil(Math.tan((ad*Math.PI)/180)*10000)/10000);
            $("#out").text($("#rt").val().replace('.',','));
        }
        $("#mas").mousedown(function(){
            calc_as();
        });
        $("#ias").keypress(function(e){
            if(e.which === 13){
                calc_as();
            } 
        }); 
        function calc_as(){
            
            var str = $("#ias").val().replace(',','.');
            var ad = 0;
            if(str.length !== 0){               
               ad = parseFloat(str);
            }
            if(ad > 1 || ad < -1){
                alert("Не вірний аргумент!");
                $("#ias").val('');
                return false;
            }
            $("#ras").val((Math.ceil(100*Math.asin(ad)*180/Math.PI))/100);
            $("#out").text($("#ras").val().replace('.',','));
        }
        $("#mac").mousedown(function(){
            calc_ac();
        });
        $("#iac").keypress(function(e){
            if(e.which === 13){
                calc_ac();
            } 
        }); 
        function calc_ac(){
            
            var str = $("#iac").val().replace(',','.');
            var ad = 0;
            if(str.length !== 0){               
               ad = parseFloat(str);
            }
            if(ad > 1 || ad < -1){
                alert("Не вірний аргумент!");
                $("#iac").val('');
                return false;
            }
            $("#rac").val((Math.ceil(100*Math.acos(ad)*180/Math.PI))/100);
            $("#out").text($("#ras").val().replace('.',','));
        }
        $("#mat").mousedown(function(){
            calc_at();
        });
        $("#iat").keypress(function(e){
            if(e.which === 13){
                calc_at();
            } 
        }); 
        function calc_at(){
            
            var str = $("#iat").val().replace(',','.');
            var ad = 0;
            if(str.length !== 0){               
               ad = parseFloat(str);
            }
            $("#rat").val((Math.ceil(100*Math.atan(ad)*180/Math.PI))/100);
            $("#out").text($("#rat").val().replace('.',','));
        }
     });