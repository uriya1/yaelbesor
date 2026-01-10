import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'בלוג | יעל בשור',
  description: 'מאמרים וטיפים על זוגיות, הורות, משפחה וגישור מאת יעל בשור - מטפלת זוגית ומגשרת',
}

const blogPosts = [
  {
    slug: 'chibbuk-kipod',
    title: 'חיבוק קיפוד',
    excerpt: 'על הקשר המורכב בין קרבה לריחוק בזוגיות, ואיך למצוא את האיזון הנכון בין הצורך להיות קרובים לבין הצורך בעצמאות.',
    category: 'זוגיות',
    date: '2024',
  },
  {
    slug: 'lo-tov-beinenu',
    title: 'לא טוב ביננו',
    excerpt: 'מה לעשות כשמרגישים שהקשר לא עובד? סימנים למשבר בזוגיות ודרכים להתמודד עם הקשיים.',
    category: 'זוגיות במשבר',
    date: '2024',
  },
  {
    slug: 'etgar-hatinok',
    title: 'אתגר התינוק',
    excerpt: 'איך לשמור על הזוגיות אחרי לידת תינוק ולהתמודד עם האתגרים החדשים שמגיעים עם ההורות.',
    category: 'הורות',
    date: '2024',
  },
  {
    slug: 'couple-after-birth',
    title: 'זוגיות אחרי לידה',
    excerpt: 'לידה של תינוק חדש זה אחד האתגרים הכי משמעותיים לזוגיות. איך מתמודדים ושומרים על הקשר?',
    category: 'הורות',
    date: '2024',
  },
  {
    slug: 'gishurim-betov',
    title: 'גישור - להיפרד בטוב',
    excerpt: 'גם אם מתגרשים, לעולם לא נפרדים מההורה השני של הילדים. איך להיפרד בצורה מכבדת?',
    category: 'גישור',
    date: '2024',
  },
  {
    slug: 'tikshoret-zugiut',
    title: 'תקשורת בזוגיות',
    excerpt: 'תקשורת טובה היא הבסיס לזוגיות בריאה. כלים ודרכים לשפר את התקשורת עם בן/בת הזוג.',
    category: 'זוגיות',
    date: '2024',
  },
]

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-bl from-primary-100 via-primary-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <Link href="/" className="inline-flex items-center gap-2 text-primary-600 mb-4 hover:gap-3 transition-all">
              <ArrowLeft className="w-4 h-4 rotate-180" />
              חזרה לדף הבית
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">הבלוג</h1>
            <p className="text-xl md:text-2xl text-gray-600">
              מאמרים וטיפים על זוגיות, הורות, משפחה וגישור
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="card group h-full">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm text-primary-600 font-medium bg-primary-50 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-400">{post.date}</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-primary-600 font-medium">
                    קראו עוד
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">צריכים עזרה מקצועית?</h2>
          <p className="text-xl text-primary-200 mb-8">
            אשמח לעזור לכם להתמודד עם אתגרי הזוגיות והמשפחה
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-medium hover:bg-primary-50 transition-colors"
          >
            צרו קשר
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
