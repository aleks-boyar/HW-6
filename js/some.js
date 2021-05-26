// Task#1

// let userNumber = +prompt("Enter number");
// let userDegree = +prompt("Enter degree");
// function mathOperation(userNumber, userDegree = 1 ) {
//    if (!userNumber) {
//       return "some error";
//    }
//    if (!userDegree) {
//       return "some error";
//    }; 

//    return (userNumber ** userDegree);


// }
// console.log(mathOperation(userNumber,userDegree));

// Task#2

// function padString(str, num, symbol, right = true) {
//    if (typeof str !== "string")  { return "str param should be a string type"}
//    if (typeof num !== "number")  { return "num param should be a Number type" }

//    if(str.length === num) { return str;}

//    if (str.length > num)  {return str.substr(0,num)} 

//    if (symbol.length > 1)  {return "Symbol should be only 1 char"}


//    const symbolsQty = num - str.length;
//    let localSymbols = "";

//    for (let i = 0 ; i < symbolsQty; i++) {
//       localSymbols += symbol

//    }
//    let result = null;


//    if (right) result = str + localSymbols
//    if (!right) result = localSymbols + str

//    return result;


// }
// console.log(padString("Vova",3,"=",false))


