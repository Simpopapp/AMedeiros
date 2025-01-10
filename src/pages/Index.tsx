import { Hero } from "@/components/Hero";
import { Summary } from "@/components/Summary";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Summary />
      <Experience />
      <Education />
    </div>
  );
};

export default Index;