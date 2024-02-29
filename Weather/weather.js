const apiKey="1ea46fe5f1e9e5ec0e4a90fe554b8664"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox= document.querySelector(".search input")
const searchbutton= document.querySelector(".search button")
const weatherIcon= document.querySelector(".weather-icon")


async function weatherCheck(city){
    const response = await fetch(apiUrl + city  + `&appid=${apiKey}`);

    if(response.status==404){
        document.querySelector(".error").style.display= "block"
        document.querySelector(".weather").style.display= "none"
    }else{

        
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML= data.main.humidity+"%";
    document.querySelector(".wind").innerHTML= data.wind.speed+"km/h";
    // document.querySelector(".maxha").innerHTML= data.wind.deg;  
    const colorb = document.querySelector(".card")

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src= "clouds.png";
        colorb.style.backgroundColor= 'grey'
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src= "clear.png";
        colorb.style.backgroundColor= 'skyblue'


    }else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src= "drizzle.png";
        colorb.style.backgroundColor= 'rgb(88, 49, 49)'


    }else if(data.weather[0].main=="Haze"){
        weatherIcon.src= "smog-solid.svg";
        colorb.style.backgroundColor= 'rgb(178, 187, 199)'
        


    }else if(data.weather[0].main=="Mist"){
        weatherIcon.src= "mist.png";
        colorb.style.backgroundColor= 'rgb(108, 158, 218)'

    }

    else if(data.weather[0].main=="Rain"){
        weatherIcon.src= "rain.png";
        colorb.style.backgroundColor= 'rgb(51, 44, 44)'


    }else if(data.weather[0].main=="Snow"){
        weatherIcon.src= "snow.png";
        colorb.style.backgroundColor= 'white'


    

    }

    document.querySelector(".weather").style.display= "block"
    document.querySelector(".error").style.display= "none"



    }
} 

searchbutton.addEventListener("click",()=>{
    weatherCheck(searchBox.value)

})
