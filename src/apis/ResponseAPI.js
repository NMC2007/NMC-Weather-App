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
            // ?lat=21.028511&lon=105.804817&appid=${path}&lang=vi&units=metric
            // ?q=hà nội&appid=c385bf013ab54351d57c2493b91862b4&lang=vi&units=metric
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
