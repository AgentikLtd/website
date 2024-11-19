import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import RecentPosts from './components/RecentPosts';
import CTA from './components/CTA';
import BlogAdmin from './components/BlogAdmin';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import ContactForm from './components/ContactForm';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import WhoWeAre from './pages/WhoWeAre';
import Expertise from './pages/Expertise';
import WhyUs from './pages/WhyUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import CookiePolicy from './pages/CookiePolicy';
import EbookBanner from './components/EbookBanner';

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <RecentPosts />
      <CTA />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="bg-[#101012] min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route
              path="/blog-admin"
              element={
                <ProtectedRoute>
                  <BlogAdmin />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
        <EbookBanner />
      </div>
    </Router>
  );
}

export default App;