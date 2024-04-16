// let temperature = prompt("what is the temperature outside?");
let body = document.querySelector("body");

function checkWeather (){
    let temp = document.querySelector("#temperature");
    let temperature= temp.value;
if (temperature>=10 && temperature<20){
    console.log("it feels cold");
    body.style.backgroundColor = "lightblue"
} else if (temperature >=20 && temperature < 30){
    console.log("it feels warm ngl");
    body.style.backgroundColor = "orange"
} else if (temperature >30){
    console.log("omg so hot bro");
    body.style.backgroundColor = "red"
} else if (temperature < 10){
    console.log(" omg so coldddddddd");
    body.style.backgroundColor = "blue"
}
}