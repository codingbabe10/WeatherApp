async function getWeather() {
    const cityInput = document.getElementById("cityInput").value;

    // Check if a city is provided
    if (!cityInput) {
        alert("Please enter a city name.");
        return;
    }

    try {
        // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
        const apiKey = '4987f0e2952ccb9a801e86acb83ae7a0';
        const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=4987f0e2952ccb9a801e86acb83ae7a0`;

        const response = await fetch (http://api.openweathermap.org/);
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

