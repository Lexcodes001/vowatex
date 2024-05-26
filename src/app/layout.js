import { ThemeContextProvider } from "@/contexts/theme";
import localFont from "next/font/local";
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
      <body className={`${montserrat.variable} ${montserratItalic.variable}`}>
        <ThemeContextProvider>
          {children}
          <Toggle />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
