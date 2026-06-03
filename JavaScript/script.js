document.addEventListener ("keydown", (event) =>{
    console.log(event.key);

    if (event.key == "b") {
        document.getElementById("Bond").style = "color:pink";
    }
});