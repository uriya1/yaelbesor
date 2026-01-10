import { Metadata } from 'next'
import Link from 'next/link'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'טיפול זוגי | יעל בשור',
  description: 'טיפול זוגי לזוגות שרוצים להמשיך לחיות ביחד, לשפר את הקשר והתקשרות ולמצוא כלים לייצר זוגיות חזקה, חברית וטובה',
}

export default function CoupleTherapyPage() {
  return (
    <ServicePageLayout 
      title="טיפול זוגי" 
      subtitle="עוזרת לזוגות שהתרחקו להתחבר ולתקשר מחדש"
    >
      <div className="space-y-8">
        <div className="bg-primary-50 p-6 rounded-xl border-r-4 border-primary-500">
          <p className="text-lg italic text-gray-700">
            &ldquo;אני רוצה שתחזירי לי את האישה שלי, זאת שהייתה לפני 5 שנים כשנפגשנו&rdquo;
          </p>
        </div>

        <div className="bg-primary-50 p-6 rounded-xl border-r-4 border-primary-500">
          <p className="text-lg italic text-gray-700">
            &ldquo;אני כבר לא מוצאת את השמחה והתשוקה שהייתה לי בתחילת הקשר&rdquo;
          </p>
        </div>

        <div className="bg-primary-50 p-6 rounded-xl border-r-4 border-primary-500">
          <p className="text-lg italic text-gray-700">
            &ldquo;אנחנו ביחד כבר 17 שנים ובין הילדים, העבודה, החיים והמשימות שכחנו את עצמינו, 
            את הקשר שלנו. אנחנו כבר לא יודעים מי אנחנו&rdquo;
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          אלה חלק מהמשפטים שאומרים זוגות שבאים אלי לטיפול זוגי ורוצים להמשיך לחיות ביחד. 
          הם מגיעים, קצת לא נעים להם שהם באים כי הרי &ldquo;מה הבעיה להיות ביחד&rdquo;. 
          אז האמת היא שזה לא קל בכלל. <strong>זוגיות טובה מצריכה הרבה עבודה</strong>, 
          על תקשורת, פרגון, הדדיות, על הבעת צרכים ועל הקשבה. יש זוגות שזה בא להם בטבעיות 
          ויש הרבה יותר זוגות שצריכים לעבוד על זה.
        </p>

        <p className="text-gray-700 leading-relaxed">
          אז אם אחד או יותר מהמשפטים האלה נשמע לך מוכר, שווה לבוא לטיפול זוגי כי אין סיבה 
          לחיות בקושי עם האדם היחיד במשפחה שבחרת במודע להיות איתו.
        </p>

        <div className="bg-sage-50 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-gray-800 mb-4">מה קורה בחדר הטיפולים?</h3>
          <p className="text-gray-700 leading-relaxed">
            בחדר הטיפולים נעבוד ביחד לשפר את הקשר והתקשרות שלכם ונמצא כלים לייצר זוגיות חזקה, 
            חברית וטובה. גם אם הקשר שלכם טוב, אפשר להפוך אותו למצויין עם קצת תשומת לב, 
            עבודה על הקשר ורצון לחיות חיים זוגיים מלאים וטובים.
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          אנחנו נפגשים, קצת מספרים על העבר של הקשר, איך הכרתם ועל החיים עד היום. 
          אנחנו מדברים על המצב היום, מה קורה ביניכם, איך אתם מרגישים. בוחנים מה השתנה 
          ולמה ולאן אתם שואפים ומוצאים את הדרך להגיע לשם.
        </p>

        <p className="text-gray-700 leading-relaxed">
          ואם אתם מרגישים שאתם רוצים להיפרד, אפשר לעבור הליך{' '}
          <Link href="/gishor" className="text-primary-600 font-medium hover:underline">
            גישור
          </Link>{' '}
          ולהיפרד בטוב.
        </p>

        <div className="bg-primary-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">מחיר טיפול זוגי</h3>
          <p className="text-3xl font-bold">350 ₪</p>
          <p className="text-primary-200">לשעת טיפול</p>
        </div>
      </div>
    </ServicePageLayout>
  )
}
