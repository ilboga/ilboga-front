import localFont from "next/font/local";
import "./globals.css";

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
      <body
        className={`${avenue.variable} antialiased container mx-auto px-4 py-8`}
      >
        {children}
      </body>
    </html>
  );
}
