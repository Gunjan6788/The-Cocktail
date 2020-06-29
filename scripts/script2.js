window.addEventListener("load", function () {
    var id = localStorage.getItem("id")
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id)
    xhr.send()
    xhr.onload = function () {
        var response = JSON.parse(this.response)
        var arrayResponse = response["drinks"]
        console.log(arrayResponse)
        details(arrayResponse)
    }
})


function details(arrayResponse) {
    var image = document.getElementById("image")
    var details = document.getElementById("details")
    arrayResponse.forEach(element => {
        var img = document.createElement("img")
        img.src = element.strDrinkThumb
        image.appendChild(img)

        var p = document.createElement("p")
        p.innerHTML = "Name : "+element.strDrink+"<br>"+"Category : "+element.strCategory+"<br>"+"Ingredient : "+element.strIngredient1+","+element.strIngredient2+"<br>"+"Glass Type : "+element.strGlass
        p.setAttribute("class","h3")
        details.appendChild(p)
    });


}
