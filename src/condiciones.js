
let result=0;
const suma='+';
const resta='-';
const multi='*';
const divi='/';

function calcula(num1,num2){
    if(suma){
        result=num1+num2;
        
     }else if(resta){
        result= num1-num2;
       
     }else if(multi){
         result=num1*num2;
         
     }else if(divi){
         result=num1/num2;
     }
     console.log(result);
}

calcula(45+'+'+89);

