import { useEffect, useState, createContext } from 'react';
import { data as APIdata } from '~/Services';

export const WeatherContext = createContext();

function ProviderWeatherData({ children }) {
    const [dataWeather, setDataWeather] = useState({});

    useEffect(() => {
        let isMounted = true;

        const getWeather = async () => {
            try {
                APIdata.then((data) => {
                    if (isMounted) {
                        setDataWeather({ ...data });
                    }
                });
            } catch (err) {
                console.error(err);
            }
        };

        // gọi API NGAY LẬP TỨC
        getWeather();

        // gọi lại sau một khoảng tg
        const interval = setInterval(getWeather, 10 * 60 * 1000);

        return () => {
            isMounted = false;
            clearInterval(interval);
        };
    }, []);

    return <WeatherContext.Provider value={dataWeather}>{children}</WeatherContext.Provider>;
}

export default ProviderWeatherData;
