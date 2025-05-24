// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Set last modified date in footer
document.getElementById('lastModified').textContent = document.lastModified;

// Calculate and display wind chill
function calculateWindChill(temperature, windSpeed) {
    // Wind chill formula (Celsius)
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}

// Get temperature and wind speed values
const temperature = 8; // °C
const windSpeed = 10; // km/h

// Display wind chill if conditions are met
const windChillElement = document.getElementById('windchill');

// Conditions for wind chill calculation (Celsius and km/h)
if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = `${windChill.toFixed(1)}°C`;
} else {
    windChillElement.textContent = "N/A";
}