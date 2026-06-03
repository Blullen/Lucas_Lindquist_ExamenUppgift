document.addEventListener("keydown", (event) => {

    console.log(event.key);

if(event.key){
    document.getElementById(event.key).style = "background-color:pink";
}
});
document.addEventListener("keyup", (event) => {

    console.log(event.key);

if(event.key){
    document.getElementById(event.key).style = "background-color: rgb(85, 40, 30)";
}
});