var cities = [];
var btn = document.querySelector(".btn")

console.log(btn);
function searchCity(){
    var searchBar = document.querySelector(".form-control");
    console.log(searchBar.value);

    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=bc85caac9086a3e7368fbe827c4f1e33&units=imperial"

fetch (apiUrl) 
.then(function(response){
    console.log(response);
    return response.json()
}) 
.then(function(data){
    console.log(data);
    console.log(data.main.temp);
})
}

btn.addEventListener("click", searchCity) 


