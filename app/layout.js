import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/footer";
import Script from "next/script";

const avenue = localFont({
  src: "./font/Avenue.otf",
  display: "swap",
  variable: "--font-avenue",
});

export const metadata = {
  title: "Hi, I'm Michael",
  description: "It manager who believes in an inclusive and accessible web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <Script
          defer
          data-domain="ilboga.dev"
          src="https://plausible.io/js/script.js"
        ></Script>
      </head>
      <body
        className={`${avenue.variable} antialiased container mx-auto px-4 py-8 `}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
