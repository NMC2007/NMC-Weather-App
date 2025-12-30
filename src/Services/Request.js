import { fetchWeatherAPI } from '~/apis';

// cần thiết thì tách ra file riêng để xử lý độ
function degToDirection(deg) {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    return directions[Math.round(deg / 45) % 8];
}

// path mặc định
const path = 'c385bf013ab54351d57c2493b91862b4';

// gọi api
export const data = fetchWeatherAPI(path).then((data) => {
    // làm sạch api và trả về một obj mới chứa các phần tử cần thiết
    return {
        /* ====== Thông tin chính (Header + Main card) ====== */
        main: {
            city: data.name,
            country: data.sys?.country,
            description: data.weather?.[0]?.description,
            icon: data.weather?.[0]?.icon,

            temp: Math.round(data.main.temp),
            feelsLike: Math.round(data.main.feels_like),
            tempMin: Math.floor(data.main.temp_min),
            tempMax: Math.ceil(data.main.temp_max),
        },

        /* ====== 6 CARD THÔNG TIN PHỤ ====== */

        cardInformation: [
            {
                // 1️⃣ WIND
                // UI: "12 km/h" + "Direction NW"
                title: 'Wind',
                parameter: Math.round(data.wind.speed * 3.6), // m/s → km/h
                measurement: ' km/h',
                icon: 'faWind',
                windDirection: degToDirection(data.wind.deg),
            },

            {
                // 2️⃣ HUMIDITY
                // UI: "65%"
                title: 'Humidity',
                measurement: '%',
                icon: 'faDroplet',
                parameter: data.main.humidity,
            },

            {
                // 3️⃣ VISIBILITY
                // UI: "10 km"
                title: 'Visibility',
                measurement: ' km',
                icon: 'faEye',
                parameter: data.visibility / 1000, // m → km
            },

            {
                // 4️⃣ PRESSURE
                // UI: "1012 hPa"
                title: 'Pressure',
                measurement: ' hPa',
                icon: 'faGauge',
                parameter: data.main.pressure,
            },

            {
                // 5️⃣ FEELS LIKE (card riêng)
                // UI: "26°"
                title: 'Feels Like',
                measurement: '°',
                icon: 'faTemperatureHigh',
                parameter: Math.round(data.main.feels_like),
            },
        ],
    };
});
