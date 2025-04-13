import type React from "react";
import {
  ThumbsUp,
  Users,
  MessageCircle,
  TrendingUp,
  Video,
  Zap,
  CheckCircle,
} from "lucide-react";
import CtaSection from "../CtaSection";
import ServiceCard from "../ui/ServiceCard2";
import WhyChooseUsSection from "../WhyChooseUs";
import FadeInSection from "../FadeInSection";
import FaqSection from "../Faq";
import ServiceHeroSection from "../ServiceHero";
import Projects from "../Projects";

export default function SocialMediaMarketingService() {
  return (
    <div className="bg-[#212428] text-white">
      {/* Hero Section */}
      <ServiceHeroSection
        subheading="SOCIAL MEDIA MARKETING"
        heading="Grow Your Brand with"
        headingHighlight="Burraq Digits"
        heading2="Social Media That Works"
        paragraph="Build trust, drive engagement, and increase conversions with our strategic social media marketing services that keep your brand consistent, active, and ahead of the curve."
        buttonText="GET STARTED WITH SOCIAL MEDIA"
        buttonLink="/contact"
      />

      {/* Main Services Section */}
      <section className="max-w-7xl mx-auto py-20">
        <div className="px-4">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">
              Make Your Brand Visible with Burraq Digits&apos;s <span className="text-accent">Social Media Marketing</span> Services
            </h2>
            <p className="text-gray-400 mb-16 max-w-3xl text-lg font-poppins">
              We help businesses stay relevant and build real connections through effective social media strategies, scroll-stopping visuals, and consistent posting that turns attention into action.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <h3 className="text-2xl font-bold mb-10 font-montserrat">
              Our Social Media Services Include:
            </h3>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeInSection delay={0.3}>
              <ServiceCard
                icon={ThumbsUp}
                title="Content Strategy"
                description="We craft tailored content strategies that align with your goals and keep your audience hooked."
              />
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <ServiceCard
                icon={Users}
                title="Audience Engagement"
                description="We help you build real relationships with your audience through thoughtful interactions and timely responses."
              />
            </FadeInSection>

            <FadeInSection delay={0.5}>
              <ServiceCard
                icon={MessageCircle}
                title="Copywriting & Captions"
                description="Say more with less. We write sharp, relevant, and platform-friendly content that gets people talking."
              />
            </FadeInSection>

            <FadeInSection delay={0.6}>
              <ServiceCard
                icon={Video}
                title="Reels & Video Content"
                description="We create high-performing video content, reels, and stories that grab attention and encourage shares."
              />
            </FadeInSection>

            <FadeInSection delay={0.7}>
              <ServiceCard
                icon={TrendingUp}
                title="Performance Tracking"
                description="We monitor your progress using insights and analytics, adjusting strategies to improve reach and ROI."
              />
            </FadeInSection>

            <FadeInSection delay={0.8}>
              <ServiceCard
                icon={Zap}
                title="Campaign Management"
                description="From idea to execution, we run your campaigns smoothly with consistent brand voice and visuals."
              />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <FadeInSection>
          <h2 className="text-3xl text-center md:text-4xl font-bold mb-10 font-montserrat">
            Our Recent <span className="text-accent">Social Media Projects</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg font-poppins">
            Check out some of the social media campaigns we&apos;ve managed — packed with content that converts and creative that clicks.
          </p>

          <Projects service="Social Media Marketing" />
        </FadeInSection>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUsSection
        mainTitle="Why Brands Choose"
        titleName="Burraq Digits"
        titleFor="Social Media Marketing"
        benefits={[
          {
            icon: <CheckCircle size={20} />,
            title: "Clear strategy backed by data",
            description: "Everything we post is backed by purpose, insights, and goals.",
          },
          {
            icon: <CheckCircle size={20} />,
            title: "Creative that grabs attention",
            description: "From visuals to captions, we focus on what stops the scroll.",
          },
          {
            icon: <CheckCircle size={20} />,
            title: "Full-service execution",
            description: "We handle planning, posting, community management, and tracking."
          },
          {
            icon: <CheckCircle size={20} />,
            title: "Flexible, platform-aware approach",
            description: "Our team knows what works across Instagram, Facebook, TikTok, and LinkedIn."
          },
        ]}
        featuresRight={[
          "Content Strategy",
          "Video & Reels",
          "Paid Campaigns",
          "Hashtag Planning",
        ]}
        featuresLeft={[
          "Comment Management",
          "Analytics Reports",
          "Post Scheduling",
          "Visual Consistency",
        ]}
        ctaCard={{
          title: "Let’s Make Your Brand Worth Following",
          description:
            "Book a strategy call with Burraq Digits today and find out how consistent, creative social media can fuel your business.",
          buttonText: "Schedule a Strategy Call",
          buttonLink: "/contact",
        }}
      />

      {/* FAQ Section */}
      <FaqSection
        title="Social Media Marketing"
        headingHighlight="FAQs"
        faqs={[
          {
            question: "What is social media marketing?",
            answer: (
              <>
                Social media marketing involves using platforms like Instagram, Facebook, TikTok, and LinkedIn to build brand awareness, engage with your audience, and drive traffic or sales. It includes content creation, scheduling, performance tracking, and campaign management.
              </>
            ),
          },
          {
            question: "Which platforms do you manage?",
            answer: (
              <>
                We manage content and campaigns across Instagram, Facebook, LinkedIn, TikTok, Twitter (X), YouTube Shorts, and more — depending on where your audience is.
              </>
            ),
          },
          {
            question: "Do you create all the content?",
            answer: (
              <>
                Yes! Our team handles content strategy, design, captions, and reels. We also guide clients on trends and help film or source footage when needed.
              </>
            ),
          },
          {
            question: "Can you run paid ads too?",
            answer: (
              <>
                Absolutely. We plan and manage paid campaigns on social platforms to boost reach, drive website visits, or promote offers — all backed by reporting.
              </>
            ),
          },
          {
            question: "How do you measure success?",
            answer: (
              <>
                We use platform insights and reporting tools to measure engagement, reach, conversions, and follower growth — then tweak strategies based on what works best.
              </>
            ),
          },
        ]}
      />

      {/* CTA Section */}
      <CtaSection
        title="Boost Your Brand Visibility with Social Media That Performs"
        paragraph="Let&apos;s take your social media to the next level — with a smart strategy, scroll-worthy content, and clear results. Book your free consultation today."
        buttonText="GET STARTED WITH SOCIAL MEDIA"
        buttonLink="/contact"
      />
    </div>
  );
}
