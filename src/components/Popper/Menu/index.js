import React from 'react';
import classnames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import MenuItem from './MenuItem';

const cx = classnames.bind(styles);

const Menu = ({ children, items = [] }) => {
    const renderItems = () => {
        return items.map((item, index) => {
            return <MenuItem key={index} data={item} />;
        });
    };

    return (
        <Tippy
            interactive
            placement="bottom-end"
            delay={[0, 700]}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
};

export default Menu;
