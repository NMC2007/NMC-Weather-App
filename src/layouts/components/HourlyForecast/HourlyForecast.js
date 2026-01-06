import classNames from 'classnames/bind';

import Style from './HourlyForecast.module.scss';

const cx = classNames.bind(Style);

function HourlyForecast() {
    return <div className={cx('placeholder-card')}>hello</div>;
}

export default HourlyForecast;
