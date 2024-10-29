import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';

export default function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center text-white">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <Container className="relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">חדשנות. שינוי. הצלחה.</h1>
          <p className="text-xl mb-8">מעצימים עסקים עם פתרונות טכנולוגיים מתקדמים לעתיד דיגיטלי</p>
          <Link 
            to="/services" 
            className="btn-primary"
          >
            גלה את השירותים שלנו
            <ArrowLeft className="mr-2 h-5 w-5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}