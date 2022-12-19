import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '@/components/Popper';
import PreviewAccount from './PreviewAccount';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

const AccountItem = (props) => {
    const renderPreview = (attrs) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...attrs}>
                <PopperWrapper className={cx('menu-popper')}>
                    <PreviewAccount />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy delay={[1000, 0]} interactive render={renderPreview} placement="bottom" offset={[-20, 0]}>
                <div className={cx('account-item')}>
                    <img src="https://picsum.photos/1000" alt="" className={cx('account-img')} />
                    <div className={cx('account-info')}>
                        <h4 className={cx('user-name')}>
                            theanh28entertainment
                            <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                        </h4>
                        <p className={cx('name')}>Theanh28Entertainment</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
};

AccountItem.propTypes = {};

export default AccountItem;
