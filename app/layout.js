import localFont from 'next/font/local';
// import './globals.css';
import '@/app/_styles/globals.css';

import {Josefin_Sans} from 'next/font/google';
import Header from './_components/Header';

const josefin = Josefin_Sans({subsets: ['latin'], display: 'swap'});

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// });

export const metadata = {
  // title: 'The Wild Oasis',
  title: {
    template: '%s - The Wild Oasis',
    default: 'Welcome - The Wild Oasis',
  },
  description:
    'Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests',
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col antialiased bg-primary-950 text-primary-100 relative min-h-screen ${josefin.className}`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto  w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
