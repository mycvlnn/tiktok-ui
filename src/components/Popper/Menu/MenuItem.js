import React from 'react';
import Button from '@/components/Button';
import classnames from 'classnames/bind';

import styles from './Menu.module.scss';

const cx = classnames.bind(styles);

const MenuItem = ({ data }) => {
    return (
        <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
};

export default React.memo(MenuItem);
