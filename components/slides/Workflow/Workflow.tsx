import styles from "./workflow.module.css";
import cn from "classnames";
import { fontSans, fontMono } from "@/fonts";

const steps = [
    { id: "01", title: "ИССЛЕДОВАНИЕ", desc: "Анализ рынка и разработка стратегии", height: "45%" },
    { id: "02", title: "ПРОЕКТИРОВАНИЕ", desc: "Проработка UX/UI и интерактивный прототип", height: "65%" },
    { id: "03", title: "РАЗРАБОТКА", desc: "Написание кода и интеграция систем", height: "85%" },
    { id: "04", title: "ЗАПУСК", desc: "Деплой, тестирование и масштабирование", height: "100%" }
];

export default function Workflow() {
    return (
        <section className={styles.section}>
            {/* Мягкие сферы для глубины фона */}
            <div className={cn(styles.orb, styles.orbPurple)} />
            <div className={cn(styles.orb, styles.orbBlue)} />

            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={cn(styles.sectionTitle, fontSans.className)}>ПРОЦЕСС_</h2>

                </div>

                <div className={styles.flowGrid}>
                    {steps.map((step) => (
                        <div key={step.id} className={styles.column}>
                            <div className={styles.barWrapper}>
                                <div
                                    className={styles.bar}
                                    style={{ '--target-height': step.height } as React.CSSProperties}
                                >
                                    <span className={cn(styles.stepId, fontMono.className)}>
                                        {step.id}
                                    </span>
                                </div>
                            </div>

                            <div className={styles.text}>
                                <h4 className={fontSans.className}>{step.title}</h4>
                                <p className={fontSans.className}>{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
