function updateTimerDisplay(minutes, seconds, elms) {
    document.getElementById(elms[0]).innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById(elms[1]).innerHTML = seconds.toString().padStart(2, '0');
}

let elms = document.getElementById("workContent").getElementsByTagName('p');
let gMinutes = document.getElementById(elms[0].id).innerHTML;
let gSeconds = document.getElementById(elms[1].id).innerHTML;
let timerInterval;

function startTimer() {
    clearInterval(timerInterval);
    if (document.getElementById("start").innerHTML === 'resume') {
        document.getElementById("start").innerHTML = 'start';
    }
    let minutes = Number(document.getElementById(elms[0].id).innerHTML);
    let seconds = Number(document.getElementById(elms[1].id).innerHTML);
    let totalSeconds = (minutes * 60) + seconds;
    if (totalSeconds <= 0) {
        clearInterval(timerInterval);
    }else{
        timerInterval = setInterval(() => {
            totalSeconds--;
            minutes = Math.floor(totalSeconds / 60);
            seconds = totalSeconds % 60;
            updateTimerDisplay(minutes, seconds, [elms[0].id, elms[1].id]);
            if (totalSeconds <= 0) {
                clearInterval(timerInterval);
            }
        }, 1000);
        }
}

function stopTimer() {
    clearInterval(timerInterval);
    document.getElementById("start").innerHTML = 'resume';
}

function resetTimer() {
    console.log(gMinutes);
    clearInterval(timerInterval);
    if (document.getElementById("start").innerHTML === 'resume') {
        document.getElementById("start").innerHTML = 'start';
    }
    document.getElementById(elms[0].id).innerHTML = gMinutes;
    document.getElementById(elms[1].id).innerHTML = gSeconds;
    
}

let bt = "workContent";
function changeTab(evt, breakType) {
    bt = breakType;
    var tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(breakType).style.display = "block";
    evt.currentTarget.classList.add("active");
    elms = document.getElementById(breakType).getElementsByTagName('p');
    gMinutes = document.getElementById(elms[0].id).innerHTML;
    gSeconds = document.getElementById(elms[1].id).innerHTML;
    updateTimerDisplay(gMinutes, gSeconds, [elms[0].id, elms[1].id]);
    resetTimer();

}

function saveButton() {
    let input1 = document.getElementById("workTime");
    let inputValue1 = input1.value;
    
    let input2 = document.getElementById("shortTime");
    let inputValue2 = input2.value;
    
    let input3 = document.getElementById("longTime");
    let inputValue3 = input3.value;

    document.getElementById("minutes1").innerHTML = inputValue1.toString().padStart(2, '0');
    document.getElementById("minutes2").innerHTML = inputValue2.toString().padStart(2, '0');
    document.getElementById("minutes3").innerHTML = inputValue3.toString().padStart(2, '0'); 

    elms = document.getElementById(bt).getElementsByTagName('p');
    gMinutes = document.getElementById(elms[0].id).innerHTML;
    gSeconds = document.getElementById(elms[1].id).innerHTML;
    updateTimerDisplay(gMinutes, gSeconds, [elms[0].id, elms[1].id]);
    resetTimer();

    
}

