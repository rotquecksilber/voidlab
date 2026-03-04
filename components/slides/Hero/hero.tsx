import styles from "./hero.module.css";
import cn from "classnames";
import { fontSans, fontMono } from "@/fonts";

export default function HeroSlide() {
    return (
        <section id="hero" className={styles.slide}>
            {/* Деликатный цифровой шум и фон */}
            <div className={styles.bgLayer}>
                <div className={cn(styles.orb, styles.orbBlue)} />
                <div className={cn(styles.orb, styles.orbPurple)} />
                <div className={styles.gridBg} />
            </div>

            <div className={styles.slideContent}>
                {/* Вместо EST (Established) используем «Основано» */}
                <div className={cn(styles.est, fontMono.className)}>ОСНОВАНО // 2026</div>

                <h1 className={cn(styles.titleXl, fontSans.className)}>
                    VOID<br/>LAB_
                </h1>

                <p className={styles.lead}>
                    Проектируем цифровые экосистемы будущего.
                    Эстетика технологической чистоты в каждом пикселе.
                </p>

                <div className={styles.footerRow}>
                    <div className={styles.tags}>
                        {/* Термины на английском сопровождаем русским переводом */}
                        <span className={styles.tag}>Дизайн / Design</span>
                        <span className={styles.tag}>Код / Code</span>
                        <span className={styles.tag}>Стратегия / Strategy</span>
                    </div>

                    <div className={cn(styles.scrollHint, fontMono.className)}>
                        ЛИСТАЙТЕ_ВНИЗ / SCROLL
                    </div>
                </div>
            </div>
        </section>
    );
}
