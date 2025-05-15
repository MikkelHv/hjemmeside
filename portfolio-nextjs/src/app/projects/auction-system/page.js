import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: 'Auction System - Mikkel Hvedegaard',
  description: 'A functioning auction system with microservice architecture built using Docker and modern web technologies.',
};

export default function AuctionSystemProject() {
  return (
    <div className="container mx-auto px-6 py-12 md:px-12 max-w-5xl">
      <Link href="/projects" className="text-primary hover:underline mb-6 inline-block">
        ← Back to Projects
      </Link>
      
      <div className="mb-12">
        <div className="text-sm font-medium text-primary mb-2">Academic</div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Functioning Auction System</h1>
        
        {/* Project Meta Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
          <div>
            <h3 className="font-bold text-lg mb-1">Time Period</h3>
            <p className="text-gray-600 dark:text-gray-400">Fall 2024</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Technologies</h3>
            <p className="text-gray-600 dark:text-gray-400">Docker, Microservices, .NET</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Project Type</h3>
            <p className="text-gray-600 dark:text-gray-400">School Team Project</p>
          </div>
        </div>
        
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl">
          A fully functional auction system built using microservice architecture, demonstrating modern software development techniques and containerization with Docker.
        </p>
      </div>
      
      {/* Main Project Image */}
      <div className="relative w-full h-96 mb-12 rounded-lg overflow-hidden shadow-lg">
        <Image 
          src="/images/projects/academic/auctionsystem/Skærmbillede 2024-12-19 131044.png"
          alt="Auction System with microservice architecture"
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
          This academic project involved creating a complete auction system where users can list items for sale, place bids, and manage their accounts. The system was designed using microservice architecture principles to ensure scalability, maintainability, and separation of concerns.
        </p>
        
        <h2 className="text-2xl font-bold mt-10 mb-4">Architecture</h2>
        <p>
          The application was built using a microservice architecture with the following components:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>User Service - Authentication and user management</li>
          <li>Auction Service - Core auction functionality</li>
          <li>Bidding Service - Bid management and processing</li>
          <li>Notification Service - Real-time updates and event handling</li>
          <li>API Gateway - Unified access point for frontend clients</li>
        </ul>
        
        <h2 className="text-2xl font-bold mt-10 mb-4">Technical Details</h2>
        <p>The project leveraged the following technologies and approaches:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Docker and Docker Compose - For containerization and service orchestration</li>
          <li>.NET Core - For building the microservices</li>
          <li>Event-driven communication - Using message queues for inter-service communication</li>
          <li>RESTful APIs - For client-service interactions</li>
          <li>Entity Framework Core - For database access</li>
        </ul>
        
        <h2 className="text-2xl font-bold mt-10 mb-4">Challenges and Solutions</h2>
        <p>Building a microservice-based application presented several interesting challenges:</p>
        
        <h3 className="text-xl font-bold mt-6 mb-2">Data Consistency</h3>
        <p>Maintaining data consistency across services required implementing the Saga pattern and careful transaction management to ensure that operations spanning multiple services would complete successfully or roll back appropriately.</p>
        
        <h3 className="text-xl font-bold mt-6 mb-2">Service Discovery</h3>
        <p>We implemented a service registry to allow services to discover and communicate with each other dynamically, enhancing the system's resilience and scalability.</p>
        
        <h2 className="text-2xl font-bold mt-10 mb-4">Outcome</h2>
        <p>The project successfully demonstrated the principles of microservice architecture and containerization. It received positive feedback from instructors for its robust design and implementation of modern architectural patterns.</p>
        
        <h2 className="text-2xl font-bold mt-10 mb-4">Reflection</h2>
        <p>This project provided valuable experience in designing distributed systems and handling the complexities of service orchestration. If revisiting this project, we would implement more comprehensive testing and consider using Kubernetes for container orchestration to enhance scalability.</p>
      </div>
    </div>
  );
}