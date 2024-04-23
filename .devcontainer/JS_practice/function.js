//Syntax
function functnName(){
 // console.log("I'm inside function")
}

//Examples
function addNumbers(num1, num2){
    return num1+num2
}

//console.log(addNumbers(4,5));

//Exaple 2
function CalculatePrice(...price){
    return price;
}

console.log(CalculatePrice(100,200,300,400)); //[ 100, 200, 300, 400 ] it will retirn the value in arrays

//Ex.3 values from objects
const MyAdd={
    name:"Vijesh",
    email: "vijesh@gmail.com",
    age: 26
}

function getDetailes(detailes){
    return `${detailes.name} is loged in`
}

console.log(getDetailes(MyAdd));

//Ex.4 values from Arrays

const newAraay=[100,200,300,400];

function getArray(array){
    return array[1];
}

console.log(getArray(newAraay));