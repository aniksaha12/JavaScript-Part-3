// sysnchronous programming vs asynchronous programming
// sysnchronous programming
// synchronous programming single threaded

// console.log("script start");

// for(let i=1; i < 10000 ; i++){
//     console.log("inside for loop");
// }

// console.log("script end");

// aynchronous programming

// setTimeout

// console.log("script start");
// function hello(){
//     console.log("Hello world!");
// }
// setTimeout(hello,1000 );
// console.log("Script end");

// using array

console.log("script start");

const id = setTimeout(() => {
    console.log("inside setTimeout");
}, 1000);

for(let i = 1; i < 100; i++) {
    console.log("....");
}
console.log("settimeout id is", id);
console.log("clearing time out");
clearTimeout(id);
console.log("script end");