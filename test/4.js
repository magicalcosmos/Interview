"use strict"

let obj = {
    a : () =>{
        console.log(this);
        return this == global;
    }
}
console.log(obj.a());
//注：需要在浏览器下检测this == window

