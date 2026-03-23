"use client";
import React, { useEffect, useState } from "react";
import { TbArrowBigUpLines } from "react-icons/tb";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisiblity = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisiblity);
    return () => window.removeEventListener("scroll", toggleVisiblity);
  }, []);

  const ToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 animate-pulse right-4">
      {isVisible && (
        <button
          className="bg-blue-950/60 cursor-pointer text-white rounded-full w-15 h-15 flex items-center justify-center focus:outline-white-300"
          onClick={ToTop}
        >
          <TbArrowBigUpLines className="w-12 h-12"/>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
