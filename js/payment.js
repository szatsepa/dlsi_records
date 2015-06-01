$(document).ready(function(){
//    $('div#report').printElement();
      var advance = 0;
      var obj = {};
      $("#open").datepick({minDate: new Date(2014, 1, 0)});
      $("#close").datepick({minDate: new Date(2014, 1, 0)});
      $("#calculate").css('cursor','pointer');
      $(".info_tables").css({'width':'800px'});
      $(".info_tables tbody").css({'font-size':'0.7em'});
      $("tr.sum td").css('text-align','center');
// показать детали по работнику     
  $(".ico-info").live('click', function(){
      var uid = this.id;
      uid = uid.substr(2);
      document.location = "payment/details/"+uid;
//      getUserDetails(uid);
  });

  $("#printTab").mousedown(function(){
      
       if($("#open").val() === '' || $("#close").val() === ''){
           alert("НЕ ЗАПОВНЕНІ ПОЛЯ ПЕРІОДУ!");
           return;
       }


        $('#staff_tab').printElement();
    });
// вернутся к исходному виду      
  $("#back_s").mousedown(function(){
      $("#staff_tab").show();
      $("#tab_details").hide();
      $("#table_details tbody").empty();
  });
// произведем расчет зарплаты      
  $("#calculate").mousedown(function(){
          if($("#open").val() === '' || $("#close").val() === ''){
               alert("НЕ ЗАПОВНЕНІ ПОЛЯ ПЕРІОДУ!");
               return;
           }
          if(confirm("\t\t\t\tРасчитать?\nПосле этого изменения данных не возможно!!!\n\t\t\tТіко повний відкат!")){

          var query = "UPDATE `timesheet` SET `marked`= 1, `open` = '"+$("#open").val()+"', `close` = '"+$("#close").val()+"' WHERE `paket` = "+$("#paket").val() ;
//alert(query);
            $.ajax({
               url:'payment/apdate',
               asinc:false,
               type:'post',
               response:'text',
               data:{'query':query},
               success:function(){
                   document.location = "/pay";
               }
            });
      }
  });
//  ячейку аванса\долга пометим активностью    
  $(".advance").mouseover(function(){
      if($(this).text()!==''){
          $(this).css('cursor','pointer').attr('title','Изменить?');
      }
  });      
//  заменим текст на поле ввода            
  $(".advance").live('click',function(){
      if($(this).text() !== ''){
          advance = $(this).text();
          obj = $(this).parent();
          $(this).empty().html("<input size='12' id='adv' value='"+advance+"'/>");
          $(obj).find("td:eq(4)").html("<a class='ico-done' title='Зберегти'></a><a class='ico-arrow-left' title='Вернуться'>")
          $("#adv").focus().select();
      }
  });

  $(".ico-arrow-left").live('click',function(){
        var str = $("#adv").val();
        var obj = $(this).parent().parent();
        $(obj).find("td:eq(2)").empty().text(str);
        $(obj).find("td:eq(4)").empty();
  });
//  действия над полем ввода по нажатию энтер    
  $("#adv").live('keypress',function(e){
        if(e.which === 13){
            var uid = $(this).parent().parent().find("td:eq(2)").attr('id');
            uid = uid.substr(7);
            var pay = $(this).val();
            pay =(-1)*pay;
            var out = {'uid':uid,'advance':(advance+pay),'pay':pay};
            changeImprest(out);
        }
  });
// действия по клику на "галочку"     
  $("a.ico-done").live('click',function(){

      var uid = $(this).parent().parent().find("td:eq(2)").attr('id');
      uid = uid.substr(7);
      var pay = $(this).parent().parent().find("td:eq(2) input").val();
      pay = (-1)*pay;
      var out = {'uid':uid,'advance':(advance+pay),'pay':pay};

      changeImprest(out);

  });
//  функция изменить долг     
  function changeImprest(out){
    $.ajax({
         url:'action/change_advance.php',
         asinc:false,
         type:'post',
         dataType:'json',
         data:out,
         success:function(data){
//                 document.write(data['query']);
             if(data['ok'] > 0){
                 document.location = "index.php?part=pay&chapter=payment&uid="+uid;
             }
         },
         error:function(data){
             document.write(data['responceText']);
         }
      });
  }

    $("table tbody tr.sum").css({'text-align':'left','font-weight':'bold','background-color':'RGB(249, 201, 16)'});
    $("table tbody tr.surname").css({'text-align':'left','font-weight':'bold','background-color':'RGB(19, 255, 116)'});
    $("table tbody tr.cost").css({'text-align':'center','font-weight':'normal','background-color':'RGB(222, 222, 222)'});
    $("table tbody tr.imprest").css({'text-align':'center','font-weight':'normal','background-color':'#ff6633'});
    $("table tbody tr").find("td:eq(1)").css({'font-weight':'bold'});
    $("table tbody tr").find("td:eq(0)").css({'text-align':'left','font-weight':'bold'});
    $("#tab_details").hide();
});