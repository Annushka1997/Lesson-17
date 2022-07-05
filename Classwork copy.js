"use strict";

for (let i=0; i < 3; i++) {
    console.log (i);

    for (let x = 0; x<3; x++){
        console.log (x);
        for (let j=3; j > 0; j--){
            console.log (j);
        }
    }
}


let str = " ";
let star = "*";

for (let i = 0; i < 7; i++) {
    str += star;
    console.log(str);
}