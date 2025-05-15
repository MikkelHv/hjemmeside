import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Mikkel Hvedegaard
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
              I&apos;m an IT Architecture student with a background in entrepreneurship, a passion for systems, and a deep interest in personal growth. I believe in using tech to create a better life — and books, movement, and nature to stay grounded.
              <Link href="/about" className="text-primary hover:underline ml-2">
                More about me →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Book Recommendations Section */}
      <section className="py-16 bg-white dark:bg-gray-900" id="book-recommendations">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Book Recommendations</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">A collection of books that have shaped my thinking and might interest you too.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Book 1 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg">
              <Link href="/books/cant-hurt-me">
                <div className="relative w-full h-64">
                  <Image 
                    src="https://m.media-amazon.com/images/I/81MtKRJ1HLL._SY466_.jpg"
                    alt="Can't Hurt Me by David Goggins"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    className="transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Can&apos;t Hurt Me by David Goggins</h3>
                  <p className="text-gray-600 dark:text-gray-400">This book sparked a fire in me in a dark time, and helped me take the first steps on my way out of hell.</p>
                </div>
              </Link>
              <div className="px-6 pb-6">
                <a 
                  href="https://amzn.to/3RCCj0T" 
                  target="_blank" 
                  rel="nofollow noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Buy on Amazon (affiliate link)
                </a>
              </div>
            </div>

            {/* Book 2 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg">
              <Link href="/books/meditations">
                <div className="relative w-full h-64">
                  <Image 
                    src="https://m.media-amazon.com/images/I/71wSz6VVk6L._SY466_.jpg"
                    alt="Meditations of Marcus Aurelius"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    className="transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Meditations of Marcus Aurelius</h3>
                  <p className="text-gray-600 dark:text-gray-400">Reading in this book of meditations, thoughts of an original stoic, little by little it helps keep your ego in check.</p>
                </div>
              </Link>
              <div className="px-6 pb-6">
                <a 
                  href="https://amzn.to/42zDOmL" 
                  target="_blank" 
                  rel="nofollow noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Buy on Amazon (affiliate link)
                </a>
              </div>
            </div>

            {/* Book 3 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg">
              <Link href="/books/hitchhikers-guide">
                <div className="relative w-full h-64">
                  <Image 
                    src="https://m.media-amazon.com/images/I/71OPafHmyQL._SY466_.jpg"
                    alt="The Hitchhiker's Guide to the Galaxy"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    className="transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">The Hitchhiker&apos;s Guide to the Galaxy</h3>
                  <p className="text-gray-600 dark:text-gray-400">This weird book is a must read, a fun break and maybe it makes you wonder for a while about your life.</p>
                </div>
              </Link>
              <div className="px-6 pb-6">
                <a 
                  href="https://amzn.to/3XO2q8P" 
                  target="_blank" 
                  rel="nofollow noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Buy on Amazon (affiliate link)
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link 
              href="/books" 
              className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-md transition-colors"
            >
              View All Book Recommendations →
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800" id="projects">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">A selection of my work and ongoing projects.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg">
              <Link href="/projects/meal-planner">
                <div className="relative w-full h-48">
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
            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg">
              <Link href="/projects/auction-system">
                <div className="relative w-full h-48">
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
            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg">
              <Link href="/projects/kombucha">
                <div className="relative w-full h-48">
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

          <div className="mt-10 text-center">
            <Link 
              href="/projects" 
              className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-md transition-colors"
            >
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white dark:bg-gray-900" id="contact-section">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Feel free to reach out for collaborations, questions about my book recommendations, or opportunities.</p>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="w-full md:w-1/2">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
                {/* LinkedIn Badge - Will be added as client component or script */}
                <p className="text-gray-700 dark:text-gray-300 mb-4">Connect with me on LinkedIn:</p>
                <a 
                  href="https://www.linkedin.com/in/mikkel-hvedegaard-205512178" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-primary hover:underline"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  Mikkel Hvedegaard
                </a>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <p className="text-gray-700 dark:text-gray-300">Send me a message on one of the social channels above or connect with me on LinkedIn.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
