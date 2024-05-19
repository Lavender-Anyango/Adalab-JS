// for loop

const multiply = (num) => {
    let newArray = [];

    for (let i = 0; i < num.length; i++){
        const multiplyByTwo = (num[i] * 2);
        newArray.push(multiplyByTwo);
    }
    return newArray;
}
console.log(multiply([2,3,4,5,6,7,8]));

// for ... of

const totalSum = (numbers) =>{
    let sum = 0;

    for (let num of numbers){
        sum += num;
    }
    return sum;
}
console.log(totalSum([2,3,4,5,6,7]));

// while loop

// const students = (studentsNames) => {
//     while(studentsNames.length > 2){
//         console.log("Teach Students");
//     }
//     studentsNames.pop();
//     if(studentsNames.length === 2){
//         console.log("You are left with two students");

//     }
// };
// students(["Ema", "Eve", "Ann", "Judith"]);

const kickBall = (leg) =>{
    do{
        console.log('Kick the ball');
    }while(leg)
};
kickBall(false)

// switch 

