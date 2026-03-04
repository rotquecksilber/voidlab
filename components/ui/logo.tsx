import styles from './logo.module.css'
import { fontSans } from "@/fonts";
import cn from 'classnames'

export default function Logo() {
    return (
        <div className={cn(styles.logoContainer, fontSans.className)}>
            <div className={styles.logo}>
                VOID<span className={styles.logo_lab}>LAB</span>
                {/* Слой для эффекта сканирующего света */}
                <div className={styles.scanline}></div>
            </div>
        </div>
    )
}
