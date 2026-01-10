'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'

const menuItems = [
  { label: 'בית', href: '/' },
  { label: 'אודות', href: '/#about' },
  {
    label: 'מה אני עושה',
    href: '#',
    submenu: [
      { label: 'טיפול זוגי', href: '/couple-therapy' },
      { label: 'גישור', href: '/gishor' },
      { label: 'הורות ומשפחה', href: '/parenthood' },
      { label: 'תמיכה לאחר לידה שקטה', href: '/quiet-birth' },
    ]
  },
  { label: 'שאלות נפוצות', href: '/faq' },
  { label: 'צרו קשר', href: '/#contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-40 h-12">
              <Image
                src="/images/logo.png"
                alt="יעל בשור"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.submenu ? (
                  <>
                    <button
                      className="flex items-center gap-1 text-gray-700 hover:text-primary-600 transition-colors font-medium"
                      onMouseEnter={() => setActiveSubmenu(item.label)}
                      onMouseLeave={() => setActiveSubmenu(null)}
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div
                      className={`absolute top-full right-0 mt-2 bg-white rounded-xl shadow-lg py-2 min-w-[200px] transition-all duration-200 ${
                        activeSubmenu === item.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                      }`}
                      onMouseEnter={() => setActiveSubmenu(item.label)}
                      onMouseLeave={() => setActiveSubmenu(null)}
                    >
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.label}
                          href={subitem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="/#contact"
            className="hidden md:block btn-primary"
          >
            קביעת פגישה
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            {menuItems.map((item) => (
              <div key={item.label}>
                {item.submenu ? (
                  <div className="py-2">
                    <button
                      className="flex items-center justify-between w-full text-gray-700 font-medium"
                      onClick={() => setActiveSubmenu(activeSubmenu === item.label ? null : item.label)}
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeSubmenu === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {activeSubmenu === item.label && (
                      <div className="mt-2 mr-4 space-y-2">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.label}
                            href={subitem.href}
                            className="block py-2 text-gray-600 hover:text-primary-600"
                            onClick={() => setIsOpen(false)}
                          >
                            {subitem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-2 text-gray-700 font-medium hover:text-primary-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/#contact"
              className="block mt-4 btn-primary text-center"
              onClick={() => setIsOpen(false)}
            >
              קביעת פגישה
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
