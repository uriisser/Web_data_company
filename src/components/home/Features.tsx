import { Code, Shield, Cpu } from 'lucide-react';
import Section from '../ui/Section';

const features = [
  {
    icon: <Code className="h-8 w-8 text-blue-600" />,
    title: "פיתוח מותאם אישית",
    description: "פתרונות מותאמים במיוחד לצרכים והמטרות העסקיות שלך"
  },
  {
    icon: <Shield className="h-8 w-8 text-blue-600" />,
    title: "אבטחה תחילה",
    description: "אמצעי אבטחה ברמה ארגונית להגנה על הנכסים והמידע היקרים שלך"
  },
  {
    icon: <Cpu className="h-8 w-8 text-blue-600" />,
    title: "חדשנות",
    description: "שימוש בטכנולוגיות מתקדמות כדי לשמור על יתרון על פני המתחרים"
  }
];

export default function Features() {
  return (
    <Section className="bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">למה לבחור בנו</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}