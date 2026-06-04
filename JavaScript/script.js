document.addEventListener("keydown", (event) => {

    console.log(event.code);

if(event.code){
    document.getElementById(event.code).style = "background-color:pink";
    if(event.code == "Enter"){
        document.getElementById("enterBottom").style = "background-color:pink";
    }
}
});
document.addEventListener("keyup", (event) => {

    console.log(event.key);

if(event.code){
    document.getElementById(event.code).style = "background-color: rgb(85, 40, 30)";
    if(event.code == "Enter"){
        document.getElementById("enterBottom").style = "background-color: rgb(85, 40, 30)";
    }
}
});