const cup = {
    color: "red",
    size: "small",
    texture: "smooth",
    shape: "round",
    functionality:{
        drinkType: "tea",
        temperature: "hot"
    },

    // drink: function(){
    //     console.log("Use me to drink")
    //     console.log(`My main purpose is to drink ${this.functionality.temperature} ${this.functionality.drinkType}`);

    // }
    // Arrow function 
    drink: () => {
        console.log("Use me to drink")
        console.log(`My main purpose is to drink ${cup.functionality.temperature} ${cup.functionality.drinkType}`);

    }

}

console.log({color: cup.color});
console.log({size: cup.size});
console.log({temperature: cup.functionality.temperature});

cup.model = "glass"

console.log(cup);
delete cup.model
console.log(cup);

cup.color = "green"

cup.drink()


// All Keys
const keys = Object.keys(cup)
console.log({keys});

const values = Object.values(cup)
console.log({values});


const loop = Object.keys(cup).map(item =>{
    return ({key:item, value: cup[item]})
});

console.log(loop)



Object.keys(cup).forEach(item =>{
    return ({key:item, value: cup[item]})
});