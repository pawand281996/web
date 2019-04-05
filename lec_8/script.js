
//default binding here window is printed
// var x=function(){
//     console.log(this);
// }
// x();

//explicit bindind binding


// var x={
//     color:"red"
// }
// function happy(){
//     console.log(this);
// }
// happy();

// happy.call(x);



//implicit bindind

// var apple={
//     color:"red",

//     getcolor:function(){

//         return this.color;
//     }

// }

// var orrange={
//     color:"orange",

//     getcolor:function(){

//         return this.color;
//     }

// }

// console.log(apple.getcolor());
// console.log(orrange.getcolor());

//default binding in this case therefore window.x is 7 which is globally defined
// var x=7;
// function fruit(){

//     var x=9;

//     function apple(){
//        var x=6;
//         console.log(this.x);
//     }
//     apple();
// }
// fruit();




//here value will be 6 because var is not decalred inside any function hence it's value is changed to 6 when iiner apple()
//function is called
//x is overwritten here


// var x=7;
// function fruit(){
//       x=9;

//     function apple(){
//         x=6;
//         console.log(this.x);
//     }
//     apple();
// }
// fruit();


//examples

var edge={
    device:'mobile',
    characterstic:'pixel',
    dev:function() {
        console.log( this);
    }
}

var edgeX={
    device:'mobile',
    characterstic:'iphone',
}


function device(a,b) {

console.log(this);

}

//default binding----
device();
//inplicit binding
edge.dev();
//explicit binding
device.call(edgeX,23,200);
//the difference between call and apply array is passes
device.apply(edgeX,[23,11]);


//prototype binding---->

//every funtion in js act as a class.hence,it's object can be created...



function sup() {
    this.fruit="apple";
    this.price=24;

}
var a= new sup();

console.log(a);
