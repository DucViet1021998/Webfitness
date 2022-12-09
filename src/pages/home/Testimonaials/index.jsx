import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Testimonials.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion'
const data = [
    {
        img: 'https://fitclub-1my.pages.dev/static/media/t-image3.3894413f7bf2b4f1fc54.jpg',
        review: 'I made the right choice by choosing the Fitclub and by choosing the right plan and program I already achieved my ideal body!',
        name: 'FRANKLIN',
        status: 'CUSTOMER',
    },
    {
        img: 'https://fitclub-1my.pages.dev/static/media/t-image1.c16c2c261034cf78ee57.png',
        review: 'HA HA HA!',
        name: 'MATHEW HENDRICKSON',
        status: 'ENTREPRENEUR',

    },
    {
        img: 'https://fitclub-1my.pages.dev/static/media/t-image2.f5d2e52e514c544dfffb.jpg',
        review: 'Géc Gô!',
        name: 'KEVIN ',
        status: 'COACH',

    },
]

const cx = classNames.bind(styles)
function Testimonials() {
    const transition = { type: 'spring', duration: 3 }
    const [selected, setSelected] = useState(0)
    const tLength = data.length
    return (
        <div className={cx("container")}>
            <div className={cx("left")}>
                <span>Testimonials</span>
                <span className='stroke-text'>What they</span>
                <span>say about us</span>
                <span>
                    {data[selected].review}
                </span>
                <span>
                    <span style={{ color: "var(--green)" }}>
                        {data[selected].name}
                    </span> {' '}
                    - {data[selected].status}
                </span>
            </div>
            <div className={cx('right')}>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ ...transition, duration: 2 }}
                    whileInView={{ opacity: 1, x: 0 }}
                >
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ ...transition, duration: 2 }}
                    whileInView={{ opacity: 1, x: 0 }}
                >
                </motion.div>
                <img src={data[selected].img} alt="anh" />
                <div className={cx("arrows")}>
                    <FontAwesomeIcon onClick={() => {
                        selected === 0
                            ? setSelected(tLength - 1)
                            : setSelected((prev) => prev - 1)
                    }}
                        icon={faArrowLeft} />
                    <FontAwesomeIcon onClick={() => {

                        selected === tLength - 1
                            ? setSelected(0)
                            : setSelected((prev) => prev + 1)
                    }} icon={faArrowRight} />
                </div>
            </div>
        </div >
    )
}

export default Testimonials;