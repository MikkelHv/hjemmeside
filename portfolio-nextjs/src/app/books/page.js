import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: 'Book Recommendations - Mikkel Hvedegaard',
  description: 'A collection of book recommendations and reviews from Mikkel Hvedegaard.',
};

export default function Books() {
  return (
    <div className="container mx-auto px-6 py-12 md:px-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Book Recommendations</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Books that have shaped my thinking and might interest you too. I read widely across personal development, philosophy, fiction, and technical topics.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Book 1 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <Link href="/books/cant-hurt-me">
            <div className="relative w-full h-72">
              <Image 
                src="https://m.media-amazon.com/images/I/81MtKRJ1HLL._SY466_.jpg"
                alt="Can't Hurt Me by David Goggins"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Can't Hurt Me by David Goggins</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">This book sparked a fire in me in a dark time, and helped me take the first steps on my way out of hell.</p>
              <span className="text-primary font-medium">Read Review →</span>
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
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <Link href="/books/meditations">
            <div className="relative w-full h-72">
              <Image 
                src="https://m.media-amazon.com/images/I/71wSz6VVk6L._SY466_.jpg"
                alt="Meditations of Marcus Aurelius"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Meditations of Marcus Aurelius</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Reading in this book of meditations, thoughts of an original stoic, little by little it helps keep your ego in check.</p>
              <span className="text-primary font-medium">Read Review →</span>
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
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <Link href="/books/hitchhikers-guide">
            <div className="relative w-full h-72">
              <Image 
                src="https://m.media-amazon.com/images/I/71OPafHmyQL._SY466_.jpg"
                alt="The Hitchhiker's Guide to the Galaxy"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">The Hitchhiker's Guide to the Galaxy</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">This weird book is a must read, a fun break and maybe it makes you wonder for a while about your life.</p>
              <span className="text-primary font-medium">Read Review →</span>
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
      
      <div className="mt-16 text-center">
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          More book recommendations coming soon. Check back regularly for updates!
        </p>
      </div>
    </div>
  );
}