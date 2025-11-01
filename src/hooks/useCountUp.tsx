import { useEffect, useState, useRef } from 'react';

export const useCountUp = (endValue: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Start animation when element becomes visible
          startCounting();
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = countRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [endValue, duration, isVisible]);

  const startCounting = () => {
    const stepTime = Math.abs(Math.floor(duration / endValue));
    let currentCount = 0;

    const timer = setInterval(() => {
      currentCount += 1;
      setCount(currentCount);

      if (currentCount === endValue) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  return { count, countRef };
};