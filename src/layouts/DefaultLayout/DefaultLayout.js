// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import style from './DefaultLayout.module.scss';
import Header from '../components/Header';

import RightContent from './RightContent';

import InfomationCard from '~/components/InfomationCard';
import LeftContent from './LeftContent';
// import Wrapper from '~/components/Wrapper';

const cx = classNames.bind(style);

function DefaultLayout() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('wrapper-content')}>
                <div className={cx('content')}>
                    <LeftContent>
                        <div className={cx('wrapper-card')}>
                            <InfomationCard />
                            <InfomationCard />
                            <InfomationCard />
                            <InfomationCard />
                            <InfomationCard />
                            <InfomationCard />
                        </div>
                    </LeftContent>
                    <RightContent></RightContent>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
