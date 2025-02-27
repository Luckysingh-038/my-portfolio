import { Hero } from "@/components/home/Hero";
import { Experience } from "@/components/home/Experience";
import { Projects } from "@/components/home/Projects";
import { TechStackShowcase } from "@/components/home/TechStackShowcase";
import { Contact } from "@/components/home/Contact";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import { BlogNavLink } from "@/components/layout/BlogNavLink";
import { FloatingCubes } from "@/components/common/FloatingCubes";
import { GamesShowcase } from "@/components/home/GamesShowcase";
import ToolsShowcase from "../components/home/ToolsShowcase";

const HomePage = () => {
  return (
    <>
      <ScrollToTop />
      <BlogNavLink />
      <Hero />
      <Experience />
      <Projects />
      <TechStackShowcase />
      <GamesShowcase />
      <ToolsShowcase />
      <Contact />
      <FloatingCubes />
    </>
  );
};

export default HomePage;
