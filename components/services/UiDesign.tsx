import type React from "react";
import {
  Smartphone,
  Layout,
  Eye,
  MousePointerClick,
  UserCheck,
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

export default function UiUxDesignService() {
  return (
    <div className="bg-[#212428] text-white">
      {/* Hero Section */}
      <ServiceHeroSection
        subheading="UI/UX DESIGN SERVICES"
        heading="User-Focused Design by"
        headingHighlight="Burraq Digits"
        heading2="Designs That Work as Good as They Look"
        paragraph="We design interfaces that make sense. From wireframes to final visuals, we focus on clarity, consistency, and conversion — so your users enjoy every interaction."
        buttonText="GET STARTED WITH UI/UX DESIGN"
        buttonLink="/contact"
      />

      {/* Main Services Section */}
      <section className="max-w-7xl mx-auto py-20">
        <div className="px-4">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">
              Give Your Users a Better Experience with <span className="text-accent">UI/UX Design</span> That Just Feels Right
            </h2>
            <p className="text-gray-400 mb-16 max-w-3xl text-lg font-poppins">
              Good design goes beyond aesthetics. It guides users, builds trust, and supports your business goals. At Burraq Digits, we design interfaces that are easy to use, easy to love — and hard to forget.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <h3 className="text-2xl font-bold mb-10 font-montserrat">
              Our UI/UX Design Services Cover:
            </h3>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeInSection delay={0.3}>
              <ServiceCard
                icon={Layout}
                title="Wireframing & Prototyping"
                description="We map out your digital experience before it&apos;s built, keeping users at the center of every screen."
              />
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <ServiceCard
                icon={Smartphone}
                title="Mobile-First Design"
                description="Designs built for thumbs, not just desktops. Your users get a smooth ride, no matter the device."
              />
            </FadeInSection>

            <FadeInSection delay={0.5}>
              <ServiceCard
                icon={MousePointerClick}
                title="User Journey Mapping"
                description="We break down how people interact with your product, making sure every click makes sense and feels smooth."
              />
            </FadeInSection>

            <FadeInSection delay={0.6}>
              <ServiceCard
                icon={Eye}
                title="Visual UI Design"
                description="From typography to color schemes, we make your interface look clean, sharp, and on-brand."
              />
            </FadeInSection>

            <FadeInSection delay={0.7}>
              <ServiceCard
                icon={UserCheck}
                title="Usability Testing"
                description="We test real-world scenarios to find friction and fix it — before your users even notice it."
              />
            </FadeInSection>

            <FadeInSection delay={0.8}>
              <ServiceCard
                icon={Shield}
                title="Accessibility Design"
                description="We design with inclusivity in mind — so your product works well for everyone, everywhere."
              />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {/* <section className="max-w-7xl mx-auto py-20 px-4">
        <FadeInSection>
          <h2 className="text-3xl text-center md:text-4xl font-bold mb-10 font-montserrat">
            Our <span className="text-accent">UI/UX Work</span> in Action
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg font-poppins">
            From apps to web dashboards, here&apos;s how we&apos;ve made digital experiences more intuitive, cleaner, and way more enjoyable.
          </p>

          <Projects service="UI/UX Design" />
        </FadeInSection>
      </section> */}

      {/* Why Choose Us */}
      <WhyChooseUsSection
        mainTitle="Why Brands Trust"
        titleName="Burraq Digits"
        titleFor="UI/UX Design"
        benefits={[
          {
            icon: <CheckCircle size={20} />,
            title: "Designs That Feel Right",
            description: "We keep it simple, clean, and aligned with what your users actually want.",
          },
          {
            icon: <CheckCircle size={20} />,
            title: "Experienced UI/UX Team",
            description: "We understand what makes users bounce — and how to keep them engaged.",
          },
          {
            icon: <CheckCircle size={20} />,
            title: "Pixel-Perfect Delivery",
            description: "Your designs won’t just look great — they’ll work great too.",
          },
          {
            icon: <CheckCircle size={20} />,
            title: "Consistency Across Platforms",
            description: "Whether it’s web or mobile, we design experiences that stay consistent and smooth everywhere.",
          },
        ]}
        featuresRight={[
          "Responsive Layouts",
          "Low-Friction UX",
          "Click-Friendly Navigation",
          "Custom UI Kits",
        ]}
        featuresLeft={[
          "Interactive Prototypes",
          "Mobile-Optimized Screens",
          "Brand-Aligned Interfaces",
          "Design Systems & Style Guides",
        ]}
        ctaCard={{
          title: "Need Designs That Feel Effortless?",
          description:
            "Let’s build an interface your users actually enjoy using. Reach out now to start designing smarter digital experiences.",
          buttonText: "Request a Free Design Audit",
          buttonLink: "/contact",
        }}
      />

      {/* FAQ */}
      <FaqSection
        title="UI/UX Design"
        headingHighlight="FAQs"
        faqs={[
          {
            question: "What’s the difference between UI and UX?",
            answer: (
              <>
                UI stands for User Interface — how your product looks. UX stands for User Experience — how your product feels and works. Great digital products need both: design that looks good and functions well.
              </>
            ),
          },
          {
            question: "Can you redesign my current website/app interface?",
            answer: (
              <>
                Absolutely. We analyze your existing design, pinpoint where users drop off or get confused, and rebuild it with a clearer, smoother flow.
              </>
            ),
          },
          {
            question: "Do you only design, or also implement the designs?",
            answer: (
              <>
                We primarily focus on design, but we also collaborate with developers closely. If you need implementation, we&apos;ve got devs in-house who can handle that too.
              </>
            ),
          },
          {
            question: "Will the design work well on all devices?",
            answer: (
              <>
                100%. We follow a mobile-first approach and test across devices to ensure your product looks and works great everywhere.
              </>
            ),
          },
          {
            question: "How do you ensure the design is user-friendly?",
            answer: (
              <>
                We use a combo of research, feedback, user journey mapping, and usability testing. Every element is placed with purpose — not just aesthetics.
              </>
            ),
          },
        ]}
      />

      {/* CTA */}
      <CtaSection
        title="Let&apos;s Make Something That Feels Effortless"
        paragraph="If your users are confused, they won&apos;t convert. Let&apos;s design something they&apos;ll enjoy using — and remember."
        buttonText="GET STARTED WITH UI/UX DESIGN"
        buttonLink="/contact"
      />
    </div>
  );
}
