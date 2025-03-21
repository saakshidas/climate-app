const apiKey = "f62c1253f0963e3d98aa5d046db523b0"; // Replace with your API key

async function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (!city) {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById("weatherResult").innerHTML = `
                <h3>${data.name}, ${data.sys.country}</h3>
                <p>🌡 Temperature: ${data.main.temp}°C</p>
                <p>💧 Humidity: ${data.main.humidity}%</p>
                <p>⛅ Condition: ${data.weather[0].description}</p>
            `;
        } else {
            document.getElementById("weatherResult").innerHTML = `<p>⚠ City not found</p>`;
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.getElementById("weatherResult").innerHTML = `<p>❌ Error fetching data</p>`;
    }
}
