let fruits = ["Mango", "Banana", "Orange"];

let arr = new Array(20, 30);


console.log({fruits});
console.log({arr});

fruits[1] = 2
console.log(fruits);
console.log(fruits.slice(-1));

//addingitems in an array

let addLast = fruits.push("Apple");
console.log({fruits});

let addStart = fruits.unshift("Pineapple");
console.log({fruits});

let removeLast = fruits.pop();
console.log({fruits});

let removeFirst = fruits.shift();
console.log({fruits});

let newFruits = fruits.push("[Tomato", "Pearl]")


let items = [20, 30, 40, 50, 60]
let add = items.reduce((acc, cur)=> acc + cur);
console.log({add});

let multiply = items.map((item)=>item * 2)
console.log({multiply});


// for each returns undefined when you return
let square = [];
let total  = 0;
items.forEach(item => {
    const multiple = item * item;
    console.log(multiple);
    square.push(multiple);
    total+=item
});
console.log({square});
console.log({total});

// Destructuring

let [num1, num2, num3, ...rest] = items;
console.log({num1});
console.log({num2});
console.log({num3});
console.log({rest});

