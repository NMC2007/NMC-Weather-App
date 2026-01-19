import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from '../DefaultLayout.module.scss';

const cx = classNames.bind(style);
function RightContent({ children }) {
    return <div className={cx('layout-column', 'right-column')}>{children}</div>;
}

RightContent.propTypes = {
    children: PropTypes.node.isRequired,
};

export default RightContent;
