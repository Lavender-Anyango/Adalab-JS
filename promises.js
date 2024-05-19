const internship = false;
const ourPromise = new Promise((resolve, reject) =>{
    if(internship){
        resolve("I made it")
    }
    else{
        reject("I will try harder")
    }
})


ourPromise.then((response)=>{
    console.log(response);
    console.log("I will continue working hard");
})
.catch((error)=>{
    console.log(error);
    console.log('I will continue applying for jobs');
})
.finally(()=>{
    console.log("I will be a Software Engineer");

});


console.log({ourPromise});

//promise chainning
// then() - successful
// catch() - rejected
// finally() - resolve, reject



async function myAkiraChixDream(){
    try{
        console.log("This is my Dream");
        await ourPromise;
    }
    catch{
        console.log("Our dream is not yet successful")
    }

}

myAkiraChixDream();

function add(){
    console.log(1 + 2)
}

add();