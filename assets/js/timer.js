function timer(workTime= 1500, shortTime= 300, longTime= 900) {
    
    const timer = document.getElementById("timer");
    const workTimerNavElement = document.getElementById("work-timer");
    const shortTimerNavElement = document.getElementById("short-timer");
    const longTimerNavElement = document.getElementById("long-timer");
    const controllerTimeButton = document.getElementById("btn-controller-timer");
    const resetTimeButton = document.getElementById("btn-reset");
    let timeCounter = "";
    let seconds = 0;
    let selectedNavOption = "WorkTimer";

    const optionsSecondsTimes = {
        "WorkTimer": workTime,
        "ShortTimer": shortTime,
        "LongTimer": longTime
    };

    const insertTextTimerCounter = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainderSeconds = seconds % 60;
        timer.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`;
    }

    const toggleViewButtonResetTime = (state) => {
        if (state === true) {
            resetTimeButton.style.display = "flex";
        } else if (state === false) {
            resetTimeButton.style.display = "none";
        }
    }

    const startTimeCounter = () => {
        timeCounter = setInterval(() => {
            insertTextTimerCounter(seconds);
            seconds--;
        }, 1000);
        controllerTimeButton.textContent = "Pause";
    }

    const pauseTimeCounter = () => {
        clearInterval(timeCounter);
        controllerTimeButton.textContent = "Start";
    }

    const resetTimeCounter = () => {
        clearInterval(timeCounter);
        seconds = optionsSecondsTimes[selectedNavOption];
        insertTextTimerCounter(optionsSecondsTimes[selectedNavOption]);
        controllerTimeButton.textContent = "Start";
        toggleViewButtonResetTime(false);
    }

    const navegation = (selectedNavTimer) => {
        switch (selectedNavTimer) {
            case "work-timer":
                workTimerNavElement.classList.add("bg-nav-timer");
                shortTimerNavElement.classList.remove("bg-nav-timer");
                longTimerNavElement.classList.remove("bg-nav-timer");
                resetTimeCounter();
                toggleViewButtonResetTime(false);
                seconds = optionsSecondsTimes["WorkTimer"]
                selectedNavOption = "WorkTimer"
                break;
            case "short-timer":
                shortTimerNavElement.classList.add("bg-nav-timer");
                workTimerNavElement.classList.remove("bg-nav-timer");
                longTimerNavElement.classList.remove("bg-nav-timer");
                resetTimeCounter();
                toggleViewButtonResetTime(false);
                seconds = optionsSecondsTimes["ShortTimer"]
                selectedNavOption = "ShortTimer"
                break;
            case "long-timer":
                longTimerNavElement.classList.add("bg-nav-timer");
                workTimerNavElement.classList.remove("bg-nav-timer");
                shortTimerNavElement.classList.remove("bg-nav-timer");
                resetTimeCounter();
                toggleViewButtonResetTime(false);
                seconds = optionsSecondsTimes["LongTimer"]
                selectedNavOption = "LongTimer"
                break;
            default:
                console.log("ERROR: Selected navegation timer not exist");
                break;
        }
    }

    const init = () => {
        navegation("work-timer");

        workTimerNavElement.addEventListener("click", (e) => {
            navegation("work-timer");
            insertTextTimerCounter(optionsSecondsTimes["WorkTimer"]);
        });
        
        shortTimerNavElement.addEventListener("click", (e) => {
            navegation("short-timer");
            insertTextTimerCounter(optionsSecondsTimes["ShortTimer"]);
        });
        
        longTimerNavElement.addEventListener("click", (e) => {
            navegation("long-timer");
            insertTextTimerCounter(optionsSecondsTimes["LongTimer"]);
        });
        
        controllerTimeButton.addEventListener("click", (e) => {
            if(controllerTimeButton.textContent === "Start") {
                startTimeCounter();
            } else {
                pauseTimeCounter();
            }
            toggleViewButtonResetTime(true);
        });
        
        resetTimeButton.addEventListener("click", (e) => {
           resetTimeCounter();
        });
    }

    return { init }
}