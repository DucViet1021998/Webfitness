import React from 'react';
import classNames from 'classnames/bind';

import Header from '../HeaderComponent/indexHeader';
import styles from './DefaultLayout.module.scss';
import SideBar from './Sidebar/SideBarIndex';
import Footer from '../Footer';


const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
    return (<>
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
        <Footer />
    </>
    )
}

export default DefaultLayout;