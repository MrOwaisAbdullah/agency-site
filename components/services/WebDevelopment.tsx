"use client"
import { useEffect, useRef, type ReactNode } from "react"
import type React from "react"

import Link from "next/link"
import { motion, useInView, useAnimation } from "framer-motion"
import { CheckCircle, ArrowRight, Code, Layout, Smartphone, ShoppingCart, Shield, Settings } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const FadeInSection = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
      }}
    >
      {children}
    </motion.div>
  )
}

interface ServiceCardProps {
  icon: React.ElementType<any>
  title: string
  description: string
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-[#1a1c20] p-6 rounded-lg border border-gray-800 hover:border-accent/30 transition-all duration-300 h-full">
      <div className="text-accent mb-4">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-bold mb-3 font-montserrat text-white">{title}</h3>
      <p className="text-gray-400 font-poppins">{description}</p>
    </div>
  )
}

const FeatureItem = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center space-x-3 mb-3">
      <div className="text-accent">
        <CheckCircle size={18} />
      </div>
      <span className="text-gray-300 font-poppins">{title}</span>
    </div>
  )
}

export default function WebDevelopmentService() {
  return (
    <div className="bg-[#212428] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 rounded-b-[50px] border-b border-b-gray-600">
        {/* Animated Background Elements - More visible and less blue */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">

          {/* Secondary gradient with more pronounced animation and purple tint */}
          <motion.div
            className="absolute bottom-[10%] left-[5%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-purple-900/20 via-accent/15 to-transparent blur-[80px] opacity-70"
            initial={{ x: 0, y: 0, scale: 1 }}
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -30, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 1,
            }}
          ></motion.div>

          {/* Accent highlight with more visible pulse animation */}
          <motion.div
            className="absolute animate-float top-[40%] right-[30%] w-[300px] h-[300px] rounded-full bg-purple-500/15 blur-[70px]"
            initial={{ opacity: 0.5, scale: 1 }}
            animate={{
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 2,
            }}
          ></motion.div>

          {/* Animated decorative line 1 - more visible */}
          <motion.div
            className="absolute top-[20%] left-[15%] w-40 h-[3px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
            initial={{ rotate: 30, scale: 1, opacity: 0.5 }}
            animate={{
              rotate: [30, 45, 30],
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          ></motion.div>

          {/* Animated decorative line 2 - more visible */}
          <motion.div
            className="absolute bottom-[30%] right-[20%] w-40 h-[3px] bg-gradient-to-r from-transparent via-accent/50 to-transparent"
            initial={{ rotate: -30, scale: 1, opacity: 0.5 }}
            animate={{
              rotate: [-30, -45, -30],
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 9,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 1,
            }}
          ></motion.div>

          {/* Animated circle 1 - larger and more visible */}
          <motion.div
            className="absolute top-[60%] left-[25%] w-20 h-20 border-2 border-purple-500/30 rounded-full"
            initial={{ scale: 1, rotate: 0, opacity: 0.3 }}
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "linear",
            }}
          ></motion.div>

          {/* Animated circle 2 - larger and more visible */}
          <motion.div
            className="absolute top-[25%] right-[15%] w-28 h-28 border-2 border-accent/25 rounded-full"
            initial={{ scale: 1, rotate: 0, opacity: 0.25 }}
            animate={{
              scale: [1, 0.8, 1],
              rotate: [0, -180, -360],
              opacity: [0.25, 0.4, 0.25],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "linear",
              delay: 2,
            }}
          ></motion.div>

          {/* Additional floating elements - larger and more visible */}
          <motion.div
            className="absolute top-[35%] left-[40%] w-10 h-10 bg-purple-500/20 rounded-md"
            initial={{ y: 0, rotate: 0, opacity: 0.2 }}
            animate={{
              y: [0, -25, 0],
              rotate: [0, 45, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          ></motion.div>

          <motion.div
            className="absolute bottom-[40%] right-[40%] w-12 h-12 border-2 border-accent/25 rounded-full"
            initial={{ y: 0, scale: 1, opacity: 0.25 }}
            animate={{
              y: [0, 25, 0],
              scale: [1, 1.2, 1],
              opacity: [0.25, 0.45, 0.25],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 1,
            }}
          ></motion.div>
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <FadeInSection>
            <div className="text-center mb-8">
              <span className="text-accent uppercase tracking-wider text-sm font-semibold font-montserrat">
                WEBSITE DESIGN & DEVELOPMENT
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl md:leading-tight font-bold text-center mb-6 font-montserrat">
              Web Design & Development by <span className="text-accent">Burraq Digits</span>
              <br /> Elevate Your Online Presence
            </h1>
            <p className="text-gray-400 text-center max-w-3xl mx-auto mb-10 text-lg font-poppins">
              Create a professional online presence with Burraq Digits's expert web design and development services,
              tailored to deliver a seamless user experience and drive results.
            </p>
            <div className="flex justify-center">
              <Link href="/contact">
                <button className="bg-gradient-to-br from-blue-900 via-accent to-blue-700 hover:from-blue-950 py-3 px-8 rounded-full font-medium md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20">
                  GET STARTED WITH WEB DEVELOPMENT
                </button>
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">
              Transform Your Website with Burraq Digits's Web Design & Development Services
            </h2>
            <p className="text-gray-400 mb-16 max-w-3xl text-lg font-poppins">
              In today's digital world, a professionally designed and developed website is essential for any successful
              business. At Burraq Digits, our team of expert web designers and developers is dedicated to crafting
              stunning, user-friendly websites that reflect your brand, captivate your audience and achieve your
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

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <FadeInSection>
                <h2 className="text-3xl md:text-4xl font-bold mb-10 font-montserrat">
                  Why Choose Burraq Digits for Your Web Design & Development Needs?
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="text-accent mt-1">
                      <CheckCircle size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 font-montserrat">
                        Customized web design and development solutions
                      </h3>
                      <p className="text-gray-400 font-poppins">Tailored to your unique business needs and goals</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="text-accent mt-1">
                      <CheckCircle size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 font-montserrat">
                        A team of dedicated and experienced designers
                      </h3>
                      <p className="text-gray-400 font-poppins">
                        Passionate about creating beautiful and functional websites
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="text-accent mt-1">
                      <CheckCircle size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 font-montserrat">
                        A focus on user experience and performance
                      </h3>
                      <p className="text-gray-400 font-poppins">
                        Ensuring your website is fast, responsive, and easy to navigate
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="text-accent mt-1">
                      <CheckCircle size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 font-montserrat">
                        Cutting-edge tools and technologies
                      </h3>
                      <p className="text-gray-400 font-poppins">
                        To stay ahead of industry trends and deliver exceptional results
                      </p>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </div>

            <div className="lg:w-1/2">
              <FadeInSection delay={0.3}>
                <div className="bg-[#1a1c20] p-8 rounded-lg border border-gray-800">
                  <h3 className="text-2xl font-bold mb-6 font-montserrat">Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                    <div>
                      <FeatureItem title="Responsive Design" />
                      <FeatureItem title="SEO-Optimized Websites" />
                      <FeatureItem title="User Experience (UX)" />
                      <FeatureItem title="E-commerce Solutions" />
                    </div>
                    <div>
                      <FeatureItem title="Website Security" />
                      <FeatureItem title="Analytics Setup" />
                      <FeatureItem title="Technical Support and Maintenance" />
                      <FeatureItem title="Performance Optimization" />
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-800">
                    <h4 className="text-xl font-bold mb-4 font-montserrat">Ready to transform your online presence?</h4>
                    <p className="text-gray-400 mb-6 font-poppins">
                      Contact us today to discuss your web design and development needs and discover how we can help you
                      achieve your goals.
                    </p>
                    <Link href="/contact">
                      <button className="flex items-center gap-2 bg-gradient-to-br from-blue-900 via-accent to-blue-700 hover:from-blue-800 py-2 px-4 rounded-full md:text-md transition-all duration-300 transform shadow-lg shadow-accent/20">
                        Schedule a Consultation <ArrowRight size={16} />
                      </button>
                    </Link>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#1a1c20]">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 font-montserrat">
                Web Design & Development FAQs: What You Need to Know
              </h2>

              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border border-gray-800 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-[#212428] transition-all">
                    <span className="text-left text-lg font-montserrat">What is Web Design & Development?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-400 font-poppins">
                    Web design and development involves the creation and maintenance of websites. Web design focuses on
                    the aesthetic and user experience aspects, ensuring the site is visually appealing and easy to
                    navigate. Web development involves the coding and programming that powers the website's
                    functionality. Together, they create a complete online presence for businesses.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-gray-800 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-[#212428] transition-all">
                    <span className="text-left text-lg font-montserrat">
                      What's the process for designing and developing a new website?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-400 font-poppins">
                    Our process typically includes: <br /> <br />
                    1) Discovery and planning, where we understand your goals and requirements, <br />
                    2) Design phase, where we create wireframes and visual designs, <br />
                    3) Development phase, where we build the actual website, <br />
                    4) Testing and quality assurance, <br />
                    5) Launch and deployment, and
                    <br />
                    6) Ongoing maintenance and support.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-gray-800 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-[#212428] transition-all">
                    <span className="text-left text-lg font-montserrat">How long does it take to build a website?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-400 font-poppins">
                    The timeline varies depending on the complexity of the project. A simple website might take 4-6
                    weeks, while a more complex e-commerce site or custom web application could take 8-12 weeks or more.
                    We'll provide you with a detailed timeline during our initial consultation.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-gray-800 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-[#212428] transition-all">
                    <span className="text-left text-lg font-montserrat">Can you redesign my existing website?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-400 font-poppins">
                    Yes, we specialize in website redesigns. We'll evaluate your current website, identify areas for
                    improvement, and create a modern, effective design that better serves your business goals while
                    preserving the aspects that are working well.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border border-gray-800 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-[#212428] transition-all">
                    <span className="text-left text-lg font-montserrat">
                      Do you offer ongoing support and maintenance after the website goes live?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-400 font-poppins">
                    We offer various maintenance packages to keep your website secure, up-to-date, and performing
                    optimally. Our support includes regular updates, security monitoring, performance optimization,
                    content updates, and technical support when you need it.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA Section - Redesigned with original brand colors */}
      <section className="py-20 relative overflow-hidden bg-[#131519]">
        {/* Grid Background Pattern */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(58, 105, 255, 0.1) 1px, transparent 1px), 
                                linear-gradient(to bottom, rgba(58, 105, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        ></div>

        {/* Glowing Elements with brand colors */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/15 blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-900/15 blur-[120px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-montserrat">
                Elevate Your Online Presence with Burraq Digits's Web Design & Development Services
              </h2>
              <p className="text-gray-400 mb-10 text-lg font-poppins">
                Are you ready to captivate your audience with an exceptional online presence? Contact Burraq Digits
                today for a free consultation and discover how our web design and development services can help you
                create a stunning, user-friendly website that drives results and supports your overall marketing goals.
              </p>
              <Link href="/contact">
                <button className="bg-gradient-to-br from-blue-900 via-accent to-blue-700 hover:from-blue-800 py-3 px-8 rounded-full font-medium md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20">
                  GET STARTED WITH WEB DEVELOPMENT
                </button>
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}
