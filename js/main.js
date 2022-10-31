document.getElementById("crash-cymbal").addEventListener("click", () => {
    new Audio("../assets/crash.wav").play().then(() => {
        // Audio is playing.
    }).catch(error => {
        console.log(error);
    });
});
document.getElementById("hi-hat-cymbal").addEventListener("click", () => {
    new Audio("../assets/hi-hat.wav").play().then(() => {
        // Audio is playing.
    }).catch(error => {
        console.log(error);
    });
});
document.getElementById("tom-drums1").addEventListener("click", () => {
    new Audio("../assets/high-tom.wav").play().then(() => {
        // Audio is playing.
    }).catch(error => {
        console.log(error);
    });
});

document.getElementById("snare-drum").addEventListener("click", () => {
    new Audio("../assets/snare.wav").play().then(() => {
        // Audio is playing.
    }).catch(error => {
        console.log(error);
    });
});

document.getElementById("bass-kick-drum").addEventListener("click", () => {
    new Audio("../assets/bass-drum.wav").play().then(() => {
        // Audio is playing.
    }).catch(error => {
        console.log(error);
    });
});

document.getElementById("ride-cymbal").addEventListener("click", () => {
    new Audio("../assets/ride.wav").play().then(() => {
        // Audio is playing.
    }).catch(error => {
        console.log(error);
    });
});

document.getElementById("tom-drums2").addEventListener("click", () => {
    new Audio("../assets/high-tom.wav").play().then(() => {
    }).catch(error => {
        console.log(error);
    });
});

document.getElementById("floor-tom-drum").addEventListener("click", () => {
    new Audio("../assets/medium-tom.wav").play().then(() => {
    }).catch(error => {
        console.log(error);
    });
});

