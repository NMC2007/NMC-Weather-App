import { fetchWeatherAPI } from '~/apis';

const path = 'c385bf013ab54351d57c2493b91862b4';

export const data = fetchWeatherAPI(path).then((data) => {
    console.log(data);
    return {
        city: data.name,
        country: data.sys?.country,
        description: data.weather?.[0]?.description,
        temp: Math.round(data.main.temp),
        feelsLike: Math.round(data.main.feels_like),
        tempMin: Math.ceil(data.main.temp_min),
        tempMax: Math.round(data.main.temp_max),
    };
});
