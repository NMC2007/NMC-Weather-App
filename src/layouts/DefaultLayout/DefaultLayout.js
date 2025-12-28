import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import style from './DefaultLayout.module.scss';
import Header from '../components/Header';
import LeftContent from './LeftContent';
import RightContent from './RightContent';
import MainInformation from '../components/MainInformation';
import InfomationCard from '~/components/InfomationCard';

import { data as APIdata } from '~/Services';

// import { fetchWeatherAPI } from '~/apis';

// nhận api

const cx = classNames.bind(style);

function DefaultLayout() {
    const [data, setData] = useState({});

    useEffect(() => {
        APIdata.then((data) => {
            setData(data);
        });
    }, []);

    console.log(data);

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('wrapper-content')}>
                <div className={cx('content')}>
                    {/* Cột trái: Thông tin chính + Lưới các thẻ nhỏ */}
                    <LeftContent>
                        <MainInformation
                            city={data.city}
                            country={data.country}
                            description={data.description}
                            icon
                            temp={data.temp}
                            feels_like={data.feelsLike}
                            temp_min={data.tempMin}
                            temp_max={data.tempMax}
                        />
                        <div className={cx('wrapper-card')}>
                            <InfomationCard type="uv" />
                            <InfomationCard type="wind" />
                            <InfomationCard type="humidity" />
                            <InfomationCard type="visibility" />
                            <InfomationCard type="pressure" />
                            <InfomationCard type="feels-like" />
                        </div>
                    </LeftContent>

                    {/* Cột phải: Dự báo theo giờ và theo ngày */}
                    <RightContent>
                        {/* Placeholder 1: Hourly Forecast */}
                        <div className={cx('placeholder-card', 'hourly-forecast')}>
                            <h3>Hourly Forecast</h3>
                            <p>(Component chưa viết)</p>
                        </div>

                        {/* Placeholder 2: 7-Day Forecast */}
                        <div className={cx('placeholder-card', 'daily-forecast')}>
                            <h3>7-Day Forecast</h3>
                            <p>(Component chưa viết)</p>
                        </div>
                    </RightContent>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
