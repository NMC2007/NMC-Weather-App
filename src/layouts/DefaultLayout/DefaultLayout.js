import classNames from 'classnames/bind';

import style from './DefaultLayout.module.scss';
import Header from '../components/Header';
import LeftContent from './LeftContent';
import RightContent from './RightContent';
import MainInformation from '../components/MainInformation';
import BodyInformation from '../components/BodyInformation';
import HourlyForecast from '../components/HourlyForecast';
import DayForecast from '../components/DayForecast';

const cx = classNames.bind(style);

function DefaultLayout() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('wrapper-content')}>
                <div className={cx('content')}>
                    <LeftContent>
                        <MainInformation />
                        <div className={cx('wrapper-card')}>
                            <BodyInformation />
                        </div>
                    </LeftContent>

                    {/* Cột phải: Dự báo theo giờ và theo ngày */}
                    <RightContent>
                        <div className={cx('placeholder-card')}>
                            <HourlyForecast />
                        </div>
                        <div className={cx('placeholder-card')}>
                            <DayForecast />
                        </div>
                    </RightContent>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
