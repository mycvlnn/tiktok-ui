import React from 'react';
import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import styles from './AccountItem.module.scss';
import Image from '../Image';

const cx = classnames.bind(styles);

const AccountItem = ({ data }) => {
    return (
        <Link to={`@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.avatar} />
            <div className={cx('info')}>
                <h3 className={cx('name')}>
                    {data.full_name}
                    {data.tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />}
                </h3>
                <p className={cx('username')}> {data.nickname} </p>
            </div>
        </Link>
    );
};

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
