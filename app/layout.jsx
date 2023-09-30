import "./globals.css";
import Navbar from "@components/Navbar";
import UpperFooter from "@components/UpperFooter";
import LowerFooter from "@components/LowerFooter";

export const metadata = {
  title: "Trip Yaatra",
  description:
    "Website of Trip Yaatra where you get best packages for your trip",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="/assets/logo-new.png"
          type="image/x-icon"
        />
      </head>
      <body>
        {/* <Navbar /> */}
        {children}
        {/* <UpperFooter />
        <LowerFooter /> */}
      </body>
    </html>
  );
}
