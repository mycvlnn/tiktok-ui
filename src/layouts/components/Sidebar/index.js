import React from 'react';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import Menu from './Menu';
import MenuItem from './Menu/MenuItem';
import { path } from '@/config';
import {
    HomeIconRegular,
    HomeIconSolid,
    LiveIconRegular,
    LiveIconSolid,
    UserGroupIconSolid,
    UserGroupRegular,
} from '@/assets/icons';
import SuggestedAccounts from '@/components/SuggestedAccounts';

const cx = classNames.bind(styles);

const Sidebar = () => {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" icon={<HomeIconRegular />} activeIcon={<HomeIconSolid />} to={path.home} />
                <MenuItem
                    title="Following"
                    icon={<UserGroupRegular />}
                    activeIcon={<UserGroupIconSolid />}
                    to={path.following}
                />
                <MenuItem title="LIVE" icon={<LiveIconRegular />} activeIcon={<LiveIconSolid />} to={path.live} />
            </Menu>
            <SuggestedAccounts label="Suggested accounts" />
            <SuggestedAccounts label="Following accounts" />
        </aside>
    );
};

export default React.memo(Sidebar);
