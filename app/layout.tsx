export const metadata = {
  title: "Türkmeneli Haber",
  description: "Türkmeneli Haber Sitesi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
