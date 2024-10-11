const controllerTimeButton = document.getElementById("btn-controller-timer");
const resetTimeButton = document.getElementById("btn-reset");
const workTimer = document.getElementById("work-timer");
const shortTimer = document.getElementById("short-break-timer");
const longTimer = document.getElementById("long-break-timer");
const timer = document.getElementById("timer");

workTimer.style.backgroundColor = "#AB4343";


const optionsSecondsTimes = {
    "WorkTimer": 1500,
    "ShortTimer": 300,
    "LongTimer": 900
}
let seconds = 1500;
let selectedNavTimer = "WorkTimer";
let timeCounter;


function cleanBackgroundColor(element) {
    element.style.backgroundColor = "";
}

function startTimeCounter() {
    timeCounter = setInterval(() => {
        const minutes = Math.floor(seconds / 60);
        const remainderSeconds = seconds % 60;
        timer.textContent = `${minutes}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`;
        seconds--;
    }, 1000);

    setTimeout(timeCounter, seconds * 1000);
}

function stopTimeCounter() {
    clearInterval(timeCounter);
}

workTimer.addEventListener("click", (e) => {
    workTimer.style.backgroundColor = "#AB4343";
    [shortTimer, longTimer].forEach((element) => cleanBackgroundColor(element));
    timer.textContent = "25:00";
    selectedNavTimer = "WorkTimer";
    seconds = optionsSecondsTimes["WorkTimer"];
    stopTimeCounter();

})

shortTimer.addEventListener("click", (e) => {
    shortTimer.style.backgroundColor = "#AB4343";
    [workTimer, longTimer].forEach((element) => cleanBackgroundColor(element));
    timer.textContent = "05:00";
    selectedNavTimer = "ShortTimer";
    seconds = optionsSecondsTimes["ShortTimer"];
    stopTimeCounter();

})

longTimer.addEventListener("click", (e) => {
    longTimer.style.backgroundColor = "#AB4343";
    [shortTimer, workTimer].forEach((element) => cleanBackgroundColor(element));
    timer.textContent = "15:00";
    selectedNavTimer = "LongTimer";
    seconds = optionsSecondsTimes["LongTimer"];
    stopTimeCounter();

})

function resetTimeCounter() {
    clearInterval(timeCounter);
    console.log(optionsSecondsTimes[selectedNavTimer]);
    seconds = optionsSecondsTimes[selectedNavTimer]
    timer.textContent = "25:00";
    toggleViewButtonResetTime();
    controllerTimeButton.textContent = "Start";
}

function toggleViewButtonResetTime() {
    if (resetTimeButton.style.display === "none" || resetTimeButton.style.display === "") {
        resetTimeButton.style.display = "flex";
    } else {
        resetTimeButton.style.display = "none";
    }
}

controllerTimeButton.addEventListener("click", (e) => {
    if(controllerTimeButton.textContent === "Start") {
        console.log("start");
        startTimeCounter();
        toggleViewButtonResetTime();
        controllerTimeButton.textContent = "Pause";
    } else {
        stopTimeCounter();
        controllerTimeButton.textContent = "Start";
    }
});

resetTimeButton.addEventListener("click", (e) => {
    resetTimeCounter();
});