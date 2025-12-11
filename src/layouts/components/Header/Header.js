import classNames from 'classnames/bind';

import style from './Header.module.scss';

const cx = classNames.bind(style);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div>
                <input/>
                <button>
                    
                </button>
            </div>
        </header>
    );
}

export default Header;
