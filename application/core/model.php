<?php

class Model
{
	
	/*
		Модель обычно включает методы выборки данных, это могут быть:
			> методы нативных библиотек pgsql или mysql;
			> методы библиотек, реализующих абстракицю данных. Например, методы библиотеки PEAR MDB2;
			> методы ORM;
			> методы для работы с NoSQL;
			> и др.
	*/
        
       function __construct() {
            setlocale(LC_ALL, 'ru_RU.utf8');        
            mysql_connect(LINKDB,PASSW, "") or die ("Ошибка");
            mysql_select_db(DB);
            mysql_query ("SET NAMES utf8");

            if (mysql_errno() <> 0){ exit("Ошибка");}
       }

       // метод выборки данных

        public function querySelect($query) {
            
            $str = stripslashes($query);

            $result = mysql_query($query);

            $data = array();

                if(!$result){
                    return NULL;
                }else{
                    while ($row = mysql_fetch_assoc($result)){
                        array_push($data, $row);
                    }

                    return $data;
                }
        
        }
        
        public function setInsert($query) {
            
            $str = stripslashes($query);
            
            $result = mysql_query($str);
            
            if(!$result){
                return NULL;
                
            }  else {
                
                return mysql_insert_id();
            }
            
        }
        public function actUpdate($query) {
            
            $str = stripslashes($query);
            
            $result = mysql_query($str);
            
            if(!$result){
                return NULL;
                
            }  else {
                
                return mysql_affected_rows();
            }
        }
}