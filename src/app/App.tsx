import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { VendorCarousel } from "./components/VendorCarousel";
import { CategoryGrid } from "./components/CategoryGrid";
import { RecentWorks } from "./components/RecentWorks";
import { Testimonials } from "./components/Testimonials";
import { CallToAction } from "./components/CallToAction";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <VendorCarousel />
        <CategoryGrid />
        <RecentWorks />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
