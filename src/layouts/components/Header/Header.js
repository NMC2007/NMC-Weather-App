import classNames from 'classnames/bind';

import style from './Header.module.scss';
import Search from '../Search';
import ProviderWeatherData from '~/context/weatherContext';

const cx = classNames.bind(style);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <a className={cx('logo')} href="/">
                    <img className={cx('logo-image')} src="https://i.postimg.cc/QMG0XkCX/My_Logo.png" alt="" />
                    <p className={cx('name-website')}>Weather web</p>
                </a>

                <ProviderWeatherData>
                    <Search />
                </ProviderWeatherData>

                {/* div trống để đẩy sang phải cho input ở giữa */}
                <div></div>
            </div>
        </header>
    );
}

export default Header;
