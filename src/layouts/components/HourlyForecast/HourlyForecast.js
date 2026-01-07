import classNames from 'classnames/bind';
import { useContext } from 'react';

import Style from './HourlyForecast.module.scss';
import Wrapper from '~/components/Wrapper';
import { WeatherContext } from '~/context';

const cx = classNames.bind(Style);

function HourlyForecast() {
    const { dataForecast } = useContext(WeatherContext);


    // xử lý lọc ra các ngày trùng nhau
    // lưu thành một Arr
    // map theo arr -> render

    return (
        <Wrapper className={cx('container')}>
            <span className={cx('title')}>Hourly Forecast</span>

            <div className={cx('list')}>
                {dataForecast.map((item, index) => {
                    return (
                        <div key={index} className={cx('item')}>
                            <span className={cx('time')}>{item.time}</span>
                            <img
                                className={cx('img-icon')}
                                src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
                                alt="Weather icon"
                            />
                            <span className={cx('temp')}>{item.temp}°</span>
                        </div>
                    );
                })}
            </div>
        </Wrapper>
    );
}

export default HourlyForecast;
