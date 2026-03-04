import styles from "./contact.module.css";
import cn from "classnames";
import { fontSans, fontMono } from "@/fonts";

export default function Contact() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <span className={cn(styles.label, fontMono.className)}>СВЯЗЬ_</span>

                <h2 className={cn(styles.hugeTitle, fontSans.className)}>
                    ДАВАЙТЕ<br/>СОЗДАДИМ<br/>
                    <span className={styles.gradientText}>ЭПИЧЕСКОЕ.</span>
                </h2>

                <div className={styles.tgWrapper}>
                    <a
                        href="https://t.me/void_laboratory"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(styles.tgLink, fontMono.className)}
                    >
                        TELEGRAM → @VOID_LABORATORY
                    </a>
                </div>
            </div>


        </section>
    );
}
