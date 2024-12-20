import Footer from './components/Footer';
import Navbar from './components/Navbar/Navbar';
import './globals.css';
import { Poppins as PoppinsFont } from 'next/font/google'; // Rename the imported font

const Poppins = PoppinsFont({ subsets: ['latin'], weight: '200' }); // Use a different name for the font object

export const metadata = {
  title: 'WeHire Group',
  description: 'Recruiting firm',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={Poppins.className}>
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
