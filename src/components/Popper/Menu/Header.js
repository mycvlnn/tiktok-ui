import React from 'react';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Menu.module.scss';

const cx = classnames.bind(styles);

const Header = ({ title = '', onBack }) => {
    return (
        <header className={cx('header')}>
            <button onClick={onBack} className={cx('back-btn')}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func,
};

export default React.memo(Header);
