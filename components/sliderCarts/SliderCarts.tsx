import Card from '../Card/Card'
import styles from './sliderCarts.module.css'


export default function SliderCarts() {


    return (

        <div className={styles.layout}>
            <div className={styles.slidersContainer}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

            <svg className={styles.shadow} width="20" height="280" viewBox="0 0 94 307" fill="none" xmlns="http://www.w3.org/2000/svg">

                <defs>
                    <filter id="filter0_f_106_181" x="-10" y="-63" width="20" height="280" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_106_181" />
                    </filter>
                </defs>
            </svg>

            <div className={styles.nextSection}>

            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.75 9.525L11.164 4.939C10.8826 4.65774 10.501 4.49978 10.1032 4.49988C9.70531 4.49997 9.32378 4.65811 9.04252 4.9395C8.76126 5.2209 8.6033 5.6025 8.60339 6.00036C8.60349 6.39822 8.76163 6.77974 9.04302 7.061L13.629 11.646C13.6756 11.6925 13.7125 11.7476 13.7377 11.8084C13.7629 11.8691 13.7759 11.9342 13.7759 12C13.7759 12.0658 13.7629 12.1309 13.7377 12.1916C13.7125 12.2524 13.6756 12.3076 13.629 12.354L9.04302 16.939C8.76163 17.2203 8.60349 17.6018 8.60339 17.9997C8.6033 18.3975 8.76126 18.7791 9.04252 19.0605C9.32378 19.3419 9.70531 19.5 10.1032 19.5001C10.501 19.5002 10.8826 19.3423 11.164 19.061L15.75 14.475C16.4052 13.818 16.7732 12.9279 16.7732 12C16.7732 11.0721 16.4052 10.182 15.75 9.525Z" fill="#5C5C5C" />
            </svg>
            
            </div>




        </div>


    )
}