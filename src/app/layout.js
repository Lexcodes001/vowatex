import { ThemeContextProvider } from "@/contexts/theme";
import { AlertContextProvider } from "@/contexts/alert-context";
import AlertBoxPortal from "@/components/alert-box/alert-box-portal";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import Toggle from "@/components/toggle/page";

const montserrat = localFont({
  src: "../../public/assets/fonts/Montserrat.ttf",
  variable: "--montserrat",
});

const montserratItalic = localFont({
  src: "../../public/assets/fonts/Montserrat-Italic.ttf",
  variable: "--montserrat-italic",
});

// const monteserrat = Montserrat({
//   subsets: ["latin"],
//   variable: "--font-monteserrat",
// });

export const metadata = {
  title: {
    template: "%s | Vowatex",
    default: "Vowatex",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script src="https://smtpjs.com/v3/smtp.js" />
      </head>
      <body className={`${montserrat.variable} ${montserratItalic.variable}`}>
        <AlertContextProvider>
          <ThemeContextProvider>
            <AlertBoxPortal />
            {children}
            <Toggle />
          </ThemeContextProvider>
        </AlertContextProvider>
      </body>
    </html>
  );
}
