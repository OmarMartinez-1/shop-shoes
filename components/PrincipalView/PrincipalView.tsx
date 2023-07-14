import Image from 'next/image'
import sneakers from '@/img/shoes/Jordan1.jpg'
import styles from "./pricipalview.module.css"



export default function PrincipalView() {
    return (
        <div className={styles.principalView}>

            <Image className={styles.principalImg} src={sneakers} priority={true} alt='jordan1'></Image>



            <div className={styles.description}>

                <div className={styles.nameProduct}>

                    <h2>Tenis Air Jordan 1 High Lucky Green</h2> <br />


                    <span className={styles.rateArea}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 15.0745L13.3649 17.8368C14.1642 18.343 15.1424 17.5947 14.932 16.6482L13.7751 11.4537L17.6351 7.95405C18.3398 7.31575 17.9611 6.10517 17.0356 6.02813L11.9555 5.57692L9.96763 0.66857C9.61003 -0.222857 8.38997 -0.222857 8.03237 0.66857L6.04451 5.56591L0.964434 6.01713C0.038871 6.09416 -0.339768 7.30474 0.364921 7.94305L4.22494 11.4427L3.06799 16.6372C2.85763 17.5837 3.83578 18.332 4.63513 17.8258L9 15.0745Z" fill="#F8E329" />
                        </svg>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 15.0745L13.3649 17.8368C14.1642 18.343 15.1424 17.5947 14.932 16.6482L13.7751 11.4537L17.6351 7.95405C18.3398 7.31575 17.9611 6.10517 17.0356 6.02813L11.9555 5.57692L9.96763 0.66857C9.61003 -0.222857 8.38997 -0.222857 8.03237 0.66857L6.04451 5.56591L0.964434 6.01713C0.038871 6.09416 -0.339768 7.30474 0.364921 7.94305L4.22494 11.4427L3.06799 16.6372C2.85763 17.5837 3.83578 18.332 4.63513 17.8258L9 15.0745Z" fill="#F8E329" />
                        </svg>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 15.0745L13.3649 17.8368C14.1642 18.343 15.1424 17.5947 14.932 16.6482L13.7751 11.4537L17.6351 7.95405C18.3398 7.31575 17.9611 6.10517 17.0356 6.02813L11.9555 5.57692L9.96763 0.66857C9.61003 -0.222857 8.38997 -0.222857 8.03237 0.66857L6.04451 5.56591L0.964434 6.01713C0.038871 6.09416 -0.339768 7.30474 0.364921 7.94305L4.22494 11.4427L3.06799 16.6372C2.85763 17.5837 3.83578 18.332 4.63513 17.8258L9 15.0745Z" fill="#F8E329" />
                        </svg>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 15.0745L13.3649 17.8368C14.1642 18.343 15.1424 17.5947 14.932 16.6482L13.7751 11.4537L17.6351 7.95405C18.3398 7.31575 17.9611 6.10517 17.0356 6.02813L11.9555 5.57692L9.96763 0.66857C9.61003 -0.222857 8.38997 -0.222857 8.03237 0.66857L6.04451 5.56591L0.964434 6.01713C0.038871 6.09416 -0.339768 7.30474 0.364921 7.94305L4.22494 11.4427L3.06799 16.6372C2.85763 17.5837 3.83578 18.332 4.63513 17.8258L9 15.0745Z" fill="#F8E329" />
                        </svg>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 15.0745L13.3649 17.8368C14.1642 18.343 15.1424 17.5947 14.932 16.6482L13.7751 11.4537L17.6351 7.95405C18.3398 7.31575 17.9611 6.10517 17.0356 6.02813L11.9555 5.57692L9.96763 0.66857C9.61003 -0.222857 8.38997 -0.222857 8.03237 0.66857L6.04451 5.56591L0.964434 6.01713C0.038871 6.09416 -0.339768 7.30474 0.364921 7.94305L4.22494 11.4427L3.06799 16.6372C2.85763 17.5837 3.83578 18.332 4.63513 17.8258L9 15.0745Z" fill="#F8E329" />
                        </svg>


                        (2000+ Reviews)

                    </span>

                </div>



                <p><b>Caballeros </b>MODELO DZ5485-031</p>
                <span className={styles.price}>
                    Price $4,499.00
                </span>
                <ul className={styles.listOtherColors}>


                    <li className={styles.itemOtherColors}>
                        <Image className={styles.itemImg} src={sneakers} alt='jordan1'></Image>
                    </li>
                    <li className={styles.itemOtherColors}>
                        <Image className={styles.itemImg} src={sneakers} alt='jordan1'></Image>
                    </li>
                    <li className={styles.itemOtherColors}>
                        <Image className={styles.itemImg} src={sneakers} alt='jordan1'></Image>
                    </li>
                    <li className={styles.itemOtherColors}>
                        <Image className={styles.itemImg} src={sneakers} alt='jordan1'></Image>
                    </li>

                </ul>

                <label className={styles.counter} >
                    <button className={styles.buttonMoreOrLess}>-</button>
                    <input className={styles.inputCounter} type="text" minLength={1} maxLength={2} size={2} />
                    <button className={styles.buttonMoreOrLess}>+</button>
                </label>

                <button className={styles.buttonLikes}>🤍</button>
                <button className={styles.buttonAddCart}>Add to cart</button>
                <button className={styles.buttonBuyNow}>Buy Now</button>


            </div>


        </div>
    )
}