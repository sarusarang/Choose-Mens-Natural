import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export interface CountUpProps {
  end: number;
  start?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export const CountUp: React.FC<CountUpProps> = ({
  end,
  start = 0,
  duration = 2,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
}) => {
  const [value, setValue] = useState<number>(start);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth cubic ease-out curve
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = start + (end - start) * easeOutProgress;

      setValue(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setValue(end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isInView, end, start, duration]);

  const formattedNumber = decimals > 0
    ? value.toFixed(decimals)
    : Math.round(value).toString();

  return (
    <span ref={ref} className={className}>
      {prefix}{formattedNumber}{suffix}
    </span>
  );
};
