import styles from "./approach.module.css";
import cn from "classnames";
import { fontSans, fontMono } from "@/fonts";
import React from "react";

const steps = [
    {
        num: "01",
        title: "ГИБКОСТЬ В ПРИОРИТЕТЕ",
        description: "Мы за ранние и частые релизы. Вы видите результат в реальном времени, а не через месяцы ожидания.",
        color: "#b933ff"
    },
    {
        num: "02",
        title: "СИСТЕМНЫЙ ДИЗАЙН",
        description: "Масштабируемость заложена в фундамент. Мы создаем атомарные системы, которые растут вместе с бизнесом.",
        color: "#00d4ff"
    },
    {
        num: "03",
        title: "ПРОИЗВОДИТЕЛЬНОСТЬ",
        description: "Скорость — это ключевая функция. Оптимизация каждого ресурса для мгновенного отклика.",
        color: "#ffffff"
    }
];

export default function Approach() {
    return (
        <section className={styles.section}>
            <div className={styles.gridBg} />

            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={cn(styles.sectionTitle, fontSans.className)}>МЕТОДОЛОГИЯ_</h2>

                </div>

                <div className={styles.content}>
                    {steps.map((step) => (
                        <div
                            key={step.num}
                            className={styles.stepCard}
                            style={{ '--accent-color': step.color } as React.CSSProperties}
                        >
                            <span className={cn(styles.stepNumber, fontMono.className)}>
                                {step.num}
                            </span>
                            <h3 className={cn(styles.stepTitle, fontSans.className)}>
                                {step.title}
                            </h3>
                            <p className={styles.stepDescription}>
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
