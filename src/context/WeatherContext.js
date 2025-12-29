import { useState, useEffect, createContext } from 'react';
import { data as APIdata } from '~/Services';

export const WeatherContext = createContext();

// thằng này sẽ xử lý logic gọi lại api sau một khoảng tg

function ProviderWeather({ children }) {
    const [data, setData] = useState({});

    useEffect(() => {
        APIdata.then((data) => {
            setData(data);
        });
    }, []);

    return <WeatherContext.Provider value={data}>{children}</WeatherContext.Provider>;
}

export default ProviderWeather;
