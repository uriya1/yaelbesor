import Link from 'next/link'
import { Facebook, Instagram, MapPin, Phone } from 'lucide-react'

const PHONE_NUMBER = '054-4843029'
const PHONE_NUMBER_WHATSAPP = '972544843029'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">יעל בשור</h3>
            <p className="text-gray-400 leading-relaxed mb-4 text-lg">
              מטפלת זוגית, משקמת יחסים ומגשרת. עוזרת לזוגות שהתרחקו להתחבר ולתקשר מחדש, 
              בחיים משותפים או בפרידה נכונה.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/coppia.yael/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
                aria-label="פייסבוק"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/yaelbesor"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-pink-600 transition-colors"
                aria-label="אינסטגרם"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/${PHONE_NUMBER_WHATSAPP}?text=שלום יעל, אשמח לקבוע פגישה`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-green-600 transition-colors"
                aria-label="וואטסאפ"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">קישורים מהירים</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/couple-therapy" className="text-gray-400 hover:text-white transition-colors">
                  טיפול זוגי
                </Link>
              </li>
              <li>
                <Link href="/gishor" className="text-gray-400 hover:text-white transition-colors">
                  גישור
                </Link>
              </li>
              <li>
                <Link href="/parenthood" className="text-gray-400 hover:text-white transition-colors">
                  הורות ומשפחה
                </Link>
              </li>
              <li>
                <Link href="/quiet-birth" className="text-gray-400 hover:text-white transition-colors">
                  תמיכה לאחר לידה שקטה
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  בלוג
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  שאלות נפוצות
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">צרו קשר</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span>עפרוני 5, להבים</span>
              </li>
              <li>
                <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <Phone className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  <span className="font-bold text-white">{PHONE_NUMBER}</span>
                </a>
              </li>
              <li>
                <a 
                  href={`https://wa.me/${PHONE_NUMBER_WHATSAPP}?text=שלום יעל, אשמח לקבוע פגישה`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>שלחו וואטסאפ</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} יעל בשור. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  )
}
