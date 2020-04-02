//shallow copy and deep copy in javascript
//shallow copy and deep copy basically used in objects and arrays in javascript.
//shallow copy only copy top level elements in aaray and objects.

// in this example we are using concat method for merge two array and concat method use shallow copy feature.

//only top level elements are copy and nested elements are referenceing same memory location.

//in this example if we are going to change the name value of concatArr it will also reflecting the same name in the arr

//shallow copy using concat

const arr = ["mohit", "nitin", "kapil", { name: "suman" }];
const anotherArr = ["subham"];
const conactArr = anotherArr.concat(arr);

conactArr[0] = "manish";
conactArr[4]["name"] = "suman ji";

//console.log(arr[3])
//console.log(conactArr)

//shallow copy concat end

// another method for shallow copy in array is "spread operator"

//shallow copy using spread operator
const spreadConcatArr = [...arr];

spreadConcatArr[3]["name"] = "sita";
console.log(spreadConcatArr[3]);
console.log(arr[3]);

//we can see it changing both the array name property show its using shallow copy.

//shallow copy using spread operator end

// lets use shallow copy with objects

//first method for shallow copy in objects is spread operator

//shallow copy in objets using spread operator

const obj1 = { name: "nitin", email: "mohit", games: ["cricket", "football"] };
const obj2 = { ...obj1 };

obj2.name = "mohit";
obj2.games[0] = "mmmm";

// console.log(obj2.games)
// console.log(obj1.games)

//both obj1 and obj2 are changing when we changes on games array of obj2

//shallow copy in objets using spread operator end

//shallow copy in objets using object.assign()

obj2.name = "mohit";
obj2.games[0] = "mmmm";

console.log(obj2.games);
console.log(obj1.games);

//both obj1 and obj2 are changing when we changes on games array of obj2

//shallow copy in objets using object.assign() end

///////////////////////////deep copy in array and objects ///////////////////

const deepArr = ["noida", "delhi", "ncr", { name: "kapil" }];

//how achive deep copy in javascript

// so using JSON.parse(JSON.stringify()) methods we can use deep
//copy in objects and array.

const deepAnotherArr = JSON.parse(JSON.stringify(deepArr));

deepAnotherArr[3].name = "sahil";
console.log(deepArr[3]);
console.log(deepAnotherArr[3]);

// deep copy in array end
