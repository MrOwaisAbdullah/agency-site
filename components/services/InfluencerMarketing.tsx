import type React from "react";
import {
  Users,
  ThumbsUp,
  Hash,
  Camera,
  PlayCircle,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import CtaSection from "../CtaSection";
import ServiceCard from "../ui/ServiceCard2";
import WhyChooseUsSection from "../WhyChooseUs";
import FadeInSection from "../FadeInSection";
import FaqSection from "../Faq";
import ServiceHeroSection from "../ServiceHero";
// import Projects from "../Projects";

export default function InfluencerMarketingService() {
  return (
    <div className="bg-[#212428] text-white">
      {/* Hero Section */}
      <ServiceHeroSection
        subheading="INFLUENCER MARKETING"
        heading="Build Social Proof with"
        headingHighlight="Burraq Digits"
        heading2="Influencer Campaigns That Connect"
        paragraph="Leverage trusted voices and grow your brand&apos;s reach through smart influencer partnerships that bring real engagement, real awareness, and real results."
        buttonText="GET STARTED WITH INFLUENCER MARKETING"
        buttonLink="/contact"
      />

      {/* Main Services Section */}
      <section className="max-w-7xl mx-auto py-20">
        <div className="px-4">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">
              Let the Right People Talk About Your Brand with <span className="text-accent">Influencer Marketing</span>
            </h2>
            <p className="text-gray-400 mb-16 max-w-3xl text-lg font-poppins">
              We help brands team up with influencers who actually match their audience. No fake followers. No awkward collabs. Just authentic partnerships that drive brand trust and reach.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <h3 className="text-2xl font-bold mb-10 font-montserrat">
              Our Influencer Marketing Services Include:
            </h3>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeInSection delay={0.3}>
              <ServiceCard
                icon={Users}
                title="Influencer Matchmaking"
                description="We connect your brand with influencers that actually fit — by audience, tone, and content style."
              />
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <ServiceCard
                icon={Camera}
                title="Content Coordination"
                description="We work with creators to ensure the visuals, messaging, and vibe align perfectly with your campaign goals."
              />
            </FadeInSection>

            <FadeInSection delay={0.5}>
              <ServiceCard
                icon={ThumbsUp}
                title="Product Seeding & Collabs"
                description="We handle gifting and creative collaborations that feel natural — not forced."
              />
            </FadeInSection>

            <FadeInSection delay={0.6}>
              <ServiceCard
                icon={Hash}
                title="Hashtag Campaigns"
                description="Build momentum with branded hashtags that spark shares, UGC, and visibility."
              />
            </FadeInSection>

            <FadeInSection delay={0.7}>
              <ServiceCard
                icon={PlayCircle}
                title="Video & Reel Promotion"
                description="Leverage short-form video creators across platforms to boost awareness in the scroll."
              />
            </FadeInSection>

            <FadeInSection delay={0.8}>
              <ServiceCard
                icon={TrendingUp}
                title="Campaign Management & Reports"
                description="We handle the outreach, coordination, and performance reports — so you focus on results, not inboxes."
              />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      {/* <section className="max-w-7xl mx-auto py-20 px-4">
        <FadeInSection>
          <h2 className="text-3xl text-center md:text-4xl font-bold mb-10 font-montserrat">
            Our Recent <span className="text-accent">Influencer Collabs</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg font-poppins">
            Check out how we&apos;ve helped brands connect with creators that get real views, real shares, and real results.
          </p>

          <Projects service="Influencer Marketing" />
        </FadeInSection>
      </section> */}

      {/* Why Choose Us Section */}
      <WhyChooseUsSection
        mainTitle="Why Brands Collaborate with"
        titleName="Burraq Digits"
        titleFor="Influencer Marketing"
        benefits={[
          {
            icon: <CheckCircle size={20} />,
            title: "We know what works on social",
            description: "From TikTok to Instagram, we pair you with the right content formats and creators."
          },
          {
            icon: <CheckCircle size={20} />,
            title: "Creator-first approach",
            description: "We work closely with influencers to keep things authentic and relatable."
          },
          {
            icon: <CheckCircle size={20} />,
            title: "No bots, no fluff",
            description: "We vet every influencer for real engagement, not fake numbers."
          },
          {
            icon: <CheckCircle size={20} />,
            title: "End-to-end campaign support",
            description: "From pitch to post, we manage it all — with zero stress on your side."
          },
        ]}
        featuresRight={[
          "Instagram Reels",
          "TikTok Shoutouts",
          "YouTube Collabs",
          "Brand Hashtag Push",
        ]}
        featuresLeft={[
          "Product Gifting",
          "Influencer Outreach",
          "Performance Tracking",
          "Creator Vetting",
        ]}
        ctaCard={{
          title: "Let’s Put Your Brand in the Right Hands",
          description:
            "Ready to get creators talking about your business? Let’s set up your next influencer campaign together.",
          buttonText: "Launch My Campaign",
          buttonLink: "/contact",
        }}
      />

      {/* FAQ Section */}
      <FaqSection
        title="Influencer Marketing"
        headingHighlight="FAQs"
        faqs={[
          {
            question: "What is influencer marketing?",
            answer: (
              <>
                Influencer marketing is a strategy where brands collaborate with social media creators to promote products, build trust, and increase visibility. It&apos;s all about leveraging voices that audiences already follow and trust.
              </>
            ),
          },
          {
            question: "How do you pick influencers for a campaign?",
            answer: (
              <>
                We look at niche, audience demographics, engagement quality, and content style to ensure the influencer truly aligns with your brand.
              </>
            ),
          },
          {
            question: "Can you manage everything end-to-end?",
            answer: (
              <>
                Yes! From sourcing creators and managing communications to overseeing content delivery and results reporting — we handle the full process.
              </>
            ),
          },
          {
            question: "Do you work with micro and nano influencers too?",
            answer: (
              <>
                Absolutely. Sometimes a smaller, more targeted audience delivers better engagement and trust. We pick based on what makes the most sense for your goals.
              </>
            ),
          },
          {
            question: "How do you track campaign performance?",
            answer: (
              <>
                We track views, engagement, clicks, and conversions depending on the campaign goals — and deliver a report that actually makes sense.
              </>
            ),
          },
        ]}
      />

      {/* CTA Section */}
      <CtaSection
        title="Make Your Brand Worth Talking About"
        paragraph="Launch campaigns with creators who bring credibility and attention. Let&apos;s build influencer marketing that feels real — and performs."
        buttonText="GET STARTED WITH INFLUENCER MARKETING"
        buttonLink="/contact"
      />
    </div>
  );
}
