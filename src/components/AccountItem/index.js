import React from 'react';
import classnames from 'classnames/bind';

import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classnames.bind(styles);

const AccountItem = () => {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://picsum.photos/200" alt="avatar" />
            <div className={cx('info')}>
                <h3 className={cx('name')}>
                    Lee Chris
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </h3>
                <p className={cx('username')}>B8 Official</p>
            </div>
        </div>
    );
};

export default React.memo(AccountItem);
