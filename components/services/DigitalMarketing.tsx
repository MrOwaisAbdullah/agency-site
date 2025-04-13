import type React from "react";
import {
  BarChart2,
  Globe,
  Target,
  RefreshCw,
  LineChart,
  CheckCircle,
  Megaphone,
} from "lucide-react";
import CtaSection from "../CtaSection";
import ServiceCard from "../ui/ServiceCard2";
import WhyChooseUsSection from "../WhyChooseUs";
import FadeInSection from "../FadeInSection";
import FaqSection from "../Faq";
import ServiceHeroSection from "../ServiceHero";
// import Projects from "../Projects";

export default function DigitalMarketingService() {
  return (
    <div className="bg-[#212428] text-white">
      {/* Hero Section */}
      <ServiceHeroSection
        subheading="DIGITAL MARKETING"
        heading="Results-Driven Marketing by"
        headingHighlight="Burraq Digits"
        heading2="Smart Campaigns. Real Growth."
        paragraph="Attract the right audience, boost conversions, and grow your business with focused digital marketing strategies that are built on performance, not just promises."
        buttonText="GET STARTED WITH DIGITAL MARKETING"
        buttonLink="/contact"
      />

      {/* Main Services Section */}
      <section className="max-w-7xl mx-auto py-20">
        <div className="px-4">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">
              Get Seen. Get Clicks. Get Results with <span className="text-accent">Digital Marketing</span> Services
            </h2>
            <p className="text-gray-400 mb-16 max-w-3xl text-lg font-poppins">
              We don&apos;t throw strategies at the wall to see what sticks. At Burraq Digits, our campaigns are built on smart targeting, constant optimization, and crystal-clear reporting — so your growth is measurable and consistent.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <h3 className="text-2xl font-bold mb-10 font-montserrat">
              Our Digital Marketing Services Include:
            </h3>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeInSection delay={0.3}>
              <ServiceCard
                icon={Target}
                title="Performance Marketing"
                description="Campaigns built for clicks, conversions, and real ROI across platforms like Meta, Google, and more."
              />
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <ServiceCard
                icon={Globe}
                title="Search Engine Marketing (SEM)"
                description="Get found faster with targeted ads that put your brand in front of people who are already searching."
              />
            </FadeInSection>

            <FadeInSection delay={0.5}>
              <ServiceCard
                icon={Megaphone}
                title="Campaign Planning & Strategy"
                description="We map out your campaigns to match your goals — from awareness to action."
              />
            </FadeInSection>

            <FadeInSection delay={0.6}>
              <ServiceCard
                icon={BarChart2}
                title="Conversion Optimization"
                description="We analyze performance, test improvements, and keep tweaking until the results speak for themselves."
              />
            </FadeInSection>

            <FadeInSection delay={0.7}>
              <ServiceCard
                icon={RefreshCw}
                title="Email & SMS Marketing"
                description="Stay top-of-mind and drive more action with smart automation and message targeting."
              />
            </FadeInSection>

            <FadeInSection delay={0.8}>
              <ServiceCard
                icon={LineChart}
                title="Analytics & Reporting"
                description="We track every click and conversion, giving you full clarity on what’s working and where to improve."
              />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <FadeInSection>
          <h2 className="text-3xl text-center md:text-4xl font-bold mb-10 font-montserrat">
            Our Recent <span className="text-accent">Marketing Campaigns</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg font-poppins">
            See how we&apos;ve helped brands grow with paid ads, conversion tracking, and full-funnel strategies that actually deliver.
          </p>

          {/* <Projects service="Digital Marketing" /> */}
        </FadeInSection>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUsSection
        mainTitle="Why Brands Trust"
        titleName="Burraq Digits"
        titleFor="Digital Marketing"
        benefits={[
          {
            icon: <CheckCircle size={20} />,
            title: "Performance-focused approach",
            description: "We focus on metrics that matter — like leads, sales, and ROAS.",
          },
          {
            icon: <CheckCircle size={20} />,
            title: "No copy-paste campaigns",
            description: "Every brand gets a strategy built from scratch, tailored to their goals."
          },
          {
            icon: <CheckCircle size={20} />,
            title: "Full-funnel tracking",
            description: "We measure every step of the customer journey to optimize for real outcomes."
          },
          {
            icon: <CheckCircle size={20} />,
            title: "Clear, regular reporting",
            description: "No confusing jargon — just data you can use to grow."
          },
        ]}
        featuresRight={[
          "Google Ads",
          "Meta Ads",
          "Email & SMS Funnels",
          "Landing Page Optimization",
        ]}
        featuresLeft={[
          "Retargeting Campaigns",
          "Analytics Setup",
          "Conversion Tracking",
          "Budget Planning",
        ]}
        ctaCard={{
          title: "Let’s Build a Marketing Plan That Actually Works",
          description:
            "Ready to stop guessing and start scaling? Book your free digital marketing consultation today and let’s make your numbers move.",
          buttonText: "Book a Free Strategy Call",
          buttonLink: "/contact",
        }}
      />

      {/* FAQ Section */}
      <FaqSection
        title="Digital Marketing"
        headingHighlight="FAQs"
        faqs={[
          {
            question: "What is digital marketing?",
            answer: (
              <>
                Digital marketing is the use of online channels like search engines, social media, email, and ads to reach and convert customers. It&apos;s a strategic approach to getting your business in front of the right people at the right time.
              </>
            ),
          },
          {
            question: "Do you offer paid advertising services?",
            answer: (
              <>
                Yes. We create, manage, and optimize ads on Google, Meta (Facebook/Instagram), LinkedIn, and other platforms — all tailored to your goals and audience.
              </>
            ),
          },
          {
            question: "How do I know if my marketing is working?",
            answer: (
              <>
                We provide clear reports and dashboards that track engagement, conversions, and return on ad spend (ROAS), so you know exactly what’s delivering results.
              </>
            ),
          },
          {
            question: "Can you work with my existing marketing team?",
            answer: (
              <>
                Absolutely. We can collaborate with your in-house team or handle everything from scratch — whatever suits your workflow.
              </>
            ),
          },
          {
            question: "How much should I budget for digital marketing?",
            answer: (
              <>
                It depends on your goals, audience size, and how competitive your market is. We&apos;ll help you set realistic budgets based on data and expected returns.
              </>
            ),
          },
        ]}
      />

      {/* CTA Section */}
      <CtaSection
        title="Grow Smarter With Digital Marketing That Performs"
        paragraph="Let&apos;s build campaigns that get clicks, drive conversions, and deliver real growth. Book a free consultation with Burraq Digits today."
        buttonText="GET STARTED WITH DIGITAL MARKETING"
        buttonLink="/contact"
      />
    </div>
  );
}