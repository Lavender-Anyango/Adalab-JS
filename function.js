function add(num1, num2){
    const sum = num1 + num2;
    // console.log({sum});
    return {'sum' : sum};
}

console.log(add(2, 3));
add(4, 5);

let student = "Agnes"

function item (){
    const name = ["Anne", "Eunice"];
    console.log({name});
    console.log({inside:student});
    let child;
}
item();
console.log({outside:student});
child = "boy";

//Function Expressions

const subtract = function(num1 , num2){
    console.log(num1 - num2);
};
subtract(20, 10)

const multiply = (num1, num2) => console.log(num1 * num2);
multiply(6, 9);

// IIFEs

(function () {
    console.log("Hello There");
})();

// Hoisting
console.log(person);
var person = "human";
console.log('person 2...', person);


// Function Hoisting

greet()
function greet(){
    console.log("Hi person");
}

hello()
const hello = () => console.log("This is is a greeting");