import { useEffect, useState, createContext } from 'react';
// import { data as APIdata } from '~/Services';

import { fetchWeatherAPI, fetchForecastAPI } from '~/apis';
import { adapterWtData, adapterForecast } from '~/Services/adapter';

export const WeatherContext = createContext();

function ProviderWeatherData({ children }) {
    const [dataWeather, setDataWeather] = useState({});
    const [dataForecast, setDataForecast] = useState({});
    const [cityName, setCityName] = useState('Ha noi');

    const path = 'c385bf013ab54351d57c2493b91862b4';

    useEffect(() => {
        let isMounted = true;

        // func gọi api và truyền vào key và tên thành phố
        const getWeather = () => {
            // gọi api nhận về weather data trong ngày
            fetchWeatherAPI(path, cityName).then((data) => {
                const wtData = adapterWtData(data);
                if (isMounted) {
                    setDataWeather({ ...wtData });
                }
            });

            // gọi api dự báo
            fetchForecastAPI(path, cityName).then((data) => {
                const FcData = adapterForecast(data);
                if (isMounted) {
                    setDataForecast([...FcData]);
                }
            });
        };

        // gọi API NGAY LẬP TỨC
        getWeather();

        // gọi lại sau một khoảng tg
        const interval = setInterval(getWeather, 5 * 60 * 1000);

        return () => {
            isMounted = false;
            clearInterval(interval);
        };
    }, [cityName]);

    console.log(dataForecast);

    return (
        <WeatherContext.Provider value={{ cityName, setCityName, dataWeather, dataForecast }}>
            {children}
        </WeatherContext.Provider>
    );
}

export default ProviderWeatherData;
