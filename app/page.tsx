import Nav from '@/components/Nav/Nav'
import Header from '@/components/Header/Header'
import PrincipalView from '@/components/PrincipalView/PrincipalView'
import InfoSales from '@/components/InfoSales/InfoSales'
import SliderCarts from '@/components/sliderCarts/SliderCarts'
import DailyDeals from '@/components/DailyDeals/DailyDeals'
import ProductDescription from '@/components/ProductDescription/ProductDescription'


import styles from './page.module.css'



export default function Home() {



  return (
    <>
      <Nav />


      <main className={styles.main}>
        <Header />
        <PrincipalView />
        <InfoSales />
        <SliderCarts />
        <DailyDeals />
        <ProductDescription />

      </main>

    </>
  )
}
