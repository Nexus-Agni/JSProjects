const body = document.querySelector("body")
const buttons = document.querySelectorAll(".boxes")

buttons.forEach(button => {
    button.addEventListener('click', (event)=>{
        if (event.target.id === 'red') {
            body.style.backgroundColor = event.target.id;
        }
        if (event.target.id === 'blue') {
            body.style.backgroundColor = event.target.id;
        }
        if (event.target.id === 'green') {
            body.style.backgroundColor = event.target.id;
        }
        if (event.target.id === 'yellow') {
            body.style.backgroundColor = event.target.id;
        }
    })
});


