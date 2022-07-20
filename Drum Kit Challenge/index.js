var nubmerOfDrumButtons = document.querySelectorAll(".drum").length;

for( var i = 0; i<nubmerOfDrumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        this.style.color = "White";
    });
}


// var audio = new Audio("sounds/tom-3.mp3");
// audio.play();