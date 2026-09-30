import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Problem from "./components/Problem/Problem.jsx";
import LiveDemo from "./components/LiveDemo/LiveDemo.jsx";
import HowItWorks from "./components/HowItWorks/HowItWorks.jsx";
import Dialects from "./components/Dialects/Dialects.jsx";
import UseCases from "./components/UseCases/UseCases.jsx";
import Numbers from "./components/Numbers/Numbers.jsx";
import Integrations from "./components/Integrations/Integrations.jsx";
import Privacy from "./components/Privacy/Privacy.jsx";
import Stories from "./components/Stories/Stories.jsx";
import Pricing from "./components/Pricing/Pricing.jsx";
import Faq from "./components/Faq/Faq.jsx";
import Cta from "./components/Cta/Cta.jsx";
import Footer from "./components/Footer/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <LiveDemo />
        <HowItWorks />
        <Dialects />
        <UseCases />
        <Numbers />
        <Integrations />
        <Privacy />
        <Stories />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
