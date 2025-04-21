import type React from "react";
import {
  BusFront,
  Landmark,
  MoveRight,
  MapPin,
  Megaphone,
  CheckCircle,
} from "lucide-react";
import CtaSection from "../CtaSection";
import ServiceCard from "../ui/ServiceCard2";
import WhyChooseUsSection from "../WhyChooseUs";
import FadeInSection from "../FadeInSection";
import FaqSection from "../Faq";
import ServiceHeroSection from "../ServiceHero";
// import Projects from "../Projects";

export default function OutdoorMarketingService() {
  return (
    <div className="bg-[#212428] text-white">
      {/* Hero Section */}
      <ServiceHeroSection
        subheading="OUTDOOR MARKETING"
        heading="Street-Level Visibility with"
        headingHighlight="Outdoor Marketing"
        heading2="Your Brand, Seen Everywhere"
        paragraph="We take your brand out into the real world - from bustling streets to daily commutes. Outdoor marketing that&apos;s strategic, visible, and impossible to ignore."
        buttonText="START OUTDOOR MARKETING"
        buttonLink="/contact"
      />

      {/* Main Services Section */}
      <section className="max-w-7xl mx-auto py-20">
        <div className="px-4">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">
              Real-World Reach with <span className="text-accent">Outdoor Campaigns</span> That Work
            </h2>
            <p className="text-gray-400 mb-16 max-w-3xl text-lg font-poppins">
              We help you take your brand beyond the screen - into neighborhoods, roadsides, markets, and transit routes. Our outdoor marketing connects you with people where they live, shop, and move.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <h3 className="text-2xl font-bold mb-10 font-montserrat">
              Outdoor Advertising Services We Offer:
            </h3>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeInSection delay={0.3}>
              <ServiceCard
                icon={MoveRight}
                title="Rickshaw Branding"
                description="Get your message moving — literally. We wrap rickshaws with eye-catching visuals that travel through the busiest areas all day long."
              />
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <ServiceCard
                icon={BusFront}
                title="Bus & Bus Stand Marketing"
                description="Your brand on public buses and key bus stops - reaching thousands of commuters every single day."
              />
            </FadeInSection>

            <FadeInSection delay={0.5}>
              <ServiceCard
                icon={Landmark}
                title="Billboard Advertising"
                description="High-impact billboards placed in premium locations across the city — big, bold, and highly visible."
              />
            </FadeInSection>

            <FadeInSection delay={0.6}>
              <ServiceCard
                icon={MapPin}
                title="Signboard Placement"
                description="From local markets to main roads, we install custom signboards that target specific audiences in specific areas."
              />
            </FadeInSection>

            <FadeInSection delay={0.7}>
              <ServiceCard
                icon={Megaphone}
                title="Branded Installations"
                description="We design outdoor stands, stalls, and street displays that help your brand connect with passersby on the ground level."
              />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <FadeInSection>
          <h2 className="text-3xl text-center md:text-4xl font-bold mb-10 font-montserrat">
            Outdoor Work That <span className="text-accent">Stands Out</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg font-poppins">
            Check out how we&apos;ve helped brands dominate the streets - with strong messaging and strategic placement that brings results.
          </p>

          {/* <Projects service="Outdoor Marketing" /> */}
        </FadeInSection>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUsSection
        mainTitle="Why Outdoor Campaigns Work with"
        titleName="Burraq Digits"
        titleFor="Outdoor Marketing"
        benefits={[
          {
            icon: <CheckCircle size={20} />,
            title: "Hyperlocal Reach",
            description: "We place your brand where your audience already is — in neighborhoods, markets, and daily routes.",
          },
          {
            icon: <CheckCircle size={20} />,
            title: "High Visibility, All Day",
            description: "From morning commutes to evening traffic — your message stays in sight and on repeat.",
          },
          {
            icon: <CheckCircle size={20} />,
            title: "Design + Execution",
            description: "We handle the creative, production, and placement — so you don’t have to worry about the details.",
          },
          {
            icon: <CheckCircle size={20} />,
            title: "Scalable for Any Budget",
            description: "We offer flexible packages for city-wide impact or targeted local branding.",
          },
        ]}
        featuresRight={[
          "Rickshaw Campaigns",
          "Billboard Placement",
          "Bus Stop Visibility",
          "Signboard Design",
        ]}
        featuresLeft={[
          "Market-Level Targeting",
          "Full Branding Wraps",
          "Local Zone Coverage",
          "Custom Outdoor Activations",
        ]}
        ctaCard={{
          title: "Let’s Get Your Brand on the Streets",
          description:
            "Want to be seen? We’ll make sure your message hits where it counts — on roads, in markets, and right in front of your audience.",
          buttonText: "START YOUR OUTDOOR CAMPAIGN",
          buttonLink: "/contact",
        }}
      />

      {/* FAQ Section */}
      <FaqSection
        title="Outdoor Marketing"
        headingHighlight="FAQs"
        faqs={[
          {
            question: "What areas do you cover for outdoor marketing?",
            answer: (
              <>
                We operate mainly in Karachi but can extend coverage to other cities in Pakistan depending on the scale and needs of the campaign.
              </>
            ),
          },
          {
            question: "Do you design the ads or just place them?",
            answer: (
              <>
                Both! Our team handles creative design, print production, and the physical placement of all materials.
              </>
            ),
          },
          {
            question: "How long do campaigns usually run?",
            answer: (
              <>
                That depends on your budget and objectives. We offer short-term (1-2 weeks) and long-term (monthly/quarterly) campaign options.
              </>
            ),
          },
          {
            question: "Is outdoor marketing still effective?",
            answer: (
              <>
                Absolutely. It reaches people in real-time, builds trust through repetition, and boosts brand visibility — especially in areas with high foot and vehicle traffic.
              </>
            ),
          },
          {
            question: "Can I combine outdoor with digital marketing?",
            answer: (
              <>
                100%. Many of our clients combine outdoor visibility with digital campaigns for a bigger impact — and we handle both under one roof.
              </>
            ),
          },
        ]}
      />

      {/* CTA Section */}
      <CtaSection
        title="Get Your Brand in Front of Thousands - Daily"
        paragraph="Let&apos;s take your marketing out into the real world. We&apos;ll help you claim streets, buses, boards, and beyond — with a plan that fits your goals."
        buttonText="GET STARTED WITH OUTDOOR MARKETING"
        buttonLink="/contact"
      />
    </div>
  );
}
