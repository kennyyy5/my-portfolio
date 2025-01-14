import IconCloud from "../components/magicui/IconCloud";

const slugs = [
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "amazonaws",
  "postgresql",
  "firebase",
  "vercel",
  "docker",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
  "bootstrap","tailwindcss","sqlite","mongodb","mongoose","c","flutter","dart","androidstudio"
];

export function IconCloudDemo() {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg  bg-background px-20 pb-20 pt-8 icon-cloud">
      
      <IconCloud iconSlugs={slugs} />
      
    </div>
  );
}
