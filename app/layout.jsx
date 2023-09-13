import "./globals.css";

export const metadata = {
  title: "Trip Yaatra",
  description:
    "Website of Trip Yaatra where you get best packages for your trip",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
