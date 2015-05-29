<?php
/*
 * @author arcady.1254@gmail.com
 */
class Database {
    
//    var $db;
    
    function __construct() {
        setlocale(LC_ALL, 'ru_RU.utf8');        
        mysql_connect(LINKDB,PASSW, "") or die ("Ошибка");
        mysql_select_db(DB);
        mysql_query ("SET NAMES utf8");
        
        if (mysql_errno() <> 0) exit("Ошибка");
        
        
    }
    
    public function querySelect($query) {
        $result = mysql_query($query);
        
    }
    
}
