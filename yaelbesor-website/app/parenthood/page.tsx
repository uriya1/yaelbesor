import { Metadata } from 'next'
import Link from 'next/link'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'הורות ומשפחה | יעל בשור',
  description: 'טיפול בנושאים הקשורים לזוגיות, הורות ומשפחה. זוגיות אחרי לידה, זוגיות צעירה והכנסת בני זוג חדשים למשפחה',
}

export default function ParenthoodPage() {
  return (
    <ServicePageLayout 
      title="הורות ומשפחה" 
      subtitle="טיפול בנושאים הקשורים לזוגיות, הורות ומשפחה"
    >
      <div className="space-y-10">
        {/* זוגיות אחרי לידה */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <span className="w-2 h-8 bg-primary-500 rounded-full"></span>
            זוגיות אחרי לידה
          </h2>
          
          <p className="text-gray-700 leading-relaxed">
            לידה של <strong>תינוק חדש</strong> זה אחד האתגרים הכי משמעותיים לזוגיות שלכם, 
            החל משלב ההחלטה והכניסה להריון, דרך כל תקופת ההריון, הגוף המשתנה, ההורמונים המשתוללים 
            והחששות וההתרגשות המלווים אותו וכלה בלידה של תינוק שהופך לגמרי את כל מה שידעתם 
            על עצמכם עד עכשיו.
          </p>

          <p className="text-gray-700 leading-relaxed">
            אחרי לידה אחד הדברים האחרונים שיש לכם ברשימת סדרי העדיפות זה ה
            <strong>זוגיות</strong> שלכם ועם זאת, זה נושא שכדאי לשים לב אליו ולטפל בו. 
            מצד שני, אחרי לידה, יש תינוק, יש המון דברים לעשות, אין מספיק זמן.
          </p>

          <div className="bg-sage-50 p-6 rounded-xl">
            <h3 className="text-lg font-bold text-gray-800 mb-3">שירות &ldquo;אני רק שאלה&rdquo;</h3>
            <p className="text-gray-700">
              רוב הזוגות מניחים את הזוגיות שלהם בצד. גם קשה להגיע לטיפול עם התינוק. 
              בעצם, לא בטוח שצריך טיפול. ואולי כן? אז לא צריך להתלבט יותר - 
              יש שירות ייעוץ בטלפון או בשיחת וידאו שבו ניתן לערוך שיחה ממוקדת עד 20 דקות לפתירת בעיות קטנות.
            </p>
          </div>
        </div>

        {/* זוגיות צעירה */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <span className="w-2 h-8 bg-primary-500 rounded-full"></span>
            זוגיות צעירה
          </h2>
          
          <p className="text-gray-700 leading-relaxed">
            מאחר וזוגיות מאוד מעניינת אותי, חשבתי שיש מקום להתחיל לטפל בזוגיות בתחילתה. 
            זוגות רבים מגיעים לטיפול כשהמצב כבר קשה ומתסכל וחבל.
          </p>

          <div className="bg-primary-50 p-6 rounded-xl border-r-4 border-primary-500">
            <p className="text-gray-700">
              הרבה פעמים עדיף להגיע לכמה שיחות <strong>בתחילת הקשר</strong> כדי לשפר אותו, 
              ללמוד תקשורת טובה, הקשבה ודרכים להביע את עצמכם כך שהשני יוכל באמת להקשיב.
            </p>
          </div>
        </div>

        {/* הכנסת בני זוג למשפחה */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <span className="w-2 h-8 bg-primary-500 rounded-full"></span>
            הכנסת בני זוג חדשים למשפחה
          </h2>
          
          <p className="text-gray-700 leading-relaxed">
            רצוי גם לעזור לסביבה של הזוגות הצעירים לטפח את הזוגיות שלהם בצורה בריאה מההתחלה. 
            בשביל זה נועד השירות של שיחות לנשים בגילאי 40 ומעלה שהילדים שלהם שבגרו, 
            מתחילים ביחסים זוגיים.
          </p>

          <p className="text-gray-700 leading-relaxed">
            לפעמים קשה לקבל את בני ובנות הזוג של הילדים ולכן אני עוזרת בדיוק בשלב הזה. 
            <strong> ייעוץ לגבי הדרך הנכונה להכניס למשפחה את בני הזוג של הילדים שלכן</strong> 
            כך שהם ירצו להגיע אליכם, הילדים שלכם יהיו מרוצים והזוגיות של הילדים תתחיל בצורה טובה.
          </p>

          <div className="bg-sage-50 p-6 rounded-xl">
            <h3 className="text-lg font-bold text-gray-800 mb-3">איך זה עובד?</h3>
            <p className="text-gray-700">
              אני נפגשת איתך, אמא שהבן או הבת בזוגיות חדשה, אנחנו מדברות קצת על הילד ועל התוספת, 
              בודקות מה הצרכים שלך, מה היית רוצה שיקרה עם הקשר הזה, מדברות על הקשר עם הילדים שלך 
              ומה קורה ביניהם. לפי הערכים המשפחתיים שלך אנחנו מנסות לראות מה היא הדרך הטובה ביותר 
              להכניס את התוספת למשפחה.
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed">
            <strong>קשר חמות כלה הוא קשר מורכב, כדאי לבנות אותו טוב מההתחלה.</strong>
          </p>
        </div>
      </div>
    </ServicePageLayout>
  )
}
