import { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowLeft, MapPin, Phone, Mail, Heart, MessageSquare, Home, Leaf } from 'lucide-react'
import ContactForm from './ContactForm'

interface ServicePageLayoutProps {
  title: string
  subtitle?: string
  children: ReactNode
}

const services = [
  { icon: Heart, title: 'טיפול זוגי', href: '/couple-therapy' },
  { icon: MessageSquare, title: 'גישור', href: '/gishor' },
  { icon: Home, title: 'הורות ומשפחה', href: '/parenthood' },
  { icon: Leaf, title: 'תמיכה לאחר לידה שקטה', href: '/quiet-birth' },
]

export default function ServicePageLayout({ title, subtitle, children }: ServicePageLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-bl from-primary-100 via-primary-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <Link href="/" className="inline-flex items-center gap-2 text-primary-600 mb-4 hover:gap-3 transition-all">
              <ArrowLeft className="w-4 h-4 rotate-180" />
              חזרה לדף הבית
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
            {subtitle && (
              <p className="text-xl text-gray-600">{subtitle}</p>
            )}
          </div>
        </div>
      </section>

      {/* Sidebar Navigation */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-bold text-gray-800 mb-4">מה אני עושה</h2>
          <div className="flex flex-wrap gap-3">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-primary-100 hover:text-primary-700 transition-colors"
              >
                <service.icon className="w-4 h-4" />
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                {children}
              </div>
            </div>

            <div className="space-y-8">
              <ContactForm />
              
              <div className="card bg-gradient-to-br from-primary-50 to-sage-50">
                <h3 className="text-xl font-bold text-gray-800 mb-4">פרטי התקשרות</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-primary-600" />
                    <span>עפרוני 5, להבים</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone className="w-5 h-5 text-primary-600" />
                    <span>התקשרו לקביעת פגישה</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Mail className="w-5 h-5 text-primary-600" />
                    <span>שלחו הודעה</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
