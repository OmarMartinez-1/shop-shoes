import { Roboto, Poppins, Open_Sans } from "next/font/google";


export const poppins = Poppins({
    weight: '500',
    subsets: ['latin'],
    display: 'swap'
})

export const open_Sans = Open_Sans({
    weight: '500',
    variable: '--font-open-sans',
    subsets: ['latin'],
    display: 'swap'
})

export const roboto = Roboto({
    weight: '500',
    variable: '--font-roboto',
    subsets: ['latin'],
    display: 'swap'
})