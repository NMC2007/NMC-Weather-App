import classNames from 'classnames/bind';
import style from '../DefaultLayout.module.scss';

const cx = classNames.bind(style);
function RightContent({ children }) {
    return <div className={cx('layout-column', 'right-column')}>{children}</div>;
}

export default RightContent;
