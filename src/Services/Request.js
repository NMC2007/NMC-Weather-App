import { fetchWeatherAPI } from '~/apis';

// path mặc định
const path = 'c385bf013ab54351d57c2493b91862b4';

// gọi api
export const data = fetchWeatherAPI(path).then((data) => {
    // làm sạch api và trả về một obj mới chứa các phần tử cần thiết
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
