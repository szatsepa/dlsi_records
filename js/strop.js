$(document).ready(function(){
    
    $('#str').sketch();
    
     $.each(['#f00', '#ff0', '#0f0', '#0ff', '#00f', '#f0f', '#000', '#fff'], function() {
      $('#colors_demo .tools').append("<a href='#str' data-color='" + this + "' style='width: 10px; background: " + this + ";'></a> ");
    });
    $.each([3, 5, 10, 15], function() {
      $('#colors_demo .tools').append("<a href='#str' data-size='" + this + "' style='background: #ccc'>" + this + "</a> ");
    });
    $('#str').sketch();
    
//    $("input#mo").change(function(){
//        $("input#long").attr('selected',true);
//    }).focus().select();
});


