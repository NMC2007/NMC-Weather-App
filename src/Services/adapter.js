function degToDirection(deg) {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    return directions[Math.round(deg / 45) % 8];
}

// làm sạch api data trong ngày
export const adapterWtData = (data) => {
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
                suggest: 'Hướng gió ' + degToDirection(data.wind.deg),
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
};

// làm sạch api data dự báo
export const adapterForecast = (data) => {
    return data.list.map((item) => {
        // tách ngày vs giờ
        const [date, time] = item.dt_txt.split(' ');

        return {
            date,
            time: time.slice(0, 5),
            icon: item.weather?.[0]?.icon,
            temp: Math.round(item.main.temp),
        };
    });
};
