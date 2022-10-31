const crashCymba = new Audio("../assets/crash.wav");
const hiHat = new Audio("../assets/hi-hat.wav");
const tomDrum = new Audio("../assets/high-tom.wav");
const snareDrum = new Audio("../assets/snare.wav");
const bassKickDrum = new Audio("../assets/bass-drum.wav");
const rideCymbal = new Audio("../assets/ride.wav");
const floorTomDrum = new Audio("../assets/medium-tom.wav");


document.getElementById("crash-cymbal").addEventListener("click", () => {
    crashCymba.play();
});
document.getElementById("hi-hat-cymbal").addEventListener("click", () => {
    hiHat.play();
});
document.getElementById("tom-drums1").addEventListener("click", () => {
    tomDrum.play()
});

document.getElementById("snare-drum").addEventListener("click", () => {
    snareDrum.play();
});

document.getElementById("bass-kick-drum").addEventListener("click", () => {
    bassKickDrum.play();
});

document.getElementById("ride-cymbal").addEventListener("click", () => {
    rideCymbal.play();
});

document.getElementById("tom-drums2").addEventListener("click", () => {
    tomDrum.play();
});

document.getElementById("floor-tom-drum").addEventListener("click", () => {
    floorTomDrum.play();
});

