import { Map } from "@/components/map";
import { Hero } from "@/components/hero";
import { Menu } from "@/components/menu";
import { About } from "@/components/about";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Reservation } from "@/components/reservation";

export default function Home() {
  return (
    <main className="w-full max-w-[1440px] mx-auto bg-white overflow-hidden">
      <Header />
      <Hero />
      <Menu />
      <Reservation />
      <About />
      <Map />
      <Footer />
    </main>
  );
}
