import classNames from 'classnames/bind';
import style from '../DefaultLayout.module.scss';

const cx = classNames.bind(style);
function LeftContent() {
    return <div className={cx('Wrapper-left-content')}></div>;
}

export default LeftContent;
