import classNames from 'classnames/bind';

import style from './InformationCard.module.scss';
import Wrapper from '../Wrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDroplet, faEye, faGauge, faSun, faTemperatureHigh, faWind } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function InformationCard({ title = 'Thông tin', parameter = '0', icon = faSun, measurement = '' }) {
    return (
        <div className={cx('Wrapper')}>
            <Wrapper className={cx('Wrapper-content')}>
                <header className={cx('card-header')}>
                    <span className={cx('card-title')}>{title}</span>
                    {/* xử lý nốt thằng icon với màu icon này là xong */}
                    <FontAwesomeIcon className={cx('icon')} icon={icon} style={{ color: '' }} />
                </header>
                <div className={cx('card-content')}>
                    <h2 className={cx('card-value')}>
                        {parameter}
                        {measurement}
                    </h2>
                    <p className={cx('card-subtext')}>Moderate</p>
                </div>
            </Wrapper>
        </div>
    );
}

export default InformationCard;
