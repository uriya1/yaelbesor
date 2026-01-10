import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, Tag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'לא טוב ביננו | בלוג יעל בשור',
  description: 'מה לעשות כשמרגישים שהקשר לא עובד? סימנים למשבר בזוגיות ודרכים להתמודד',
}

export default function BlogPost() {
  return (
    <>
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary-600 mb-6 hover:gap-3 transition-all">
              <ArrowLeft className="w-4 h-4 rotate-180" />
              חזרה לבלוג
            </Link>
            
            <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Tag className="w-4 h-4" />
                זוגיות במשבר
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                2024
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">לא טוב ביננו</h1>
            
            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                &ldquo;לא טוב ביננו&rdquo; - זה משפט שאנשים רבים אומרים לעצמם או לחברים קרובים. 
                אבל מה בעצם עומד מאחורי התחושה הזו? ומה אפשר לעשות?
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">סימנים שמשהו לא בסדר</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                לפעמים קשה לזהות שהזוגיות נמצאת במשבר. הנה כמה סימנים שכדאי לשים לב אליהם:
              </p>
              
              <ul className="text-lg text-gray-600 leading-relaxed mb-6 space-y-2">
                <li>אתם מרגישים יותר כמו שותפים לדירה מאשר זוג</li>
                <li>השיחות ביניכם הפכו לעניינים טכניים בלבד</li>
                <li>אין לכם רצון או אנרגיה לפתור קונפליקטים</li>
                <li>אתם מרגישים בודדים גם כשאתם ביחד</li>
                <li>אתם נמנעים מקרבה פיזית ורגשית</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">למה זה קורה?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                זוגיות היא כמו צמח - היא צריכה טיפול והשקיה. כשאנחנו עסוקים בחיים, בעבודה, 
                בילדים, בבעיות כספיות - הזוגיות נדחקת לפינה.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                בהתחלה זה לא מורגש. אבל עם הזמן, הריחוק גדל. הפערים שלא נסגרו הופכים לתהום. 
                והמשפט &ldquo;לא טוב ביננו&rdquo; הופך למציאות.
              </p>
              
              <div className="bg-sage-50 p-6 rounded-xl my-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3">החדשות הטובות</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  רוב הזוגות שמגיעים אליי במצב הזה יכולים לשקם את הקשר. הדבר החשוב הוא 
                  <strong> לזהות את הבעיה ולפעול</strong> - ולא להמתין שהדברים יסתדרו מעצמם.
                </p>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">מה אפשר לעשות?</h2>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                <strong>1. להכיר בבעיה</strong> - הצעד הראשון הוא להפסיק להתעלם. 
                אם אתם מרגישים ש&ldquo;לא טוב ביננו&rdquo; - כנראה שיש משהו שדורש טיפול.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                <strong>2. לדבר על זה</strong> - לא להאשים, אלא לשתף: &ldquo;אני מרגישה שאנחנו 
                רחוקים לאחרונה ואני רוצה שנחזור להיות קרובים&rdquo;.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                <strong>3. לקחת אחריות</strong> - לא לחכות שהשני ישתנה. לשאול את עצמכם 
                מה אתם יכולים לעשות אחרת.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                <strong>4. לפנות לעזרה</strong> - אם לא מצליחים לבד, טיפול זוגי יכול לעזור. 
                זה לא סימן לכישלון - זה סימן שאכפת לכם.
              </p>
              
              <div className="bg-primary-50 p-6 rounded-xl border-r-4 border-primary-500 my-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>זכרו:</strong> אין סיבה לחיות בקושי עם האדם היחיד במשפחה שבחרתם 
                  במודע להיות איתו. שווה להשקיע בזוגיות.
                </p>
              </div>
            </div>
            
            {/* CTA */}
            <div className="mt-12 p-8 bg-primary-600 text-white rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4">מרגישים ש&ldquo;לא טוב ביניכם&rdquo;?</h3>
              <p className="text-primary-200 mb-6 text-lg">אשמח לעזור לכם לשקם את הקשר</p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors"
              >
                צרו קשר
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
