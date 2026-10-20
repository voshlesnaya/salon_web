import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Services from "../components/Services";
import SurgeryHighlight from "../components/SurgeryHighlight";
import ShowcaseSections from "../components/ShowcaseSections";

export default function Home() {
  return (
    <main id="top">
      <Header />
      <Hero />
      <Services />
      <SurgeryHighlight />
      <ShowcaseSections />
      <Footer />
    </main>
  );
}
