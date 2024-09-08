import React from "react";
import Header from "./components/server/Header";
import Intro from "./components/server/Intro";
import Projects from "./components/server/Projects";
import AboutMe from "./components/server/AboutMe";
import SmallProjects from "./components/server/SmallProjects";
import Contact from "./components/server/Contact";
import Footer from "./components/server/Footer";
import Download from "./components/client/Download";
export default function page() {
  return (
    <main>
      <Header />
      <Intro />
      <Projects />
      <SmallProjects />
      <AboutMe />
      <Contact />
      <Footer />
    </main>
  );
}
