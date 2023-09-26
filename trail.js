
const apiKey ="6869f9ca8d5eb531508a3f67a7f2e910"
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const Wicon = document.querySelector('.weather img');






async function weather(city)
{
  
    
    try{
    const response =   await fetch(apiUrl+city+ `&appid=${apiKey}`);
    
        if (!response.ok)
        {
            throw new Error('Network response not work');
        }
        const data  = await response.json();
        console.log(data);
        
        document.querySelector('.weather h1').innerHTML =Math.round(data.main.temp) +"°C"
        document.querySelector('.weather h2').innerHTML = data.name
        document.querySelector('.tt h4').innerHTML = data.main.humidity+"%"
        document.querySelector('.ttt h4').innerHTML =data.wind.speed+"Km/h"
        // document.querySelector('.col img').innerHTML =
        // document.querySelector().innerHTML =
        if (data.weather[0].main =='Clear')
        {
            Wicon.src= "../Weather app/images/clear.png"
        }
        else if (data.weather[0].main =='Clouds')
        {
            Wicon.src= "../Weather app/images/clouds.png"
        }
        else if (data.weather[0].main =='Drizzle')
        {
            Wicon.src= "../Weather app/images/drizzle.png"
        }
        else if (data.weather[0].main =='Humidity')
        {
            Wicon.src= "../Weather app/images/humidity.png"
        }
        else if (data.weather[0].main =='Mist')
        {
            Wicon.src= "../Weather app/images/mist.png"
        }
        else if (data.weather[0].main =='Rain')
        {
            Wicon.src= "../Weather app/images/rain.png"
        }
        else if (data.weather[0].main =='Snow')
        {
            Wicon.src= "../Weather app/images/snow.png"
        }
    
}
 
    catch(error){
        console.error("ERROR :"+error)
    }
}

searchBtn.addEventListener('click',()=>{
    weather(searchBox.value);
});

