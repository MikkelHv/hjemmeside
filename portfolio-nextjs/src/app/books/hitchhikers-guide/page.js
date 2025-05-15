import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "The Hitchhiker's Guide to the Galaxy - Book Review by Mikkel Hvedegaard",
  description: "My review and thoughts on Douglas Adams' book 'The Hitchhiker's Guide to the Galaxy'.",
};

export default function HitchhikersGuideBook() {
  return (
    <div className="container mx-auto px-6 py-12 md:px-12 max-w-4xl">
      <Link href="/books" className="text-primary hover:underline mb-6 inline-block">
        ← Back to Book Recommendations
      </Link>
      
      <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg mb-8">
        <h3 className="font-bold flex items-center text-yellow-800 dark:text-yellow-200">
          <span className="mr-2">📝</span> Essay Under Construction
        </h3>        <p className="text-yellow-700 dark:text-yellow-300">
          I&apos;m currently working on this essay. Check back soon for the complete version!
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="w-full md:w-1/3 flex-shrink-0">
          <div className="relative w-full aspect-[2/3] md:max-w-xs mx-auto shadow-lg">
            <Image 
              src="https://m.media-amazon.com/images/I/71OPafHmyQL._SY466_.jpg"
              alt="The Hitchhiker's Guide to the Galaxy Book Cover"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 300px"
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
        </div>
        
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">The Hitchhiker's Guide to the Galaxy</h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">by Douglas Adams</p>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            This weird book is a must read, a fun break and maybe it makes you wonder for a while about your life.
          </p>
          <a 
            href="https://amzn.to/3XO2q8P" 
            target="_blank" 
            rel="nofollow noreferrer"
            className="inline-block bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Buy on Amazon (affiliate link)
          </a>
        </div>
      </div>
      
      <div className="prose dark:prose-invert max-w-none">
        <h2>My Thoughts on This Book</h2>
        <p>
          [Essay introduction placeholder]
        </p>
        
        <h3>Key Insights</h3>
        <p>
          [Key insights placeholder]
        </p>
        
        <h3>Why This Book Matters</h3>
        <p>
          [Importance placeholder]
        </p>
        
        <h3>How It Changed My Perspective</h3>
        <p>
          [Personal impact placeholder]
        </p>
        
        <h3>Who Should Read This Book</h3>
        <p>
          [Recommendations placeholder]
        </p>
        
        <h3>Final Thoughts</h3>
        <p>
          [Conclusion placeholder]
        </p>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          If you're interested in exploring these ideas further, consider purchasing the book:
        </p>
        <a 
          href="https://amzn.to/3XO2q8P" 
          target="_blank" 
          rel="nofollow noreferrer"
          className="inline-block bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Purchase on Amazon
        </a>
      </div>
    </div>
  );
}
