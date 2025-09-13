import { useState } from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import { AuthProvider } from './components/AuthContext';
import { WishesProvider } from './components/WishesContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { AcademicPage } from './components/AcademicPage';
import { NewsPage } from './components/NewsPage';
import { ContactPage } from './components/ContactPage';

import { WhiteLabelAdminPage } from './components/WhiteLabelAdminPage';
import { LoginPage } from './components/LoginPage';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'academic':
        return <AcademicPage />;
      case 'news':
        return <NewsPage />;

      case 'white-label-admin':
        return <WhiteLabelAdminPage />;
      case 'contact':
        return <ContactPage />;
      case 'login':
        return <LoginPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <AuthProvider>
      <WishesProvider>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Header currentPage={currentPage} onNavigate={handleNavigate} />
            <main className="flex-1">
              {renderCurrentPage()}
            </main>
            <Footer />
            <Toaster />
          </div>
        </ThemeProvider>
      </WishesProvider>
    </AuthProvider>
  );
}