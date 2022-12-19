import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './PreviewAccount.module.scss';
import Button from '@/components/Button';

const cx = classNames.bind(styles);

const PreviewAccount = (props) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img src="https://picsum.photos/500" alt="" className={cx('avatar')} />
                <div>
                    <Button primary className={cx('btn-follow')}>
                        Follow
                    </Button>
                </div>
            </div>
            <div className={cx('body')}>
                <h4 className={cx('user-name')}>
                    theanh28entertainment
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                </h4>
                <p className={cx('name')}>Theanh28Entertainment</p>
            </div>
            <div className={cx('footer')}>
                <div className={cx('user-value')}>
                    <strong>8.2M</strong>
                    <span className={cx('text')}>Follower</span>
                </div>
                <div className={cx('user-value')}>
                    <strong>617.3M</strong>
                    <span className={cx('text')}>Likes</span>
                </div>
            </div>
        </div>
    );
};

export default PreviewAccount;
