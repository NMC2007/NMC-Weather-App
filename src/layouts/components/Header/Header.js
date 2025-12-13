import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import style from './Header.module.scss';

const cx = classNames.bind(style);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <a className={cx('logo')} href="/">
                    <img className={cx('logo-image')} src="https://i.postimg.cc/QMG0XkCX/My_Logo.png" alt="" />
                    <p className={cx('name-website')}>Weather web</p>
                </a>
                <div className={cx('search')}>
                    <input className={cx('search-input')} />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
                    </button>
                </div>

                {/* div trống để đẩy sang phải cho input ở giữa */}
                <div></div>
            </div>
        </header>
    );
}

export default Header;
