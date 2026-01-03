// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReduxProvider from "./provider/ReduxProvider";
import WidthListener from "./components/WidthListener";
import ClientLayout from "./components/ClientLayout";
import { Raleway, Playfair, Noto_Serif_Display } from "next/font/google";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const notoSerifDisplay = Noto_Serif_Display({
  subsets: ["latin"],
  variable: "--font-noto-serif-display",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "fredrick fashion icon",
  description: "Where style meets elegance - Fredrick Fashion Icon",
  icons: {
    icon: "/darklogo.png",
  },
  openGraph: {
    title: "fredrick fashion icon",
    description: "Where style meets elegance - Fredrick Fashion Icon",
    // url: "https://www.fredrickfashionicon.com/",
    siteName: "fredrick fashion icon",
    images: [
      {
        url: "/darklogo.png",
        width: 800,
        height: 600,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "fredrick fashion icon",
    description: "Where style meets elegance - Fredrick Fashion Icon",
    images: ["/darklogo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${playfair.variable} ${notoSerifDisplay.variable} antialiased`}
      >
        <ReduxProvider>
          <WidthListener />
          <ClientLayout>{children}</ClientLayout>
        </ReduxProvider>
      </body>
    </html>
  );
}
