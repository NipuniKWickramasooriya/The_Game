//count the time(starting time)
var startTime = new Date().getTime();

function getRandomColor(){
    var letters = "0123456789ABCDEF";
    var color = "#";

    for(var i = 0; i < 6; i++){
        color+=letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//Again appear the shape
function shapeAppear(){

    var top = Math.random()*550;
    var left = Math.random()*550;

    var width = Math.random()*150;
    //var height = Math.random()*150;

    //circle
    if(Math.random()>0.5){
        document.getElementById("rectangle").style.borderRadius = "50%";
    }

    else{
        document.getElementById("rectangle").style.borderRadius = "0%";
    }

    document.getElementById("rectangle").style.top = top + "px";
    document.getElementById("rectangle").style.left = left + "px";

    document.getElementById("rectangle").style.height = width + "px";
    document.getElementById("rectangle").style.width = width + "px";

    document.getElementById("rectangle").style.display = "block";

    document.getElementById("rectangle").style.backgroundColor = getRandomColor();

    startTime = new Date().getTime();
}

//Delay to appear the shape
function shapeAppearDelay(){
    setTimeout(shapeAppear,Math.random()*1500);
}
shapeAppearDelay();

//Hide shape
document.getElementById("rectangle").onclick = function(){

    document.getElementById("rectangle").style.display="none";

    //count the time(ending time)
    var endTime = new Date().getTime();
    var time = (endTime - startTime)/1000;
   
    document.getElementById("time").innerHTML = time + "s";

    //Delay to appear the shape again
    shapeAppearDelay();
}