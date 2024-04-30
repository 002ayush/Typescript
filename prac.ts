let userId : number = 12356;
console.log(userId);
type User = {
    name:string,
    age:number,
    isActive : boolean
}
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
let arr : Array<number | string> = [1,2,3,'A','B']
for(let ans of arr){
    console.log(ans)
}
let tuple : [string,number,boolean]

let 



export{}