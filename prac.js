"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userId = 12356;
console.log(userId);
/*
function print(user : User) : void {
    console.log(`The name is ${user.name} and his age is ${user.age}`);
}
print({name:"Ayush",age : 21,isActive:true})*/
/*
let hello = (val : string) : string => {
    return val;
}
hello("Ayush");
*/
//If I want to give multiple datatypes together...
//We have to use the concept of union
var arr = [1, 2, 3, 'A', 'B'];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var ans = arr_1[_i];
    console.log(ans);
}
