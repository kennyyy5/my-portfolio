import { cn } from "../../lib/utils";
import { ForProjects } from "./ForProjects";



export function Projects() {
  return (
    <section className="relative min-h-screen w-full bg-white dark:bg-black overflow-hidden flex items-center justify-center">
         {/* 1) Grid & dot background */}
         <div
           className={cn(
             "absolute inset-0 z-0",
             "[background-size:40px_40px]",
             "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
             "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
           )}
         />
   
         {/* 2) Radial fade mask */}
         <div className="absolute inset-0 z-0 pointer-events-none bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
   
         {/* 3) Hero content */}
         <div className="relative z-10 w-full max-w-7xl p-4 text-center">
           
             <div className="flex flex-col items-center space-y-4">
                 <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
                   PROJECTS
                 </h1>     
           </div>
   
           {/* 4) About section below hero */}
           <div className="mt-16">
             <ForProjects />
           </div>
         </div>
       </section>
  );
}

