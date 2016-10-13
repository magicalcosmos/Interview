# Interview #

1.  
    function foo(){  
        foo();  
    }  
    foo();  

    a. 执行结果和如何解决  
    b. js栈的最大值是多少和最小值是多少  

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

    在浏览器中，JavaScript引擎是单线程执行的。也就是说，在同一时间内，只能有一段代码被JavaScript引擎执行。页面加载时，
    JavaScript引擎会顺序执行页面上所有JavaScript代码，优先执行同步代码。而异步代码由事件触发引擎按照“事件发生”的顺序添加到JavaScript引擎的任务队列中，
    待所有同步代码执行结束后，JavaScript引擎会按照任务队列中的顺序来执行异步代码。

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

5.  浏览器是如何渲染CSS  
  