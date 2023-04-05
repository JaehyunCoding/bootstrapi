// 1

let dogButton = document.querySelector(`button`)
let dogImg = document.querySelector(`img`)

fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(response => response.json())
    .then(data => {
        dogImg.src = data.message
    })
    

dogButton.addEventListener(`click`, () => {
    fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(response => response.json())
    .then(data => {
        dogImg.src = data.message
    })
})

// 2

let userInput = document.querySelector(`#user-Input`)
let submitBut = document.querySelector(`#weather-But`).addEventListener(`click`, getWeather)
let apiContainer = document.querySelector(`#api-Content`)
let weather = document.createElement(`span`)

function getWeather(){
    let city = userInput.value
    fetch(encodeURI(`https://goweather.herokuapp.com/weather/${city}`))
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        let description = data.description
        let temp = data.temperature
        let wind = data.wind
        weather.innerText = `In ${city}, ${description}, ${temp}, ${wind}`
        apiContainer.append(weather)
        city = ``
        userInput.value = ``
    })
}