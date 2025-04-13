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
        heading="Web Design & Development by"
        headingHighlight="Burraq Digits"
        heading2="Elevate Your Online Presence"
        paragraph="Create a professional online presence with Burraq Digitss expert web design and development services, tailored to deliver a seamless user experience and drive results."
        buttonText="GET STARTED WITH WEB DEVELOPMENT"
        buttonLink="/contact"
      />

      {/* Main Services Section */}
      <section className="max-w-7xl mx-auto py-20">
        <div className="px-4">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">
              Transform Your Website with Burraq Digits&apos;s <span className="text-accent">Web Design &
              Development</span> Services
            </h2>
            <p className="text-gray-400 mb-16 max-w-3xl text-lg font-poppins">
              In today&apos;s digital world, a professionally designed and
              developed website is essential for any successful business. At
              Burraq Digits, our team of expert web designers and developers is
              dedicated to crafting stunning, user-friendly websites that
              reflect your brand, captivate your audience and achieve your
              business goals.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <h3 className="text-2xl font-bold mb-10 font-montserrat">
              Our Comprehensive Web Design & Development Services Include:
            </h3>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeInSection delay={0.3}>
              <ServiceCard
                icon={Layout}
                title="Custom Web Design"
                description="We create responsive, mobile-friendly website designs that reflect your brand identity and engage your audience."
              />
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <ServiceCard
                icon={Smartphone}
                title="User Experience (UX) Design"
                description="Our UX experts craft intuitive, user-centered designs that ensure a seamless browsing experience across all platforms."
              />
            </FadeInSection>

            <FadeInSection delay={0.5}>
              <ServiceCard
                icon={Code}
                title="Web Development"
                description="Our skilled developers use the latest technologies to build fast, secure, and scalable websites that perform flawlessly."
              />
            </FadeInSection>

            <FadeInSection delay={0.6}>
              <ServiceCard
                icon={ShoppingCart}
                title="E-commerce Solutions"
                description="We design and develop e-commerce websites that provide a smooth shopping experience, helping you increase sales and grow your online business."
              />
            </FadeInSection>

            <FadeInSection delay={0.7}>
              <ServiceCard
                icon={Settings}
                title="Content Management Systems (CMS) Integration"
                description="We integrate popular content management systems, such as WordPress and Shopify, making it easy for you to manage and update your website content."
              />
            </FadeInSection>

            <FadeInSection delay={0.8}>
              <ServiceCard
                icon={Shield}
                title="Website Maintenance and Support"
                description="We provide ongoing website maintenance and support to ensure your website remains up-to-date, secure, and optimized for performance."
              />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <FadeInSection>
          <h2 className="text-3xl text-center md:text-4xl font-bold mb-10 font-montserrat">
            Our Recent <span className="text-accent">Web Projects</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg font-poppins">
            Explore our portfolio of successful web design and development
            projects that showcase our expertise and commitment to delivering
            exceptional results for our clients.
          </p>

          <Projects service="Next.js" />
        </FadeInSection>
        </section>
      {/* Why Choose Us Section */}
      <WhyChooseUsSection
        mainTitle="Why Choose"
        titleName="Burraq Digits"
        titleFor="Web Design & Development"
        benefits={[
          {
            icon: <CheckCircle size={20} />,
            title: "Customized web design and development solutions",
            description: "Tailored to your unique business needs and goals",
          },
          {
            icon: <CheckCircle size={20} />,
            title: "A team of dedicated and experienced designers",
            description:
              "Passionate about creating beautiful and functional websites",
          },
          {
            icon: <CheckCircle size={20} />,
            title: "A focus on user experience and performance",
            description:
              "Ensuring your website is fast, responsive, and user-friendly",
          },
          {
            icon: <CheckCircle size={20} />,
            title: "Cutting-edge tools and technologies",
            description:
              "To stay ahead of industry trends and deliver exceptional results",
          },
        ]}
        featuresRight={[
          "Responsive Design",
          "SEO-Optimized Websites",
          "User Experience (UX)",
          "E-commerce Solutions",
        ]}
        featuresLeft={[
          "Website Security",
          "Analytics Setup",
          "Technical Support and Maintenance",
          "Performance Optimization",
        ]}
        ctaCard={{
          title: "Ready to transform your online presence?",
          description:
            "Contact us today to discuss your web design and development needs and discover how we can help you achieve your goals.",
          buttonText: "Schedule a Consultation",
          buttonLink: "/contact",
        }}
      />

      {/* FAQ Section */}
      <FaqSection
        title="Web Design & Development"
        headingHighlight= "FAQs"
        faqs={[
          {
            question: "What is Web Design & Development?",
            answer: (
              <>
                Web design and development involves the creation and maintenance
                of websites. Web design focuses on the aesthetic and user
                experience aspects, ensuring the site is visually appealing and
                easy to navigate. Web development involves the coding and
                programming that powers the website&apos;s functionality.
                Together, they create a complete online presence for businesses.
              </>
            ),
          },
          {
            question:
              "What's the process for designing and developing a new website?",
            answer: (
              <>
                Our process typically includes: <br />
                <br />
                1) Discovery and planning, where we understand your goals and
                requirements, <br />
                2) Design phase, where we create wireframes and visual designs,{" "}
                <br />
                3) Development phase, where we build the actual website, <br />
                4) Testing and quality assurance, <br />
                5) Launch and deployment, and <br />
                6) Ongoing maintenance and support.
              </>
            ),
          },
          {
            question: "How long does it take to build a website?",
            answer: (
              <>
                The timeline varies depending on the complexity of the project.
                A simple website might take 4-6 weeks, while a more complex
                e-commerce site or custom web application could take 8-12 weeks
                or more. We&apos;ll provide you with a detailed timeline during
                our initial consultation.
              </>
            ),
          },
          {
            question: "Can you redesign my existing website?",
            answer: (
              <>
                Yes, we specialize in website redesigns. We&apos;ll evaluate
                your current website, identify areas for improvement, and create
                a modern, effective design that better serves your business
                goals while preserving the aspects that are working well.
              </>
            ),
          },
          {
            question:
              "Do you offer ongoing support and maintenance after the website goes live?",
            answer: (
              <>
                We offer various maintenance packages to keep your website
                secure, up-to-date, and performing optimally. Our support
                includes regular updates, security monitoring, performance
                optimization, content updates, and technical support when you
                need it.
              </>
            ),
          },
        ]}
      />

      {/* CTA Section - Redesigned with original brand colors */}
      <CtaSection
        title="Elevate Your Online Presence with Burraq Digits"
        paragraph="Are you ready to captivate your audience with an exceptional online presence? Contact Burraq Digits today for a free consultation and discover how our services can help you!"
        buttonText="GET STARTED WITH WEB DEVELOPMENT"
        buttonLink="/contact"
      />
    </div>
  );
}
