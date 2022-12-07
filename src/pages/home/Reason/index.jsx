import React from 'react';
import classNames from 'classnames/bind';
import styles from './Reason.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


const cx = classNames.bind(styles)

function Reason() {
    return <div className={cx("container")}>
        <div className={cx("left-r")}>
            <img src="https://s3-alpha-sig.figma.com/img/8cdb/b6e8/d70117df73f9933ee8e16d1661cded19?Expires=1671408000&Signature=BN-drr4g0cTMHBwOg7x8F7cbWzqZMCVfcpV1mHWyIWclUoj0UXLCVzLTlBJeI5NbkuvU~fWkwymsyQ023sbfcanPwatFDa3FlavQvePQbn2goJP60A-yQn4YxO0rgqrHzVlvDG-ngsX-AJxL6iYblNGVvDZoHVhsNKNJXhSUjvwQ5WUOa6oqwYu2Sxb-dt92YBmJ02VM901quOLh07x0HSVdhHz55vQDbyW-u5aYzXo3hmWSRxft4hPWpmAsd604dtXZruw~wScTTdYd8I5HmSiefHKrvGIqm6WOs4~lP-DNB1vQlJ7XsfXBjyoL6aX-P24EVHLaRLNqGb9Yxr379g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="anh 1" />
            <img src="https://s3-alpha-sig.figma.com/img/6ae1/f984/7fb361c97fae6f20f0b6384b22786baa?Expires=1671408000&Signature=LPyvEqPb8y6IvlWs9DwexQkvpwl23DMIw7OSEMCUv1LrK9-Gv2r~9Nn7Bx0LpnuauJJm8~HtrF7mASkKmfbKEVIp5o7HAQocFMAkT62KkbnLTyZxUpDN-5FYQBjNXvJNUfiEOEisE9nPYA0UQ5yhfBCciwSdZW-di-7PEW8O4oqtyx9PrrDSkUcHtnMmJzHJDwx4wJ5CPcus4GQuY2Lvjg7DP3TZuIOBuIeuLFnJa8gjc6iFo9bMtTnxCGXJwbaBq0H2A3oKUYTImTdnZhaO7GQMNGGHNi7bxZqJD~UtEDfVwau0clHJXCTVPYnirSdmDR~1geNDK~-ts4lPbfpHog__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="anh 2" />
            <img src="https://s3-alpha-sig.figma.com/img/77c5/42e4/fc332cfcae13293042839e7554db6339?Expires=1671408000&Signature=JPW5tGwCClTTgdyb9D1Al2V0vz-xnxEzNp3NNBPFMFEkOmxQb3tCHHWNRhiJgd77RX8c0rs7eVIvj9588X3UV1Z4xyroVazYmYl4QLTeS2d1HfywppigFCukEaMQOHXxrjoNBBXDD5fwmKK77im1k3PymXvLKqhsd6Wif1iQhW62Yse6qSXxvoQyh3SuJg57CwwV9zzHsUBwzENGOmZUR3GAPuM2Svv5JtEl8gZ8p3XJDp~Z1vRS2Z9U58OU3RY2tLp~SltTVl7zFtBqjEhcucuscVQd7rI0xICyw8tAFgDF3~CKtllKgTkamN684ar2P2O~ueuWBtIB0bBcfniPEg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="anh 3" />
            <img src="https://s3-alpha-sig.figma.com/img/8849/cd9d/581ccb105c0d59f8c7ddea8003f6462a?Expires=1671408000&Signature=TVRDvzqL889IN2KVnmzXOboANI3fJBsEJXAcYMs0NNwyn-EYzZZJG56qQzoJfei1uXMJefV8afsWkBr80~JR-V-HTdBQ0cx-Rc~t46rZjdSvf29gPQEpaROJlrDZ4CE8NzeYZCYl1JGuD~ku43BKrnpF7eALj2O5VwnKMh8gdfRPYDLIgg27BpQhvCuA6l0284rL1Q1hv-Ji~FNU3DDH7SAjhsFAUNmi3S6KK6n3oGGkM595vPHvGXucWxLwcSR22kB9KlqGwEw1lQYylzN1Ot6YGFwM9WhUZ8JX3buytjyifAIz1X2S3E~i0C1rQd05KtEdBMAkth-uvRDUx2jkMg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="anh 4" />
        </div>
        <div className={cx("right-r")}>
            <span>Some reasons</span>
            <div>
                <span className='stroke-text'>Why</span>
                <span> choose us?</span>
            </div>


            <div className={cx('details-r')}>

                <div >
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    <span>OVER 140+ EXPERT COACH</span>
                </div>
                <div>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                </div>
                <div>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                </div>
                <div>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    <span>RELIABLE PARTNERS</span>
                </div>
            </div>
            <span
                style={{
                    color: 'rgb(185 181 181)',
                    fontWeight: '400',
                }}
            >OUR PARTNERS:</span>
            <div className={cx("partners")}>
                <img src="https://s3-alpha-sig.figma.com/img/4602/f2df/811ccdd9d403b91ee61436441ae24538?Expires=1671408000&Signature=c4vu7Q-8kfy1XtKhAG-tRg8WWqI9mw2MQ-Tc1bEtOZi9UsNSw96rhAeukvUc~~7ihBwQ6iJuBm2YC9PRVhcCleMTjo5H4gnJ6WkQvCB4qYQpTI~xBKXNJE9o~-skypBagb1MZAR0UG0fSBMELAydAitpu3j2-LIbD9keTn8QrTf58EQgHtrH28vnsClNBVnbVjDJ1MU7J7LBIXWbQMeZ-rAnjs6bPnutadR4r9SMDab3Kx9RXW1IabRKas3t6nxj27XGpd~pKq10nSV61M6R-UfZVLfoMdhxkhlobK1jRd3qzbOsd-63sRqI0WpixUektUt4eZKukp3wwIGd~UnMJQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="logo-Nike" />
                <img src="https://s3-alpha-sig.figma.com/img/5fa2/e174/6a5b9262598e3fb31ed936ae8cc563d6?Expires=1671408000&Signature=FxkTrIkNBwB9m5o7yauvv-OA~7zpL~4xQpCZ8vgshL0JhvBHhe2QbN7-ygbKBTBDTWiUQmDEWbZ2KRDbWgCxNNrKhaljf16-yvDxPgxWyZCplxJBAVF0OiW5u3vxzBZim8MFfN1J87x90iARn1rWdMqheJ9Cw8yE5RtVgiEsSJInYdPcgmK62Puf4l5Fpr1yYHx6PPSLTUyk2u0OfKBT7l26ksN8OIsDfmEgnMV9WqjJz~EQfIJ2vQ2XbX7q6t9dc4uH8gOzc6XXrBS5xTEppCV6tYi2qltJE3fjvj5KBLynsvt-vK6YovW4VdhphOyWMmHMBFwajyJSs8SYfEKwTw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="logo-Adidas" />
                <img src="https://s3-alpha-sig.figma.com/img/dfad/fd9d/9d21aa4553594ca2f54fb4f618ddde01?Expires=1671408000&Signature=KZrr7xuLQKrok2frrZNSQIdBZTG1W6~cHHIh74vD0dV~DeDpDnxN~tN96Lm9~pLBovUoATJ4SSw32DyGvQrAOO~jIU2fs3oZOy4ylxGclO-OtK7SzAjWxbHsUzpL5nOi-BTgLi~rGopTr8s-xDkys8a6lPQ1yPVpo08PbyGSqc~CfWfIBurXw7s2KgKNIXIEmZQF81MubwJODGTiflofiHWyKfvw4w4F3ah0QLNQ7H4yTmbGgC8Hzu9vqd0gtXS9jx32ulDpvJvhs-BDWdPb1TuBRyB3zsvwpLeZN4pgwaYCgh~C2RnjKXvxlQKwzie-JXo-MUKtfc9R8YskJQdhaw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="logo-New-Balance" />
            </div>

        </div>
    </div >
}

export default Reason;