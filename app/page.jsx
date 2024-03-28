import StyleGuide from "@/components/StyleGuide";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="w-full max-w-[1440px] bg-white mx-auto overflow-hidden">
      {/*<StyleGuide />*/}
      <Hero />
      <div className='h-[4000px]'></div>
    </main>
  );
}