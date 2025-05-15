import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: 'Date Kalender Project - Mikkel Hvedegaard',
  description: 'A utility for planning and tracking date events throughout the year.',
};

export default function DateKalenderProject() {
  return (
    <div className="container mx-auto px-6 py-12 md:px-12 max-w-5xl">
      <Link href="/projects" className="text-primary hover:underline mb-6 inline-block">
        ← Back to Projects
      </Link>
        <div className="mb-12">
        <div className="text-sm font-medium text-primary mb-2">Personal</div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Date Kalender Project</h1>
        {/* Project Meta Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
          <div>
            <h3 className="font-bold text-lg mb-1">Time Period</h3>
            <p className="text-gray-600 dark:text-gray-400">Spring 2025</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Technologies</h3>
            <p className="text-gray-600 dark:text-gray-400">Next.js, React, Tailwind CSS</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Project Type</h3>
            <p className="text-gray-600 dark:text-gray-400">Personal Project</p>
          </div>
        </div>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl">
          A simple yet effective calendar utility designed to help plan and keep track of date events throughout the year.
        </p>
        
        <div className="mt-4 mb-2">
          <Link href="/datekalender" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
            Try the Live App
          </Link>
        </div>
      </div>
      
      {/* Main Project Image */}
      <div className="relative w-full h-96 mb-12 rounded-lg overflow-hidden shadow-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
        <span className="text-gray-500 dark:text-gray-400 text-xl">Calendar Interface Preview</span>
      </div>
      
      <div className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
        <p>
          The Date Kalender is a tool I created to help organize and keep track of important dates and events. The calendar provides an intuitive interface for planning activities, setting reminders, and viewing scheduled events at a glance.
        </p>
        
        <h2 className="text-2xl font-bold mt-10 mb-4">Features</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Monthly calendar view with quick navigation</li>
          <li>Event creation with customizable categories</li>
          <li>Reminder notifications</li>
          <li>Recurring event support</li>
          <li>Dark and light mode support</li>
        </ul>
        
        <h2 className="text-2xl font-bold mt-10 mb-4">Technical Implementation</h2>
        <p>The project was built using the following technologies:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Next.js - For the application framework and routing</li>
          <li>React - For the user interface components</li>
          <li>Tailwind CSS - For styling</li>
          <li>Local Storage - For persisting user data</li>
        </ul>
        
        <h2 className="text-2xl font-bold mt-10 mb-4">Development Process</h2>
        <p>
          I approached this project with a focus on simplicity and user experience. After sketching out the basic interface and functionality, I implemented the calendar view first, followed by event creation and management features. The responsive design ensures the calendar works well on both desktop and mobile devices.
        </p>
        
        <h2 className="text-2xl font-bold mt-10 mb-4">Future Enhancements</h2>
        <p>I plan to expand the functionality of the Date Kalender with the following features:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Integration with external calendar services (Google Calendar, Outlook)</li>
          <li>Shared calendars for group planning</li>
          <li>Advanced filtering and search capabilities</li>
          <li>Export/import functionality</li>
        </ul>
        
        <h2 className="text-2xl font-bold mt-10 mb-4">Reflection</h2>
        <p>
          This project allowed me to refine my skills in building practical web applications while solving a personal need. Working with date manipulation in JavaScript presented some interesting challenges, particularly around recurring events and time zone handling.
        </p>
      </div>
    </div>
  );
}
