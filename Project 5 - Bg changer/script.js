const randomColor = function () {
    const hex = "0123456789abcdef"
    let color = "#"
    for (let index = 0; index < 6; index++) {
        color = color + hex[Math.floor(Math.random()*16)]
    }
    return color;
}

const start = document.querySelector("#start")
const stop = document.querySelector("#stop")
let bgchanger;
const startChangingBg = function () {
    const body = document.querySelector('body')
    body.style.backgroundColor = randomColor();
}
start.addEventListener('click', function () {
     bgchanger = setInterval( startChangingBg, 1000)
})

stop.addEventListener('click', ()=>{
    clearInterval(bgchanger);
})