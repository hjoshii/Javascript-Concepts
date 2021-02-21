// How we can create private members in javascript like other object oriented programming language.

Example 1: Without private members

function Book() {
  this.name = "My Book"
  this.price = 20
  this.show = function () {
    console.log(this.name, this.price)
  }
}

let b1 = new Book()
b1.price = 30 
console.log(b1.price)

// if you see we are easily accessing name and price property of book and also able to change it, we want these property as private, dont able to access from outside. 

// if you want property as private declare as variables. lets see in below example.

Example 3: With private members


function Book1() {
  let name = "My Book" // private memeber for Book1 not accessble outside
  let price = 20 // private memeber for Book1 not accessble outside
  this.show1 = function () {
    console.log(name, price)
  }
}

let b1 = new Book1()

console.log(b1.price) // output undefined
console.log(b1.name)  // output undefined

// now you can see we are not able to get the name and price of book its showing undefied.
// if you want to get name and price of the book you need to call show1 function.

b1.show1()


// there are one more way to create private memebers in javascript using Object.defineProperty() lets see in below example

function Book2() {
  let name = "My Book"
  let price = 20
  Object.defineProperty(this, "name", {
    get: function () {
      return name
    }
  })

  Object.defineProperty(this, "price", {
    get: function () {
      return price
    }
  })
}

let b2 = new Book2()
console.log(b2.name) // output My Book
console.log(b2.price) // output 20
b2.name ="New Book" ;
b2.price =30;
console.log(b2.name) // output My Book
console.log(b2.price) // output 20

// you can see in above output name and price is not changed because you have provided only readonly access using get method, if you want to give write access
// from outside use set methos in Object.defineProperty, lets see in below example

function Book3() {
  let name = "My Book"
  let price = 20
  Object.defineProperty(this, "name", {
    get: function () {
      return name
    },
    set: function (n) {
      name = n
      return name
    }
    
  })

  Object.defineProperty(this, "price", {
    get: function () {
      return price
    },
     set: function (p) {
      price = p
      return price
    }
  })
}

let b3 = new Book3()
console.log(b3.name) // output My Book
console.log(b3.price) // output 20
b3.name ="New Book" ;
b3.price =30;
console.log(b3.name) // output New Book
console.log(b3.price) // output 30