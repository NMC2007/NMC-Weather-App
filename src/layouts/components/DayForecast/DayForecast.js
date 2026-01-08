import classNames from 'classnames/bind';
import { useContext } from 'react';

import { groupByDate } from '~/utils/forecast.js';
import Wrapper from '~/components/Wrapper';
import Style from './DayForecast.module.scss';

import { WeatherContext } from '~/context';

const cx = classNames.bind(Style);

function DayForecast() {
    const { dataForecast } = useContext(WeatherContext);

    // groupByDate để nhóm dữ liệu theo ngày
    const groupedByDate = groupByDate(dataForecast);

    // lấy ra đại điện các ngày
    const days = Object.keys(groupedByDate);

    return (
        <Wrapper className={cx('container')}>
            <span className={cx('title')}>Dự báo 6 ngày</span>

            <div className={cx('list')}>
                {days.map((day, index) => {
                    const items = groupedByDate[day];

                    // min / max nhiệt độ trong ngày
                    const temps = items.map((i) => i.temp);
                    const minTemp = Math.min(...temps);
                    const maxTemp = Math.max(...temps);

                    // icon đại diện (lấy item đầu)
                    const icon = items[0].icon;

                    const description = items[0].description;

                    return (
                        <div key={day} className={cx('item')}>
                            <span className={cx('day')}>{index === 0 ? 'Hôm nay' : day}</span>

                            <div className={cx('weather')}>
                                <img
                                    className={cx('icon')}
                                    src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                                    alt=""
                                />
                                <span className={cx('desc')}>{description}</span>
                            </div>

                            <div className={cx('temp')}>
                                <span className={cx('min')}>{minTemp}°</span>
                                <span className={cx('max')}>{maxTemp}°</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Wrapper>
    );
}

export default DayForecast;
