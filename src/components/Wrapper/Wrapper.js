import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import style from './Wrapper.mdule.scss';

const cx = classNames.bind(style);

function Wrapper({ children, className, transparent }) {
    return <div className={cx('wrapper', className, { transparent })}>{children}</div>;
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    transparent: PropTypes.bool,
};

export default Wrapper;
