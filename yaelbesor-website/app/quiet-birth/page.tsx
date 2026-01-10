import { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'תמיכה לאחר לידה שקטה | יעל בשור',
  description: 'ליווי ותמיכה לנשים וזוגות שעברו לידה שקטה. מקום בטוח לדבר על הרגשות, התקוות והמחשבות',
}

export default function QuietBirthPage() {
  return (
    <ServicePageLayout 
      title="תמיכה לאחר לידה שקטה" 
      subtitle="ליווי ותמיכה בתקופה הקשה ביותר"
    >
      <div className="space-y-8">
        <div className="bg-sage-100 p-8 rounded-xl">
          <p className="text-xl text-gray-700 leading-relaxed">
            <strong>לידה שקטה היא שבר נוראי בחיי זוג.</strong>
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            הוא שבר פנימי שהסביבה בדרך כלל לא לוקחת בו חלק אם מחוסר מודעות 
            או חוסר ידיעה איך לעזור לזוג.
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          אם עברת לידה שקטה ואת מרגישה לבד, שאת לא מצליחה להתמודד, שאת בודדה 
          ואין לך עם מי לדבר ואת צריכה <strong>מקום בו תוכלי לדבר על הרגשות, 
          התקוות, המחשבות וכל מה שקשור לילד שלך שאיבדת</strong>, את מוזמנת לפנות 
          אלי לשיחה פנים אל פנים או באמצעים טכנולוגיים (סקייפ, מסנג&apos;ר וכו&apos;).
        </p>

        <div className="bg-primary-50 p-6 rounded-xl border-r-4 border-primary-500">
          <h3 className="text-xl font-bold text-gray-800 mb-4">הסיפור האישי שלי</h3>
          <p className="text-gray-700 leading-relaxed">
            לקראת סוף ההריון הרביעי שלי, במהלך לימודי טיפול משפחתי, נפטרה התינוקת שלנו 
            ועברתי לידה שקטה. החוויה המטלטלת הזאת שינתה מאוד את מהלך החיים שלנו כמשפחה 
            אך גם את הצד המקצועי שלי.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            מצאתי את עצמי מתמקדת יותר במשפחה, מבינה את חשיבותה, למדתי פרופורציות 
            וגם רכשתי כלים נוספים של טיפול והנחיה. ניהלתי פורום תמיכה אינטרנטי, 
            הקמתי קבוצות תמיכה לנשים שחוו לידה שקטה, חזרתי לאוניברסיטה ועשיתי 
            עבודת תיזה על התמודדות של הורים עם לידה שקטה.
          </p>
        </div>

        <div className="bg-white border-2 border-sage-200 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-gray-800 mb-4">הספר שלי</h3>
          <p className="text-gray-700 leading-relaxed">
            כמו כן יש לי ספר שכתבתי, <strong>&ldquo;להיפרד לפני שמכירים - סיפורה של אם&rdquo;</strong> 
            ואת מוזמנת לרכוש אותו. מתגובות של נשים שקראו את הספר אני יודעת שהוא מאוד מסייע בהתמודדות.
          </p>
        </div>

        <div className="text-center py-8">
          <p className="text-lg text-gray-600 mb-4">
            את לא לבד. אני כאן בשבילך.
          </p>
          <p className="text-2xl font-bold text-primary-600">
            פני אליי לשיחה
          </p>
        </div>
      </div>
    </ServicePageLayout>
  )
}
