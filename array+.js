let number = [12, 34, 56, 87, 90, 98, 76, 54, 32, 11, 10, 111, 11, 5, 6, 7, 8, 100, 12, 124, 987, 4556, 4, 9, 12, 44, 88, 66, 77, 23, 32, 33, 44, 99, 66, 44, 77, 88, 99, 90, 55, 567, 434, 555, 666, 888, 666, 999, 111, 222, 22];

number.push(22, 43, 213, 345, 756, 98, 677,12, 11, 43, 566, 7787, 777, 999, 9098, 809, 908, 70, 60, 50, 40, 30, 20, 10, 7823, 2837, 988, 222, 333, 444, 555, 666, 777, 888, 999, 112, 223, 334,445, 556, 667, 778, 889, 991,11,12);


function plusNumber() {
    let arrays = 0
    for( i = 0;i<number.length; i++){
        arrays = arrays + number[i]
        // console.log(arrays);
    }
        
        const numbers = (arrays - 2000) * 50;
        return numbers
     
}
// console.log(plusNumber())


function evenAndOdd(){
let evenNumbers = [];
let oddNumbers = [];
for(let i = 0; i<= 100; i++){
    
    if(i % 2 == 0){
        evenNumbers.push(i);
    }
       else{
        oddNumbers.push(i);
       }
       

   }
   
return {evenNumbers, oddNumbers}
}
// console.log(evenAndOdd())



function sunplus(){
    let sun = 0;
    for(i = 1; i<=100;i++){
        sun = sun + i;
        // console.log(sun)
    }
    return sun
}
console.log( sunplus());


function multiplication(){
let result = '\n';
for (let i = 9; i < 11; i++) {
    for (let j = 1; j < 11; j++) {
        result += (i*j) + '  ';
    }
    result += '\n'
}
     return result
}
console.log(multiplication());