

// Function to get weather information
async function getWeather() {
    const cityInput = document.getElementById("cityInput").value;

    // Check if a city is provided
    if (!cityInput) {
        alert("Please enter a city name.");
        return;
    }

    try {
        // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
        const apiKey = 'YOUR_API_KEY';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === "404") {
            alert("City not found. Please enter a valid city name.");
            return;
        }

        const weatherInfo = document.getElementById("weatherInfo");
        const date = new Date(data.dt * 1000); // Convert timestamp to milliseconds
        const formattedDate = date.toLocaleString();

        // Display weather information
        weatherInfo.innerHTML = `
            <p>City: ${data.name}</p>
            <p>Date and Time: ${formattedDate}</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Temperature: ${data.main.temp} &deg;C</p>
            <p>Humidity: ${data.main.humidity}%</p>
        `;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Error fetching weather data. Please try again later.");
    }
}





function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;
  }