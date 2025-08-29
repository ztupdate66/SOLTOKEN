import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-bg">
      <Header />
      <Hero />
      <Stats />
      <Footer />
    </div>
  );
};

export default Index;
