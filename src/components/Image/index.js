import React, { forwardRef, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import images from '@/assets/images';
import styles from './Image.module.scss';

// component dùng để thay thế thẻ img. đã cover trường hợp hợp missing img
const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.missingImg, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            ref={ref}
            src={fallback || src}
            alt={alt}
            className={classNames(styles.wrapper, className)}
            {...props}
            onError={handleError}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
