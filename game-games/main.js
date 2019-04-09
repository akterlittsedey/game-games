

function RuEnWeekArr(){
	lang = prompt('введите язык');
	
	var arr = {
	'ru':['Пн','Вт','Ср','Чт','Пт','Сб','Вс'],
	
	'en':['Mn','Ts','Wd','Th','Fr','St','Sn']
	};
	alert (arr[lang]);
};


function ask(){
   resault = confirm('вы студент');
   
   if (resault == true){
	   alert ('поздравляем, у нас есть для вас хорошее предложение')
   }else{
	   alert('Извените, ничем помочь не сможем')
   }
 }
 
 
 function PrintInt(){
	 col = prompt('сколько чисел вывести?');
	 col = Number(col);
     var i  = l;
	 while (i <=col){
		 document.write(i +'<br>');
		 i++;
	 }
 }
 
 function forarr(){
	 x = promt("сколько чесел вывести");
	 var i;
	 for (var i=0;i < arr.lenght;i++);
     var arr = [2,3,4,5];
	 result = resault * arr[i];
	 alert(result);
 }
     
	 
	 
	 function fororr(){
 
	 for (var i=0;i< arr.lenght;i++);
     var arr = [1,2,3,4,5];
	 document.write(arr[i]+'<br>');
 }
	 
	 
 


  