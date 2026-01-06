import classNames from 'classnames/bind';
import { useContext } from 'react';

import Style from './HourlyForecast.module.scss';
import Wrapper from '~/components/Wrapper';
import { WeatherContext } from '~/context';

const cx = classNames.bind(Style);

function HourlyForecast() {
    const { dataForecast } = useContext(WeatherContext);

    console.log(dataForecast);

    // xử lý lọc ra các ngày trùng nhau
    // lưu thành một Arr
    // map theo arr -> render

    return (
        <Wrapper className={cx('container')}>
            <h3 className={cx('title')}>Hourly Forecast</h3>

            <div className={cx('list')}>
                <div className={cx('item')}>
                    <span className={cx('time')}>Now</span>

                    <span className={cx('temp')}>24°</span>
                </div>
            </div>
        </Wrapper>
    );
}

export default HourlyForecast;
