// var for defining my first name
var myName = "Samir";
// constant for defining the number of united states of America
const numberOfStates = "50";
// an Example of using simple math in javaScript (adding)
var addingExample = 5 + 4;
//simple function for saying Hi!
function sayHello() {
    alert("Hello World!");
}
sayHello();
//function for checking age and 2 different alerts 1 if younger than 21 and other is for 21 and above
function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
    else {
        alert("Welcome " + name + "!");
    }
}
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);
//loop for showing vegetables
let myVegetables = ['Carrot', 'Boroccoli', 'Garlic', 'Kale'];
for (i = 0; i < myVegetables.length; i++) {
    console.log(myVegetables[i]);
}
//using objects to run my checkAge function
let clients = [
    obj1 = {
        name: "Samir",
        age: 22
    },
    obj2 = {
        name: "Sameh",
        age: 20
    },
    obj3 = {
        name: "George",
        age: 51
    },
    obj4 = {
        name: "Peter",
        age: 20
    },
    obj5 = {
        name: "Mina",
        age: 18
    }
];
for (i = 0; i < clients.length; i++) {
    checkAge(clients[i].name, clients[i].age);
}


//getLength function for calculating number of any string's chracters.
function getLength(word) {
    
    results = word.length;
    if (results %2 == 0) {
        console.log("The world is nice and even!");
    }
    else{
        console.log('The world is an odd place!');
    }
}
getLength("Hello World");


