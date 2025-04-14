import type React from "react";
import {
  Code,
  Smartphone,
  ShoppingCart,
  Shield,
  Settings,
  Layout,
  CheckCircle,
} from "lucide-react";
import CtaSection from "../CtaSection";
import ServiceCard from "../ui/ServiceCard2";
import WhyChooseUsSection from "../WhyChooseUs";
import FadeInSection from "../FadeInSection";
import FaqSection from "../Faq";
import ServiceHeroSection from "../ServiceHero";
import Projects from "../Projects";

export default function WebDevelopmentService() {
  return (
    <div className="bg-[#212428] text-white">
      {/* Hero Section */}
      <ServiceHeroSection
        subheading="WEBSITE DESIGN & DEVELOPMENT"
        heading="Web Development by"
        headingHighlight="Burraq Digits"
        heading2="Build Fast. Look Sharp. Convert Better."
        paragraph="Your website isn&apos;t just a page — it&apos;s your brand&apos;s first impression. We build sleek, responsive, and performance-driven sites that do more than look good — they work."
        buttonText="GET STARTED WITH WEB DEVELOPMENT"
        buttonLink="/contact"
      />

      {/* Main Services Section */}
      <section className="max-w-7xl mx-auto py-20">
        <div className="px-4">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">
              Websites That <span className="text-accent">Deliver Results</span> — Built by Burraq Digits
            </h2>
            <p className="text-gray-400 mb-16 max-w-3xl text-lg font-poppins">
              We don&apos;t just code websites — we create experiences. Whether you&apos;re launching a new brand, revamping your current site, or adding e-commerce to the mix, we&apos;ve got the tools and team to make it click.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <h3 className="text-2xl font-bold mb-10 font-montserrat">
              What We Offer:
            </h3>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeInSection delay={0.3}>
              <ServiceCard
                icon={Layout}
                title="Custom Web Design"
                description="Modern, responsive, and built to match your brand — pixel-perfect across all devices."
              />
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <ServiceCard
                icon={Smartphone}
                title="User Experience (UX)"
                description="Navigation that flows, content that connects — all designed with your audience in mind."
              />
            </FadeInSection>

            <FadeInSection delay={0.5}>
              <ServiceCard
                icon={Code}
                title="Front & Back-End Development"
                description="Built with clean, scalable code using the latest tech — for performance that lasts."
              />
            </FadeInSection>

            <FadeInSection delay={0.6}>
              <ServiceCard
                icon={ShoppingCart}
                title="E-commerce Websites"
                description="From product pages to checkout — we build online stores that convert visitors into buyers."
              />
            </FadeInSection>

            <FadeInSection delay={0.7}>
              <ServiceCard
                icon={Settings}
                title="CMS Integration"
                description="Easily manage your site with WordPress, Shopify, or custom dashboards tailored to your workflow."
              />
            </FadeInSection>

            <FadeInSection delay={0.8}>
              <ServiceCard
                icon={Shield}
                title="Security & Maintenance"
                description="We keep your site running smoothly with regular updates, monitoring, and support."
              />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <FadeInSection>
          <h2 className="text-3xl text-center md:text-4xl font-bold mb-10 font-montserrat">
            Our Recent <span className="text-accent">Web Projects</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg font-poppins">
            Scroll through some of the websites we&apos;ve designed and developed — fast, clean, and built to scale.
          </p>

          <Projects service="Web Development" />
        </FadeInSection>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUsSection
        mainTitle="Why Partner With"
        titleName="Burraq Digits"
        titleFor="Web Development"
        benefits={[
          {
            icon: <CheckCircle size={20} />,
            title: "Built for Performance",
            description: "Our websites are optimized for speed, UX, and clean code that lasts.",
          },
          {
            icon: <CheckCircle size={20} />,
            title: "Custom to the Core",
            description: "No templates, no shortcuts — just custom builds for your business goals.",
          },
          {
            icon: <CheckCircle size={20} />,
            title: "SEO & Mobile Ready",
            description: "Search engines and screen sizes love our work — and so will your users.",
          },
          {
            icon: <CheckCircle size={20} />,
            title: "Reliable Support",
            description: "Post-launch help, updates, and growth — we don’t vanish after delivery.",
          },
        ]}
        featuresRight={[
          "Responsive Layouts",
          "Custom UI",
          "CMS Integration",
          "Speed Optimization",
        ]}
        featuresLeft={[
          "Mobile-First Design",
          "Security Features",
          "Analytics Setup",
          "Ongoing Maintenance",
        ]}
        ctaCard={{
          title: "Let’s Build Something That Works",
          description:
            "Whether you need a landing page or a full platform — we’ll help you launch it right. Get in touch to start your web project.",
          buttonText: "BOOK A WEB CONSULTATION",
          buttonLink: "/contact",
        }}
      />

      {/* FAQ Section */}
      <FaqSection
        title="Web Development"
        headingHighlight="FAQs"
        faqs={[
          {
            question: "Do you build custom websites or use templates?",
            answer: (
              <>
                We build fully custom websites tailored to your brand and goals. No generic templates — everything is designed from scratch.
              </>
            ),
          },
          {
            question: "Will my website work on mobile devices?",
            answer: (
              <>
                Yes. All of our websites are responsive and mobile-friendly by default. We test across devices and browsers to ensure consistency.
              </>
            ),
          },
          {
            question: "How long does a website project take?",
            answer: (
              <>
                It depends on the scope. A standard business site can take 4-6 weeks, while larger builds (e.g. e-commerce) can take 8-12 weeks. We&apos;ll give you a timeline before starting.
              </>
            ),
          },
          {
            question: "Can you handle content, hosting, or domain setup too?",
            answer: (
              <>
                Absolutely. We offer full-service packages that include content creation, hosting setup, domain connection, and even SEO basics.
              </>
            ),
          },
          {
            question: "What happens after the site goes live?",
            answer: (
              <>
                We stick around. Our support includes maintenance, security checks, speed optimization, and updates — we&apos;ve got you covered long-term.
              </>
            ),
          },
        ]}
      />

      {/* CTA Section */}
      <CtaSection
        title="Let&apos;s Build a Website That Works — Not Just Exists"
        paragraph="We don&apos;t just build pretty websites. We build ones that perform. Let&apos;s launch something smart together."
        buttonText="GET STARTED WITH WEB DEVELOPMENT"
        buttonLink="/contact"
      />
    </div>
  );
}
