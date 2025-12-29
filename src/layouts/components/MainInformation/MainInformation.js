import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faArrowUp, faArrowDown, faCloud } from '@fortawesome/free-solid-svg-icons';

import Wrapper from '~/components/Wrapper';
import style from './MainInformation.module.scss';

const cx = classNames.bind(style);

function MainInformation({
    city = 'Thành phố',
    country = 'Quốc gia',
    description = 'Không có dữ liệu',
    icon,
    temp = 0,
    feelsLike = 0,
    tempMin = 0,
    tempMax = 0,
}) {
    return (
        <div className={cx('Wrapper')}>
            <Wrapper transparent className={cx('Wrapper-content')}>
                <header className={cx('main-header')}>
                    <FontAwesomeIcon icon={faLocationDot} className={cx('icon-location')} />
                    <span>
                        {city}, {country}
                    </span>
                </header>

                <div className={cx('body')}>
                    {/* Cột bên trái: Nhiệt độ */}
                    <div className={cx('data')}>
                        <h1 className={cx('temp-main')}>{temp}°</h1>
                        <div className={cx('temp-detail')}>
                            <p className={cx('range')}>
                                <FontAwesomeIcon icon={faArrowUp} className={cx('icon-arrow')} />
                                <span className={cx('temp-value')}>{feelsLike}°</span>
                                <FontAwesomeIcon icon={faArrowDown} className={cx('icon-arrow')} />
                                <span className={cx('temp-value')}>{tempMin}°</span>
                            </p>
                            <span className={cx('divider')}></span>
                            <p className={cx('feels-like')}>Cảm giác {tempMax}°</p>
                        </div>
                    </div>

                    <div className={cx('status')}>
                        <div className={cx('wrapper-icon')}>
                            <Wrapper className={cx('icon-circle')}>
                                <FontAwesomeIcon icon={faCloud} className={cx('icon-weather')} />
                            </Wrapper>
                        </div>
                        <h3 className={cx('status-text')}>{description}</h3>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}
export default MainInformation;
