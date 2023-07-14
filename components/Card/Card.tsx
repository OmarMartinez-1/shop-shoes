import Image from 'next/image'
import sneakers from '@/img/shoes/Jordan1.jpg'
import { open_Sans, roboto } from '@/app/fonts'
import styles from './card.module.css'


export default function Card() {

    return (
        <div className={styles.containerBanner}>
            <Image src={sneakers} alt='jordan1' />
            <h3 className={open_Sans.variable}>Tenis Air Jordan 1 High Lucky Green</h3>
            <span className={open_Sans.className}>Price $4,499.00</span>

            <div className={styles.cardFotter}>

                <div className={styles.rateArea}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 11.7246L10.3949 13.873C11.0166 14.2668 11.7774 13.6847 11.6138 12.9486L10.7139 8.90845L13.7162 6.18649C14.2643 5.69003 13.9698 4.74846 13.2499 4.68855L9.29871 4.3376L7.7526 0.519999C7.47447 -0.173333 6.52553 -0.173333 6.2474 0.519999L4.70129 4.32904L0.750115 4.67999C0.030233 4.7399 -0.264264 5.68147 0.283828 6.17793L3.28606 8.89989L2.38621 12.94C2.2226 13.6762 2.98339 14.2582 3.6051 13.8645L7 11.7246Z" fill="#00E0C6" />
                    </svg>
                    <p className={roboto.variable}>4.9</p>
                </div>

                <svg className={styles.toWishList} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="14" cy="14" r="14" fill="#009393" />
                    <line x1="14" y1="18" x2="14" y2="10" stroke="white" strokeWidth="2" strokeLinecap='round' />
                    <line x1="10" y1="14" x2="18" y2="14" stroke="white" strokeWidth="2" strokeLinecap='round' />
                </svg>

            </div>

        </div>
    )
}