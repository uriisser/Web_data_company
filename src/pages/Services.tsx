import { Code, Database, Cloud, Globe, Smartphone, LineChart } from 'lucide-react';
import Section from '../components/ui/Section';

const services = [
  {
    icon: <Code className="h-8 w-8 text-blue-600" />,
    title: "פיתוח תוכנה מותאם אישית",
    description: "פתרונות תוכנה מותאמים לדרישות העסקיות הייחודיות שלך"
  },
  {
    icon: <Cloud className="h-8 w-8 text-blue-600" />,
    title: "פתרונות ענן",
    description: "תשתיות ענן מדרגיות ושירותי העברה למודרניזציה של פעילות העסק"
  },
  {
    icon: <Smartphone className="h-8 w-8 text-blue-600" />,
    title: "פיתוח אפליקציות",
    description: "אפליקציות מובייל מקומיות וחוצות פלטפורמות המספקות חוויית משתמש יוצאת דופן"
  },
  {
    icon: <Database className="h-8 w-8 text-blue-600" />,
    title: "ניתוח נתונים",
    description: "הפיכת הנתונים שלך לתובנות פעולה עם פתרונות אנליטיקה מתקדמים"
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    title: "פיתוח אתרים",
    description: "אתרים ואפליקציות ווב מודרניים ורספונסיביים המושכים את קהל היעד שלך"
  },
  {
    icon: <LineChart className="h-8 w-8 text-blue-600" />,
    title: "ייעוץ דיגיטלי",
    description: "הכוונה אסטרטגית לניווט הטרנספורמציה הדיגיטלית והשגת היעדים שלך"
  }
];

export default function Services() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-blue-600 text-white py-20">
        <div className="container-width text-center">
          <h1 className="text-4xl font-bold mb-4">השירותים שלנו</h1>
          <p className="text-xl max-w-2xl mx-auto">
            פתרונות טכנולוגיים מקיפים להנעת הטרנספורמציה העסקית שלך
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}