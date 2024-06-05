import About from "@/components/About-Me/about";
import Contact from "@/components/Contact/contact";
import Hero from "@/components/hero";
import MyService from "@/components/My-Services/myService";
import Avantage from "@/components/My-Skills/avantage";
import MyProjects from "@/components/Projects/myProjects";
import MyQualifications from "@/components/Qualifications/myQualifications";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-10 bg-power__black py-12">
      <Hero />
      <About />
      <MyQualifications />
      <MyService />
      <Avantage />
      <MyProjects />
      <Contact />
    </main>
  );
}
