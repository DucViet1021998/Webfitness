import React from 'react';
import classNames from 'classnames/bind';
import styles from './Program.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faDumbbell, faFire, faHeartPulse, faPersonRunning } from '@fortawesome/free-solid-svg-icons';




const cx = classNames.bind(styles)
const data = [
    {
        icon: <FontAwesomeIcon icon={faDumbbell} />,
        heading: 'Strength training',
        details: 'In this program, you are trained to improve your strength through many exercises.'
    },
    {
        icon: <FontAwesomeIcon icon={faPersonRunning} />,
        heading: 'Cardio training',
        details: 'In this program, you are trained to do sequential moves in range of 20 until 30 minutes'
    },
    {
        icon: <FontAwesomeIcon icon={faFire} />,
        heading: 'Fat burning',
        details: 'This program is suitable for you who wants to get rid of your fat and lose your weight.'
    },
    {
        icon: <FontAwesomeIcon icon={faHeartPulse} />,
        heading: 'Heart Fitness',
        details: 'This programs is designed for those who exercises only for their body fitness not body building.'
    },

]

function Programs() {
    return (
        <div id='programs' className={cx("programs")}>
            {/* HEADER */}
            <div className={cx('header')}>
                <span className='stroke-text'>explore</span>
                <span>our</span>
                <span className='stroke-text'>programs</span>
            </div>

            {/* Title */}
            <div className={cx('programs-categories')}>
                {data.map((pro, index) => {
                    return (<div key={index} className={cx('category')}>
                        <span>{pro.icon}</span>
                        <span>{pro.heading}</span>
                        <span>{pro.details}</span>
                        <div className={cx('join-now')}>
                            <span>Join Now</span>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                    </div>)
                })}
            </div>
        </div>
    );
}
// console.log(pro.img);
export default Programs;