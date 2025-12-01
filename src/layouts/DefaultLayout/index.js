import classNames from 'classnames/bind';

import style from './DefaultLayout.module.sass';
import Header from '../components/Header';

const cx = classNames.bind(style);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                {/* sidebar */}
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
