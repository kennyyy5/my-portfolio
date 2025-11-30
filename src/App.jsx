"use client";
import React from "react";
import Header from "./components/Header";
import Experiences from "./components/Experiences";
import { Projects } from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { cn } from "../lib/utils";

function App() {
  return (
    <>
      {/* Green grid background */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#16a34a_1px,transparent_1px),linear-gradient(to_bottom,#16a34a_1px,transparent_1px),linear-gradient(to_top,#16a34a_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#15803d_1px,transparent_1px),linear-gradient(to_bottom,#15803d_1px,transparent_1px),linear-gradient(to_top,#15803d_1px,transparent_1px)]"
        )}
      />

      {/* Main sections */}
      <Header />
      <Experiences />
      <Projects />

      <Footer />
    </>
  );
}

export default App;
