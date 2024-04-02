import StyleGuide from "@/components/StyleGuide";
import Header from "@/components/Header";
import Hero from "@/components/hero";
import Menu from "@/components/Menu";
import Reservation from "@/components/Reservation";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="w-full max-w-[1440px] bg-white mx-auto overflow-hidden">
      {/*<StyleGuide />*/}
      <Header />
      <Hero />
      <Menu />
      <Reservation />
      <About />
      <div className='h-[4000px]'></div>
    </main>
  );
}