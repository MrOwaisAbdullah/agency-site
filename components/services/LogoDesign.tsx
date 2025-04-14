import type React from "react";
import {
  PenTool,
  Palette,
  BadgeCheck,
  Layers,
  Brush,
  Asterisk,
  CheckCircle,
} from "lucide-react";
import CtaSection from "../CtaSection";
import ServiceCard from "../ui/ServiceCard2";
import WhyChooseUsSection from "../WhyChooseUs";
import FadeInSection from "../FadeInSection";
import FaqSection from "../Faq";
import ServiceHeroSection from "../ServiceHero";
// import Projects from "../Projects";

export default function LogoDesignService() {
  return (
    <div className="bg-[#212428] text-white">
      {/* Hero Section */}
      <ServiceHeroSection
        subheading="LOGO DESIGN SERVICES"
        heading="Branding Starts With a Bold"
        headingHighlight="Logo"
        heading2="Let Your Identity Speak Clearly"
        paragraph="Your logo is the face of your brand — make sure it&apos;s saying the right thing. We design logos that are sharp, versatile, and unforgettable."
        buttonText="GET STARTED WITH LOGO DESIGN"
        buttonLink="/contact"
      />

      {/* Main Services Section */}
      <section className="max-w-7xl mx-auto py-20">
        <div className="px-4">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">
              Stand Out From the Start with <span className="text-accent">Logo Designs</span> That Speak Volumes
            </h2>
            <p className="text-gray-400 mb-16 max-w-3xl text-lg font-poppins">
              A great logo makes people remember you. At Burraq Digits, we design visual identities that are clean, scalable, and instantly recognizable. Whether you&apos;re starting fresh or refreshing your look - we&apos;ll make sure you&apos;re making the right first impression.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <h3 className="text-2xl font-bold mb-10 font-montserrat">
              What&apos;s Included in Our Logo Design Services:
            </h3>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeInSection delay={0.3}>
              <ServiceCard
                icon={PenTool}
                title="Custom Logo Concepts"
                description="We create original logo concepts based on your brand vision, values, and target audience."
              />
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <ServiceCard
                icon={Palette}
                title="Color Psychology & Typography"
                description="We choose colors and fonts that support your brand&apos;s personality and connect with your audience."
              />
            </FadeInSection>

            <FadeInSection delay={0.5}>
              <ServiceCard
                icon={BadgeCheck}
                title="Scalable Vector Files"
                description="Your logo will look crisp and clean across all sizes and formats — from favicons to billboards."
              />
            </FadeInSection>

            <FadeInSection delay={0.6}>
              <ServiceCard
                icon={Layers}
                title="Multiple Layouts"
                description="Get vertical, horizontal, icon-only, and text-only logo variations — all ready to use on different platforms."
              />
            </FadeInSection>

            <FadeInSection delay={0.7}>
              <ServiceCard
                icon={Brush}
                title="Style Guide"
                description="A mini brand guide that helps you use your logo properly across print and digital platforms."
              />
            </FadeInSection>

            <FadeInSection delay={0.8}>
              <ServiceCard
                icon={Asterisk}
                title="Logo Refresh"
                description="Already have a logo? We&apos;ll modernize and refine it while keeping your identity intact."
              />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <FadeInSection>
          <h2 className="text-3xl text-center md:text-4xl font-bold mb-10 font-montserrat">
            Logos That <span className="text-accent">Stick</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg font-poppins">
            Scroll through some of our past logo design work — bold marks, clean lines, and memorable visuals that help brands stay top-of-mind.
          </p>

          {/* <Projects service="Logo Design" /> */}
        </FadeInSection>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUsSection
        mainTitle="Why Brands Trust"
        titleName="Burraq Digits"
        titleFor="Logo Design"
        benefits={[
          {
            icon: <CheckCircle size={20} />,
            title: "Strategic, Not Just Stylish",
            description: "We design with intention — every shape, color, and element has a purpose.",
          },
          {
            icon: <CheckCircle size={20} />,
            title: "Tailored To You",
            description: "We don’t do cookie-cutter logos. Your brand gets its own visual identity.",
          },
          {
            icon: <CheckCircle size={20} />,
            title: "Ready for All Formats",
            description: "Print, digital, merchandise — your logo will work everywhere it needs to.",
          },
          {
            icon: <CheckCircle size={20} />,
            title: "Quick Turnaround",
            description: "We move fast without compromising on quality or creativity.",
          },
        ]}
        featuresRight={[
          "Vector Source Files",
          "Multiple Variations",
          "Typography & Color Selection",
          "Style Guide",
        ]}
        featuresLeft={[
          "Revisions Included",
          "Transparent Background",
          "Print-Ready Formats",
          "Responsive Logo Versions",
        ]}
        ctaCard={{
          title: "Ready to Build a Brand That Stands Out?",
          description:
            "Let’s create a logo that speaks for your brand — even before you do. Book a free logo consultation today.",
          buttonText: "Start Your Logo Project",
          buttonLink: "/contact",
        }}
      />

      {/* FAQ Section */}
      <FaqSection
        title="Logo Design"
        headingHighlight="FAQs"
        faqs={[
          {
            question: "How many logo concepts do I get?",
            answer: (
              <>
                Typically, we start with 2-3 initial logo concepts based on your brand brief. From there, we narrow down to the final version with your feedback and revisions.
              </>
            ),
          },
          {
            question: "Will I get the original files?",
            answer: (
              <>
                Absolutely. You&apos;ll receive all necessary files including vector formats (AI, EPS, SVG), PNGs, and JPGs — ready for web, print, and everything else.
              </>
            ),
          },
          {
            question: "Can you redesign or update my current logo?",
            answer: (
              <>
                Yes! If your current logo needs a refresh, we can modernize it while keeping its core identity intact.
              </>
            ),
          },
          {
            question: "Do you provide brand guidelines with the logo?",
            answer: (
              <>
                Yes. Every logo package includes a basic style guide with color codes, font usage, and clear rules on how to use your logo properly.
              </>
            ),
          },
          {
            question: "How long does it take to complete a logo?",
            answer: (
              <>
                The timeline varies depending on feedback loops, but most logo design projects take around 7-10 business days from start to final delivery.
              </>
            ),
          },
        ]}
      />

      {/* CTA Section */}
      <CtaSection
        title="Let&apos;s Design a Logo That Actually Means Something"
        paragraph="If your logo doesn&apos;t tell your story in one glance — it&apos;s time to fix that. Reach out to us for a visual identity that connects instantly."
        buttonText="GET STARTED WITH LOGO DESIGN"
        buttonLink="/contact"
      />
    </div>
  );
}
