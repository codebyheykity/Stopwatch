const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elaspedTime = 0;
let running = false;


function start(){
    if(!running){
        startTime = Date.now() - elaspedTime;
        timer = setInterval(update, 10);
        running = true;
    }

}

function stop(){
    if(running){
        clearInterval(timer);
        elaspedTime = Date.now() - startTime;
        running = false;

    }


}
function reset(){
    clearInterval(timer);
    startTime = 0;
    elaspedTime = 0;
    running = false;
    display.textContent = '00:00:00:00'

}

function update(){
    const currentTime = Date.now();
    elaspedTime = currentTime - startTime;

    let hours = Math.floor(elaspedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elaspedTime / (1000 * 60) % 60);
    let secends = Math.floor(elaspedTime / 1000 % 60);
    let milliSecends = Math.floor(elaspedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    secends = String(secends).padStart(2, "0");
    milliSecends = String(milliSecends).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${secends}:${milliSecends}`;
}