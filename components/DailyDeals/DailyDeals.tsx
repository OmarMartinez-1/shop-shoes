import Banner from '../Banner/Banner'
import { open_Sans } from '@/app/fonts'

import styles from './dailyDeals.module.css'

export default function DailyDeals() {
    return (

        <div className={styles.dailyDealsContainer}>
            <div className={styles.headerSection}>
                <h4>
                    Daily Deals
                </h4>
                <div className={`${styles.showAllDeals} ${open_Sans.className}`}>
                    View all
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.08398 1.82935L6.69102 1.22231C6.94805 0.965283 7.36367 0.965283 7.61797 1.22231L12.9336 6.53521C13.1906 6.79224 13.1906 7.20786 12.9336 7.46216L7.61797 12.7778C7.36094 13.0348 6.94531 13.0348 6.69102 12.7778L6.08398 12.1708C5.82422 11.911 5.82969 11.4872 6.09492 11.2329L9.38984 8.0938H1.53125C1.16758 8.0938 0.875 7.80122 0.875 7.43755V6.56255C0.875 6.19888 1.16758 5.9063 1.53125 5.9063H9.38984L6.09492 2.76724C5.82695 2.51294 5.82148 2.08911 6.08398 1.82935Z" fill="#5C5C5C" />
                    </svg>
                </div>
            </div>

            <Banner />
            <Banner />
            <Banner />
            <Banner />
            <Banner />
           



        </div>

    )
}