import PropTypes from 'prop-types';
import { useEffect, useState, createContext } from 'react';

import { fetchWeatherAPI, fetchForecastAPI } from '~/apis';
import { adapterWtData, adapterForecast } from '~/Services/adapter';

export const WeatherContext = createContext();

function ProviderWeatherData({ children }) {
    const [dataWeather, setDataWeather] = useState({});
    const [dataForecast, setDataForecast] = useState([]);
    const [cityName, setCityName] = useState('Ha noi');

    useEffect(() => {
        let isMounted = true;

        // func gọi api và truyền vào key và tên thành phố
        const getWeather = () => {
            // gọi api nhận về weather data trong ngày
            fetchWeatherAPI(cityName).then((data) => {
                // component đã unmount thì thôi
                if (!isMounted) return;

                // KIỂM TRA LỖI Ở ĐÂY
                if (!data) {
                    alert(`Không tìm thấy thông tin thời tiết cho thành phố: ${cityName}`);
                    // Có thể reset cityName về mặc định nếu muốn, hoặc giữ nguyên để user sửa
                    return; // Dừng lại, không chạy dòng adapter ở dưới nữa -> Không crash
                }

                const wtData = adapterWtData(data);
                setDataWeather({ ...wtData });
            });

            // gọi api dự báo
            fetchForecastAPI(cityName).then((data) => {
                if (!isMounted) return;

                // KIỂM TRA LỖI TƯƠNG TỰ
                if (!data) {
                    // Không cần alert lần 2 nếu api weather ở trên đã alert rồi
                    // Hoặc console.log nhẹ nhàng thôi
                    return;
                }

                const FcData = adapterForecast(data);
                setDataForecast([...FcData]);
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

    return (
        <WeatherContext.Provider value={{ cityName, setCityName, dataWeather, dataForecast }}>
            {children}
        </WeatherContext.Provider>
    );
}

ProviderWeatherData.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProviderWeatherData;
