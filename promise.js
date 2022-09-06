// Promise(future value)

console.log("script start");
const bucket = ['coffee','chips','vegetables','salt' ,'rice'];

const friedRicePromise = new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables")&& bucket.includes("salt")&& bucket.includes("rice")){
        resolve("Fried Rice");
    }else{
        reject(new Error("something missing from bucket"));
    }
})

// produce



// consume
// how to consume

friedRicePromise.then(

    // when promise resolve
(myfriedRice)=> {
    console.log("lets eat", myfriedRice);
},

).catch (

// when promise reject
 (error)=>{
    console.log(error)
})

for (let i = 0; i<= 100; i++){
    console.log(Math.random(),i);
}

console.log("script end");

