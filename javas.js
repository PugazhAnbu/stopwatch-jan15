const stopwatch = document.getElementById("display")


const playbutton = document.getElementById("playbtn");
const pausebutton = document.getElementById("pausebtn");
const stopbutton = document.getElementById("stopbtn");


var hr = 0
var min = 0
var sec = 0

var ms = 0

var timeStopped = true
// timeStopped? if true means stopwatch is not running currently
//  If false, means stopwatch is running currently

function startwatch(){
    if(timeStopped){
        timeStopped = false
        setTimeout(stopwatchCycle,100);
         showbutton("pause")
    }
   
}

function stopwatchCycle(){
    if(timeStopped ===false){
        sec = parseInt(sec)
        min = parseInt(min)
        hr = parseInt(hr)
        ms = parseInt(ms)
        ms += 1
        if(ms === 100){
            sec = sec +1
            ms = 0
        }
        if(sec === 60){
            min = min + 1
            sec = 0
            ms = 0
        }
        if(min === 60){
            hr = hr + 1
            min = 0
            sec = 0
            ms = 0
        }
        if(hr === 12){
            hr = 0
            min = 0
            sec = 0
            ms = 0
        }

        if(ms>0){
        ms="0"+ms
        }
         if(sec<10){
        sec="0"+sec
        }
        if(min<10){
            min="0"+min
        }
        if(hr<10){
            hr="0"+hr
        }
        stopwatch.innerHTML = `${hr}:${min}:${sec}:${ms}`
        setTimeout(stopwatchCycle,50)
    }
}
function stpwatch(){
    if(timeStopped===false){
        timeStopped = true
    showbutton("play")
    }
}
function resetwatch(){
    stopwatch.innerHTML="00:00:00"
    timeStopped = true
    hr = 0
    min = 0
    sec = 0

   showbutton("pause")
}
function showbutton(buttonkey){
//    let buttontoshow, buttontohide;
//    if(buttonkey === "play"){
//        buttontoshow= playbutton
//        buttontohide = pausebutton
//    }else{
//        buttontoshow = pausebutton
//        buttontohide = playbutton
//    }
//    buttontoshow.style.display = "block"
//    buttontohide.style.display = "none"

    
    if(buttonkey==="play"){
        playbutton.style.display="block"
        pausebutton.style.display="none"
    }else{
        playbutton.style.display="none"
        pausebutton.style.display="block"
    }
}
playbutton.addEventListener("click", startwatch)
pausebutton.addEventListener("click", stpwatch)
stopbutton.addEventListener("click", resetwatch)