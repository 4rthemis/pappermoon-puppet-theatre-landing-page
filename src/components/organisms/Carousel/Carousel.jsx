import React, { useState, useEffect } from "react";
import { SlideNavigation } from "../../molecules/SlideNavigation";

export const Carousel = ({
  items,
  title,
  subtitle,
  autoPlay = false,
  autoPlayInterval = 5000,
  className = "",
  titleColor = "text-black",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (autoPlay && items.length > 1) {
      const interval = setInterval(goToNext, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayInterval, items.length, currentIndex]);

  if (items.length === 0) return null;

  return (
    <div className={`w-full ${className}`}>
      <SlideNavigation
        title={title}
        subtitle={subtitle}
        onPrevious={goToPrevious}
        onNext={goToNext}
        titleColor={titleColor}
        className="mb-8 lg:mb-12"
      />

      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item) => (
            <div key={item.id} className="w-full flex-shrink-0">
              {item.content}
            </div>
          ))}
        </div>

        {/* Dots indicator */}
        {items.length > 1 && (
          <div className="flex justify-center mt-6 space-x-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex 
                    ? "bg-[#f2c54a]" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};