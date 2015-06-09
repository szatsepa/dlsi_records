 $(document).ready(function(){
       
        $("#m_menu tbody tr td a").mousedown(function(){
            var str = this.id;
//            alert(str);
            if(str !== 'dump'){
                document.location = '/'+str;
            }
            else
            {
                document.location.href = "http://sxd.dev/index.php";
            }
            
            
        });
       

    });

