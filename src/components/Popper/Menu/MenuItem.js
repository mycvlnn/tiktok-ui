import React from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';

import Button from '@/components/Button';
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

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default React.memo(MenuItem);
