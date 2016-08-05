  alert ("Введите пять имен");
  var arrUser = [];
  var n = 4;
  for (var i = 0; i <= n; i++) {
	arrUser[i] = prompt ("Введите имя"," ");
	if (!arrUser[i]) {
		alert ("Вы ничего не ввели, повторите ввод имени");
		i--;
	 } else {
	    if (arrUser[i] === " ") {
	     alert ("Повторите ввод имени");
		 i--;
	    }
	   }
   }
	
   var nameUser = prompt ("Введите имя пользователя", " ");
   var p = 0;
   for (i = 0; i <= n ; i++) {
     if (arrUser[i] === nameUser) {
	  p = 1;
	 }  
   }
   if (p === 0) {
     alert ("ОШИБКА!!! Ваше имя отсутствует в базе"); 
   } else {		
	 alert (nameUser + ", Вы успешно вошли");
	}
