var btnNos = document.querySelectorAll(".drum").length;

for (var i = 0; i < btnNos; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        playSound(this.innerText);
        this.classList.add("pressed");
        removeEffect(this);
     })
}

// document.querySelector(".drum").addEventListener("click", function(){
//     alert("clicked");
// });

document.addEventListener("keydown", function(event){
    playSound(event.key);
    var key_tag = document.querySelector("." + event.key.toLocaleLowerCase());
    key_tag.classList.add("pressed");
    removeEffect(key_tag);
})

function playSound(key) {
    switch (key.toLowerCase()) {
        case 'w':
            const sound1 = new Audio("sounds/crash.mp3");
            sound1.play();
            break;
        case 'a':
            const sound2 = new Audio("sounds/kick-bass.mp3");
            sound2.play();
            break;
        case 's':
            const sound3 = new Audio("sounds/snare.mp3");
            sound3.play();
            break;
        case 'd':
            const sound4 = new Audio("sounds/tom-1.mp3");
            sound4.play();
            break;
        case 'j':
            const sound5 = new Audio("sounds/tom-2.mp3");
            sound5.play();
            break;
        case 'k':
            const sound6 = new Audio("sounds/tom-3.mp3");
            sound6.play();
            break;
        case 'l':
            const sound7 = new Audio("sounds/tom-4.mp3");
            sound7.play();
            break;
        default:
            break;
    }

}

function removeEffect(elm){
    setTimeout(function () {
            elm.classList.remove("pressed");
    }, 100);
}

setTimeout(function () {
            
}, 100);