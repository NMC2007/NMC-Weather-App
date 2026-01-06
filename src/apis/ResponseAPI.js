import axios from 'axios';

import { API_ROOT } from '~/utils/rootAPI';

/**
 * sau này đối với những dự án lớn
 * có thể dùng Interceptors của axios để bắt lỗi tập trùng cho nhiều response chứ
 * không cần dùng try catch
 */
export const fetchWeatherAPI = async (path, cityName) => {
    try {
        const response = await axios.get(
            `${API_ROOT}/data/2.5/weather`,
            {
                params: {
                    // lat: 21.028511,
                    // lon: 105.804817,
                    q: cityName,
                    appid: path,
                    lang: 'vi',
                    units: 'metric',
                },
            },
        );
        return response.data;
    } catch (error) {
        console.log('lỗi');
    }
};

export const fetchForecastAPI = async (path, cityName) => {
    try {
        const response = await axios.get(
            `${API_ROOT}/data/2.5/forecast`,
            {
                params: {
                    // lat: 21.028511,
                    // lon: 105.804817,
                    q: cityName,
                    appid: path,
                    lang: 'vi',
                    units: 'metric',
                },
            },
        );
        return response.data;
    } catch (error) {
        console.log('lỗi');
    }
};
