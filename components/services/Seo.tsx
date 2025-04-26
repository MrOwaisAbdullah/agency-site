import type React from "react";
import {
  Search,
  TrendingUp,
  Globe,
  FileText,
  Link,
  CheckCircle,
  BarChart,
} from "lucide-react";
import CtaSection from "../CtaSection";
import ServiceCard from "../ui/ServiceCard2";
import WhyChooseUsSection from "../WhyChooseUs";
import FadeInSection from "../FadeInSection";
import FaqSection from "../Faq";
import ServiceHeroSection from "../ServiceHero";
// import Projects from "../Projects";

export default function SEOService() {
  return (
    <div className="bg-[#212428] text-white">
      {/* Hero Section */}
      <ServiceHeroSection
        subheading="SEARCH ENGINE OPTIMIZATION (SEO)"
        heading="Get Found Online with"
        headingHighlight="Burraq Digits"
        heading2="SEO That Drives Real Traffic"
        paragraph="Increase your visibility, climb search rankings, and attract quality traffic with SEO strategies built for long-term results and real business impact."
        buttonText="GET STARTED WITH SEO"
        buttonLink="/contact"
      />

      {/* Main Services Section */}
      <section className="max-w-7xl mx-auto py-20">
        <div className="px-4">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">
              Rank Higher, Reach More, Sell Better with <span className="text-accent">SEO</span>
            </h2>
            <p className="text-gray-400 mb-16 max-w-3xl text-lg font-poppins">
              Search isn&apos;t about being everywhere — it&apos;s about showing up at the right time. Our SEO approach is built on solid research, smart content, and technical know-how that gets results and keeps your business visible.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <h3 className="text-2xl font-bold mb-10 font-montserrat">
              Our SEO Services Cover:
            </h3>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeInSection delay={0.3}>
              <ServiceCard
                icon={Search}
                title="Keyword Research"
                description="We identify the most effective keywords to attract high-intent traffic that actually converts."
              />
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <ServiceCard
                icon={FileText}
                title="Content Optimization"
                description="From blogs to landing pages, we fine-tune your content for both users and search engines."
              />
            </FadeInSection>

            <FadeInSection delay={0.5}>
              <ServiceCard
                icon={Link}
                title="Link Building"
                description="Earn trusted backlinks from relevant sources that boost your domain authority and rankings."
              />
            </FadeInSection>

            <FadeInSection delay={0.6}>
              <ServiceCard
                icon={Globe}
                title="Technical SEO"
                description="We optimize your site structure, speed, indexing, and mobile performance to meet Google&apos;s standards."
              />
            </FadeInSection>

            <FadeInSection delay={0.7}>
              <ServiceCard
                icon={TrendingUp}
                title="On-Page SEO"
                description="We align titles, tags, headings, and images to improve rankings and page experience."
              />
            </FadeInSection>

            <FadeInSection delay={0.8}>
              <ServiceCard
                icon={BarChart}
                title="SEO Reporting & Audits"
                description="Detailed reports and audits that show what&apos;s working, what&apos;s not, and where you can grow."
              />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      {/* <section className="max-w-7xl mx-auto py-20 px-4">
        <FadeInSection>
          <h2 className="text-3xl text-center md:text-4xl font-bold mb-10 font-montserrat">
            Our Recent <span className="text-accent">SEO Projects</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg font-poppins">
            Explore how we&apos;ve helped clients improve visibility, increase search traffic, and drive qualified leads with clean, consistent SEO execution.
          </p>

          <Projects service="SEO" />
        </FadeInSection>
      </section> */}

      {/* Why Choose Us Section */}
      <WhyChooseUsSection
        mainTitle="Why Brands Rank with"
        titleName="Burraq Digits"
        titleFor="SEO"
        benefits={[
          {
            icon: <CheckCircle size={20} />,
            title: "Clear, measurable SEO results",
            description: "We show you the rankings, traffic, and growth — no smoke and mirrors.",
          },
          {
            icon: <CheckCircle size={20} />,
            title: "Hands-on strategy",
            description: "We plan, optimize, and monitor — no set-it-and-forget-it here."
          },
          {
            icon: <CheckCircle size={20} />,
            title: "Technical + Content combo",
            description: "We bring together performance-focused SEO and content that answers questions."
          },
          {
            icon: <CheckCircle size={20} />,
            title: "Local & Global reach",
            description: "Whether you’re targeting Karachi or California, we’ve got your back."
          },
        ]}
        featuresRight={[
          "Keyword Mapping",
          "Site Architecture",
          "Google Search Console Setup",
          "Mobile SEO",
        ]}
        featuresLeft={[
          "Backlink Outreach",
          "SEO Copywriting",
          "Competitor Analysis",
          "Schema Markup",
        ]}
        ctaCard={{
          title: "Want to Get Found on Google?",
          description:
            "Let’s get your website ranked higher, visited more, and trusted by the right people. Schedule your free SEO consultation today.",
          buttonText: "Schedule My SEO Audit",
          buttonLink: "/contact",
        }}
      />

      {/* FAQ Section */}
      <FaqSection
        title="SEO Services"
        headingHighlight="FAQs"
        faqs={[
          {
            question: "What is SEO and why does it matter?",
            answer: (
              <>
                SEO stands for Search Engine Optimization — it helps your site show up when people search for products or services like yours. It matters because better visibility leads to more traffic and potential sales.
              </>
            ),
          },
          {
            question: "How long does SEO take to work?",
            answer: (
              <>
                SEO is a long-term game. Most sites start seeing meaningful results in 3-6 months, depending on competition and starting point. We provide progress updates and clear timelines from day one.
              </>
            ),
          },
          {
            question: "Can you optimize my current website?",
            answer: (
              <>
                Yes! Whether you&apos;re on WordPress, Shopify, or custom-built, we can audit and optimize your existing website to perform better on search.
              </>
            ),
          },
          {
            question: "What’s included in a typical SEO package?",
            answer: (
              <>
                Our packages usually include keyword research, on-page SEO, content guidance, technical fixes, backlink building, and monthly reports.
              </>
            ),
          },
          {
            question: "Will you help me create SEO-friendly content?",
            answer: (
              <>
                Absolutely. We&apos;ll help guide your content strategy and even write content that&apos;s both valuable to readers and optimized for search engines.
              </>
            ),
          },
        ]}
      />

      {/* CTA Section */}
      <CtaSection
        title="Ready to Grow With Better Search Visibility?"
        paragraph="Get more traffic, rank for the right keywords, and start showing up where your customers are already searching. Let&apos;s make it happen."
        buttonText="GET STARTED WITH SEO"
        buttonLink="/contact"
      />
    </div>
  );
}
