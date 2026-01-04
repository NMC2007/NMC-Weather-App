import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

import { useContext } from 'react';
import { WeatherContext } from '~/context';

import Wrapper from '~/components/Wrapper';
import style from './MainInformation.module.scss';

const cx = classNames.bind(style);

function MainInformation() {
    const { dataWeather } = useContext(WeatherContext);

    // nếu tồn tại context thì mainWeatherData = context.main
    const mainWeatherData = dataWeather?.main;

    return (
        <div className={cx('Wrapper')}>
            <Wrapper transparent className={cx('Wrapper-content')}>
                <header className={cx('main-header')}>
                    <FontAwesomeIcon icon={faLocationDot} className={cx('icon-location')} />
                    <span>
                        {mainWeatherData?.city}, {mainWeatherData?.country}
                    </span>
                </header>

                <div className={cx('body')}>
                    {/* Cột bên trái: Nhiệt độ */}
                    <div className={cx('data')}>
                        <h1 className={cx('temp-main')}>{mainWeatherData?.temp}°</h1>
                        <div className={cx('temp-detail')}>
                            <p className={cx('range')}>
                                <FontAwesomeIcon icon={faArrowUp} className={cx('icon-arrow')} />
                                <span className={cx('temp-value')}>{mainWeatherData?.feelsLike}°</span>
                                <FontAwesomeIcon icon={faArrowDown} className={cx('icon-arrow')} />
                                <span className={cx('temp-value')}>{mainWeatherData?.tempMin}°</span>
                            </p>
                            <span className={cx('divider')}></span>
                            <p className={cx('feels-like')}>Cảm giác {mainWeatherData?.tempMax}°</p>
                        </div>
                    </div>

                    <div className={cx('status')}>
                        <Wrapper className={cx('icon-circle')}>
                            <img
                                className={cx('img-icon')}
                                src={`https://openweathermap.org/img/wn/${mainWeatherData?.icon}@2x.png`}
                                alt="Weather icon"
                            />
                        </Wrapper>
                        <h3 className={cx('status-text')}>{mainWeatherData?.description}</h3>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}
export default MainInformation;
