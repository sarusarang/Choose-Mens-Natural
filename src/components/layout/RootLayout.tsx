import React from 'react';
import { Outlet } from 'react-router-dom';
import { useLenis } from '../../hooks/useLenis';
import { Navbar } from './Navbar';
import { CartDrawer } from './CartDrawer';
import { QuickViewModal } from './QuickViewModal';
import { Toast } from '../ui/Toast';
import { Footer } from './Footer';
import { FloatingWhatsApp } from '../common/FloatingWhatsApp';

export const RootLayout: React.FC = () => {
  // Initialize Lenis smooth inertia scrolling across the app
  useLenis();

  return (
    <div className="min-h-screen w-full max-w-full min-w-0 flex flex-col bg-[#e4eae2] text-[#19241a] selection:bg-[#324b35] selection:text-white overflow-x-clip">
      {/* Global Fixed Navbar overlaying all pages */}
      <Navbar />

      {/* Main Outlet renders child routes */}
      <main className="flex-1 w-full max-w-full min-w-0">
        <Outlet />
      </main>

      {/* Floating WhatsApp Quick Connect */}
      <FloatingWhatsApp />

      {/* Global Interactive Overlays */}
      <CartDrawer />
      <QuickViewModal />
      <Toast />

      {/* Global Brand Footer */}
      <Footer />
    </div>
  );
};
