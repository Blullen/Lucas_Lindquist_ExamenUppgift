let isCtrlPressed = false;

document.addEventListener("keydown", (event) => {

if(event.code){
    if(event.code == "Enter"){
        document.getElementById("enterBottom").style = "background-color:pink";
    }
    if (event.code === 'ControlLeft') {
        isCtrlPressed = true;

        setTimeout(() => {
            if (isCtrlPressed) {
                document.getElementById("ControlLeft").style = "background-color:pink";
            }
        }, 0);
        return;
    }
    if (event.code === 'AltRight' || event.key === 'AltGraph') {
        isCtrlPressed = false;
        document.getElementById("AltRight").style = "background-color:pink";
        return;
    }
    if (event.code === "KeyM") {
        const img = document.getElementById("fortniteSeason3Map");

        if (img.style.display === "none") {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    }

    document.getElementById(event.code).style = "background-color:pink";
}
});
document.addEventListener("keyup", (event) => {

if(event.code){
    if(event.code == "Enter"){
        document.getElementById("enterBottom").style = "background-color: rgb(85, 40, 30)";
    }
    if (event.code === 'ControlLeft') {
        isCtrlPressed = false;
    }
    document.getElementById(event.code).style = "background-color: rgb(85, 40, 30)";
}
});