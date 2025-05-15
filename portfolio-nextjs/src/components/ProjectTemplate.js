import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: 'Project Title - Mikkel Hvedegaard',
  description: 'Description of the project - replace with actual project details.',
};

export default function ProjectTemplate() {
  return (
    <div className="container mx-auto px-6 py-12 md:px-12 max-w-5xl">
      <Link href="/projects" className="text-primary hover:underline mb-6 inline-block">
        ← Back to Projects
      </Link>
      
      <div className="mb-12">
        <div className="text-sm font-medium text-primary mb-2">[Category: Technical/Academic/Personal]</div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">[Project Title]</h1>
        
        {/* Project Meta Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
          <div>
            <h3 className="font-bold text-lg mb-1">Time Period</h3>
            <p className="text-gray-600 dark:text-gray-400">[Month Year - Month Year]</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Technologies</h3>
            <p className="text-gray-600 dark:text-gray-400">[Key technologies used]</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Project Type</h3>
            <p className="text-gray-600 dark:text-gray-400">[Solo/Team/School etc.]</p>
          </div>
        </div>
        
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl">
          [Brief compelling project description - 1-2 sentences that capture the essence]
        </p>
      </div>
      
      {/* Main Project Image */}
      <div className="relative w-full h-96 mb-12 rounded-lg overflow-hidden shadow-lg">
        <Image 
          src="/images/projects/[folder]/[image].jpg"
          alt="[Project Name]"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          style={{ objectFit: 'cover' }}
          className="rounded-lg"
        />
      </div>
      
      <div className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
        <p>
          [Detailed description of what the project is about, its purpose, and the core problem it solves]
        </p>
        
        <h2 className="text-2xl font-bold mt-10 mb-4">Development Process</h2>
        <p>[Description of how the project was approached, methodologies used, etc.]</p>
        
        {/* Technical details section - optional based on project type */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Technical Details</h2>
        <p>The project leveraged the following technologies and approaches:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>[Technology/Approach 1] - [Brief explanation]</li>
          <li>[Technology/Approach 2] - [Brief explanation]</li>
          <li>[Technology/Approach 3] - [Brief explanation]</li>
        </ul>
        
        {/* Additional images - adjust as needed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image 
              src="/images/projects/[folder]/[image1].jpg"
              alt="[Description of image 1]"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image 
              src="/images/projects/[folder]/[image2].jpg"
              alt="[Description of image 2]"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
        </div>
        
        {/* Challenges and Solutions - optional based on project type */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Challenges and Solutions</h2>
        <p>[Description of main challenges faced during the project]</p>
        
        <h3 className="text-xl font-bold mt-6 mb-2">[Challenge 1 Title]</h3>
        <p>[Description of the challenge and how it was overcome]</p>
        
        <h3 className="text-xl font-bold mt-6 mb-2">[Challenge 2 Title]</h3>
        <p>[Description of the challenge and how it was overcome]</p>
        
        {/* Outcome section */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Outcome</h2>
        <p>[Description of the final result, achievements, metrics if available]</p>
        
        {/* Reflection section - optional */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Reflection</h2>
        <p>[What was learned from the project, what might be done differently next time]</p>
        
        {/* Links section - if applicable */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Links</h2>
        <ul className="list-disc pl-6 mb-6">
          <li><a href="#" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
          <li><a href="#" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Live Demo</a></li>
          <li><a href="#" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Documentation</a></li>
        </ul>
      </div>
    </div>
  );
}
