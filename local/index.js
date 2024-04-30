"use strict";
console.log("This is the typescript project");
console.log("This is awesome project we are serving it to the cutsomers");
//Installing lite-server instead of nodemon as it is heavy so using lite-server then it will display the html file on the web page......
//Classes in Typescript

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.myid = 125678;
    }
    get getEmail() {
        return this.email;
    }
    set setId(id) {
        this.myid = id;
    }
}
class SubUser extends User {
    constructor(name, email) {
        super(name, email);
        this.name = name;
        this.email = email;
    }
    sendId() {
        if (this.myid <= 1) {
            throw new Error("This is the error has been generated!!!!");
        }
        return this.myid;
    }
}
const myuser = new SubUser("Ayush", "ayush@123");


 