 $(document).ready(function(){
       
        $(".menu_btn").mousedown(function(){
            var str = this.id;
            if(str != 'dump'){
                document.location = '/'+str;
            }
            else
            {
                document.location.href = "http://dlsi_acc/sxd/index.php";
            }
            
            
        });
       

    });

