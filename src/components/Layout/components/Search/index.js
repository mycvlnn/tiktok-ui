import React, { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import styles from './Search.module.scss';

import HeadlessTippy from '@tippyjs/react/headless';
import * as searchServices from '@/services/searchServices';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import AccountItem from '@/components/AccountItem';
import { SearchIcon } from '@/assets/icons';
import { useDebouce } from '@/hooks';

const cx = classNames.bind(styles);

const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const searchDebounced = useDebouce(searchValue, 500);

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleClearSearch = () => {
        setSearchResult([]);
        setSearchValue('');
        inputRef.current.focus();
    };

    const handleSearchInput = (e) => {
        const valueSearch = e.target.value;

        if (!valueSearch.startsWith(' ')) {
            setSearchValue(valueSearch);
        }
    };

    useEffect(() => {
        if (!searchDebounced.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchSearchApi = async () => {
            setLoading(true);

            const result = await searchServices.search(searchDebounced);

            setSearchResult(result);
            setLoading(false);
        };
        fetchSearchApi();
    }, [searchDebounced]);

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
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
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
                    onChange={handleSearchInput}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && !loading && (
                    <button className={cx('clear-btn')} onClick={handleClearSearch}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
};

export default React.memo(Search);
