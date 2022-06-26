 // asynchronous programming
const first = () => {
    console.log("first");
    second();
}

const second = () => {
    setInterval(() => {
        console.log("second")
    },1800);
    third();
}

const third = () => {
    console.log("third");
}

first();

/* 
    1- Callback
    2- Promise
    3- Async / Await

*/