import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, Tag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'חיבוק קיפוד | בלוג יעל בשור',
  description: 'על הקשר המורכב בין קרבה לריחוק בזוגיות, ואיך למצוא את האיזון הנכון',
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
                זוגיות
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                2024
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">חיבוק קיפוד</h1>
            
            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                בזוגיות יש מתח מתמיד בין הצורך בקרבה לבין הצורך בעצמאות. זה כמו שני קיפודים שרוצים 
                להתחמם אחד מהשני בלילה קר - אם הם מתקרבים מדי, הם דוקרים אחד את השני. 
                אם הם מתרחקים מדי, הם קרים.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">המתח בין קרבה לריחוק</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                כל אחד מאיתנו מגיע לזוגיות עם צרכים שונים. יש אנשים שצריכים יותר קרבה ואינטימיות, 
                ויש כאלה שצריכים יותר מרחב ועצמאות. הבעיה מתחילה כשהצרכים של בני הזוג לא תואמים.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                מי שצריך יותר קרבה עלול להרגיש נטוש או לא אהוב כשבן הזוג רוצה מרחב. 
                מי שצריך יותר עצמאות עלול להרגיש חנוק או נשלט כשבן הזוג דורש קרבה.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">איך מוצאים את האיזון?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                <strong>1. תקשורת פתוחה</strong> - חשוב לדבר על הצרכים שלכם בצורה ברורה ולא שיפוטית. 
                במקום להאשים (&ldquo;אתה תמיד רחוק&rdquo;), לדבר על הצורך (&ldquo;אני צריכה יותר זמן איכות ביחד&rdquo;).
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                <strong>2. הבנה הדדית</strong> - לנסות להבין מאיפה הצורך של בן הזוג מגיע. 
                לפעמים הצורך בריחוק הוא לא דחייה, אלא פשוט דרך להטעין מצברים.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                <strong>3. פשרות יצירתיות</strong> - לא חייבים לבחור בין קרבה מוחלטת לריחוק מוחלט. 
                אפשר למצוא דרכים יצירתיות שנותנות לשניכם מה שאתם צריכים.
              </p>
              
              <div className="bg-primary-50 p-6 rounded-xl border-r-4 border-primary-500 my-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>זכרו:</strong> זוגיות טובה היא לא כשאין בעיות, אלא כשיודעים לדבר על הבעיות 
                  ולמצוא פתרונות ביחד.
                </p>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">מתי לפנות לעזרה מקצועית?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                אם אתם מרגישים שאתם תקועים בדפוס חוזר של קרבה-ריחוק שמתיש אתכם, 
                או שהתקשורת ביניכם נעשתה קשה - זה הזמן לפנות לעזרה מקצועית.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                בטיפול זוגי אנחנו יכולים לזהות את הדפוסים, להבין מאיפה הם מגיעים, 
                ולמצוא דרכים חדשות להתחבר אחד לשני.
              </p>
            </div>
            
            {/* CTA */}
            <div className="mt-12 p-8 bg-primary-600 text-white rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4">רוצים לשפר את הזוגיות שלכם?</h3>
              <p className="text-primary-200 mb-6 text-lg">אשמח לעזור לכם למצוא את האיזון הנכון</p>
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
