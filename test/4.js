"use strict"
console.log(window);
let obj = {
    a : () =>{
        return this == "window";
    }
}
console.log(obj.a());