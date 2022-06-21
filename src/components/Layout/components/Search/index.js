import React, { useRef, useState } from 'react';
import classNames from 'classnames/bind';

import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Search.module.scss';

import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import AccountItem from '@/components/AccountItem';
import { SearchIcon } from '@/assets/icons';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef();

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleClearSearch = () => {
        setSearchResult([]);
        setSearchValue('');
        inputRef.current.focus();
    };

    useEffect(() => {
        setSearchResult([1, 2, 3, 4]);
    }, []);

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            placement="bottom"
            onClickOutside={handleHideResult}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        <div className={cx('search-content')}>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </div>
                        <div className={cx('search-footer')}>View all results for "fa"</div>
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input
                    type="text"
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && (
                    <button className={cx('clear-btn')} onClick={handleClearSearch}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
};

export default React.memo(Search);
