import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Education } from "@/sections/Education";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";
import AchievementCards from "./sections/Achievements";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Education />
        <AchievementCards></AchievementCards>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
