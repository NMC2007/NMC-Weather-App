import classNames from 'classnames/bind';

import style from './DefaultLayout.module.scss';
import Header from '../components/Header';
import LeftContent from './LeftContent';
import RightContent from './RightContent';
import MainInformation from '../components/MainInformation';
import BodyInformation from '../components/BodyInformation';
import ProviderWeatherData from '~/context';

const cx = classNames.bind(style);

function DefaultLayout() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('wrapper-content')}>
                <div className={cx('content')}>
                    <ProviderWeatherData>
                        <LeftContent>
                            <MainInformation />
                            <div className={cx('wrapper-card')}>
                                <BodyInformation />
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
                    </ProviderWeatherData>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
