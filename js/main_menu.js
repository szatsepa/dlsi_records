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
    
    function _ActionDB(){
        
        this.url = "";
        this.query = "";
        
        this.save = function(url, query){
            this.url = url;
            this.query = query;
            $.ajax({
                asinc:false,
                url:this.url,
                type:'post',
                responce:'text',
                data:{'query':this.query},
                success:function(){        
                    document.location.reload();
                } 
            });
        }
    }
    
    function _save(url, out){
        var url = url;
        var out = out;
    //alert(url+" "+out);

        $.ajax({
            asinc:false,
            url:url,
            type:'post',
            responce:'text',
            data:{'query':out},
            success:function(data){
    //alert(data);
                document.location.reload();
            } 
        });
}
