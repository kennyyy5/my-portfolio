

export function Projects2() {
    return(
  <div className="container px-4 py-5" id="projects">
  <h1 className="display-5 fw-bold text-body-emphasis text-center">Projects</h1>
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
    <div className="col d-flex align-items-start">
      <svg
        className="bi text-body-secondary flex-shrink-0 me-3"
        width="1.75em"
        height="1.75em"
      >
        <use xlinkHref="#bootstrap" />
      </svg>
      <div>
      <a href="https://github.com/kennyyy5/team-up-chat-app">  <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Team Up chat app</h3> </a>
        <p>created a chat app for people in tech to connect with each other for hackathons and networking using MERN and socket.io.</p>
      </div>
    </div>
    <div className="col d-flex align-items-start">
      <svg
        className="bi text-body-secondary flex-shrink-0 me-3"
        width="1.75em"
        height="1.75em"
      >
        <use xlinkHref="#cpu-fill" />
      </svg>
      <div>
       <a href="https://github.com/kennyyy5/music-player-flutter"> <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Music player app</h3> </a>
        <p>music player app built with flutter</p>
      </div>
    </div>
    <div className="col d-flex align-items-start">
      <svg
        className="bi text-body-secondary flex-shrink-0 me-3"
        width="1.75em"
        height="1.75em"
      >
        <use xlinkHref="#calendar3" />
      </svg>
      <div>
      <a href="https://github.com/kennyyy5/ecommerce-app-flutter"><h3 className="fw-bold mb-0 fs-4 text-body-emphasis">eCommerce App</h3> </a>  
        <p>eCommerce App built with flutter</p>
      </div>
    </div>
    <div className="col d-flex align-items-start">
      <svg
        className="bi text-body-secondary flex-shrink-0 me-3"
        width="1.75em"
        height="1.75em"
      >
        <use xlinkHref="#home" />
      </svg>
      <div>
      <a href="https://github.com/kennyyy5/ai-rag-rate-my-prof"> <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">AI RAG Rate my prof</h3> </a> 
        <p>simulates a rate my prof chatbot using RAG and AI.</p>
      </div>
    </div>
    <div className="col d-flex align-items-start">
      <svg
        className="bi text-body-secondary flex-shrink-0 me-3"
        width="1.75em"
        height="1.75em"
      >
        <use xlinkHref="#speedometer2" />
      </svg>
      <div>
       <a href="https://github.com/kennyyy5/social-media-app-flutter"> <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Social Media App</h3> </a>
        <p>social media app built with flutter.</p>
      </div>
    </div>
    <div className="col d-flex align-items-start">
      <svg
        className="bi text-body-secondary flex-shrink-0 me-3"
        width="1.75em"
        height="1.75em"
      >
        <use xlinkHref="#speedometer2" />
      </svg>
      <div>
       <a href="https://devpost.com/software/flashcard-saas"> <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">AI Flashcard SaaS</h3> </a>
        <p>generate flashcards given a keyword using AI and uses firebase for databse functionality.</p>
      </div>
    </div>
  </div>
</div>


    )
}