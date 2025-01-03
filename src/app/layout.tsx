import type {Metadata} from 'next'
import './globals.css'
import Header from '@/app/shared/ui/header/header';
import Footer from '@/app/shared/ui/footer/footer';

export const metadata: Metadata = {
    title: 'Shopery',
    description: 'Shopery',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className="flex flex-col min-h-screen m-0 p-0">
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    )
}
