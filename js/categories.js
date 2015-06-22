$(document).ready(function(){
     if($("#_count").val()!== 0){
        _show(false);
    }else{
        _show(true);
    }

    $("#new_categories").click(function(){
        _show(true); 
        $("#categories").focus();           
    }).mouseup(function(){
        $("#categories").focus();
    });

    $("#c_comment").keypress(function(e){

       if(e.which === 13){
           if($("#right_block").is("#edit")){
               _save("/produce/edit", "INSERT INTO `categories`(`categories`, `comment`) VALUES ('"+$("#categories").val()+"', '"+$("#c_comment").val()+"')");
           }else{
              _save("/produce/add", "INSERT INTO `categories`(`categories`, `comment`) VALUES ('"+$("#categories").val()+"', '"+$("#c_comment").val()+"')"); 
           }
            
       } 
    });

    $("#save").live('click',function(){
        
        _save("/produce/add", "INSERT INTO `categories`(`categories`, `comment`) VALUES ('"+$("#categories").val()+"', '"+$("#c_comment").val()+"')");

    }).css({"cursor":"pointer"});

    $("#edit").live('click',function(){
        
        _save("/produce/edit", "UPDATE `categories` SET `categories`='"+$("#categories").val()+"',`comment`='"+$("#c_comment").val()+"' WHERE `id`="+$("#uid").val());        
    });


    $("a.ico-info").live('click',function(){
        var id = this.id;
        id = id.substr(2);
        var obj = $(this).parent().parent();
        $("#categories").val($(obj).find("td:eq(1)").text());
        $("#c_comment").val($(obj).find("td:eq(2)").text());
        $("#uid").val(id);
        _show(true);
        _changeButton(true);
    });

    $("#back").mousedown(function(){
        document.location.reload();
    });

    $("a.ico-delete").live('click',function(){
        var id = this.id;
        id = id.substr(2);
        if(confirm("Дійсно видалити категорію зі списку?")){
            
          _save("/produce/edit", "UPDATE `categories` SET `activity` = 0 WHERE id = "+id);
        }
    });

    function _changeButton(action){
        if(action){
           $("#save").attr('id','edit').css({"cursor":"pointer"});
        }else{
            $("#edit").attr('id','save').css({"cursor":"pointer"});
        }
    }

    function _show(flag){
        if(flag){
            $("div.right_block").show();
            $("#staff_tab").hide();
        }else{
            $("div.right_block").hide();
            $("#staff_tab").show();
        }
    }
});