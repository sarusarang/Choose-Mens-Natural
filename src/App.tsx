import { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AnimatePresence, motion } from 'framer-motion';
import { CartProvider } from './context/CartContext';
import { AppRoutes } from './routes/AppRoutes';
import { SanctuarySuspenseLoader } from './components/common/SanctuarySuspenseLoader';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

export function App() {
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    // Smooth, graceful initial brand suspense reveal on page load / reload
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        {/* Global Web Suspense Loader using the official Sanctuary Logo */}
        <AnimatePresence>
          {isInitialLoading && (
            <motion.div
              key="global-brand-loader"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 z-[99999] pointer-events-auto"
            >
              <SanctuarySuspenseLoader fullScreen />
            </motion.div>
          )}
        </AnimatePresence>

        <AppRoutes />
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
