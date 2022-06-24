import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const MenuItem = ({ title, icon, activeIcon, to }) => {
    return (
        <NavLink
            to={to}
            className={(nav) =>
                cx('menu-item', {
                    active: nav.isActive,
                })
            }
        >
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('active-icon')}>{activeIcon}</span>
            <h2 className={cx('title')}>{title}</h2>
        </NavLink>
    );
};

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
    activeIcon: PropTypes.node,
};

export default React.memo(MenuItem);
