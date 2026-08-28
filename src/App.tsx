import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { SiteHeader } from './components/site-header';
import { AboutPage } from './pages/about';
import { BlogPage } from './pages/blog';
import { CollectionsPage } from './pages/collections';
import { ContactPage } from './pages/contact';
import { HomePage } from './pages/home';
import { NewsletterPage } from './pages/newsletter';
import { ServicePage } from './pages/service';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function App() {
  return (
    <>
      <ScrollToTop />
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/" element={<BlogPage />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/collections/" element={<CollectionsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/contact/" element={<ContactPage />} />
        <Route path="/newsletter" element={<NewsletterPage />} />
        <Route path="/newsletter/" element={<NewsletterPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/service/" element={<ServicePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
