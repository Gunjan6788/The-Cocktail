window.addEventListener("load", function () {
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
    xhr.send()
    xhr.onload = function () {
        var response = JSON.parse(this.response)
        var arrayResponse = response["drinks"]
        alcoholicData(arrayResponse)
    }
})

var id
function alcoholicData(arrayResponse) {
    count = 0
    console.log(arrayResponse)
    arrayResponse.forEach(element => {
        if (count < 30) {
            var alcoholic = document.getElementById("alcoholic")

            var div = document.createElement("div")
            var card = document.createElement("div")
            var img = document.createElement("img")
            var cardBody = document.createElement("div")
            var p = document.createElement("p")
            var button = document.createElement("button")

            alcoholic.appendChild(div)
            div.append(card)
            card.append(img, cardBody)
            cardBody.append(button, p)

            div.setAttribute("class", "col-lg-2 p-1")
            card.setAttribute("class", "p-3")
            img.setAttribute("class", "img-fluid")
            p.setAttribute("class", "h5")
            button.setAttribute("id", element.idDrink)
            button.setAttribute("class", "btn btn-info  btn-lg btn-block")
            img.src = element.strDrinkThumb
            p.textContent = element.strDrink
            button.textContent = "Get Details"

            button.addEventListener("click", function () {
                localStorage.setItem("id", button.id)
                location.replace('indexes/index2.html')
            })
        }
        count++
    })
}

var btn = document.getElementById("btn")
var input = document.getElementById("name")
btn.addEventListener('click', function (e) {
    e.preventDefault()
    var name = input.value;
    box2 = document.getElementById("box2")

    while (box2.firstChild) {
        box2.removeChild(box2.firstChild)
    }

    searchByName(name)
    input.value = ""

}, true)

// get ordinary drinks
var ordinary_drink = document.getElementById('ordinaary_drinks')
ordinary_drink.addEventListener('click', function (e) {
    e.preventDefault()

    box2 = document.getElementById("box2")
    while (box2.firstChild) {
        box2.removeChild(box2.firstChild)
    }

    getOrdinaryDrinks()
}, true)

function getOrdinaryDrinks() {
    var xhr = new XMLHttpRequest()

    var url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink"

    xhr.open('GET', url)
    xhr.send()
    xhr.onload = function () {
        var response = JSON.parse(this.response)
        var arrayResponse = response['drinks']

        rightBox = document.getElementById("rightBox")
        rightBox.setAttribute("class", "d-none")

        arrayResponse = arrayResponse.slice(0, 30)

        showData(arrayResponse)
    }
}

// get all cocktails
var cocktails = document.getElementById('cocktails')
cocktails.addEventListener('click', function (e) {
    e.preventDefault()

    box2 = document.getElementById("box2")
    while (box2.firstChild) {
        box2.removeChild(box2.firstChild)
    }

   getcocktails()
}, true)

function getcocktails() {
    var xhr = new XMLHttpRequest()

    var url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"

    xhr.open('GET', url)
    xhr.send()
    xhr.onload = function () {
        var response = JSON.parse(this.response)
        var arrayResponse = response['drinks']

        rightBox = document.getElementById("rightBox")
        rightBox.setAttribute("class", "d-none")

        arrayResponse = arrayResponse.slice(0, 30)

        showData(arrayResponse)
    }
}

/// get cocktails by glass

var cocktails_glass = document.getElementById('cocktails_glass')
cocktails_glass.addEventListener('click', function (e) {
    e.preventDefault()

    box2 = document.getElementById("box2")
    while (box2.firstChild) {
        box2.removeChild(box2.firstChild)
    }

   getCocktails_glass()
}, true)

function getCocktails_glass() {
    var xhr = new XMLHttpRequest()

    var url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"

    xhr.open('GET', url)
    xhr.send()
    xhr.onload = function () {
        var response = JSON.parse(this.response)
        var arrayResponse = response['drinks']

        rightBox = document.getElementById("rightBox")
        rightBox.setAttribute("class", "d-none")

        arrayResponse = arrayResponse.slice(0, 30)

        showData(arrayResponse)
    }
}

/// get by champange_flute

var champange_flute = document.getElementById('champange_flute')
champange_flute.addEventListener('click', function (e) {
    e.preventDefault()

    box2 = document.getElementById("box2")
    while (box2.firstChild) {
        box2.removeChild(box2.firstChild)
    }

   getchampange_flute()
}, true)

function getchampange_flute() {
    var xhr = new XMLHttpRequest()

    var url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute"

    xhr.open('GET', url)
    xhr.send()
    xhr.onload = function () {
        var response = JSON.parse(this.response)
        var arrayResponse = response['drinks']

        rightBox = document.getElementById("rightBox")
        rightBox.setAttribute("class", "d-none")

        arrayResponse = arrayResponse.slice(0, 30)

        showData(arrayResponse)
    }
}

//serach by name

function searchByName(name) {

    console.log(name.length)
    var xhr = new XMLHttpRequest()

    if (name.length == 1) {
        var url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=" + name
    }
    else {
        var url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + name

    }
    xhr.open("GET", url)
    xhr.send()
    xhr.onload = function () {
        var response = JSON.parse(this.response)
        var arrayResponse = response["drinks"]
        console.log(response)
        rightBox = document.getElementById("rightBox")
        rightBox.setAttribute("class", "d-none")

        showData(arrayResponse)
    }

}

function showData(arrayResponse) {
    box2 = document.getElementById("box2")
    count = 0
    arrayResponse.forEach(element => {

        box2 = document.getElementById("box2")

        var div = document.createElement("div")
        var card = document.createElement("div")
        var img = document.createElement("img")
        var cardBody = document.createElement("div")
        var p = document.createElement("p")
        var button = document.createElement("button")

        box2.append(div)
        div.append(card)
        card.append(img, cardBody)
        cardBody.append(button, p)

        div.setAttribute("class", "col-lg-2")
        card.setAttribute("class", "p-3")
        img.setAttribute("class", "img-fluid")
        p.setAttribute("class", "h5")
        button.setAttribute("id", element.idDrink)
        button.setAttribute("class", "btn btn-info  btn-lg btn-block")
        img.src = element.strDrinkThumb
        p.textContent = element.strDrink
        button.textContent = "Get Details"

        button.addEventListener("click", function () {
            localStorage.setItem("id", button.id)
            location.replace('indexes/index2.html')
        })
    })
}