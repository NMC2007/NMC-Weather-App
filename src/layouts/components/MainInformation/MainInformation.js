import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons';

import Wrapper from '~/components/Wrapper';
import style from './MainInformation.module.scss';

const cx = classNames(style);

function MainInformation() {
    return (
        <div className={cx('Wrapper')}>
            <Wrapper className={cx('Wrapper-content')}>
                <header className={cx('main-header')}>
                    <FontAwesomeIcon icon={faLocation} />
                    <span>Hanoi, Vietnam</span>
                </header>
                <div className={cx('body')}>
                    <div classNames={cx('data')}>
                        <h1>24°</h1>
                        <p></p>
                    </div>
                    <div classNames={cx('status')}></div>
                </div>
            </Wrapper>
        </div>
    );
}

export default MainInformation;
