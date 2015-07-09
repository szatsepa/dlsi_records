$(document).ready(function(){
    
    var huynja =  new Drows();
    huynja.init();
//    var dataobj = new Object();

    
   
    
//    $("#print").mousedown(function(){
//        
//        $('diw#dPrint').printElement({
//                overrideElementCSS:[
//		'/css/print_element.css',
//		{ href:'/css/print_element.css',media:'print'}],
//                leaveOpen:true,
//                printMode:'popup'
//            });
//    });
    
    $("canvas#a").css('outline','1px solid #ccc').quadro();
    $("canvas#a").init();
    
//    $("input#rigel").change(function(){
//        if($("input#rigel").attr('checked') === 'checked'){
//            huynja.drowRigel(true);
//        }else{
//            huynja.drowRigel(false);
//        }
//    });
//    
//    $("select#ws").change(function(){
//        huynja.setWidth($("select#ws option:selected").val());
////        $("input#Hh").focus().select();
//    });
//    
//    $("select#hs").change(function(){
//        huynja.setHeight($("select#hs option:selected").val());
//        $("input#Hh").focus().select();
//    });        
//    
//    $("select#type").change(function(){
//        huynja.setP($("select#type option:selected").val());
////        $("input#Hh").focus().select();
//    });
//    
//    $("input#Hh").keypress(function(e){
//        if(e.which === 13){
//            huynja.setHh($("input#Hh").val());
//            $("input#D").focus().select();
//        }
//    });
//    $("input#D").keypress(function(e){
//        if(e.which === 13){
//            dataobj['D'] = parseFloat($("input#D").val());
//            huynja.setD($("input#D").val());
//            $("input#L").focus().select();
//        }
//    });
//
//    $("input#L").keypress(function(e){
//        if(e.which === 13){
//            dataobj['L'] = parseFloat($("input#L").val());
//            huynja.setL($("input#L").val());
//            $("input#L1").focus().select();
//        }
//    });
//    
//    $("input#L1").keypress(function(e){
//        if(e.which === 13){
//            dataobj['L1'] = parseFloat($("input#L1").val());
//            huynja.setL1($("input#L1").val());
//            $("input#H").focus().select();
//        }
//    });
//    
//    $("input#H").keypress(function(e){
//        if(e.which === 13){
//            dataobj['H'] = parseFloat($("input#H").val());
//            huynja.setH($("input#H").val());
//            $("input#m").focus().select();
//        }
//    });
//    $("input#m").keypress(function(e){
//        if(e.which === 13){
//            dataobj['m'] = parseFloat($("input#m").val());            
//            huynja.setM($("input#m").val());
//            $("input#step").focus().select();
////            huynja.calculate(dataobj);
//        }
//    });
//    
//    $("input#step").keypress(function(e){
//        if(e.which === 13){
//            
//            dataobj['step'] = parseFloat($("input#step").val());
//            huynja.calculate(dataobj);
//        }
//    });
//    
//    $("input.btn-save").mousedown(function(){
//        dataobj['D'] = parseFloat($("input#D").val());
//        dataobj['L'] = parseFloat($("input#L").val());
//        dataobj['L1'] = parseFloat($("input#L1").val());
//        dataobj['H'] = parseFloat($("input#H").val());
//        dataobj['m'] = parseFloat($("input#m").val());
//        obj['step'] = parseFloat($("input#step").val());
//        huynja.calculate(obj);
//    });
//    
    
    
});
