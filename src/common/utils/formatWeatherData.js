function getTemperatureColor(temp) {
    if (temp <= -30) return "#003366"; // Extreme Cold
    if (temp <= -20) return "#4A90E2"; // Very Cold
    if (temp <= -10) return "#B3DFFD"; // Cold
    if (temp <= 0) return "#E6F7FF";  // Freezing
    if (temp <= 10) return "#D1F2D3"; // Cool
    if (temp <= 20) return "#FFFACD"; // Mild
    if (temp <= 30) return "#FFCC80"; // Warm
    if (temp <= 40) return "#FF7043"; // Hot
    return "#D32F2F"; // Extreme Heat
}

function getWindColor(speed) {
    if (speed <= 10) return "#E0F7FA"; // Light Cyan
    if (speed <= 20) return "#B2EBF2"; // Pale Blue
    if (speed <= 40) return "#4DD0E1"; // Soft Teal
    if (speed <= 60) return "#0288D1"; // Bright Blue
    return "#01579B"; // Deep Navy Blue
}

function getCloudColor(coverage) {
    if (coverage <= 10) return "#FFF9C4"; // Light Yellow
    if (coverage <= 30) return "#FFF176"; // Soft Yellow
    if (coverage <= 60) return "#E0E0E0"; // Light Gray
    if (coverage <= 90) return "#9E9E9E"; // Gray
    return "#616161"; // Dark Gray
}

function formatWeatherData(data) {
    return {
        name: data.location.name,
        country: data.location.country,
        lat: data.location.lat,
        lon: data.location.lon,
        temp_c: data.current.temp_c,
        temp_color: getTemperatureColor(data.current.temp_c),
        wind_kph: data.current.wind_kph,
        wind_color: getWindColor(data.current.wind_kph),
        cloud: data.current.cloud,
        cloud_color: getCloudColor(data.current.cloud),
    };
}

export default formatWeatherData;
