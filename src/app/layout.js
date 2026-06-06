import { Roboto } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import BlobCursor from "./components/BlobCursor";

const roboto = Roboto({
  weight: '400',
  subsets: ["latin"],
});

export const metadata = {
  title: "Deynyel"
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${roboto.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <BlobCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
