"use strict";

// Առաջի հարցի պատասխան

// 1

for (let i=1; i<=7; i++){
    console.log(i);
    for (let j=2; j<=i; j++) { // Առաջին տարբերակ
        console.log(i);
    }
}


for (let i=1; i<=7; i++){
    let line = "";
    for (let j=1; j<=i; j++) {  // Երկրորդ տարբերակ
        line+=i;
    }
    console.log(line);
}

// 2

let randomNumber = prompt ("Input your number");

let qanak = 0;

for (let i=2; i<=randomNumber; i++) {
    for (let b = 1; b<=i; b++) {
        if (i % b === 0) {
            qanak += 1;
        }
    }
      if (qanak <= 2) {
        console.log (i);
    }
    qanak = 0;
}

// 3 

let myNumber = 10,
    number1 = prompt ("Input first number"),
    number2 = prompt ("Input second number"),
    qanak1 = 0,
    gumar = 0;


while (Number.isInteger(Math.sqrt(myNumber * 3)) !== true) {
    if (Number.isInteger(Math.sqrt(myNumber * 3)) !== false) {
        while (number1 <= myNumber) {
            while (number2 <= number1) {
                if (number2 % number1 === 0){
                    qanak1 +=1;
                }    
            }
        }
    if (qanak1 <= 2) {
        gumar += number1;
    }
    
    } 
    qanak = 0;
    myNumber++;
} 

console.log (myNumber);


// Երկրորդ հարցի պատասխան

const num1=+prompt ("Input first number");
const num2=+prompt ("Input second number");
const operator=prompt ("Input your operator");
let result = 0;

switch(operator){
    case '+':
         result = num1 + num2;
        console.log(`${num1} + ${num2} = ${result}`);
        break;

    case '-':
         result = num1 - num2;
        console.log(`${num1} - ${num2} = ${result}`);
        break;

    case '*':
         result = num1 * num2;
        console.log(`${num1} * ${num2} = ${result}`);
        break;

    case '/':
         result = num1 / num2;
        console.log(`${num1} / ${num2} = ${result}`);
        break;

        case '%':
            result = num1 % num2;
           console.log(`${num1} % ${num2} = ${result}`);
           break;
   
    default:
        console.log('Error,try again,my dear');
        break;
}

console.log (result);


//  Երրորդ հարցի պատասխան

let a = 7,
    tonatsar = "";

   for(let i = 1; i <= a; i++) {
     for(let j = 1; j <= a*2 - 1; j++) {
     if(j <= a - i || j >= a + i) { 
      tonatsar += " "; }
       else { tonatsar += "*"; } 
      }
      tonatsar += "\n"; 
      } 
      console.log(tonatsar); 
    


    