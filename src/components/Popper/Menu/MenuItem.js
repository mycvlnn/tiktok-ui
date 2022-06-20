import React from 'react';
import Button from '@/components/Button';
import classnames from 'classnames/bind';

import styles from './Menu.module.scss';

const cx = classnames.bind(styles);

const MenuItem = ({ data, onClick }) => {
    const classes = cx('menu-item', {
        separate: data.separate,
    });

    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
};

export default React.memo(MenuItem);
