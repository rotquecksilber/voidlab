
import "./globals.css";
import React from "react";

import {fontMono} from "@/fonts";


export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
      <body className={fontMono.className}>

      {children}
      </body>
      </html>
  );
}
