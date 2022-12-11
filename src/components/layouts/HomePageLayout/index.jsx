import React from 'react';
import classNames from 'classnames/bind';
import styles from './HomePageLayout.module.scss';

import Header from '../HeaderComponent/indexHeader';
import SideBar from '../DefaultLayout/Sidebar/SideBarIndex';
import Programs from '../../../pages/home/Programs/Programs';
import Reason from '../../../pages/home/Reason';
import Plan from '../../../pages/home/Plan';
import Testimonials from '../../../pages/home/Testimonaials';
import Footer from '../Footer';
import Products from '../../../pages/home/Productcs';


const cx = classNames.bind(styles)

function HomePageLayout({ children }) {
    return (
        <>
            <div className={cx('container')}>
                <div className={cx("background")}>
                    <div className={cx("content")}>
                        <Header />
                        {children}
                    </div>
                    <div className={cx("blur")}></div>
                </div>
                <div className={cx('sidebar')}>
                    <SideBar />
                </div>

            </div>
            <Programs className={cx('programs')} />
            <Reason />
            <Plan />
            <Products />
            <Testimonials />
            <Footer />
        </>
    )
}

export default HomePageLayout;