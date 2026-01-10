import { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowLeft, MapPin, Phone, Heart, MessageSquare, Home, Leaf } from 'lucide-react'
import ContactForm from './ContactForm'
import WhatsAppButton from './WhatsAppButton'

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

const PHONE_NUMBER = '052-2787807'
const PHONE_NUMBER_WHATSAPP = '972522787807'

export default function ServicePageLayout({ title, subtitle, children }: ServicePageLayoutProps) {
  return (
    <>
      <WhatsAppButton phoneNumber={PHONE_NUMBER_WHATSAPP} />
      
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
              <p className="text-xl md:text-2xl text-gray-600">{subtitle}</p>
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
              <div className="prose prose-lg prose-gray max-w-none text-lg md:text-xl leading-relaxed">
                {children}
              </div>
            </div>

            <div className="space-y-8">
              <ContactForm />
              
              <div className="card bg-gradient-to-br from-primary-50 to-sage-50">
                <h3 className="text-xl font-bold text-gray-800 mb-4">פרטי התקשרות</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span className="text-lg">עפרוני 5, להבים</span>
                  </div>
                  <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-3 text-primary-600 hover:text-primary-700 transition-colors">
                    <Phone className="w-5 h-5 flex-shrink-0" />
                    <span className="text-lg font-bold">{PHONE_NUMBER}</span>
                  </a>
                  <a 
                    href={`https://wa.me/${PHONE_NUMBER_WHATSAPP}?text=שלום יעל, אשמח לקבוע פגישה`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-green-600 hover:text-green-700 transition-colors"
                  >
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span className="text-lg font-medium">וואטסאפ</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
