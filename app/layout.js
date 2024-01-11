import "./globals.css";

export const metadata = {
  title: "Dcorps",
  description: "Portfolio Devlopper web full stack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <link
        rel="shortcut icon"
        href="./Github_image/dcorp.png"
        type="image/x-icon"
      />
      <body>{children}</body>
    </html>
  );
}
