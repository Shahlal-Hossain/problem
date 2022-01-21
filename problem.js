let greeting = "hello! good morning";

let result = " ";
for(let i = 0;i<greeting.length; i++){
    let char = greeting[i];
    result = char + result;
}
// console.log(result);

const arrayGreeting =["Hello","How","Are","you","Good", "Morning"]

// arrayGreeting.reverse()
// console.log(arrayGreeting);
let reversString = [];
for (let i = arrayGreeting.length-1; i>=0; i--) {
    
    reversString.push(arrayGreeting[i]) 
}
console.log(reversString);
