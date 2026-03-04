import styles from "./services.module.css";
import cn from "classnames";
import { fontSans, fontMono } from "@/fonts";

const services = [
    {
        id: "01",
        title: "Архитектура систем",
        desc: "Проектирование логики и разработка серверной части. Мы создаем фундамент, который выдержит любую нагрузку.",
        color: "blue",
        tech: "LOGIC // SCALABILITY"
    },
    {
        id: "02",
        title: "Сценарный дизайн",
        desc: "Интерфейс как диалог. Мы продумываем путь пользователя так, чтобы каждое движение было интуитивным.",
        color: "purple",
        tech: "BEHAVIOR // UI"
    },
    {
        id: "03",
        title: "Визуальный код",
        desc: "Графические системы, которые транслируют смыслы бренда. От сетки до динамической типографики.",
        color: "purple",
        tech: "ID // TYPOGRAPHY"
    },
    {
        id: "04",
        title: "Технический надзор",
        desc: "Аудит и рефакторинг. Мы находим и исправляем скрытые проблемы в архитектуре вашего продукта.",
        color: "blue",
        tech: "AUDIT // STABILITY"
    },
];

export default function Services() {
    return (
        <section className={styles.section}>
            <div className={styles.bgLayer}>
                <div className={styles.gridBg} />
            </div>

            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={cn(styles.sectionTitle, fontSans.className)}>УСЛУГИ_</h2>
                    <div className={styles.headerInfo}>

                    </div>
                </div>

                <div className={styles.grid}>
                    {services.map((s) => (
                        <div key={s.id} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <span className={cn(styles.tech, fontMono.className)}>{s.tech}</span>
                                <span className={s.color === "blue" ? styles.numBlue : styles.numPurple}>
                                    {s.id}
                                </span>
                            </div>
                            <h3 className={fontSans.className}>{s.title}</h3>
                            <p>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
