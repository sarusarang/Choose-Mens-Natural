import React from 'react';
import { Outlet } from 'react-router-dom';
import { useLenis } from '../../hooks/useLenis';
import { CartDrawer } from './CartDrawer';
import { QuickViewModal } from './QuickViewModal';
import { Toast } from '../ui/Toast';
import { Footer } from './Footer';

export const RootLayout: React.FC = () => {
  // Initialize Lenis smooth inertia scrolling across the app
  useLenis();

  return (
    <div className="min-h-screen flex flex-col bg-[#e4eae2] text-[#19241a] selection:bg-[#324b35] selection:text-white">
      {/* Main Outlet renders child routes */}
      <main className="flex-1 w-full">
        <Outlet />
      </main>

      {/* Global Interactive Overlays */}
      <CartDrawer />
      <QuickViewModal />
      <Toast />

      {/* Global Brand Footer */}
      <Footer />
    </div>
  );
};
