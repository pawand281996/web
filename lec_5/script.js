console.log("hello world")

let x=10
x=11

console.log(x)
 const y=10
  // y=22 const value can not be changed//
  console.log(y)
// it means giving constant object we cannot assign new object but we can change values inside the object
//obj={c:10} this can not be done
const obj={a:10,b:true,c:"hello world"}

  console.log(obj)
  obj.a=20
  console.log(obj)
  
  function sayhello(name){

      console.log("hello "+ name)
  }

  sayhello('john')
//doesn't gives errors instead it will print hello unindentified
// if we pass more argumnets then required it will accept the first number of arguments required and skip others
  sayhello()
   
  sayhello('hello','john')


  console.log(document.body.children)
