/*
let p = new Promise((resolve,reject) => {
    console.log("The promise is fullfilled!!!!");
   
    resolve("200 status ok");
})

p.then((v) => {
    console.log(v);
})
p.catch((error) => {
    console.error("please give error");
})
*/
localStorage.setItem('name','ayush');
window.onstorage = ()=>{
    alert("Localstorage has been updated!!!!!")
}