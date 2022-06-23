import React, { useState } from 'react';
import classnames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classnames.bind(styles);

const defaultFn = () => {};

const Menu = ({ children, items = [], onChange = defaultFn, hideOnClick = false }) => {
    const [history, setHistory] = useState([{ data: items }]);

    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            hideOnClick={hideOnClick}
            arrow
            interactive
            placement="bottom-end"
            delay={[0, 700]}
            offset={[12, 8]}
            onHide={() => {
                setHistory((prev) => prev.slice(0, 1));
            }}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title={current.title}
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        <div className={cx('menu-body')}> {renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
};

Menu.propTypes = {
    children: PropTypes.node,
    items: PropTypes.array.isRequired,
    onChange: PropTypes.func,
    hideOnClick: PropTypes.bool,
};

export default Menu;
