import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classnames.bind(styles);

const Button = ({
    to,
    href,
    primary = false,
    secondary = false,
    outlined = false,
    text = false,
    rounded = false,
    disabled = false,
    small = false,
    large = false,
    className,
    leftIcon,
    rightIcon,
    onClick,
    children,
    ...passProps
}) => {
    let Component = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    // Remove event listener when btn is disabled

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    // Trường hợp button là Link hoặc thẻ a

    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        secondary,
        primary,
        outlined,
        text,
        disabled,
        rounded,
        small,
        large,
    });

    return (
        <Component className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Component>
    );
};

export default React.memo(Button);
