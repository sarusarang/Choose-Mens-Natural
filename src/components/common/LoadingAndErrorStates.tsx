import React from 'react';
import { AlertCircle, RefreshCw, Inbox } from 'lucide-react';

interface ErrorFallbackProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  className?: string;
}

export const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  title = 'Connection Temporarily Unavailable',
  message = 'We could not sync the latest information from our sanctuary server. Displaying archived sanctuary records.',
  onRetry,
  className = '',
}) => {
  return (
    <div
      className={`w-full p-4 sm:p-5 rounded-2xl bg-[#112314]/80 border border-[#d4a034]/30 text-white backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-md ${className}`}
    >
      <div className="flex items-start space-x-3">
        <AlertCircle className="w-5 h-5 text-[#fae788] shrink-0 mt-0.5" />
        <div>
          <h4 className="text-xs sm:text-sm font-bold text-[#fae788] font-heading">{title}</h4>
          <p className="text-[11px] sm:text-xs text-white/80 mt-0.5 leading-relaxed">{message}</p>
        </div>
      </div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-[#fae788] border border-[#d4a034]/40 text-xs font-bold transition-all shrink-0 cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Retry</span>
        </button>
      )}
    </div>
  );
};

export const EmptyFallback: React.FC<{
  title?: string;
  message?: string;
  actionLabel?: string;
  onAction?: () => void;
}> = ({
  title = 'No Records Found',
  message = 'There are currently no items available in this category. Please check back soon or consult our doctor desk.',
  actionLabel,
  onAction,
}) => {
  return (
    <div className="w-full py-12 px-6 rounded-3xl bg-white/60 border border-[#1b3420]/10 text-center flex flex-col items-center justify-center space-y-3">
      <div className="w-12 h-12 rounded-full bg-[#1b3420]/10 flex items-center justify-center text-[#1b3420]">
        <Inbox className="w-6 h-6" />
      </div>
      <h3 className="text-base sm:text-lg font-bold text-[#112314] font-heading">{title}</h3>
      <p className="text-xs sm:text-sm text-[#465648] max-w-md">{message}</p>
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="mt-2 px-4 py-2 rounded-full bg-[#112314] text-[#fae788] text-xs font-bold font-heading hover:bg-[#1a351e] transition-all cursor-pointer"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
};

export const PackageCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-[28px] sm:rounded-[32px] overflow-hidden border border-[#1b3420]/10 shadow-sm flex flex-col animate-pulse">
      <div className="w-full aspect-[16/11] bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200" />
      <div className="p-5 sm:p-6 space-y-3.5 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded-md w-3/4" />
          <div className="h-3 bg-gray-100 rounded-md w-1/2" />
          <div className="h-3 bg-gray-100 rounded-md w-full mt-2" />
        </div>
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="h-4 bg-gray-200 rounded w-16" />
          <div className="h-8 bg-gray-200 rounded-full w-24" />
        </div>
      </div>
    </div>
  );
};

export const ReviewCardSkeleton: React.FC = () => {
  return (
    <div className="rounded-[32px] bg-gradient-to-b from-[#18341d] to-[#0f2113] p-6 pt-16 border border-[#d4a034]/20 animate-pulse text-center relative max-w-md mx-auto w-full">
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-[#112314] border-2 border-[#d4a034]/30" />
      <div className="h-3 bg-white/10 rounded w-24 mx-auto mb-3" />
      <div className="h-4 bg-white/20 rounded w-36 mx-auto mb-2" />
      <div className="space-y-2 my-4">
        <div className="h-3 bg-white/10 rounded w-full" />
        <div className="h-3 bg-white/10 rounded w-5/6 mx-auto" />
      </div>
      <div className="h-3 bg-white/10 rounded w-20 mx-auto mt-4" />
    </div>
  );
};

export const StatMetricSkeleton: React.FC = () => {
  return (
    <div className="bg-white/90 p-6 rounded-[28px] border border-[#1b3420]/10 text-center space-y-2 animate-pulse">
      <div className="h-3 bg-gray-200 rounded w-20 mx-auto" />
      <div className="h-8 bg-gray-300 rounded w-24 mx-auto" />
      <div className="h-3 bg-gray-200 rounded w-32 mx-auto" />
      <div className="h-2 bg-gray-100 rounded w-28 mx-auto" />
    </div>
  );
};
