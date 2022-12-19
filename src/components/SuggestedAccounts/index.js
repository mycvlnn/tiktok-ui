import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';
const cx = classNames.bind(styles);

const SuggestedAccounts = ({ label }) => {
    return (
        <div className={cx('container')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <div className={cx('btn-more')}>See more</div>
        </div>
    );
};

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
