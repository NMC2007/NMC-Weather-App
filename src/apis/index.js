import axios from 'axios';

import { API_ROOT } from '~/utils/request';

// thăng path này sẽ nhận vào các thông số động như lat, lon, api key, ...

/**
 * sau này đối với những dự án lớn
 * ta có thể dùng Interceptors của axios để bắt lỗi tập trùng cho nhiều response chứ
 * không cần dùng try catch
 */
export const fetchWeatherAPI = async (path) => {
    try {
        const response = await axios.get(
            `${API_ROOT}/data/2.5/weather?lat=21.028511&lon=105.804817&appid=${path}&lang=vi&units=metric`,
        );
        return response.data;
    } catch (error) {
        console.log('lỗi');
    }
};
