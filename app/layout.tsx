import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
    title: 'Srividhya Sridhar | Soft Solids, Fracture & Fractography',
    description:
        'Personal academic website of Srividhya Sridhar, Ph.D. candidate in Mechanical Science and Engineering at UIUC.',
    robots: {
        index: false,
        follow: false,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} overflow-x-hidden`}>
            <body className="flex min-h-screen flex-col overflow-x-hidden">
                <Navbar />
                <main className="relative z-0 flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
