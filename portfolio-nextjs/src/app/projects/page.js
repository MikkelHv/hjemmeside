import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: 'Projects - Mikkel Hvedegaard',
  description: 'Projects by Mikkel Hvedegaard - Technical projects, academic work, and personal experiments.',
};

export default function Projects() {
  return (
    <div className="container mx-auto px-6 py-12 md:px-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Projects</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          A selection of my technical work, academic projects, and personal experiments.
        </p>
      </div>

      {/* Project Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <button className="px-6 py-2 bg-primary text-white rounded-full font-medium">All</button>
        <button className="px-6 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">Technical</button>
        <button className="px-6 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">Academic</button>
        <button className="px-6 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">Personal</button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Project 1 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <Link href="/projects/meal-planner">
            <div className="relative w-full h-56">
              <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Image Placeholder</span>
              </div>
            </div>
            <div className="p-6">
              <div className="text-sm font-medium text-primary mb-2">Code 4 Fun</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Meal Planner from grocery store offers</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Making it easy and money saving to plan the meals for an entire week</p>
              <span className="text-primary font-medium">View Project →</span>
            </div>
          </Link>
        </div>

        {/* Project 2 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <Link href="/projects/auction-system">
            <div className="relative w-full h-56">
              <Image 
                src="/images/projects/academic/auctionsystem/Skærmbillede 2024-12-19 131044.png"
                alt="Auction System with microservice architecture"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-6">
              <div className="text-sm font-medium text-primary mb-2">Academic</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Functioning Auction system with microservice architecture</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">A school project making a functioning Auction system, with microservice architecture utilizing docker</p>
              <span className="text-primary font-medium">View Project →</span>
            </div>
          </Link>
        </div>

        {/* Project 3 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <Link href="/projects/kombucha">
            <div className="relative w-full h-56">
              <Image 
                src="/images/projects/kombucha/Messenger_creation_C946FA23-3EAD-4152-B593-B32C7678F45D.png"
                alt="Kombucha Brewing"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-6">
              <div className="text-sm font-medium text-primary mb-2">Personal</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Home Kombucha Brewing</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Experimenting with home fermentation, flavor combinations, and brewing techniques for kombucha.</p>
              <span className="text-primary font-medium">View Project →</span>
            </div>
          </Link>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          More projects coming soon. Check back regularly for updates!
        </p>
      </div>
    </div>
  );
}