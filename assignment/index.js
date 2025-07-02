const section = document.querySelector(".container")
const h1 = document.querySelector(".google")
const p = document.querySelector(".gp")
const button = document.querySelector(".btn2")
const button2 = document.querySelector(".btn1")

const functionToRun = ()=>{
    section.style.border = "none"
    h1.textContent = ""
    p.textContent = ""

}

const functionToRun2 = ()=>{
    section.style.border = "5px solid red"
    section.style.padding = "10px"
    h1.textContent = "Google’s data center energy use doubled in 4 years"
    p.textContent = "The eye-popping stat comes from Google’s most recent sustainability report, which it released late last week. In 2024, Google data centers used 30.8 million megawatt-hours of electricity. That’s up from 14.4 million megawatt-hours in 2020, the earliest year Google broke out data center consumption."
}

button2.addEventListener("click", functionToRun2 )

button.addEventListener("click", functionToRun )