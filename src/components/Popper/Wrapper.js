import React from 'react';
import classnames from 'classnames/bind';

import styles from './Popper.module.scss';

const cx = classnames.bind(styles);

const Wrapper = ({ children }) => {
    return <div className={cx('wrapper')}>{children}</div>;
};

export default React.memo(Wrapper);
