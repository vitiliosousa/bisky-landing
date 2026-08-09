import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const body = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#e63e5c",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Bisky | Gestão da sua confeitaria",
  description:
    "Pedidos, stock, custos e caixa num só lugar. O sistema feito para confeitarias que querem organizar o negócio e lucrar com clareza.",
  openGraph: {
    title: "Bisky | Gestão da sua confeitaria",
    description:
      "Pare de gerir a confeitaria no WhatsApp e no caderno. Com o Bisky, pedidos, stock e lucros ficam sob controlo.",
    locale: "pt",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt" className={`${body.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans bg-page text-ink" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
