import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';
import Container from '../ui/Container';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <Container>
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">טקויז'ן</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              צור קשר
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              שירותים
            </Link>
            <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              דף הבית
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
}