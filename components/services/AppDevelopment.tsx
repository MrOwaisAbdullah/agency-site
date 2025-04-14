import type React from "react";
import {
  Smartphone,
  Code,
  MonitorSmartphone,
  Cpu,
  Cloud,
  Shield,
  CheckCircle,
} from "lucide-react";
import CtaSection from "../CtaSection";
import ServiceCard from "../ui/ServiceCard2";
import WhyChooseUsSection from "../WhyChooseUs";
import FadeInSection from "../FadeInSection";
import FaqSection from "../Faq";
import ServiceHeroSection from "../ServiceHero";
// import Projects from "../Projects";

export default function AppDevelopmentService() {
  return (
    <div className="bg-[#212428] text-white">
      {/* Hero Section */}
      <ServiceHeroSection
        subheading="MOBILE APP DEVELOPMENT"
        heading="Launch Smarter Apps with"
        headingHighlight="Burraq Digits"
        heading2="From Idea to App Store — We&apos;ve Got You"
        paragraph="We design and develop mobile apps that are built for performance, clarity, and real-world use. Whether it&apos;s iOS, Android, or cross-platform - we deliver apps that actually get used."
        buttonText="START YOUR APP PROJECT"
        buttonLink="/contact"
      />

      {/* Main Services Section */}
      <section className="max-w-7xl mx-auto py-20">
        <div className="px-4">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">
              Build Apps That <span className="text-accent">Perform</span> — Not Just Exist
            </h2>
            <p className="text-gray-400 mb-16 max-w-3xl text-lg font-poppins">
              Whether you&apos;re launching a startup, scaling your business, or adding features to your platform — our app development team builds clean, user-friendly, and scalable mobile apps that are ready for real use and real users.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <h3 className="text-2xl font-bold mb-10 font-montserrat">
              Our Mobile App Development Services Include:
            </h3>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeInSection delay={0.3}>
              <ServiceCard
                icon={Smartphone}
                title="iOS & Android Development"
                description="We build native and cross-platform apps that perform smoothly across devices — tested and ready for launch."
              />
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <ServiceCard
                icon={MonitorSmartphone}
                title="Cross-Platform Solutions"
                description="Save time and cost with apps built for both Android and iOS — one codebase, consistent performance."
              />
            </FadeInSection>

            <FadeInSection delay={0.5}>
              <ServiceCard
                icon={Cpu}
                title="UI/UX for Mobile"
                description="We design app interfaces that are easy to use, intuitive to navigate, and optimized for daily use."
              />
            </FadeInSection>

            <FadeInSection delay={0.6}>
              <ServiceCard
                icon={Cloud}
                title="Backend Integration"
                description="We handle the backend setup and APIs, so your app syncs and scales properly from day one."
              />
            </FadeInSection>

            <FadeInSection delay={0.7}>
              <ServiceCard
                icon={Shield}
                title="Security & Testing"
                description="Security is baked into the build — with full QA and bug testing to ensure your app runs smoothly."
              />
            </FadeInSection>

            <FadeInSection delay={0.8}>
              <ServiceCard
                icon={Code}
                title="Ongoing Support & Updates"
                description="Once your app is live, we stick around to keep it updated, secure, and aligned with user needs."
              />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <FadeInSection>
          <h2 className="text-3xl text-center md:text-4xl font-bold mb-10 font-montserrat">
            Our <span className="text-accent">App Projects</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg font-poppins">
            Take a look at some of the apps we&apos;ve helped bring to life — built for performance, usability, and scale.
          </p>

          {/* <Projects service="App Development" /> */}
        </FadeInSection>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUsSection
        mainTitle="Why Choose"
        titleName="Burraq Digits"
        titleFor="App Development"
        benefits={[
          {
            icon: <CheckCircle size={20} />,
            title: "End-to-End Development",
            description: "From planning to publishing — we manage the full lifecycle of your app.",
          },
          {
            icon: <CheckCircle size={20} />,
            title: "Cross-Platform Expertise",
            description: "Build once, deploy everywhere. Save time and scale faster.",
          },
          {
            icon: <CheckCircle size={20} />,
            title: "Design-Driven Thinking",
            description: "Apps that not only function well — but feel intuitive and look clean.",
          },
          {
            icon: <CheckCircle size={20} />,
            title: "Ongoing Support",
            description: "Post-launch support and updates that keep your app relevant and secure.",
          },
        ]}
        featuresRight={[
          "iOS/Android Apps",
          "Cross-Platform Build",
          "In-App API Integrations",
          "Push Notifications",
        ]}
        featuresLeft={[
          "Scalable Backend",
          "Custom Dashboards",
          "Security & Compliance",
          "Performance Monitoring",
        ]}
        ctaCard={{
          title: "Let’s Build Your App — The Right Way",
          description:
            "Reach out now to start building your mobile app with a team that understands speed, scalability, and UX that keeps users coming back.",
          buttonText: "Schedule an App Consultation",
          buttonLink: "/contact",
        }}
      />

      {/* FAQ Section */}
      <FaqSection
        title="App Development"
        headingHighlight="FAQs"
        faqs={[
          {
            question: "Do you build apps for both iOS and Android?",
            answer: (
              <>
                Yes - we build for both platforms using either native development or cross-platform frameworks, depending on your needs.
              </>
            ),
          },
          {
            question: "How long does it take to build an app?",
            answer: (
              <>
                It depends on the features, platforms, and complexity. Basic apps can take 6-8 weeks, while more complex builds can take 3+ months. We&apos;ll give you a full timeline after our first meeting.
              </>
            ),
          },
          {
            question: "Can I make changes to the app after it’s launched?",
            answer: (
              <>
                Absolutely. We offer update and maintenance packages so your app keeps up with your business and your users.
              </>
            ),
          },
          {
            question: "Will the app be published to the App Store and Google Play?",
            answer: (
              <>
                Yes. We assist with store setup, publishing, and ensuring your app meets the necessary guidelines for approval.
              </>
            ),
          },
          {
            question: "What kind of support do you offer post-launch?",
            answer: (
              <>
                Our support includes bug fixes, performance updates, feature additions, and security patches to keep your app healthy long-term.
              </>
            ),
          },
        ]}
      />

      {/* CTA Section */}
      <CtaSection
        title="Build an App That Users Actually Love Using"
        paragraph="Let&apos;s turn your app idea into something people can&apos;t live without. Reach out today to start planning your project."
        buttonText="GET STARTED WITH APP DEVELOPMENT"
        buttonLink="/contact"
      />
    </div>
  );
}
