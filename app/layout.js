import { Inter } from 'next/font/google';
import './globals.css';
import ToasterContext from '@/app/_context/ToasterContext';
import AuthContext from './_context/AuthContext';
import ActiveStatus from './_components/ActiveStatus';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Messenger Clone',
  description: 'Chat with Anyone in the World',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <ToasterContext />
          <ActiveStatus />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
