import styles from "./vision.module.css";
import cn from "classnames";
import { fontSans, fontMono } from "@/fonts";

export default function Vision() {
    return (
        <section className={styles.section}>
            {/* Фоновые слои для единства стиля */}
            <div className={styles.bgLayer}>
                <div className={styles.gridBg} />
                <div className={styles.orb} />
            </div>

            <div className={styles.container}>
                <div className={styles.header}>

                    <h2 className={cn(styles.title, fontSans.className)}>ВИДЕНИЕ_</h2>
                </div>

                <p className={styles.bigText}>
                    Мы верим, что цифровые продукты должны быть <span className={styles.accentPurple}>живыми</span>.
                </p>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h3 className={fontSans.className}>Миссия / Mission</h3>
                        <p>
                            Стираем грань между чистой функцией и визуальным искусством.
                            Мы создаем цифровые артефакты, которые не просто работают, а оставляют след в памяти.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h3 className={fontSans.className}>Метод / Method</h3>
                        <p>
                            Мы используем передовые алгоритмы как инструмент, а не как замену мысли.
                            Фокус на «осмысленной пустоте» и эстетике, где каждый пиксель находится на своем месте по
                            воле автора.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
