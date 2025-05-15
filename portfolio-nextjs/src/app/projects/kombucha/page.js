import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: 'Kombucha Brewing Project - Mikkel Hvedegaard',
  description: 'Details about my home kombucha brewing experiments, flavor combinations, and brewing techniques.',
};

export default function KombuchaProject() {
  return (
    <div className="container mx-auto px-6 py-12 md:px-12 max-w-5xl">
      <Link href="/projects" className="text-primary hover:underline mb-6 inline-block">
        ← Back to Projects
      </Link>
      
      <div className="mb-12">
        <div className="text-sm font-medium text-primary mb-2">Personal Project</div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Home Kombucha Brewing</h1>
        
        {/* Project Meta Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
          <div>
            <h3 className="font-bold text-lg mb-1">Started</h3>
            <p className="text-gray-600 dark:text-gray-400">January 2024</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Current Setup</h3>
            <p className="text-gray-600 dark:text-gray-400">2L Primary + 500ml Bottles</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Category</h3>
            <p className="text-gray-600 dark:text-gray-400">Fermentation / Food</p>
          </div>
        </div>
        
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl">
          Experimenting with home fermentation, flavor combinations, and brewing techniques for kombucha.
        </p>
      </div>
      
      <div className="relative w-full h-96 mb-12 rounded-lg overflow-hidden shadow-lg">
        <Image 
          src="/images/projects/kombucha/Messenger_creation_C946FA23-3EAD-4152-B593-B32C7678F45D.png"
          alt="Kombucha brewing setup"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          style={{ objectFit: 'cover' }}
          className="rounded-lg"
        />
      </div>
      
      <div className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">What is Kombucha?</h2>
        <p>
          Kombucha is a fermented tea beverage known for its tangy flavor and potential health benefits. It's made by fermenting sweetened tea using a symbiotic culture of bacteria and yeast (SCOBY). The process creates a fizzy, slightly acidic drink that can be flavored in countless ways.
        </p>
        <p>
          This project documents my journey into home brewing kombucha, experimenting with different flavors, and refining my brewing process.
        </p>
        
        <h2 className="text-2xl font-bold mt-10 mb-4">My Brewing Setup</h2>
        <p>I currently maintain a simple but effective brewing setup:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>2L glass container for primary fermentation</li>
          <li>500ml swing-top bottles (patentflasker) for second fermentation and flavor infusion</li>
          <li>Pure black tea as the base</li>
          <li>Organic sugar for feeding the SCOBY</li>
          <li>A healthy SCOBY that continues to grow with each batch</li>
        </ul>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image 
              src="/images/projects/kombucha/20250330_150302.jpg"
              alt="Kombucha brewing process"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image 
              src="/images/projects/kombucha/20250409_072247.jpg"
              alt="Bottled kombucha"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mt-10 mb-4">Flavor Experiments</h2>
        <p>
          Part of the joy of brewing kombucha is experimenting with different flavors during the second fermentation. Here are my results so far:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-3">Blueberry & Strawberry</h3>
            <div className="flex text-yellow-400 mb-3">★★★★★</div>
            <p className="text-gray-600 dark:text-gray-400">
              A perfect balance of sweet and tart. The berries create a beautiful color and add just the right amount of sweetness.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-3">Raspberry</h3>
            <div className="flex text-yellow-400 mb-3">★★★★★</div>
            <p className="text-gray-600 dark:text-gray-400">
              Complex and aromatic with a vibrant pink color. The tartness of the raspberries complements the kombucha perfectly.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-3">Pineapple</h3>
            <div className="flex text-yellow-400 mb-3">★★★☆☆</div>
            <p className="text-gray-600 dark:text-gray-400">
              Creates good carbonation but the flavor is sometimes overpowered by the kombucha's sourness. Still experimenting with the right ratio.
            </p>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mt-10 mb-4">The Process</h2>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 dark:before:via-gray-700 before:to-transparent">
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              1
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-gray-800 p-4 rounded shadow">
              <div className="font-bold text-gray-500 dark:text-gray-400">Day 1</div>
              <h3 className="font-bold mb-1">Brewing the Tea</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Brew a strong black tea, add sugar while hot, then cool to room temperature before adding the SCOBY.
              </p>
            </div>
          </div>
          
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              2
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-gray-800 p-4 rounded shadow">
              <div className="font-bold text-gray-500 dark:text-gray-400">Days 7-10</div>
              <h3 className="font-bold mb-1">Primary Fermentation</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Allow the tea to ferment with the SCOBY at room temperature, covered with a breathable cloth to keep out contaminants.
              </p>
            </div>
          </div>
          
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              3
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-gray-800 p-4 rounded shadow">
              <div className="font-bold text-gray-500 dark:text-gray-400">Day 10</div>
              <h3 className="font-bold mb-1">Bottling & Flavoring</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Remove the SCOBY, bottle the kombucha with fruit additions for the second fermentation.
              </p>
            </div>
          </div>
          
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              4
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-gray-800 p-4 rounded shadow">
              <div className="font-bold text-gray-500 dark:text-gray-400">Days 11-13</div>
              <h3 className="font-bold mb-1">Second Fermentation</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Allow bottles to sit at room temperature to build carbonation and infuse flavors.
              </p>
            </div>
          </div>
          
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              5
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-gray-800 p-4 rounded shadow">
              <div className="font-bold text-gray-500 dark:text-gray-400">Day 14</div>
              <h3 className="font-bold mb-1">Refrigeration</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Chill the bottles to slow fermentation and enjoy!
              </p>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mt-10 mb-4">Future Plans</h2>
        <p>As my kombucha brewing journey continues, I plan to:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Expand to a larger brewing container (5L) to increase production</li>
          <li>Experiment with different tea bases (green tea, oolong)</li>
          <li>Try more exotic flavor combinations (ginger-turmeric, hibiscus-lemon)</li>
          <li>Potentially create a continuous brewing setup</li>
          <li>Track pH levels and fermentation times more precisely</li>
        </ul>
        
        <h2 className="text-2xl font-bold mt-10 mb-4">What I've Learned</h2>
        <p>This brewing project has taught me several lessons that extend beyond just making kombucha:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>The importance of patience and consistency in processes that involve fermentation</li>
          <li>How small variations in ingredients and environment can lead to significantly different outcomes</li>
          <li>The satisfaction of creating something healthy and delicious from simple ingredients</li>
          <li>How to maintain a clean environment for food-related projects</li>
        </ul>
        
        <h2 className="text-2xl font-bold mt-10 mb-4">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
          <div className="relative h-64 rounded-lg overflow-hidden shadow">
            <Image 
              src="/images/projects/kombucha/20250330_150302.jpg"
              alt="Brewing container with SCOBY"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
          
          <div className="relative h-64 rounded-lg overflow-hidden shadow">
            <Image 
              src="/images/projects/kombucha/20250409_072247.jpg"
              alt="Bottled kombucha"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
          
          <div className="relative h-64 rounded-lg overflow-hidden shadow">
            <Image 
              src="/images/projects/kombucha/Messenger_creation_C946FA23-3EAD-4152-B593-B32C7678F45D.png"
              alt="Kombucha brewing"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
        </div>
        <p className="text-center text-gray-500 dark:text-gray-400 italic mt-4">More images will be added as the project progresses.</p>
      </div>
    </div>
  );
}