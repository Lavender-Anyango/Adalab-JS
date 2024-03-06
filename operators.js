
// ========Arithmetic Operators=====

let a = 20;
let b = 30;

let add = a + b;

console.log({add});

let substract = a - b;
console.log({substract});

let division = a / b;
console.log({division});

let multiply = a * b;
console.log({multiply});


// ========Comparison Operators {loosely equalto(==) and strictly equalto(===)}=====


let c = '20';
let looselyEqualTo = a == c;
console.log({looselyEqualTo});


let strictlyEqualTo = a === c;
console.log({strictlyEqualTo});


let notEqualTo = a != c;
console.log({notEqualTo});


let strictlyNotEqualTo = a !== c;
console.log({strictlyNotEqualTo});


// =======Increment and Decrement====

// Increment
a++;
console.log({a});

// Decrement
b--;
console.log({b});


// ========= Compound  Operators==============

a+=5; // same as a = a + 5;
console.log({a});


// =====Implicit Coercion ==============

let d = 1 * c;
console.log({d});

let e = +c;
console.log({e});


// =====Explicit Coercion ==============

let f = Number(c);
console.log({f});