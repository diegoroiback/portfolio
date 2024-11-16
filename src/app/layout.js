import "./reset.css";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const layoutStyles = {
  fontFamily: 'var(--font-poppins)',
};

export const metadata = {
  title: "Diego Zapata | Desarrollador front end",
  description: "Desarrollador frontend & diseñador",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={poppins.variable} style={layoutStyles}>
        {children}
      </body>
    </html>
  );
}
