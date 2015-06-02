 $(document).ready(function(){
       
        $(".menu_btn").mousedown(function(){
            var str = this.id;
            if(str != 'dump'){
                document.location = '/'+str;
            }
            else
            {
                document.location.href = "http://sxd.dev/index.php";
            }
            
            
        });
       

    });

