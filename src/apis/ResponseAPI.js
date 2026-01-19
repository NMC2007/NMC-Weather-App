import axios from 'axios';

import { API_ROOT } from '~/utils/rootAPI';
import { API_KEY } from '~/utils/apiKey';

/**
 * sau này đối với những dự án lớn
 * có thể dùng Interceptors của axios để bắt lỗi tập trùng cho nhiều response chứ
 * không cần dùng try catch
 */
export const fetchWeatherAPI = async (cityName) => {
    try {
        const response = await axios.get(`${API_ROOT}/data/2.5/weather`, {
            params: {
                // lat: 21.028511,
                // lon: 105.804817,
                q: cityName,
                appid: API_KEY,
                lang: 'vi',
                units: 'metric',
            },
        });
        return response.data;
    } catch (error) {
        return false;
    }
};

export const fetchForecastAPI = async (cityName) => {
    try {
        const response = await axios.get(`${API_ROOT}/data/2.5/forecast`, {
            params: {
                // lat: 21.028511,
                // lon: 105.804817,
                q: cityName,
                appid: API_KEY,
                lang: 'vi',
                units: 'metric',
            },
        });
        return response.data;
    } catch (error) {
        return false;
    }
};
