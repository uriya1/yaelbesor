import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, Tag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'אתגר התינוק | בלוג יעל בשור',
  description: 'איך לשמור על הזוגיות אחרי לידת תינוק ולהתמודד עם האתגרים החדשים',
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
                הורות
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                2024
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">אתגר התינוק</h1>
            
            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                לידה של תינוק חדש זה אחד האתגרים הכי משמעותיים לזוגיות. הכל משתנה - 
                השינה, הזמן הפנוי, סדר העדיפויות, ואפילו מי אנחנו.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">למה זה כל כך קשה?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                תינוק דורש תשומת לב 24/7. פתאום אין זמן לזוגיות, לשיחות, לקרבה. 
                ההורמונים משתוללים, העייפות מתישה, והתסכול גובר.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                האישה עוברת שינויים פיזיים ורגשיים עצומים. הגבר מרגיש לפעמים נדחק הצידה. 
                שניהם לומדים תפקיד חדש - הורות - ולא תמיד יש מדריך.
              </p>
              
              <div className="bg-primary-50 p-6 rounded-xl border-r-4 border-primary-500 my-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>חשוב לדעת:</strong> המשבר הזה הוא נורמלי! רוב הזוגות עוברים אותו. 
                  השאלה היא איך מתמודדים ומה עושים כדי לשמור על הזוגיות.
                </p>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">טיפים לשמירה על הזוגיות</h2>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                <strong>לדבר על קשיים ולדבר על צרכים</strong> - לסדר לעצמכם מה כל אחד הכי 
                צריך עכשיו ולבקש שהשני יעזור עם הצורך.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                <strong>לדאוג שלכל אחד יהיה זמן עם עצמו</strong> - גם אם זה רק חצי שעה. 
                ההורה שלא עם התינוק יכול לנוח, להתקלח בשקט, או פשוט לשבת.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                <strong>לא לשכוח את הזמן של ביחד</strong> - על כוס קפה או כוס יין, הליכה 
                קצרה אפילו עם העגלה אבל בשביל לדבר ביניכם. לאכול ביחד ארוחה.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                <strong>לבקש עזרה</strong> - וזו לא בושה! ממשפחה, מחברים, או עזרה בתשלום. 
                להיות הורה טוב זה גם לדעת לבקש עזרה.
              </p>
              
              <div className="bg-sage-50 p-6 rounded-xl my-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3">שירות &ldquo;אני רק שאלה&rdquo;</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  לא תמיד צריך טיפול ארוך. לפעמים מספיקה שיחה קצרה וממוקדת. 
                  יש לי שירות ייעוץ בטלפון או בשיחת וידאו - עד 20 דקות לפתירת בעיות קטנות.
                </p>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">מתי לפנות לעזרה?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                אם התחושה של ריחוק נמשכת, אם יש הרבה מריבות, אם מישהו מרגיש בודד או לא נראה - 
                שווה לבדוק עם מטפלת זוגית. לפעמים כמה פגישות יכולות לעשות שינוי גדול.
              </p>
            </div>
            
            {/* CTA */}
            <div className="mt-12 p-8 bg-primary-600 text-white rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4">צריכים עזרה בזוגיות אחרי לידה?</h3>
              <p className="text-primary-200 mb-6 text-lg">אשמח לעזור לכם לעבור את התקופה הזו ביחד</p>
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
