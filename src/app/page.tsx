import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-5 bg-black py-24">
      <Hero />
      <About />
      <Contact />
    </main>
  );
}
