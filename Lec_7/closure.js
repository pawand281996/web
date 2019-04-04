// function foo() {
//     var a=5;
//     var b=7;
//     function bar() {
//         return{a:a , b:b};
//     }
//     return bar;
// }

// var buzz=foo();
// buzz();


// function shop(a , b , gst) {
//     console.log( a + b + gst());
// }

// shop(2 , 4 , function () {
//     return 10;
// })


function foo(a,b,boo) {
    console.log(a+b+boo(a,b));
    
}
function boo(x,y){

     return (x+y)*0.10;
}
foo(100,69,boo);




