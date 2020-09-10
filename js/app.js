const api = {
  key : "95876b5c5757c56245370960e005c1cb",
  base : "http://api.openweathermap.org/data/2.5/"
}
fetch("http://api.openweathermap.org/data/2.5/weather?q=Bogotá,&appid=95876b5c5757c56245370960e005c1cb")
  .then(response => response.json())
  .then(data => {
    //console.log(data);
    var estadoClima = data["weather"][0]["description"];
    var temp = "Bogotá\n" + Math.round(parseFloat(data["main"]["temp"]) - 273.15) + "°c\n" + estadoClima;
    var logoClima = data["weather"][0]["icon"];

    //console.log(estadoClima);
    document.getElementById('climaBogota').innerText = temp;
    document.getElementById('climaBogotaImg').src = "http://openweathermap.org/img/wn/" + logoClima + "@2x.png";
  })
.catch(err => alert("Noo"))
fetch("http://api.openweathermap.org/data/2.5/forecast?q=Bogotá&appid=95876b5c5757c56245370960e005c1cb")
  .then(response => response.json())
  .then(data => {
    var diasFecha = data["list"][4]["dt_txt"];
    var estadoClima = data["list"][4]["weather"][0]["description"];
    var temp = Math.round(parseFloat(data["list"][4]["main"]["temp"])- 273.15);
    var logoClima = data["list"][4]["weather"][0]["icon"];

    document.getElementById('PrimerDiaFercha').innerText = diasFecha;
    document.getElementById('EstadoPrimer').innerText = estadoClima + "\n" + temp + "°c";
    document.getElementById('climaBogotaPrimerImg').src = "http://openweathermap.org/img/wn/" + logoClima + "@2x.png";

    diasFecha = data["list"][12]["dt_txt"];
    estadoClima = data["list"][12]["weather"][0]["description"];
    temp = Math.round(parseFloat(data["list"][12]["main"]["temp"])- 273.15);
    logoClima = data["list"][12]["weather"][0]["icon"];

    document.getElementById('SegundoDiaFecha').innerText = diasFecha;
    document.getElementById('EstadoSegundo').innerText = estadoClima + "\n" + temp + "°c";
    document.getElementById('climaBogotaSegundoImg').src = "http://openweathermap.org/img/wn/" + logoClima + "@2x.png";

    diasFecha = data["list"][20]["dt_txt"];
    estadoClima = data["list"][20]["weather"][0]["description"];
    temp = Math.round(parseFloat(data["list"][20]["main"]["temp"])- 273.15);
    logoClima = data["list"][20]["weather"][0]["icon"];

    document.getElementById('TercerDiaFecha').innerText = diasFecha;
    document.getElementById('EstadoTercero').innerText = estadoClima + "\n" + temp + "°c";
    document.getElementById('climaBogotaTerceroImg').src = "http://openweathermap.org/img/wn/" + logoClima + "@2x.png";
  })
.catch(err => alert("noo"))
fetch("http://api.openweathermap.org/data/2.5/weather?q=Paris,&appid=95876b5c5757c56245370960e005c1cb")
  .then(response => response.json())
  .then(data => {
    //console.log(data);
    var estadoClima = data["weather"][0]["description"];
    var temp = Math.round(parseFloat(data["main"]["temp"]) - 273.15) + "°c\n" + estadoClima;
    var logoClima = data["weather"][0]["icon"];

    //console.log(estadoClima);
    document.getElementById('desParis').innerText = temp;
    document.getElementById('climaParisIcon').src = "http://openweathermap.org/img/wn/" + logoClima + "@2x.png";
  })
.catch(err => alert("Noo"))
fetch("http://api.openweathermap.org/data/2.5/weather?q=Roma,&appid=95876b5c5757c56245370960e005c1cb")
  .then(response => response.json())
  .then(data => {
    //console.log(data);
    var estadoClima = data["weather"][0]["description"];
    var temp = Math.round(parseFloat(data["main"]["temp"]) - 273.15) + "°c\n" + estadoClima;
    var logoClima = data["weather"][0]["icon"];

    //console.log(estadoClima);
    document.getElementById('desRoma').innerText = temp;
    document.getElementById('climaRomaIcon').src = "http://openweathermap.org/img/wn/" + logoClima + "@2x.png";
  })
.catch(err => alert("Noo"))
//http://openweathermap.org/img/wn/10d@2x.png
//climaBogotaImg
//http://api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}
//http://api.openweathermap.org/data/2.5/forecast/?q=Bogotá&cnt=40&appid=95876b5c5757c56245370960e005c1cb
