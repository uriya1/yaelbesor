'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQ {
  question: string
  answer: string
}

interface FAQAccordionProps {
  faqs: FAQ[]
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
        >
          <button
            className="w-full px-6 py-5 text-right flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="text-lg font-medium text-gray-800">{faq.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-primary-600 transition-transform flex-shrink-0 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-[1000px]' : 'max-h-0'
            }`}
          >
            <div className="px-6 pb-5 pt-0">
              <div className="border-t border-gray-100 pt-4">
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
