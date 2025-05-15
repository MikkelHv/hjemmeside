import Head from 'next/head';

export const metadata = {
  title: 'About Me - Mikkel Hvedegaard',
  description: 'Learn more about Mikkel Hvedegaard, IT Architecture student and tech enthusiast.',
};

export default function About() {
  return (
    <div className="container mx-auto px-6 py-12 md:px-12 max-w-4xl">      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">About Me</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300">Hi, I&apos;m Mikkel.</p>
      </div>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-12 after:bg-primary">
          Education & Professional Path
        </h2>
        <div className="text-gray-700 dark:text-gray-300 space-y-4">          <p className="leading-relaxed">
            I&apos;m studying IT Architecture at Erhvervsakademi Aarhus, and I&apos;m currently interning at Vestas, 
            working with system design and real-world architectural challenges.
          </p>
          <p className="leading-relaxed">
            I&apos;ve always been drawn to technology, not just how it works, but how it shapes the way we live and think. 
            At one point I even ran my own business making handmade knives. It was anti-tech in a way, but taught 
            me a lot about systems, people, and the importance of creating something real. I&apos;ve learned a lot through 
            failing and starting over.
          </p>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b-2 border-primary w-max">
          Philosophy & Perspective
        </h2>
        <div className="text-gray-700 dark:text-gray-300 space-y-4">
          <p className="leading-relaxed">
            But tech is only half the picture. I believe in using technology to build a better life, 
            but I also value the raw, the real, and the natural. Being offline, being outdoors, being present.
          </p>
          <p className="leading-relaxed">            After losing my father, I turned to books, not for escape, but for clarity. Writers like 
            David Goggins and Jordan B. Peterson helped me reframe how I see adversity, identity, and ambition. 
            I believe suffering is part of life, and while you can&apos;t avoid it, you can keep moving forward 
            toward the light at the end of the tunnel.
          </p>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b-2 border-primary w-max">
          This Website
        </h2>
        <div className="text-gray-700 dark:text-gray-300">          <p className="leading-relaxed">
            This site is where I collect and share the projects, books, and thoughts that help me move forward. 
            I&apos;m into systems thinking, personal growth, and building small things that solve real problems.
          </p>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b-2 border-primary w-max">
          Interests & Activities
        </h2>
        <div className="text-gray-700 dark:text-gray-300">          <p className="leading-relaxed mb-8">
            Eventually I&apos;ll also be writing about fitness, walking 100km&apos;s, brewing kombucha, 
            experimenting with side hustles, and reflecting on life in general. Playing football 
            (Serie 5 — the lowest tier in Denmark) with the boys is something that helps too. 
            That sense of community, frustration release, and movement matters more than people think.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-sm text-center">
              <div className="text-4xl text-primary mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <p className="text-sm font-medium">Long-distance Walking</p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-sm text-center">
              <div className="text-4xl text-primary mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <p className="text-sm font-medium">Kombucha Brewing</p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-sm text-center">
              <div className="text-4xl text-primary mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <p className="text-sm font-medium">Reading</p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-sm text-center">
              <div className="text-4xl text-primary mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <p className="text-sm font-medium">Football</p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-sm text-center">
              <div className="text-4xl text-primary mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-sm font-medium">Systems Design</p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-sm text-center">
              <div className="text-4xl text-primary mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <p className="text-sm font-medium">Side Projects</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="text-center mb-12">        <p className="text-xl text-gray-700 dark:text-gray-300">
          If any of that resonates with you, I&apos;m glad you&apos;re here.
        </p>
      </section>
    </div>
  );
}