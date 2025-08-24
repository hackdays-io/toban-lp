import Layout from "@/components/layouts/base";
import AwardsMedia from "../components/organisms/AwardsMedia";
import CaseStudies from "../components/organisms/CaseStudies";
import Faq from "../components/organisms/Faq";
import Features from "../components/organisms/Features";
import GettingStarted from "../components/organisms/GettingStarted";
import HeroSection from "../components/organisms/HeroSection";
import HowItWorks from "../components/organisms/HowItWorks";
import InfiniteLoop from "../components/organisms/InfiniteLoop";
import Pricing from "../components/organisms/Pricing";
import ProblemSolution from "../components/organisms/ProblemSolution";
import SecurityStack from "../components/organisms/SecurityStack";
import TrackRecord from "../components/organisms/TrackRecord";
import UseCases from "../components/organisms/UseCases";

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
        </main>
      </div>
    </Layout>
  );
}
