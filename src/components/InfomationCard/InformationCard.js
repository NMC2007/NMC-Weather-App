import classNames from 'classnames/bind';

import style from './InformationCard.module.scss';
import Wrapper from '../Wrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function InformationCard({ title = 'Thông tin', data = '0' }) {
    return (
        <div className={cx('Wrapper')}>
            <Wrapper className={cx('Wrapper-content')}>
                <header className={cx('card-header')}>
                    <span className={cx('card-title')}>{title}</span>
                    <FontAwesomeIcon className={cx('icon')} icon={faSun} />
                </header>
                <div className={cx('card-content')}>
                    <h2 className={cx('card-value')}>{data}</h2>
                    <p className={cx('card-subtext')}>Moderate</p>
                </div>
            </Wrapper>
        </div>
    );
}

export default InformationCard;
