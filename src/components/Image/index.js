import React, { useState } from 'react';
import classNames from 'classnames';

import images from '@/assets/images';
import styles from './Image.module.scss';

// component dùng để thay thế thẻ img. đã cover trường hợp hợp missing img
const Image = ({ src, alt, className, fallback: customFallback = images.missingImg, ...props }, ref) => {
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
};

export default React.forwardRef(Image);
