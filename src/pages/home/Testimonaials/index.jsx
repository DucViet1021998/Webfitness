import React from 'react';
import classNames from 'classnames/bind';
import styles from './Testimonials.module.scss'



const cx = classNames.bind(styles)
function Testimonials() {
    return (
        <div className={cx("container")}>
            <div className={cx("left")}>
                <span>Testimonials</span>
                <span className='stroke-text'>What they</span>
                <span>say about us</span>
            </div>
        </div>
    )
}

export default Testimonials;