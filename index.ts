console.log("This is the typescript project");
console.log("This is awesome project we are serving it to the cutsomers")
//Installing lite-server instead of nodemon as it is heavy so using lite-server then it will display the html file on the web page......

//Classes in Typescript
/*
class User{
    
    protected myid : number = 125678
    constructor(
        public name : string,
        public email : string
        ){}
    get getEmail() : string{
        return this.email
    }
    set setId(id : number){
        this.myid = id 
    }
}

class SubUser extends User{
    constructor(public name : string,public email : string){
        super(name,email)
    }
    sendId() : number{
        if (this.myid <= 1){
            throw new Error("This is the error has been generated!!!!")
        }
        return this.myid
    }
}
const myuser  = new SubUser("Ayush","ayush@123");
*/
//Learning abstract class in Typescript
/*
abstract class myuser{
    abstract getname() : string
    greet():void{
        console.log("This is the just the greeting method which we are learning throughout")
    }
}
class sample extends myuser{
    getname(): string {
        return "My name is Ayush Mishra"
    }
}*/

/*
Learning Generics in Typescript
interface food{
    cusisine : string,
    place : string,
    itemNo : number
}
interface loc { 
    name : string,  
    state : string
}*/
/*
function generic<T>(arg1 : T) : T{
    return arg1;
}
generic("a")
*/
interface food {
    cusisine : string,
    itemno : number
}
interface loc {
    place : string,
    state : string
}
function sample(arg1 : food | loc) : arg1 is food{
    return (arg1 as food).cusisine !== undefined
}

sample({cusisine:"matarkapratha",itemno : 4});









