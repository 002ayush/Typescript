/*const enum hello{
    name = "Ayush",
    age = 0,
    collegeId,
}
let name1 = hello.name
console.log(`The name of the person is ${name1}`)
*/

//Learnig interfacre in Typescript
interface hello {
    name : string,
    readonly age : number,
    addharNo ?: number,
    getName() : string
}

let obj : hello = {name:'ayush',age : 12,
getName : () => {
    return "Ayush"
}}