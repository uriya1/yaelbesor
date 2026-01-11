import Image from 'next/image'
import Link from 'next/link'
import { Heart, MessageSquare, Home, Leaf, ArrowLeft, MapPin, Phone, Mail, Facebook } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import WhatsAppButton from '@/components/WhatsAppButton'

const services = [
  {
    icon: Heart,
    title: 'טיפול זוגי',
    description: 'עוזרת לזוגות שהתרחקו להתחבר ולתקשר מחדש, לשפר את הקשר והתקשרות',
    href: '/couple-therapy',
  },
  {
    icon: MessageSquare,
    title: 'גישור',
    description: 'גישור לזוגות לקראת גירושין, להיפרד בצורה יפה ומכבדת',
    href: '/gishor',
  },
  {
    icon: Home,
    title: 'הורות ומשפחה',
    description: 'טיפול בנושאים הקשורים לזוגיות, הורות ומשפחה',
    href: '/parenthood',
  },
  {
    icon: Leaf,
    title: 'תמיכה לאחר לידה שקטה',
    description: 'ליווי ותמיכה לנשים וזוגות שעברו לידה שקטה',
    href: '/quiet-birth',
  },
]

// Phone number for Yael Besor
const PHONE_NUMBER = '052-2787807'
const PHONE_NUMBER_WHATSAPP = '972522787807'

export default function HomePage() {
  return (
    <>
      {/* WhatsApp Floating Button */}
      <WhatsAppButton phoneNumber={PHONE_NUMBER_WHATSAPP} />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-bl from-primary-50 via-white to-sage-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-sage-200/30 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                <Heart className="w-4 h-4" />
                טיפול זוגי בדרום ובשפלה
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                יעל בשור
                <span className="block text-primary-600 mt-2">מטפלת זוגית, משקמת יחסים ומגשרת</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-xl">
                עוזרת לזוגות שהתרחקו להתחבר ולתקשר מחדש, בחיים משותפים או בפרידה נכונה
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="btn-primary flex items-center gap-2">
                  צרו איתי קשר
                  <ArrowLeft className="w-4 h-4" />
                </Link>
                <Link href="#about" className="btn-secondary">
                  קראו עוד עליי
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full blur-2xl opacity-20 animate-pulse" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/therapy.jpg"
                    alt="יעל בשור - מטפלת זוגית"
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">נעים מאוד, אני יעל</h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/yael-profile.jpg"
                  alt="יעל בשור"
                  width={600}
                  height={400}
                  className="object-cover w-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white p-6 rounded-2xl shadow-lg">
                <p className="text-3xl font-bold">+20</p>
                <p className="text-sm">שנות ניסיון</p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                אני נשואה לחבר הכי טוב שלי, אמא לארבעה וסבתא לשני נכדים מקסימים. מתגוררת בלהבים.
                עוזרת לזוגות שהתרחקו להתחבר ולתקשר מחדש, בחיים משותפים או בפרידה נכונה.
                עושה זאת <strong>בלהבים וברחובות</strong>.
              </p>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                מאז ומתמיד ידעתי להקשיב לאנשים ואהבתי לשאול שאלות. לראות מה הצד השני חושב,
                האם אפשר לפרש ארוע בעוד דרכים. כשלמדתי תואר שני בייעוץ חינוכי, היה לנו קורס
                ב<strong>טיפול משפחתי</strong> שהיה בעיני מרתק וגרם לי להימשך לתחום והלכתי ללמוד את זה באופן מקצועי.
              </p>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                אני מאמינה ש<strong className="text-primary-600">הזוגיות היא הבסיס עליו עומדת המשפחה.</strong>
                חשוב מאוד מאוד להשקיע בזוגיות וזה לא מובן מאליו. אנחנו בוחרים רק בחירה אחת
                ואיתה מייצרים את המשפחה הגרעינית שלנו. <strong>הבחירה הזאת היא בזוגיות</strong>,
                בן או בת הזוג שלנו.
              </p>

              <Link href="/couple-therapy" className="inline-flex items-center gap-2 text-primary-600 font-medium hover:gap-3 transition-all text-lg">
                קראו עוד
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">מה אני עושה</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-4">
              בקליניקה אני מטפלת בנשים וגברים בהרכבים שונים, אפשר להגיע כמשפחה, עם החמות והגיס,
              אפשר להגיע בזוג ואפשר להגיע לבד
            </p>
            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Link key={service.title} href={service.href}>
                <div className="card group cursor-pointer h-full">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors">
                    <service.icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-base md:text-lg">{service.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-primary-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    למידע נוסף
                    <ArrowLeft className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">מה אומרים עליי</h2>
            <p className="text-lg md:text-xl text-gray-600 mb-4">המלצות ממטופלים</p>
            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card bg-white">
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                &ldquo;הגענו ליעל כשהקשר שלנו היה במשבר. אחרי כמה חודשים של טיפול, למדנו לתקשר מחדש
                ולהבין אחד את השני. יעל נתנה לנו כלים פרקטיים שאנחנו משתמשים בהם עד היום.&rdquo;
              </p>
              <p className="text-primary-600 font-medium">— ר׳ וד׳, באר שבע</p>
            </div>

            <div className="card bg-white">
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                &ldquo;יעל עזרה לנו לעבור את הליך הגישור בצורה מכבדת ונעימה. למרות שהתגרשנו,
                יצאנו עם הסכם טוב והקשר בינינו כהורים נשאר חיובי. ממליצה בחום!&rdquo;
              </p>
              <p className="text-primary-600 font-medium">— מ׳, רחובות</p>
            </div>

            <div className="card bg-white">
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                &ldquo;אחרי לידת התינוק הרגשנו שהזוגיות שלנו בסכנה. יעל עזרה לנו להבין
                שזה נורמלי ונתנה לנו כלים להתמודד. היום אנחנו זוג חזק יותר מתמיד.&rdquo;
              </p>
              <p className="text-primary-600 font-medium">— ש׳ וי׳, להבים</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <a
              href="https://www.facebook.com/coppia.yael/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors text-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              לכל ההמלצות בפייסבוק
            </a>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-primary-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed max-w-4xl mx-auto">
            &ldquo;על זוגיות ומשפחה וגם על מערכות יחסים בכלל, צריך לעבוד ולעבוד קשה, כל הזמן.
            גם אם מחליטים להפרד, צריך להפרד בטוב כי גם אם מתגרשים מבן הזוג,
            <span className="font-bold block mt-4">לעולם לא נפרדים מההורה השני של הילדים</span>&rdquo;
          </blockquote>
          <p className="mt-8 text-primary-200 text-lg">— יעל בשור</p>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">מהבלוג</h2>
            <p className="text-lg md:text-xl text-gray-600 mb-4">מאמרים וטיפים על זוגיות, הורות ומשפחה</p>
            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog/chibbuk-kipod" className="card group">
              <div className="mb-4">
                <span className="text-sm text-primary-600 font-medium">זוגיות</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors">חיבוק קיפוד</h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                על הקשר המורכב בין קרבה לריחוק בזוגיות, ואיך למצוא את האיזון הנכון...
              </p>
            </Link>

            <Link href="/blog/lo-tov-beinenu" className="card group">
              <div className="mb-4">
                <span className="text-sm text-primary-600 font-medium">זוגיות במשבר</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors">לא טוב ביננו</h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                מה לעשות כשמרגישים שהקשר לא עובד? סימנים למשבר ודרכים להתמודד...
              </p>
            </Link>

            <Link href="/blog/etgar-hatinok" className="card group">
              <div className="mb-4">
                <span className="text-sm text-primary-600 font-medium">הורות</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors">אתגר התינוק</h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                איך לשמור על הזוגיות אחרי לידת תינוק ולהתמודד עם האתגרים החדשים...
              </p>
            </Link>
          </div>

          <div className="text-center mt-10">
            <Link href="/blog" className="btn-secondary inline-flex items-center gap-2">
              לכל המאמרים
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">צרו קשר</h2>
            <p className="text-lg md:text-xl text-gray-600 mb-4">אשמח לשמוע מכם ולעזור לכם</p>
            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="card">
                <h3 className="text-xl font-bold text-gray-800 mb-6">פרטי התקשרות</h3>

                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">כתובת</p>
                      <p className="font-medium text-gray-800 text-lg">עפרוני 5, להבים</p>
                    </div>
                  </div>

                  <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-4 group hover:bg-primary-50 p-2 -m-2 rounded-xl transition-colors">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 transition-colors">
                      <Phone className="w-5 h-5 text-primary-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">טלפון</p>
                      <p className="font-bold text-primary-600 text-xl">{PHONE_NUMBER}</p>
                      <p className="text-sm text-gray-500">לחצו להתקשר</p>
                    </div>
                  </a>

                  <a
                    href={`https://wa.me/${PHONE_NUMBER_WHATSAPP}?text=שלום יעל, אשמח לקבוע פגישה`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group hover:bg-green-50 p-2 -m-2 rounded-xl transition-colors"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-green-500 transition-colors">
                      <svg className="w-6 h-6 text-green-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">וואטסאפ</p>
                      <p className="font-bold text-green-600 text-lg">שלחו הודעה בוואטסאפ</p>
                      <p className="text-sm text-gray-500">לחצו לפתוח שיחה</p>
                    </div>
                  </a>

                  <a
                    href="https://www.facebook.com/coppia.yael/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group hover:bg-blue-50 p-2 -m-2 rounded-xl transition-colors"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                      <Facebook className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">פייסבוק</p>
                      <p className="font-medium text-blue-600 text-lg">עקבו אחריי בפייסבוק</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="card bg-gradient-to-br from-primary-50 to-sage-50">
                <h3 className="text-xl font-bold text-gray-800 mb-4">הקליניקה</h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  הקליניקה נמצאת בבית שלי בלהבים, הכניסה מאפשרת פרטיות למגיעים.
                  יש שפע חניה בחינם.
                </p>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
