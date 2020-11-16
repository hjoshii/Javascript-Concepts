//Rest Parameter(ES6 feature)

//Rest Parameter: The rest parameter allows us to handle multiple parameters in the function very efficiently.

//if we have lots of parameters in the function and we don't want to declare each of them in that case we can use rest parameter.

//cases where we can use rest parameter

//1: rest parameter with function

function getName(...otherNames){
  console.log(otherNames)
}
getName("kamal","Mohan", "Suresh")

// you can see we are passing multiple parameter to function but we are accessing 
// those parameters using rest operator into a single value using ...(3 dot signs).
//if you have lots of parameter and you want declare at the time declaring a function
// then you can just use rest parameter.

//earlier this concept we can also achive with javascript keyword "arguments".

//let see how we done same thing with keyword "arguments" it will return all argument result into the object format.

function getNameWithoutRest(){
  console.log(arguments)
}
getNameWithoutRest("kamal","Mohan", "Suresh")

// so the question is arise what is difference between both of them.

//rest return parameter as a array format
//arguments return parameter in the object format.

// one main thing we can do with rest parameter not with javascript arguments keyword

//lets see in example.

function getNameWithRest(name1, ...names){
  console.log(name1)
  console.log(names)
}
getNameWithRest("kamal", "mohit", "suresh")

//output:
//kamal
//["mohit","suresh"]

//you can see in function we are using simple parameter as well as with rest parameter
//so getNameWithRest take first value into the name1 and rest values coming into the names
// this thing we can't do with arguments.

//javascript arguments always return all parameter into the object format.

//2: rest parameter with objects

//lets see how we can use rest parameter with objects

const obj = {name: "Mohit", email:"m@gmail.com", address:{city:"Delhi", state:"Delhi"}}
const {name, ...otherDetails} = obj;
console.log(name)
console.log(otherDetails)

//output
//Mohit
//{email:"m@gmail.com",address: {...}}

// here we can get name value inside the name variable and email and address we are getting
// into the single object using rest parameter


//3: rest parameter with array

//lets see how we can use rest parameter with array

const cityArr = ["Delhi","Gujrat","Dehradoon","Ajmer"]
const [city1, ...otherCity] = cityArr;
console.log(city1);
console.log(otherCity);

//output
//Delhi
//["Gujrat","Dehradoon","Ajmer"]
//{email:"m@gmail.com",address: {...}}

// here we can get Delhi value inside the city1 variable and other city we are getting inside
//the otherCity variable.


