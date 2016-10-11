# Interview
1.
function foo(){
    foo();
}
foo();
*.执行结果和如何解决
*.js栈的最大值是多少和最小值是多少

2. 
function foo(){
    console.log('a');
    setTimeout(function(){
        console.log('b');
    }, 0);
    console.log('c');
}

foo();
执行结果是多少和为什么

3.
var obj = {
    a : 1
}
obj.a = 2;
如何让obj.a的值仍然等于1?

4.

let obj = {
    a : () =>{
        return this == window;
    }
}
console.log(obj.a());
输出结果是？