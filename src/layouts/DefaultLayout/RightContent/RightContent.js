import classNames from 'classnames/bind';
import style from '../DefaultLayout.module.scss';

const cx = classNames.bind(style);
function RightContent() {
    return <div className={cx('Wrapper-right-content')}></div>;
}

export default RightContent;
