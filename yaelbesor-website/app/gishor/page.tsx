import { Metadata } from 'next'
import Link from 'next/link'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'גישור | יעל בשור',
  description: 'גישור לזוגות לקראת גירושין. להיפרד בצורה יפה ומכבדת שתאפשר להמשיך להיות בקשר לטובת הילדים',
}

export default function GishurPage() {
  return (
    <ServicePageLayout 
      title="גישור" 
      subtitle="להיפרד בצורה יפה ומכבדת"
    >
      <div className="space-y-8">
        <p className="text-gray-700 leading-relaxed text-lg">
          <strong>זוגות לקראת גירושין.</strong>
        </p>

        <p className="text-gray-700 leading-relaxed">
          ביחד איתכם אני בודקת מה מצב הקשר שלכם, אם אתם מעוניינים להמשיך להיות{' '}
          <Link href="/couple-therapy" className="text-primary-600 font-medium hover:underline">
            ביחד
          </Link>{' '}
          או רוצים להיפרד ולפי מה שמתאים לכם אנחנו פועלים.
        </p>

        <div className="bg-primary-50 p-6 rounded-xl border-r-4 border-primary-500">
          <p className="text-lg text-gray-700">
            במקרה של גישור, המחשבה העיקרית שלי היא שגם אם מתגרשים, 
            <strong className="text-primary-700"> לעולם לא נפרדים מההורה השני של הילדים</strong> 
            ולכן צריך להיפרד בצורה יפה ומכבדת שתאפשר להמשיך להיות בקשר לטובת הילדים.
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          <strong>והאמת? גם לטובתכם כי יותר קל להמשיך בצורה נעימה מאשר בכעס ונקמנות.</strong>
        </p>

        <div className="bg-sage-50 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-gray-800 mb-4">איך עובד הגישור?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            בגישור בדרך כלל עובדים שני מגשרים בחדר. בודקים מהם הדברים שחשובים לכם ואת החלופות הקיימות. 
            מדברים על הילדים, המצב הכלכלי, החלומות שלכם ואיפה אתם רוצים להיות בעוד כמה שנים.
          </p>
          <p className="text-gray-700 leading-relaxed">
            לפי התשובות שלכם אנחנו בונים ביחד תכנית לפרידה. את כל השיח עושים בכבוד הדדי 
            ובהבנה שהקשר ביניכם צריך להיות קשר טוב לטובתכם ולטובת הילדים.
          </p>
        </div>

        <div className="bg-white border-2 border-primary-200 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-gray-800 mb-4">מה יוצאים עם בסוף?</h3>
          <p className="text-gray-700 leading-relaxed">
            עם סיום הפגישות אתם יוצאים עם <strong>הסכם</strong> המאפשר לכם לחיות ביחד, 
            אתם יודעים בדיוק מה הזכויות שלכם, מה החובות שלכם, מתי אתם רואים את הילדים 
            ואיך מתקשרים במקרה שרוצים לשנות משהו. הכל נעשה בתקשורת טובה, בהקשבה, 
            בתיאום איתכם ועם רצונותיכם.
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          <strong>גישור הוא החלופה הטובה, הזולה והמכבדת לגירושין</strong> וכדאי להתאמץ להגיע 
          למגשרת שתעזור לכם לחיות בנפרד אך בידיעה שאתם ממשיכים להיות הורים טובים לילדים שלכם.
        </p>

        <div className="bg-primary-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">מחירי גישור</h3>
          <div className="space-y-4">
            <div>
              <p className="text-3xl font-bold">650 ₪</p>
              <p className="text-primary-200">לשעת גישור (שני מגשרים)</p>
            </div>
            <div className="border-t border-primary-400 pt-4">
              <p className="text-2xl font-bold">3,500 - 6,500 ₪</p>
              <p className="text-primary-200">להסכם גישור (תלוי מורכבות)</p>
            </div>
          </div>
        </div>
      </div>
    </ServicePageLayout>
  )
}
