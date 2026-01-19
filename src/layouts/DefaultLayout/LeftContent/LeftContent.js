import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from '../DefaultLayout.module.scss';

const cx = classNames.bind(style);
function LeftContent({ children }) {
    return <div className={cx('layout-column', 'left-column')}>{children}</div>;
}

LeftContent.propTypes = {
    children: PropTypes.node.isRequired,
};

export default LeftContent;
