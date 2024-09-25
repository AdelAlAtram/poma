import React, { useEffect, useRef, useState } from "react";

export default function HeaderContent() {
  const [visible, setVisible] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // Stop observing after it becomes visible
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the target is visible
      }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <div
      id="next-section"
      ref={contentRef}
      className={`h-[80vh] flex flex-col justify-center items-center text-center bg-[#eaf7f5] p-6 sm:p-8 md:p-10 transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 sm:mb-8 md:mb-10">
        WITH LESS THAN 2% OF HEALTH <br /> BUDGETS ALLOCATED FOR <br /> MENTAL HEALTH
      </h1>

      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black max-w-2xl sm:max-w-3xl md:max-w-4xl">
        The situation is particularly grave in low- and middle-income countries where seventy-seven per cent of global suicides occur. Worryingly, many of these countries are riddled with conflict and violence, leaving one in five people grappling with severe mental health conditions including depression, anxiety, post-traumatic stress disorder, bipolar disorder, or schizophrenia, which can reduce their life expectancy by 10–20 years.
      </p>
    </div>
  );
}
