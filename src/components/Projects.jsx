import { FocusCards } from "@/components/ui/focus-cards";

export function Projects() {
  const cards = [
    {
      title: "Salita.co",
      src: "public/salita-co-screenshot.png",
      github: "https://github.com/kennyyy5/salita-co",
    },
    {
      title: "TubeDigest AI",
      src: "public/tube-digest.png",
      github: "https://github.com/kennyyy5/tubedigest-ai"
    },
    {
      title: "Team Up Chat App",
      src: "public/team-up.png",
      github: "https://github.com/kennyyy5/team-up-chat-app"
    },
    {
      title: "AI RAG Rate my prof",
      src: "public/ai-rag.png",
      github: "https://github.com/kennyyy5/ai-rag-rate-my-prof"
    },
    {
      title: "Lyric Findr",
      src: "public/lyric-findr-screenshot.png",
      github: "https://github.com/kennyyy5/lyric-findr"
    },
    
    {
      title: "Flashcard SAAS",
      src: "public/flashcard-saas.png",
      github: "https://devpost.com/software/flashcard-saas"
    }
    
  ];

  return(
  <div > 
    <h1 className="display-5 fw-bold text-body-emphasis view text-center my-2">Experience</h1>
  <FocusCards cards={cards} />
  </div>
  )
  ;
}
