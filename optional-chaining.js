//Optional Chaining Operator in javascript(ES20 Feature)

const userDetails = {
  name :"Mohit",
  email: "m@gmail.com",
  address: {
    street: "ABC",
    city:"Delhi",
    place: "Delhi"
  }
}

//Normally you need to write the condition to check the street is present inside the userDetails or not and you need 
//to repeat the userDetails object each time until you get the street key.

if(userDetails && userDetails.address && userDetails.address.street){
  console.log(userDetails.address.street)
}

//lets see how we can achive same thing with optional chaining operator. this looks like more elegant and easy to read.

if(userDetails?.address?.city)
{
  console.log(userDetails.address.street)
}

let user = {}; // a user without "address" property

// this operator will also help when you are getting data from the server. when you try to access this without checking 
//the street it will throw error if you are getting empty user object from the server. 

console.log(user.address.street); // it will return error and stop the execution.

//if you try to achive this with optional chaining operator

console.log(user?.address?.street)  // return undefined