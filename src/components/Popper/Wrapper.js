import React from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Popper.module.scss';

const cx = classnames.bind(styles);

const Wrapper = ({ children, className }) => {
    return <div className={cx('wrapper', className)}>{children}</div>;
};

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
export default React.memo(Wrapper);
