'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Footer() {
  // Use state to store the year to avoid hydration mismatch
  const [currentYear, setCurrentYear] = useState('');
  
  // Set the year only on the client side after hydration
  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);
  
  return (
    <footer className="w-full bg-white dark:bg-gray-900 shadow-inner py-8 mt-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mb-6 md:mb-0">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/books" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
              Books
            </Link>
            <Link href="/projects" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400">© {currentYear} Mikkel Hvedegaard</p>
        </div>
      </div>
    </footer>
  );
}