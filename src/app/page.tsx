import About from "@/components/about";
import Avantage from "@/components/avantage";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import MyService from "@/components/myService";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-10 bg-power__black py-12">
      <Hero />
      <About />
      <MyService />
      <Avantage />
      <Contact />
    </main>
  );
}
