<?php

include_once 'config.php';

setlocale(LC_ALL, 'ru_RU.utf8');        
$link = mysql_connect(LINKDB,PASSW, "") or die ("Ошибка");
mysql_select_db(DB);
mysql_query ("SET NAMES utf8");

if (mysql_errno() <> 0){ exit("Ошибка");}



$status = explode('  ', mysql_stat($link));
print_r($status);
 printf ("MySQL server version: %s\n", mysql_get_server_info());
phpinfo();