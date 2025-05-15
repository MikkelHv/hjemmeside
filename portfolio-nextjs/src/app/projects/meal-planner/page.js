import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: 'Meal Planner - Mikkel Hvedegaard',
  description: 'A tool for planning meals using grocery store offers for cost-effective meal planning.',
};

export default function MealPlannerProject() {
  return (
    <div className="container mx-auto px-6 py-12 md:px-12 max-w-5xl">
      <Link href="/projects" className="text-primary hover:underline mb-6 inline-block">
        ← Back to Projects
      </Link>
      
      <div className="mb-12">
        <div className="text-sm font-medium text-primary mb-2">Code 4 Fun</div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Meal Planner from Grocery Store Offers</h1>
        
        {/* Project Meta Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
          <div>
            <h3 className="font-bold text-lg mb-1">Time Period</h3>
            <p className="text-gray-600 dark:text-gray-400">Winter 2024-2025</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Technologies</h3>
            <p className="text-gray-600 dark:text-gray-400">React, Node.js, Web Scraping</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Project Type</h3>
            <p className="text-gray-600 dark:text-gray-400">Personal Utility</p>
          </div>
        </div>
        
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl">
          A practical tool that helps plan meals for the week based on current grocery store offers, making meal planning both economical and efficient.
        </p>
      </div>
      
      {/* Main Project Image */}
      <div className="relative w-full h-96 mb-12 rounded-lg overflow-hidden shadow-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
        <span className="text-gray-500 dark:text-gray-400 text-xl">Meal Planner Interface</span>
      </div>
      
      <div className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
        <p>
          The Meal Planner is a practical solution to the everyday challenge of planning meals while staying within budget. The application scrapes current offers from local grocery stores and suggests meal ideas based on ingredients that are currently on sale.
        </p>
        
        <h2 className="text-2xl font-bold mt-10 mb-4">Core Features</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Current offer tracking from multiple grocery stores</li>
          <li>Recipe suggestions based on discounted ingredients</li>
          <li>Weekly meal plan generation</li>
          <li>Shopping list creation</li>
          <li>Cost estimation for planned meals</li>
        </ul>
        
        <h2 className="text-2xl font-bold mt-10 mb-4">Technical Implementation</h2>
        <p>The project consists of several components:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Web scraper built with Node.js to collect current grocery offers</li>
          <li>Recipe database with ingredient matching capabilities</li>
          <li>React frontend for user interaction and meal planning</li>
          <li>Algorithm to optimize meal suggestions based on offers and nutritional balance</li>
        </ul>
        
        <h2 className="text-2xl font-bold mt-10 mb-4">Challenges and Solutions</h2>
        
        <h3 className="text-xl font-bold mt-6 mb-2">Data Collection</h3>
        <p>
          Scraping grocery store websites required handling different site structures and frequent layout changes. I implemented a modular scraper design that could be quickly adjusted to site updates.
        </p>
        
        <h3 className="text-xl font-bold mt-6 mb-2">Recipe Matching</h3>
        <p>
          Matching store items to recipe ingredients presented a natural language processing challenge. I developed a fuzzy matching algorithm that could identify ingredient matches even with different naming conventions.
        </p>
        
        <h2 className="text-2xl font-bold mt-10 mb-4">Current Status and Future Plans</h2>
        <p>
          The application is currently in a functional prototype stage. Future enhancements will include:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>User accounts to save favorite recipes and meal plans</li>
          <li>Dietary restriction and preference settings</li>
          <li>Mobile app version for on-the-go planning</li>
          <li>Integration with grocery delivery services</li>
        </ul>
        
        <h2 className="text-2xl font-bold mt-10 mb-4">Lessons Learned</h2>
        <p>
          This project provided valuable experience in web scraping, data processing, and creating practical utilities that solve real-world problems. It also reinforced the importance of designing with user needs in mind and building systems that can adapt to changing external data sources.
        </p>
      </div>
    </div>
  );
}
