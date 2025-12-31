import classNames from 'classnames/bind';

import style from './InformationCard.module.scss';
import Wrapper from '../Wrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDroplet, faEye, faGauge, faSun, faTemperatureHigh, faWind } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function InformationCard({ title = 'Thông tin', parameter = '0', icon, measurement = '' }) {
    var Icon;

    switch (icon) {
        case 'faWind':
            Icon = <FontAwesomeIcon className={cx('icon')} icon={faWind} style={{ color: '#50a2ff' }} />;
            break;

        case 'faDroplet':
            Icon = <FontAwesomeIcon className={cx('icon')} icon={faDroplet} style={{ color: '#8ec5ff' }} />;
            break;

        case 'faEye':
            Icon = <FontAwesomeIcon className={cx('icon')} icon={faEye} style={{ color: '#00d492' }} />;
            break;

        case 'faGauge':
            Icon = <FontAwesomeIcon className={cx('icon')} icon={faGauge} style={{ color: '#c27aff' }} />;
            break;

        case 'faTemperatureHigh':
            Icon = <FontAwesomeIcon className={cx('icon')} icon={faTemperatureHigh} style={{ color: '#fe6467' }} />;
            break;

        default:
            Icon = <FontAwesomeIcon className={cx('icon')} icon={faSun} style={{ color: '#ff8904' }} />;
            break;
    }

    return (
        <div className={cx('Wrapper')}>
            <Wrapper className={cx('Wrapper-content')}>
                <header className={cx('card-header')}>
                    <span className={cx('card-title')}>{title}</span>
                    {Icon}
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
