import classNames from 'classnames/bind';

import style from './InformationCard.module.scss';
import Wrapper from '../Wrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function InformationCard() {
    return (
        <div className={cx('Wrapper')}>
            <Wrapper className={cx('Wrapper-content')}>
                <div className={cx('card-header')}>
                    <span className={cx('card-title')}>UV INDEX</span>
                    <FontAwesomeIcon className={cx('icon')} icon={faSun} />
                </div>
                <div className={cx('card-content')}>
                    <h2 className={cx('card-value')}>4</h2>
                    <p className={cx('card-subtext')}>Moderate</p>
                </div>
            </Wrapper>
        </div>
    );
}

export default InformationCard;
