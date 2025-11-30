"use client";
import React from "react";
import { LinkPreview } from "../components/ui/link-preview";

export function Projects() {
  return (
    
    <div className="flex w-full justify-center items-center h-[100rem] flex-col px-2">
               <h1 className="m-5 text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
                PROJECTS
              </h1>
      <p
        className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
       I developed {" "}
        <LinkPreview url="https://github.com/kennyyy5/team-up-chat-app" className="font-bold">
          TeamUp Chat app, 
        </LinkPreview>{" "}
        a full-stack MERN chat app with real-time WebSockets (Socket.io), JWT/bcrypt
authentication, and responsive UI.{" "}
       
      </p>
      <p
        className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
       I developed {" "}
        <LinkPreview url="https://github.com/kennyyy5/ask-pdf" className="font-bold">
          AskPDF, 
        </LinkPreview>{" "}
      an  AI chatbot with RAG to answer PDF queries;
used AstraDB, OpenAI embeddings, and Next.js/MUI frontend.{" "}
       
      </p>

                <p
        className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
      At GDSCHacks, I co-developed {" "}
        <LinkPreview url="https://devpost.com/software/pinpoint-maximizing-your-nutrition-and-minimizing-your-cost?ref_content=user-portfolio&ref_feature=in_progress" className="font-bold">
          PinPoint, 
        </LinkPreview>{" "}
      full-stack AI grocery planner recommending budget-friendly,
diet-specific items with chatbot for meals and pricing.{" "}
       
      </p>
          <p
        className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
   I built {" "}
        <LinkPreview url="https://interview-help.netlify.app/" className="font-bold">
         Interview Help, 
        </LinkPreview>{" "}
      full-stack Next.js app generating role-specific interview questions using OpenAI API and
TailwindCSS for responsive UI.{" "}
       
      </p>
         <p
        className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
   I cleaned and transformed raw customer data into an interactive Excel dashboard {" "}
        <LinkPreview url="https://github.com/kennyyy5/Bike-Buyer-Dashboard-Excel-" className="font-bold">
         Bike Buyer Dashboard, 
        </LinkPreview>{" "}
      for buyer
insights and trend analysis.{" "}

       
      </p>
        <p
        className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
   I completed {" "}
        <LinkPreview url="https://github.com/kennyyy5/hackthebox-labs" className="font-bold">
         HackTheBox 
        </LinkPreview>{" "}
Sherlock labs covering disk forensics, Wireshark, Zeek, MITRE ATT&CK
alignment{" "}
       
      </p>
              <p
        className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
   I wrote a {" "}
        <LinkPreview url="https://github.com/kennyyy5/Crypto-API-Automation-with-Python" className="font-bold">
         Crypto API Automation Script
        </LinkPreview>{" "}
 to automte real-time retrieval and structuring of cryptocurrency data using
Python, Pandas, and the CoinMarketCap API.{" "}
       
      </p>
    </div>
  );
}
