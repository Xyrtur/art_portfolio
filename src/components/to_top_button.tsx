/** @format */

"use client";

import React, { useEffect, useState } from "react";

export function ToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    if (isVisible) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      className={`fixed bottom-4 right-4 lg:bottom-8 lg:right-8 h-9 w-9 lg:h-12 lg:w-12 rounded-full bg-white z-10 shadow-lg ${
        isVisible ? "visible" : "invisible"
      }`}
      data-cy="return_to_top_button"
      onClick={scrollToTop}
    >
      <svg
        className="w-6 h-6 lg:h-8 lg:w-8 text-black"
        viewBox="-5.5 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {" "}
        <polyline points="17 11 12 6 7 11" />{" "}
        <polyline points="17 18 12 13 7 18" />
      </svg>
    </button>
  );
}
