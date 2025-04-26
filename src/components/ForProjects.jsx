"use client";

import {Carousel} from "@/components/ui/carousel";
export function ForProjects() {
  const slideData = [
    {
      title: "FaithFlow - Social Media App",
      subtitle:"used Flutter and Firebase",
      link: "https://github.com/kennyyy5/social-media-app-flutter",
      button: "Visit",
      src: "https://plus.unsplash.com/premium_photo-1683977922495-3ab3ce7ba4e6?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZyZWUlMjBpbWFnZXMlMjBzb2NpYWwlMjBtZWRpYSUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "RAG Chatbot",
      subtitle:"used NextJS, AstraDB and ChatGPT API",
      link: "https://github.com/kennyyy5/rag-chatbot-f1",
      button: "Visit",
      src: "https://images.unsplash.com/photo-1738152878203-ee54be4e34e4?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxmcmVlJTIwaW1hZ2VzJTIwY2hhdGJvdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "TeamUp Chat app",
      subtitle:"used MERN and MongoDB",
      link: "https://github.com/kennyyy5/team-up-chat-app",
      button: "Visit",
      src: "https://images.unsplash.com/photo-1636743094110-5e153f93ad7e?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGZyZWUlMjBpbWFnZXMlMjBjaGF0JTIwYXBwJTIwbmV0d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Salita.co",
      subtitle:"used NextJS and Aceternity UI",
      link: "https://github.com/kennyyy5/salita-co",
      button: "Visit",
      src: "https://images.unsplash.com/photo-1557512724-931547195611?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZyZWUlMjBpbWFnZXMlMjB3ZWxsbmVzc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Prediction of Favorite Transport",
      subtitle:"used NumPy, TensorFlow and Panda",
      link: "https://github.com/kennyyy5/prediction-favorite-transport",
      button: "Visit",
      src: "https://images.unsplash.com/photo-1629283723460-bdc4c65096ef?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlcyUyMHRyYW5zcG9ydHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "AI Flashcard SAAS",
      subtitle:"used NextJS, Material UI and ChatGPT API",
      link: "https://devpost.com/software/flashcard-saas",
      button: "Visit",
      src: "https://images.unsplash.com/photo-1513710281312-7a43f9cdbfcc?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGZyZWUlMjBpbWFnZXMlMjBmbGFzaGNhcmR8ZW58MHx8MHx8fDA%3D",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
