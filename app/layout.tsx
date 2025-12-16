import Footer from "@/component/layout/Footer";
import MainNavbar from "@/component/layout/MainNavbar";
import ScrollToTop from "@/component/shared/ScrollToTop";
import { CartProvider } from "@/context/CartContext";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://gyne-clinics-website.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <CartProvider>
          <MainNavbar />
          {children}
          <ScrollToTop />
          <Footer />
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: "#ffffff",
                color: "#111827", // Tailwind gray-900
                border: "1px solid #e5e7eb", // gray-200
              },
              success: {
                duration: 3000,
                iconTheme: {
                  primary: "#22c55e", // green-500
                  secondary: "#ffffff",
                },
              },
              error: {
                duration: 4000,
                iconTheme: {
                  primary: "#ef4444", // red-500
                  secondary: "#ffffff",
                },
              },
            }}
          />
        </CartProvider>
      </body>
    </html>
  );
}
