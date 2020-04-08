window.addEventListener("load", function () {
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")
    xhr.send()
    xhr.onload = function () {
        var response = JSON.parse(this.response)
        var arrayResponse = response["drinks"]
        alcoholicData(arrayResponse)
        
    }
})

function alcoholicData(arrayResponse) {
    count = 0
    
    arrayResponse.forEach(element => {
        if (count < 30) {
            var alcoholic = document.getElementById("nonAlcoholic")

            var div = document.createElement("div")
            var card = document.createElement("div")
            var img = document.createElement("img")
            var cardBody = document.createElement("div")
            var p = document.createElement("p")
            var button = document.createElement("button")

            alcoholic.appendChild(div)
            div.append(card)
            card.append(img, cardBody)
            cardBody.append(button,p)

            div.setAttribute("class", "col-lg-2")
            card.setAttribute("class", "p-3")
            img.setAttribute("class", "img-fluid")
            p.setAttribute("class", "h5")
            button.setAttribute("id", element.idDrink)
            button.setAttribute("class", "btn btn-secondary  btn-lg btn-block")
            img.src = element.strDrinkThumb
            p.textContent = element.strDrink
            button.textContent = "Get Details"

            button.addEventListener("click",function(){
                localStorage.setItem("id", button.id)
                location.replace('/home/masai/Sprint-3/search.html')
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

            box2.append(div)
            div.append(card)
            card.append(img, cardBody)
            cardBody.append(p)

            div.setAttribute("class", "col-lg-2")
            card.setAttribute("class", "p-3")
            img.setAttribute("class", "img-fluid")
            p.setAttribute("class", "h5")
            img.src = element.strDrinkThumb
            p.textContent = element.strDrink
    })
}