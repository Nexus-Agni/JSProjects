const form = document.querySelector("form")

form.addEventListener("submit",(event)=>{
    event.preventDefault("submit")
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#results")
    const remarks = document.querySelector("#remarks")

    if (height < 0 || height === '' || isNaN(height)) {
        result.innerHTML = `Please enter valid height`
    }
    else if (weight < 0 || weight ==='' || isNaN(weight)) {
        result.innerHTML = `Please enter valid weight`
    } else {
        //calculate BMI
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        result.innerHTML = `<span>BMI: ${bmi} </span>`
        if(bmi < 18.6) {
            remarks.innerHTML = `<span> Underweight </span>`
        } else if (bmi >= 18.6 && bmi <=24.9) {
            remarks.innerHTML = `<span> Normal range </span>`
        } else {
            remarks.innerHTML = `<span> Overweight </span>`
        }
    }
})