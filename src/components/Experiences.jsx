import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function Experiences() {
  const data = [
    {
      title: "Winter 2025",
      content: (
        <div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">Enterprise Architecture Co-op, CIHI</h2>
        <br/><br/>
        <p>
          <ul>
            <li>Visualize and analyze the current status of IT resources </li>
            <li>Monitor PHI access and logging capabilities and ensure that CIHI technologies adheres to privacy legislation.</li> 
            <li>Assist with operational activities related to CIHI’s enterprise architecture.</li>      
          </ul>
        </p>
      </div>
      ),
    },
    {
      title: "Summer 2025",
      content: (
        <div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">Software engineering Intern - AI/ML, PM Accelerator</h2>
        <br/><br/>
        <p>
          <ul>
            <li>Developed AI applications in an agile team with product managers, designers, and data scientists.</li>
            <li>Implemented the frontend in Flutter for cross-platform support</li> 
          </ul>
        </p>
      </div>
      ),
    },
    {
      title: "Summer 2024",
      content: (
        <div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">Software engineering fellow, Headstarter AI</h2>
        <br/><br/>
        <p>
          <ul>
            <li>Worked in a 4-person agile team, applying MVC design patterns to streamline development and enhance code maintainability</li>
         <li> Designed, developed, and deployed 5+ AI applications and APIs with 98% accuracy, using Next.js, OpenAI, Stripe API, and Pinecone.</li>  
          </ul>
        </p>
      </div>
      ),
    },
    {
      title: "Early 2024",
      content: (
       <div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">Web Development Team member, Riipen</h2>
        <br/><br/>
        <p>
          <ul>
            <li>Developed a business website using JavaScript, HTML/CSS completing ideation and implementing the site, leading to a 50% increase in customer reach</li>
         <li>Designed user flows and prototypes using Figma and flow maps to enhance UX/UI by 60%</li> 
       <li>Optimized website performance resulting in a 30% increase in online sales</li>  
          </ul>
        </p>
      </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
