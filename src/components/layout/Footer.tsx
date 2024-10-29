import { Mail, Phone, MapPin } from 'lucide-react';
import Container from '../ui/Container';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">פרטי התקשרות</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>03-1234567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>info@techvision.co.il</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>רחוב הטכנולוגיה 123, תל אביב</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">קישורים מהירים</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-400">דף הבית</a></li>
              <li><a href="/services" className="hover:text-blue-400">שירותים</a></li>
              <li><a href="/contact" className="hover:text-blue-400">צור קשר</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">אודותינו</h3>
            <p className="text-gray-400">
              טקויז'ן מחויבת לספק פתרונות חדשניים המניעים טרנספורמציה דיגיטלית וצמיחה עסקית
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} טקויז'ן. כל הזכויות שמורות.</p>
        </div>
      </Container>
    </footer>
  );
}