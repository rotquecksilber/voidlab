import styles from "./techStack.module.css";
import cn from "classnames";
import { fontSans, fontMono } from "@/fonts";

const techData = [
    {
        category: "ВНЕШНИЕ ИНТЕРФЕЙСЫ", // Вместо Frontend
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Zustand", "GSAP", "Framer Motion"],
        isAccent: true
    },
    {
        category: "СЕРВЕРНЫЕ РЕШЕНИЯ", // Вместо Backend
        items: ["Python", "Rust", "Node.js", "NestJS", "PostgreSQL", "Redis", "Prisma", "FastAPI"]
    },
    {
        category: "ИНФРАСТРУКТУРА",
        items: ["Docker", "Kubernetes", "AWS", "Vercel", "CI/CD", "Nginx", "Sentry"]
    }
];

export default function TechStack() {
    return (
        <section className={styles.section}>
            <div className={styles.bgLayer}>
                {/* Сфера ПЕРЕД сеткой для мягкого свечения сквозь линии */}
                <div className={cn(styles.orb, styles.orbTopLeft)} />
                <div className={styles.gridBg} />
            </div>

            <div className={styles.container}>
                <div className={styles.header}>

                    <h2 className={cn(styles.sectionTitle, fontSans.className)}>ТЕХНОЛОГИИ_</h2>

                </div>

                <div className={styles.techGrid}>
                    {techData.map((group) => (
                        <div key={group.category} className={styles.techGroup}>
                            <span className={cn(styles.groupLabel, fontMono.className)}>
                                {group.category}
                            </span>
                            <div className={styles.tags}>
                                {group.items.map((item) => (
                                    <span
                                        key={item}
                                        className={cn(
                                            styles.tag,
                                            fontMono.className,
                                            group.isAccent && styles.tagAccent
                                        )}
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
