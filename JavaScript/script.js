let isCtrlPressed = false;

document.addEventListener("keydown", (event) => {

    console.log(event.code);

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
    document.getElementById(event.code).style = "background-color:pink";
}
});
document.addEventListener("keyup", (event) => {

    console.log(event.key);

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