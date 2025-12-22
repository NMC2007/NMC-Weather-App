import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faArrowUp, faArrowDown, faCloud } from '@fortawesome/free-solid-svg-icons';

import Wrapper from '~/components/Wrapper';
import style from './MainInformation.module.scss';

const cx = classNames.bind(style);

function MainInformation() {
    return (
        <div className={cx('Wrapper')}>
            <Wrapper transparent className={cx('Wrapper-content')}>
                <header className={cx('main-header')}>
                    <FontAwesomeIcon icon={faLocationDot} className={cx('icon-location')} />
                    <span>Hanoi, Vietnam</span>
                </header>

                <div className={cx('body')}>
                    {/* Cột bên trái: Nhiệt độ */}
                    <div className={cx('data')}>
                        <h1 className={cx('temp-main')}>24°</h1>
                        <div className={cx('temp-detail')}>
                            <p className={cx('range')}>
                                <FontAwesomeIcon icon={faArrowUp} className={cx('icon-arrow')} />
                                <span className={cx('temp-value')}>28°</span>
                                <FontAwesomeIcon icon={faArrowDown} className={cx('icon-arrow')} />
                                <span className={cx('temp-value')}>19°</span>
                            </p>
                            <span className={cx('divider')}></span>
                            <p className={cx('feels-like')}>Cảm giác 26°</p>
                        </div>
                    </div>

                    {/* Cột bên phải: Trạng thái */}
                    <div className={cx('status')}>
                        <div className={cx('wrapper-icon')}>
                            <Wrapper className={cx('icon-circle')}>
                                <FontAwesomeIcon icon={faCloud} className={cx('icon-weather')} />
                            </Wrapper>
                        </div>
                        <h3 className={cx('status-text')}>mây cụm</h3>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}

export default MainInformation;
