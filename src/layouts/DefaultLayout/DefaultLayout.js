import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import { data as APIdata } from '~/Services';
import style from './DefaultLayout.module.scss';
import Header from '../components/Header';
import LeftContent from './LeftContent';
import RightContent from './RightContent';
import MainInformation from '../components/MainInformation';
import InfomationCard from '~/components/InfomationCard';

// nhận api

const cx = classNames.bind(style);

function DefaultLayout() {
    const [dataWeather, setDataWeather] = useState({});

    useEffect(() => {
        let isMounted = true;

        const getWeather = async () => {
            try {
                APIdata.then((data) => {
                    if (isMounted) {
                        setDataWeather({ ...data }); // đảm bảo object mới
                    }
                });
            } catch (err) {
                console.error(err);
            }
        };

        // gọi API NGAY LẬP TỨC
        getWeather();

        // gọi lại sau một khoảng tg
        const interval = setInterval(getWeather, 10 * 60 * 1000);

        return () => {
            isMounted = false;
            clearInterval(interval);
        };
    }, []);

    console.log(dataWeather);

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('wrapper-content')}>
                <div className={cx('content')}>
                    <LeftContent>
                        <MainInformation
                            city={dataWeather.city}
                            country={dataWeather.country}
                            description={dataWeather.description}
                            icon
                            temp={dataWeather.temp}
                            feelsLike={dataWeather.feelsLike}
                            tempMin={dataWeather.tempMin}
                            tempMax={dataWeather.tempMax}
                        />
                        <div className={cx('wrapper-card')}>
                            <InfomationCard type="wind" title="Gió" data={`${dataWeather.windSpeed} km/h`} />
                            <InfomationCard type="humidity" title="Độ ẩm" data={`${dataWeather.humidity} %`} />
                            <InfomationCard type="visibility" title="Tầm nhìn" data={`${dataWeather.visibility} km`} />
                            <InfomationCard type="pressure" title="Áp xuất" data={`${dataWeather.pressure} hPa`} />
                            <InfomationCard
                                type="feels-like"
                                title="Cảm giác"
                                data={`${dataWeather.feelsLikeCard} °`}
                            />
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
