//Laxical Scope In Javascript

// In Javascript we can access the vaiables which is declared 
// outside the function is called Laxical scoping.
// it is used for the closure concept in javascript


let i =1;
const f =()=>{
  console.log(i)
}
f()

//In this example we have declare variable i outside the funtion and
//we can easily access this variable inside the f function.
//it is possible due to laxical scoping in javascript.