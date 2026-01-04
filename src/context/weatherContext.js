import { useEffect, useState, createContext } from 'react';
// import { data as APIdata } from '~/Services';

import { fetchWeatherAPI } from '~/apis';
import { adapter } from '~/Services/adapter';

export const WeatherContext = createContext();

function ProviderWeatherData({ children }) {
    const [dataWeather, setDataWeather] = useState({});
    const [cityName, setCityName] = useState('Ha noi');

    const path = 'c385bf013ab54351d57c2493b91862b4';

    useEffect(() => {
        let isMounted = true;

        // func gọi api và truyền vào key và tên thành phố
        const getWeather = () => {
            fetchWeatherAPI(path, cityName).then((data) => {
                const wtData = adapter(data);
                if (isMounted) {
                    setDataWeather({ ...wtData });
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

    return <WeatherContext.Provider value={{ cityName, setCityName, dataWeather }}>{children}</WeatherContext.Provider>;
}

export default ProviderWeatherData;
