import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'יעל בשור | מטפלת זוגית, משקמת יחסים ומגשרת',
  description: 'יעל בשור, טיפול זוגי, שיקום יחסים וגישור. עוזרת לזוגות להתחבר ולתקשר, בחיים משותפים או בפרידה נכונה. טיפול זוגי בדרום ובשפלה',
  keywords: 'טיפול זוגי, גישור, הורות, משפחה, יעל בשור, טיפול זוגי בדרום, טיפול זוגי בשפלה',
  openGraph: {
    title: 'יעל בשור | מטפלת זוגית, משקמת יחסים ומגשרת',
    description: 'עוזרת לזוגות שהתרחקו להתחבר ולתקשר מחדש, בחיים משותפים או בפרידה נכונה',
    locale: 'he_IL',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
