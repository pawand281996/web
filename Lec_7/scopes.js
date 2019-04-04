// hello();

// function hello(){
//     console.log('hello');
// }

// function hello() {
//     console.log(x);

//     var x=5;

//     console.log(x);
// }

// hello();


//  bye(); 

// // this will not happen as on right hand side assignment will happen at 
// // interpreter level

// console.log(bye); 

// //this is undefined becauase value of variable bye is 
// //not defined till now which will be done at interpreters level
// var bye=function() {
//     console.log("bye");
// }

// //this happens because bye is assigned value before
// bye();

var b=8;

function a() {

    // b=5;
    // if we dont write var keyword no b is created inside this block
    // so it check it's parent has b vairable
    // if available than change it's value to 5
    //so value og b printed will be 5
     var b=5;
    console.log(b); 

    // if(true){
    //     var x=10;
    // }
    // console.log(x);
    // var is a function scope i blockt means if var declared inside
    //a function it remains until function is not finished
    //x is available after if statement



    // if(true){
    //     let x=10;
    // }
    // console.log(x);
    //let is a block scope
    //it is not available after if statemnet
    
}


a();

console.log(b);

a();