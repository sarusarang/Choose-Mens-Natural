import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RootLayout } from '../components/layout/RootLayout';
import { ScrollToTop } from '../components/common/ScrollToTop';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { HistoryPage } from '../pages/HistoryPage';
import { ServicesPage } from '../pages/ServicesPage';
import { FeedbackPage } from '../pages/FeedbackPage';
import { ContactPage } from '../pages/ContactPage';

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      {/* Ensures page changes scroll smoothly to top */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="history" element={<HistoryPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="service" element={<ServicesPage />} />
          <Route path="feedback" element={<FeedbackPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="contact-us" element={<ContactPage />} />
          {/* Fallback to HomePage */}
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
