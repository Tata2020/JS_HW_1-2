  alert ("Введите данные для расчета");

  var a = prompt("Число для возведения в степень", "");
  if (!a ) {
  	alert ("значение не введено, присвоено значение - ноль");
	a = 0;
  }

  var b = prompt ("Показатель степени", "");
  if (!b) {
  	alert ("значение не введено, присвоено значение - ноль");
	b = 0;
  }

  var y = calcPow (a, b);
  console.log ("Результат:" + y);


  /**
   * Возвращает результат newBase в степени newExponent,
   * для целых чисел
   *
   * @param  {number} newBase - число для возведения в степень
   * @param  {number} newExponent - показатель степени
   * @return {number} result - результат возведения в степень
   */
function calcPow (newBase, newExponent) {
 	if (parseInt (newBase) != newBase ) {
	newBase = Math.round (newBase);
	console.log("Введено не целое число, оно округлено до " + newBase);
	}

  var result = newBase;
	if (parseInt (newExponent) != newExponent) {
		newExponent = Math.round (newExponent);
		console.log ("Введено не целое число, оно округлено до " + newExponent);
	}

	console.log ("newBase =", newBase);
	console.log ("newExponent =", newExponent);

  var p = 0; // flag negative exponent
  if (newBase == 0) {
	result = 0;
	} else {
		if (newExponent == 0) {
		result = 1;
		} else {
			if (newExponent < 0) {
				newExponent = - newExponent;
				p = 1;
			}
		
           for (var i = 1; i <= newExponent-1; i++) {
             result = result * newBase;
	         if (result == "Infinity") {
		       alert ("Введены большие числа, Результат - бесконечность");
	         break;
	         }
           }
           if (p == 1) { 
           result = 1 / result;
           } 	
	    }
     }
  return result;
}	
	

	
	