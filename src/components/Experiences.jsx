import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function Experiences() {
  const data = [
    {
      title: "Summer 2025",
      content: (
        <div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">Software engineering Intern - AI/ML, PM Accelerator</h2>
        <br/><br/>
        <p>
          <ul>
            <li>Developed AI/GenAI applications in an agile team with product managers, designers, and data scientists.</li>
            <li>Integrated ML models and APIs (e.g., ChatGPT) into full-stack code and optimized data pipelines.</li> 
            <li>Explored AI/ML frameworks, documented research, and reported progress weekly during weekly mentor sessions.</li>  
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
            <li>Built 5+ AI apps and APIs using NextJS, OpenAI, Pinecone, StripeAPI with 98% accuracy as seen by 1000 users </li>
         <li> Developed projects from design to deployment leading 4+ engineering fellows using MVC design patterns </li> 
       <li>   Coached by Amazon, Bloomberg and Capital One engineers on Agile, CI/CD, Git and microservice patterns  </li>  
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
