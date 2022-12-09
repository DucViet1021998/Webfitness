import React from 'react';

import classNames from 'classnames/bind';
import styles from './Header.module.scss'

const cx = classNames.bind(styles)


function Header() {
    return (
        <div className={cx("container")}>
            <div className={cx("logo")}>
                <img src="data:image/png;base64,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" alt="logo" />
            </div>
            <ul className={cx('narBar')}>
                <li className={cx('item')}>Home</li>
                <li className={cx('item')}>Programs</li>
                <li className={cx('item')}>Why Us</li>
                <li className={cx('item')}>Products</li>
            </ul>
        </div>

    )

}

export default Header;