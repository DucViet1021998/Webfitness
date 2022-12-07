import React from 'react';
import classNames from 'classnames/bind';
import styles from './Plan.module.scss'

const cx = classNames.bind(styles)

function Plan() {
    return (
        <div className={cx("container")}>

            {/* HEADER */}
            <div className={cx("header")}>
                <span className='stroke-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className='stroke-text'>RIGHT NOW</span>
            </div>

            {/* PLANS CARD */}
        </div>
    )
}

export default Plan;
