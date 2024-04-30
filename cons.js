
//Protypes used before the javascript......
/*let a = {
    name : "Ayush",
    age : "21"
}
console.log(`The name of the person is ${a.name} and his age is ${a.age}`);

let p = {
    run : () => {
        console.log('Running the javascript program.....');
    }
}
a.__proto__ = p;
a.run();*/
//this object in javascript
/*class myclass {
    constructor(name){
        this.name = this;
    }
    method1() {
        console.log("This is the method 1 which is used here!!!");
    }
    method2(){
        console.log(`This is the form which is filled by ${this.name}`);
    }
    //There is no need to use the fill method if we are using the constructor.b
    /*fill(name){
        this.name = name;
    }

};

let ayush = new myclass();
//ayush.fill("Tanuj")
ayush.method2();
*/
//Common js modules*
/*
const hello = (name) => {
    console.log(`This is the commom js exported here......${name}`);
}
module.exports = hello;*/
//E6 modules 
/*
export const hello = (name) => {
    console.log(`This is just to test how E6 works by ${name}`)
}
const ayush = () => {
    console.log("This is the default export");
}
export default ayush;
*/
//Learning Regex for checking it is the valid email or not
/*
let regx = /[a-zA-z]+@[a-z]+\.[a-z]+/g;
let email = 'ayush@gmasil.xcom';
if (regx.match(email)){
    console.log("Valid Email");
}else{
    console.log("Invalid Email");
}*/
//Spread operator

let arr = [1,2,3,4,5,6];
function print(...arr){
    console.log("The numbers of the array are --->")
    for(let val of arr){
        console.log(val)