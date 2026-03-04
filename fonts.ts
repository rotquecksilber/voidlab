import { Geist_Mono, Space_Grotesk } from "next/font/google";

export const fontSans = Space_Grotesk({
    subsets: ["latin"],
    display: "swap",
    weight: ["300", "400", "500", "600", "700"],
    variable: '--font-sans',
});

export const fontMono = Geist_Mono({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "700"],
    variable: '--font-mono',
});
