 $(document).ready(function(){
       
        $(".menu_btn").mousedown(function(){
            var str = this.id;
            document.location = '/'+str;
            
        });
       

    });

