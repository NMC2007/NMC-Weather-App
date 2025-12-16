// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import style from './DefaultLayout.module.scss';
import Header from '../components/Header';

import RightContent from './RightContent';
import LeftContent from './LeftContent';

const cx = classNames.bind(style);

function DefaultLayout() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('wrapper-content')}>
                <div className={cx('content')}>
                    <RightContent></RightContent>
                    <LeftContent></LeftContent>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
