import type React from "react";
import {
  CalendarCheck,
  Users,
  Camera,
  Mic2,
  LayoutDashboard,
  CheckCircle,
} from "lucide-react";
import CtaSection from "../CtaSection";
import ServiceCard from "../ui/ServiceCard2";
import WhyChooseUsSection from "../WhyChooseUs";
import FadeInSection from "../FadeInSection";
import FaqSection from "../Faq";
import ServiceHeroSection from "../ServiceHero";
// import Projects from "../Projects";

export default function EventsManagementService() {
  return (
    <div className="bg-[#212428] text-white">
      {/* Hero Section */}
      <ServiceHeroSection
        subheading="EVENT MANAGEMENT SERVICES"
        heading="Plan. Promote. Execute — with"
        headingHighlight="Burraq Digits"
        heading2="Events That Leave a Mark"
        paragraph="We take the stress out of event planning so you can focus on showing up. From logistics to live coverage — we handle it all and make sure it runs smooth and looks good."
        buttonText="START PLANNING WITH US"
        buttonLink="/contact"
      />

      {/* Main Services Section */}
      <section className="max-w-7xl mx-auto py-20">
        <div className="px-4">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">
              End-to-End <span className="text-accent">Event Management</span> That Actually Delivers
            </h2>
            <p className="text-gray-400 mb-16 max-w-3xl text-lg font-poppins">
              Whether it's a product launch, brand activation, corporate meetup, or public expo — we handle every piece of the puzzle. You show up, we make it look effortless.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <h3 className="text-2xl font-bold mb-10 font-montserrat">
              Our Event Management Services Cover:
            </h3>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeInSection delay={0.3}>
              <ServiceCard
                icon={CalendarCheck}
                title="Full Event Planning"
                description="From the big idea to the final guest leaving — we manage timelines, vendors, and everything in between."
              />
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <ServiceCard
                icon={Users}
                title="Guest & Crowd Management"
                description="We coordinate entry, RSVP, registration, and crowd flow so things stay under control and on time."
              />
            </FadeInSection>

            <FadeInSection delay={0.5}>
              <ServiceCard
                icon={LayoutDashboard}
                title="Stage & Booth Setup"
                description="We design, install, and manage branded setups, signage, booths, and experiences that match your identity."
              />
            </FadeInSection>

            <FadeInSection delay={0.6}>
              <ServiceCard
                icon={Camera}
                title="Media Coverage"
                description="Our team captures the energy of your event with photos, videos, and live coverage ready for social media or post-campaign rollouts."
              />
            </FadeInSection>

            <FadeInSection delay={0.7}>
              <ServiceCard
                icon={Mic2}
                title="On-Ground Activation"
                description="From brand booths to activity zones, we bring your concept to life and engage your audience in real-time."
              />
            </FadeInSection>

            <FadeInSection delay={0.8}>
              <ServiceCard
                icon={CheckCircle}
                title="Post-Event Wrap-Up"
                description="We handle cleanup, reports, and all the behind-the-scenes work after your event ends — so you don&apos;t have to."
              />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <FadeInSection>
          <h2 className="text-3xl text-center md:text-4xl font-bold mb-10 font-montserrat">
            Past <span className="text-accent">Event Highlights</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg font-poppins">
            From mall activations to exhibitions, here's how we've pulled off events that delivered — in reach, impact, and vibe.
          </p>

          {/* <Projects service="Event Management" /> */}
        </FadeInSection>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUsSection
        mainTitle="Why Brands Rely on"
        titleName="Burraq Digits"
        titleFor="Event Management"
        benefits={[
          {
            icon: <CheckCircle size={20} />,
            title: "All-In-One Planning",
            description: "You don’t need 10 vendors — you just need one team that gets it all done.",
          },
          {
            icon: <CheckCircle size={20} />,
            title: "Proven Experience",
            description: "From small pop-ups to massive exhibitions — we’ve handled events of every size.",
          },
          {
            icon: <CheckCircle size={20} />,
            title: "Creative + Logistical",
            description: "We’re not just organized — we’re imaginative. Your event will look as good as it runs.",
          },
          {
            icon: <CheckCircle size={20} />,
            title: "End-to-End Support",
            description: "Planning, setup, execution, media, reporting — all handled under one roof.",
          },
        ]}
        featuresRight={[
          "Venue Coordination",
          "Booth & Signage Setup",
          "Photography & Videography",
          "On-Ground Activation",
        ]}
        featuresLeft={[
          "Guest Management",
          "Social Media Coverage",
          "Branding Materials",
          "Live Event Monitoring",
        ]}
        ctaCard={{
          title: "Planning an Event? Let’s Make It Work.",
          description:
            "We’ll bring the team, the plan, and the energy — you just show up. Talk to us about your next event.",
          buttonText: "BOOK YOUR EVENT WITH US",
          buttonLink: "/contact",
        }}
      />

      {/* FAQ Section */}
      <FaqSection
        title="Event Management"
        headingHighlight="FAQs"
        faqs={[
          {
            question: "What types of events do you manage?",
            answer: (
              <>
                We handle everything from brand activations, exhibitions, and trade shows to corporate events, influencer meetups, and product launches.
              </>
            ),
          },
          {
            question: "Do you also handle the event promotion?",
            answer: (
              <>
                Yes — we can help with pre-event hype on social media, content strategy, influencer outreach, and coverage during the event itself.
              </>
            ),
          },
          {
            question: "Can you manage events outside Karachi?",
            answer: (
              <>
                Definitely. While we&apos;re based in Karachi, we&apos;ve managed activations and exhibitions across Pakistan.
              </>
            ),
          },
          {
            question: "What’s included in your end-to-end service?",
            answer: (
              <>
                Planning, vendor coordination, branding, staffing, tech setup, live coverage, crowd management, and wrap-up reporting — we handle it all.
              </>
            ),
          },
          {
            question: "How far in advance should I book an event with you?",
            answer: (
              <>
                Ideally 4-6 weeks before the event. For large-scale events, even earlier is better to secure venues, vendors, and smooth execution.
              </>
            ),
          },
        ]}
      />

      {/* CTA Section */}
      <CtaSection
        title="Let&apos;s Make Your Next Event One to Remember"
        paragraph="From concept to execution, we&apos;ll bring your event to life — no chaos, no last-minute surprises. Just smooth delivery and serious impact."
        buttonText="GET STARTED WITH EVENT MANAGEMENT"
        buttonLink="/contact"
      />
    </div>
  );
}
