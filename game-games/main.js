
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






