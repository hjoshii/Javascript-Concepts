//Object.freeze VS Object.seal


let userObj = {
 name: 'kamal',
 age: 24,
 address: {
  street: 'Delhi'
 }
};

let freezeObj = Object.freeze(userObj)

let sealObj = Object.seal(userObj)

freezeObj.age =25
freezeObj.email ="k@gmail.com"
freezeObj.salary = 50000
delete freezeObj.age
console.log("freezeObj", freezeObj)


sealObj.age =25
sealObj.email ="k@gmail.com"
sealObj.salary = 50000
delete sealObj.age
console.log("sealObj", sealObj)