import styles from './banner.module.css'
import sneakers from '@/img/shoes/Jordan1.jpg'
import Image from 'next/image'

export default function Banner() {
    return (
        <div className={styles.containerBanner}>

            <div className={styles.dotWhite}>
                <Image src={sneakers} priority={false} alt='tenis' />
            </div>

            <div className={styles.nameProduct}>

                <div className={styles.sameLine}>
                    <h3>
                        Tenis Air Jordan 1 High Lucky Green
                    </h3>
                    <span className={styles.price}>
                        Price $4,499.00
                    </span>
                </div>

                <p>
                    256 Reviews 1628 orders 
                </p>
            </div>


        </div>
    )
}