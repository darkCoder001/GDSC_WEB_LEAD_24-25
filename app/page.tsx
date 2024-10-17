import Image from "next/image";
import { Header } from "@/components/header/header";
import { Hero } from "@/components/Hero/Hero";
import { Banking } from "@/components/Banking/page";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen bg-[#F2F0EF] overflow-clip">
      <Header />
      <Hero />
      <Banking />
      <Footer />
    </div>
  );
}
