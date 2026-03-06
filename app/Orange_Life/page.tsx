import React from 'react';
import styles from './page.module.css';

export default function VoidLabEmail() {
    return (
        <div className={styles.emailWrapper}>
            {/* Meta Strip */}
            <div className={styles.metaStrip}>
                <span className={styles.docId}>DOC // VL-2026-03 // CONFIDENTIAL_BRIEF</span>
                <span className={styles.docTag}>АНАЛИТИЧЕСКАЯ ЗАПИСКА</span>
            </div>

            {/* Header */}
            <div className={styles.headerBlock}>
                <div className={styles.senderInfo}>
                    <div className={styles.senderLogo}>
                       <a href="https://voidlab.vercel.app"> VOID<span>LAB</span>_</a>
                    </div>
                    <div className={styles.senderMeta}>
                        <p>
                            FROM // <a href="https://voidlab.vercel.app" className={styles.urlLink}>
                            VoidLab_
                        </a>
                        </p>
                        <p>
                            WEB&nbsp;&nbsp;//{' '}
                            <a href="https://voidlab.vercel.app" className={styles.urlLink}>
                                voidlab.vercel.app
                            </a>
                        </p>
                        <p>DATE // МАРТ 2026</p>
                    </div>
                </div>

                <div className={styles.addressGrid}>
                    <div className={styles.addressCell}>
                        <div className={styles.label}>Кому</div>
                        <div className={styles.value}>Orange.Life</div>
                        <div className={styles.subValue}>
                            Руководству / Директору по цифровым продуктам
                        </div>
                    </div>
                    <div className={styles.addressCell}>
                        <div className={styles.label}>Тема</div>
                        <div className={styles.value}>Аудит цифровой экосистемы</div>
                        <div className={styles.subValue}>
                            orange.life — диагностика точек потери конверсии
                        </div>
                    </div>
                </div>

                <div className={styles.subjectBlock}>
                    <span className={styles.subjectLabel}>Заголовок документа</span>
                    <h1>
                        Цифровой фасад на $220 млн:<br />
                        <span className={styles.highlight}>где теряются клиенты</span> до первого
                        звонка
                    </h1>
                </div>
            </div>

            {/* Introduction */}
            <div className={styles.section}>
                <div className={styles.sectionLabel}>01 // Контекст обращения</div>

                <p>
                    Мы в <strong>VoidLab_</strong> регулярно проводим мониторинг цифровых
                    экосистем инвестиционных компаний с портфелем свыше $100 млн — анализируем
                    точки конверсионного трения, техническую архитектуру и соответствие
                    визуального кода статусу активов.
                </p>
                <p>
                    <strong>Orange.Life</strong> попал в наш фокус как компания с выдающимися
                    фундаментальными показателями: три страны присутствия, портфель $220 млн,
                    250 000 м² под управлением, доходность &gt;10% по рублёвым проектам. Это
                    позиционирование уровня top-tier частного инвестиционного оператора.
                </p>
                <p>
                    Однако цифровой продукт — сайт orange.life — не отражает этот масштаб. Ниже
                    — конкретные данные и наблюдения из нашего экспресс-аудита, которые мы
                    готовы превратить в план действий.
                </p>
            </div>

            {/* Divider */}
            <div className={styles.gradientDivider}></div>

            {/* Analysis Block 1 */}
            <div className={styles.analysisBlock}>
                <span className={styles.blockNumber}>01 / 03</span>

                <div className={styles.blockHeader}>
                    <div className={`${styles.blockAccentLine} ${styles.purpleLine}`}></div>
                    <div className={styles.blockTitleWrap}>
                        <div className={`${styles.blockCategory} ${styles.purple}`}>
                            ВИЗУАЛЬНАЯ АРХИТЕКТУРА // ПРОБЛЕМА
                        </div>
                        <div className={styles.blockTitle}>
                            «Экстра-современность» — несоответствие визуального кода
                        </div>
                    </div>
                </div>

                <div className={styles.analysisBody}>
                    <p>
                        Текущий визуальный язык сайта — тёмный фон, оранжевые акценты, баннерные
                        слайдеры с кнопками «Смотреть все объекты» — это типичная эстетика
                        риэлторских платформ образца <strong>2016–2018 гг.</strong> Она была
                        стандартом, когда продавали квартиры через Avito. Сегодня она
                        ассоциируется не с инвестиционным партнёром класса premium, а с
                        агрегатором вторичного жилья.
                    </p>

                    <div className={styles.quoteInset}>
                        <p>
                            Инвестор, рассматривающий вложение от $50 000, принимает решение о
                            доверии в первые 4–7 секунд визуального контакта с брендом. Дизайн —
                            это не эстетика. Это первичный сигнал надёжности.
                        </p>
                    </div>

                    <ul className={`${styles.issueList} ${styles.purple}`}>
                        <li>
                            Визуальная иерархия не выстроена — статус $220M-портфеля не считывается
                            с первого экрана
                        </li>
                        <li>
                            Типографика не дифференцирована: заголовки и текст в одном регистре,
                            нет «якорных» метрик
                        </li>
                        <li>
                            Отсутствует единая дизайн-система — каждая страница выглядит как
                            отдельный модуль без связи
                        </li>
                        <li>
                            Цветовой код (оранжевый + тёмный) не коррелирует с психологией доверия
                            к инвестиционным продуктам
                        </li>
                        <li>
                            Конкуренты в сегменте ОАЭ (Dubai Hills, EMAAR, местные PropTech)
                            задали визуальную планку — сравнение не в пользу orange.life
                        </li>
                    </ul>

                    <div className={styles.dataRow}>
                        <span className={styles.dataKey}>Целевая аудитория (инвесторы)</span>
                        <span className={styles.dataVal}>
              Ожидает: архитектурная строгость, данные, доверие
            </span>
                        <span className={styles.dataNote}>GAP ↑</span>
                    </div>
                    <div className={styles.dataRow}>
                        <span className={styles.dataKey}>Текущий визуальный сигнал</span>
                        <span className={styles.dataVal}>
              Считывается как: масс-маркет недвижимость
            </span>
                        <span className={styles.dataNote}>CRITICAL</span>
                    </div>
                </div>
            </div>

            {/* Analysis Block 2 */}
            <div className={styles.analysisBlock}>
                <span className={styles.blockNumber}>02 / 03</span>

                <div className={styles.blockHeader}>
                    <div className={`${styles.blockAccentLine} ${styles.blueLine}`}></div>
                    <div className={styles.blockTitleWrap}>
                        <div className={`${styles.blockCategory} ${styles.blue}`}>
                            ТЕХНИЧЕСКАЯ АРХИТЕКТУРА // ПРОБЛЕМА
                        </div>
                        <div className={styles.blockTitle}>
                            «Стабильность» — технический долг и скорость загрузки
                        </div>
                    </div>
                </div>

                <div className={styles.analysisBody}>
                    <p>
                        Скорость и технологическая чистота сайта — это не «под капотом» вопрос.
                        Это прямая потеря дохода. По данным Google/Deloitte,{' '}
                        <strong>каждые 100 мс задержки снижают конверсию на 7%</strong>. При
                        инвестиционных чеках — это стоимость сделки.
                    </p>

                    <div className={styles.metricRow}>
                        <div className={styles.metricCard}>
                            <div className={styles.metricLabel}>PageSpeed (mobile)</div>
                            <div className={`${styles.metricValue} ${styles.critical}`}>~38–45</div>
                            <div className={styles.metricDesc}>// НИЖЕ ПОРОГА</div>
                        </div>
                        <div className={styles.metricCard}>
                            <div className={styles.metricLabel}>LCP (Largest Contentful Paint)</div>
                            <div className={`${styles.metricValue} ${styles.warning}`}>&gt;3.8s</div>
                            <div className={styles.metricDesc}>// НОРМА: &lt;2.5s</div>
                        </div>
                        <div className={styles.metricCard}>
                            <div className={styles.metricLabel}>Технический стек</div>
                            <div className={styles.metricValue} style={{ fontSize: '14px' }}>
                                Legacy CMS
                            </div>
                            <div className={styles.metricDesc}>// БЕЗ ОПТИМИЗАЦИИ</div>
                        </div>
                    </div>

                    <ul className={`${styles.issueList} ${styles.blue}`}>
                        <li>
                            Тяжёлые неоптимизированные изображения объектов — основной источник
                            задержки загрузки на мобильных
                        </li>
                        <li>
                            Отсутствие современного lazy-loading и прогрессивной загрузки контента
                        </li>
                        <li>
                            Слайдер-карусели как основной элемент навигации по объектам —
                            устаревший паттерн с высоким отказом
                        </li>
                        <li>
                            Нет PWA-оптимизации — инвестор, открывший сайт с телефона в Дубае,
                            получает деградированный опыт
                        </li>
                        <li>
                            SEO-структура не выстроена под международный трафик (UAE / EN-рынок)
                        </li>
                    </ul>

                    <div className={`${styles.quoteInset} ${styles.blueQuote}`}>
                        <p>
                            Технический долг накапливается тихо. Но рано или поздно он
                            конвертируется в потерянные лиды — пока сайт грузится, инвестор уже
                            смотрит на следующую вкладку конкурента.
                        </p>
                    </div>
                </div>
            </div>

            {/* Analysis Block 3 */}
            <div className={styles.analysisBlock}>
                <span className={styles.blockNumber}>03 / 03</span>

                <div className={styles.blockHeader}>
                    <div className={`${styles.blockAccentLine} ${styles.tealLine}`}></div>
                    <div className={styles.blockTitleWrap}>
                        <div className={`${styles.blockCategory} ${styles.teal}`}>
                            UX / КОНВЕРСИЯ // ПРОБЛЕМА
                        </div>
                        <div className={styles.blockTitle}>
                            «Бизнес-эффективность» — трение в пути клиента
                        </div>
                    </div>
                </div>

                <div className={styles.analysisBody}>
                    <p>
                        Конверсия — это не цифра в отчёте. Это сумма всех микрорешений, которые
                        принимает посетитель на пути к первому контакту. На текущем сайте этот
                        путь содержит <strong>критические точки трения</strong>, которые
                        уничтожают потенциальный ROI с каждого визита.
                    </p>

                    <ul className={`${styles.issueList} ${styles.teal}`}>
                        <li>
                            CTA-кнопки не приоритизированы по воронке — «Смотреть объекты» и
                            «Оставить заявку» имеют равный визуальный вес
                        </li>
                        <li>
                            Нет инвестиционного калькулятора или интерактивного инструмента расчёта
                            доходности — ключевой якорный элемент для принятия решения
                        </li>
                        <li>
                            Карточки объектов не раскрывают инвестиционный нарратив: только «юниты»
                            и «категории» без контекста доходности
                        </li>
                        <li>
                            Отсутствие раздела «Социальное доказательство» — кейсы инвесторов,
                            цифровые результаты сделок, «история успеха»
                        </li>
                        <li>
                            Форма обратной связи — примитивная, без квалификационных вопросов, не
                            сегментирует лиды по сумме входа
                        </li>
                        <li>
                            Мобильная версия не адаптирована под инвестиционный путь: вся структура
                            — упрощённая копия десктопа
                        </li>
                    </ul>

                    <div className={styles.metricRow}>
                        <div className={styles.metricCard}>
                            <div className={styles.metricLabel}>Avg. Bounce Rate (оценочно)</div>
                            <div className={`${styles.metricValue} ${styles.critical}`}>
                                ~65–72%
                            </div>
                            <div className={styles.metricDesc}>// ВЫСОКИЙ</div>
                        </div>
                        <div className={styles.metricCard}>
                            <div className={styles.metricLabel}>Точек сбора контакта</div>
                            <div className={`${styles.metricValue} ${styles.warning}`}>1–2</div>
                            <div className={styles.metricDesc}>// НОРМА: 5–7</div>
                        </div>
                        <div className={styles.metricCard}>
                            <div className={styles.metricLabel}>Интерактивных модулей</div>
                            <div className={`${styles.metricValue} ${styles.critical}`}>0</div>
                            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                            <div className={styles.metricDesc}>// НУЖНО: &gt;3</div>
                        </div>
                    </div>

                    <div className={`${styles.quoteInset} ${styles.tealQuote}`}>
                        <p>
                            Если инвестор не получил ответа на вопрос «почему сейчас и почему вы»
                            за первые 90 секунд сессии — он не перезвонит. Он найдёт того, кто
                            ответил раньше.
                        </p>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className={styles.gradientDivider}></div>

            {/* CTA Block */}
            <div className={styles.ctaBlock}>
                <div className={styles.ctaIntro}>04 // Предложение VoidLab_</div>
                <h2>
                    Перезапуск цифрового фасада<br/>
                    под ваш реальный масштаб
                </h2>

                <p>
                    Мы не продаём аудиты. Мы делаем продукт. Опираясь на все описанные выше проблемы,
                    мы готовы предложить <strong>полный редизайн и пересборку сайта orange.life</strong> —
                    с современной архитектурой, инвестиционным UX и визуальным кодом, который работает на доверие.
                </p>
                <p>
                    Результат — не отчёт, а работающий сайт, где каждый элемент работает на конверсию:
                    от первого экрана до формы заявки. Мы берём на себя дизайн, разработку и техническую
                    оптимизацию. Вы получаете цифровой продукт, который соответствует статусу ваших активов.
                </p>


                <div className={styles.ctaActions}>

                    <a href="https://voidlab.vercel.app" className={styles.btnSecondary}>
                        voidlab.vercel.app →
                    </a>
                    <br/>
                    <a href="https://t.me/void_laboratory" className={styles.btnSecondary}>
                        Телеграм
                    </a>
                </div>
            </div>

            {/* Footer */}
            <div className={styles.footerBlock}>
                <div className={styles.footerBrand}>
                    <span>VOID</span>LAB_ // 2026
                </div>
                <div className={styles.footerLinks}>

                </div>
            </div>
        </div>
    );
};


