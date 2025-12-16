import classNames from 'classnames/bind';
import style from '../DefaultLayout.module.scss';

const cx = classNames.bind(style);
function RightContent({ children }) {
    return <div className={cx('Wrapper-right-content')}>{children}</div>;
}

export default RightContent;
