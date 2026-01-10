import Image from 'next/image'
import Link from 'next/link'
import { Heart, MessageSquare, Home, Leaf, ArrowLeft, MapPin, Phone, Mail } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

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

export default function HomePage() {
  return (
    <>
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
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
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
                    src="/images/yael-profile.jpg"
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
              <p className="text-lg text-gray-600 leading-relaxed">
                אני נשואה לחבר הכי טוב שלי, אמא לארבעה וסבתא לשני נכדים מקסימים. מתגוררת בלהבים. 
                עוזרת לזוגות שהתרחקו להתחבר ולתקשר מחדש, בחיים משותפים או בפרידה נכונה. 
                עושה זאת <strong>בלהבים וברחובות</strong>.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                מאז ומתמיד ידעתי להקשיב לאנשים ואהבתי לשאול שאלות. לראות מה הצד השני חושב, 
                האם אפשר לפרש ארוע בעוד דרכים. כשלמדתי תואר שני בייעוץ חינוכי, היה לנו קורס 
                ב<strong>טיפול משפחתי</strong> שהיה בעיני מרתק וגרם לי להימשך לתחום והלכתי ללמוד את זה באופן מקצועי.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                אני מאמינה ש<strong className="text-primary-600">הזוגיות היא הבסיס עליו עומדת המשפחה.</strong> 
                חשוב מאוד מאוד להשקיע בזוגיות וזה לא מובן מאליו. אנחנו בוחרים רק בחירה אחת 
                ואיתה מייצרים את המשפחה הגרעינית שלנו. <strong>הבחירה הזאת היא בזוגיות</strong>, 
                בן או בת הזוג שלנו.
              </p>
              
              <Link href="/couple-therapy" className="inline-flex items-center gap-2 text-primary-600 font-medium hover:gap-3 transition-all">
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
            <p className="section-subtitle max-w-2xl mx-auto">
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
                  <p className="text-gray-600">{service.description}</p>
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">צרו קשר</h2>
            <p className="section-subtitle">אשמח לשמוע מכם ולעזור לכם</p>
            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full" />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="card">
                <h3 className="text-xl font-bold text-gray-800 mb-6">פרטי התקשרות</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">כתובת</p>
                      <p className="font-medium text-gray-800">עפרוני 5, להבים</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">טלפון</p>
                      <p className="font-medium text-gray-800">התקשרו לקביעת פגישה</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">אימייל</p>
                      <p className="font-medium text-gray-800">שלחו הודעה</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card bg-gradient-to-br from-primary-50 to-sage-50">
                <h3 className="text-xl font-bold text-gray-800 mb-4">הקליניקה</h3>
                <p className="text-gray-600">
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
