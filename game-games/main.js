/*
namber = Math.floor(Math.random() * 10);//int
alert(String(namber));//str

x = prompt('угадай число от 1 до 10');//str
x = Number (x);//int

if (x == namber){
	  alert('вы выйграли');
}
else{
	alert('вы проиграли');
}

a = prompt('введите 1 число');
b = prompt('введите 2 число');

a = Number (a);
b = Number (b);


function SUM(a,b)  {
	 var a,b,sum;
	 sum = a + b;
	 alert(String(sum));
	 
}
function SUB(a,b)  {
	 var a,b,sub;
	 sub = a - b;
	 alert(String(sub));
	 
}

function MULT(a,b)  {
	 var a,b,mult;
	 mult = a * b;
	 alert(String(mult));
	 
}

function DIV(a,b)  {
	 var a,b,div;
	 div = a / b;
	 alert(String(div));
	 
}



var ok = confirm ("вы из россии?");
	 alert (ok);
	 
	 
	 
	 
	 arr = ('Пн','Вт' ,'Ср');
	 var X = {1:'Пн',2:'Вт',3:'Cp'}
	 
	 
	 Lang = promt
	 switch (lang){
	 
	 
	 case 'ru';
	    alert('русский');
	 break;
	 
	 case 'en';
	  alert ('английский');
	  break;
	  
	  case 'uk';
	  alert ('украинский');
	  break;
	  
	  
	  
	  
	  
	Задача:
	у пользователя запрашивает число от 0 до 50 и кладём в переменую min. Определите в какую четверть часа попадает это число (а первую, вторую,третию или четвёртую.)
	1 четверть = 0-14 мин
	2 четверть = 15-30 мин
	3 четверть = 31-45 мин
	4 четверть = 45-59 мин
	
	a > && b > 14
	*/
	
	X = prompt('Введите число от 0 до 59');
	X = Number(X);
	

	
	if(X >=0  && X >= 14){
		alert('число в первой степени');
	}
	if(X >=15 && X >= 31){
		alert('число во второй степени');
	}
	if(X >=31 && X >= 45){
		alert('число в третий степени');
	}
	if(X >=45 && X >= 59){
		alert('число в четвёртой степени');
	}
	
	
