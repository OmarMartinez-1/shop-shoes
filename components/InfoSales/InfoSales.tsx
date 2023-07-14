import Image from 'next/image'
import saleBrandNike from '@/img/sales/saleBrandNike.png'
import saleAirForce from '@/img/sales/salesAirForce.jpg'
import saleSummer from '@/img/sales/saleSummer.jpg'


import styles from './infoSales.module.css'

export default function InfoSales() {
    return (


        <div className={styles.infoSales}>
            <Image priority={false} src={saleBrandNike} className={styles.imgSales} alt='sales'/>     
            <span className={styles.buttonSales}>sales</span>
            <h4 >Hasta 40% Off en ropa Nike</h4>
            <span className={styles.buttonSales}>buy</span>
        </div>

    )
}