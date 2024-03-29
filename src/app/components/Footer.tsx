import React from "react";

export default function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="mb-10 px-4 text-center text-gray-500 dark:text-white">
      <small className="mb-2 block text-xs">
        &copy; {year} Paris Diaz. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js ( App Router & Server Actions), TypeScript, Tailwind
        CSS, Framer Motion, hosted on Vercel.
      </p>
    </footer>
  );
}
