import React from 'react';
import classNames from 'classnames/bind';
import styles from './Plan.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCrown, faDumbbell, faHeartCirclePlus, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Button from '../../../components/Button'

const cx = classNames.bind(styles)
const data = [
{
    icon: <FontAwesomeIcon icon={faHeartCirclePlus} />,
    name: 'BASIC PLAN',
    price: '25',
    features: [
        '2 hours of exercises',
        'Free consultation to coaches',
        'Access to The Community',
    ],
    color: 'primary',

},
{
    icon: <FontAwesomeIcon icon={faCrown} />,
    name: 'PREMIUM PLAN',
    price: '125',
    features: [
        '12 hours of exercises',
        'Consultation of Private',
        'Free Fitness Merchandises',
    ],
    color: 'outline',

},
{
    icon: <FontAwesomeIcon icon={faDumbbell} />,
    name: 'PRO PLAN',
    price: '55',
    features: [
        '6 hours of exercises',
        'Free consultation of Coaches',
        'Access to minibar',
    ],
},
]

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
        <div className={cx("plans")}>
                {data.map((plan, index)=> (
                    <div key={index} className={cx("item-plan")}>
                        <span className={cx('item-plan-icon')}>{plan.icon}</span>
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>
                            <div className={cx("features")}>
                            {plan.features.map((feature, i ) => (
                                <div key={i} className={cx("feature-text")}>
                                <FontAwesomeIcon className={cx('feature-text-icon')} icon={faCheckCircle} />
                                <span>{feature}</span>
                                </div>
                        ))}
                            </div>
                        <div>
                            <span>See more benefits <FontAwesomeIcon icon={faArrowRight}/></span>
                        </div>
                        <Button primary>Join now</Button>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Plan;
