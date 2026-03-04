
import "./globals.css";
import React from "react";
import Logo from "@/components/ui/logo";
import cn from 'classnames';
import {fontMono, fontSans} from "@/fonts";


export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
      <body className={fontMono.className}>
      <Logo/>
      {children}
      </body>
      </html>
  );
}
