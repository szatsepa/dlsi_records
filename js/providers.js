$(document).ready(function(){
       
        if($("#user_count").val()!== 0){
            _show(false);
        }else{
            _show(true);
        }
        
        $("#ps").hide();
        
        $("#new_donor").mousedown(function(){
            _show(true);
            $("#ps").show();
            $("#dname").focus();
            var dtype = $("select#dtype option:selected").text();
            var tid =  $("select#dtype option:selected").val();
            $("p#type").empty().text(dtype).append('<input type="hidden" id="tid" value="'+tid+'"/>');
        });
        
        if($("input#uid").val() !== ''){
        $.each($("select#dtype option"),function(){
            $(this).attr('selected',false);
            if($("input#uid").val() === $(this).val()){
               $(this).attr('selected',true); 
            }
        });
//        alert();
        $("h1#title").append(" "+$("select#prov option:selected").text());
    }
        
        $("#dtype").live('change',function(){
            
            document.location = '/order/providers/'+$(this).find("option:selected").val(); 
         });
        
        $("#d_save").live('click',function(){
//            console.log("PI");
            _save("/order/add", "INSERT INTO `providers`(`name`, `created`, `d_type`, `comment`) VALUES ('"+$("#dname").val()+"',Now(),'"+$("input#tid").val()+"','"+$("#dcomment").val()+"')");
          
        }).css({"cursor":"pointer"});
        
        $("#edit").live('click',function(){
            var id = this.id;
            id = id.substr(2);
            _save("/order/edit", "UPDATE `providers` SET `name`= '"+$("#dname").val()+"',`d_type`='"+$("#dtype").find("option:selected").val()+"',`comment`= '"+$("#dcomment").val()+"' WHERE `id` = "+$("#uid").val());
        });
   
        
        $("a.ico-info").live('click',function(){
            $("#ps").show();
            $("#dname").focus();
            var id = this.id;
            id = id.substr(2);
            var obj = $(this).parent().parent();
            
            $.each($("#dtype option"),function(){
                if($(this).text() === $(obj).find("td:eq(1)").text()){
                   $(this).attr('selected',true); 
                }else{
                   $(this).attr('selected',false);  
                }
            });
            $("#dname").val($(obj).find("td:eq(2)").text()).focus();
            $("#dcomment").val($(obj).find("td:eq(3)").text());
            $("#uid").val(id);
            _show(true);
            _changeButton(true);
        });
        
        $("#back").mousedown(function(){
            _show(false);
            _changeButton(false);
        });
        
        $("a.ico-delete").live('click',function(){
            var id = this.id;
            id = id.substr(2);
            if(confirm("Дійсно видалити поставщика зі списку?")){
               
              _save("/order/del", "UPDATE `providers` SET `activ`= 0 WHERE `id` = "+id);
            }
        });
        
        function _changeButton(action){
            if(action){
               $("#d_save").attr('id','edit').css({"cursor":"pointer"});
            }else{
                $("#edit").attr('id','d_save').css({"cursor":"pointer"});
            }
        }
        
        function _show(flag){
            if(flag){
                $("div.right_block").show();
                $("#div_providers").hide();
            }else{
                $("div.right_block").hide();
                $("#div_providers").show();
            }
        }
        
        function _save(urlo, query){
//            console.log(out);
            var url = urlo;
            var out = query;
            alert(url+" | "+query);
            $.ajax({
                asinc:false,
                url:url,
                type:'post',
                response:'text',
                data:{'query':out},
                success:function(data){
                    alert(data);
                    document.location.reload();
//                    _changeButton(false);
                },
                error:function(data){
                } 
            });
        }
        
    });
