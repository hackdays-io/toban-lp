import Layout from "@/components/layouts/base";
import HeroSection from "../components/organisms/HeroSection";
import ProblemSolution from "../components/organisms/ProblemSolution";
import HowItWorks from "../components/organisms/HowItWorks";
import UseCases from "../components/organisms/UseCases";
import Features from "../components/organisms/Features";
import SecurityStack from "../components/organisms/SecurityStack";
import TrackRecord from "../components/organisms/TrackRecord";
import AwardsMedia from "../components/organisms/AwardsMedia";
import GettingStarted from "../components/organisms/GettingStarted";
import Pricing from "../components/organisms/Pricing";
import Faq from "../components/organisms/Faq";
import Footer from "../components/organisms/Footer";
import CaseStudies from "../components/organisms/CaseStudies";
import InfiniteLoop from "../components/organisms/InfiniteLoop";

export default function Home() {
  return (
    <Layout pageTitle="Toban LP">
      <div className="page">
        <main className="main">
          <HeroSection />
          <InfiniteLoop />
          <ProblemSolution />
          <HowItWorks />
          <UseCases />
          <Features />
          <SecurityStack />
          <TrackRecord />
          <CaseStudies />
          <AwardsMedia />
          <GettingStarted />
          {/* <Pricing /> */}
          <Faq />
          <Footer />
        </main>
      </div>
    </Layout>
  );
}
