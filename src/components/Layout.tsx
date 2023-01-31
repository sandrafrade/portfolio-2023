import {Jost, Courier_Prime} from '@next/font/google'
import {NextFont} from '@next/font'
import {useRouter} from 'next/router'
import {motion, AnimatePresence, Variants} from 'framer-motion'
import styles from '@/styles/components/Layout.module.css'

const fontSans: NextFont = Jost({
    weight: ['100', '200', '400', '700'],
    style: ['normal'],
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap',
})

const fontMono: NextFont = Courier_Prime({
    weight: ['400', '700'],
    style: ['normal'],
    subsets: ['latin'],
    variable: '--font-mono',
    display: 'swap',
})

const variants: Variants = {
    in: {
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: 0.5
        }
    },
    out: {
        opacity: 0.001,
        transition: {
            duration: 0.5
        }
    }
}

export default function Layout ({children}: {children?: React.ReactNode}) {
    const {asPath} = useRouter()

    return (
        <>
            <style jsx global>{`
                :root {
                    --font-sans: ${fontSans.style.fontFamily};
                    --font-mono: ${fontMono.style.fontFamily};
                }
            `}</style>
            <AnimatePresence mode="wait">
                <motion.div
                    key={asPath}
                    className={`${styles.wrapper}`}
                    variants={variants}
                    animate="in"
                    initial="out"
                    exit="out"
                >
                    <main className={styles.main}>
                        {children}
                    </main>
                </motion.div>
            </AnimatePresence>
        </>
    )
}