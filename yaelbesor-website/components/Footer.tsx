import Link from 'next/link'
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">יעל בשור</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              מטפלת זוגית, משקמת יחסים ומגשרת. עוזרת לזוגות שהתרחקו להתחבר ולתקשר מחדש, 
              בחיים משותפים או בפרידה נכונה.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/coppia.yael/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-primary-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/yaelbesor"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-primary-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
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
                <MapPin className="w-5 h-5 text-primary-500" />
                <span>עפרוני 5, להבים</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-5 h-5 text-primary-500" />
                <a href="tel:+972" className="hover:text-white transition-colors">
                  התקשרו עכשיו
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-5 h-5 text-primary-500" />
                <a href="mailto:info@yaelbesor.com" className="hover:text-white transition-colors">
                  שלחו הודעה
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
