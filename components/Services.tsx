"use client";

import { useState } from "react";
import ServiceCard from "@/components/ui/ServiceCard";
import FadeInSection from "./FadeInSection";

const allServices = [
  {
    image: "/assets/services/web-development.jpg",
    title: "Web Development",
    description:
      "Custom web development with cutting-edge technologies to create responsive, high-performance websites.",
    link: "/services/web-development",
  },
  {
    image: "/assets/services/influencer-marketing.jpg",
    title: "Influencer Marketing",
    description:
      "Data analysis and reporting to measure performance and optimize your digital marketing strategies.",
    link: "/services/influencer-marketing",
  },
  {
    image: "/assets/services/app-development.jpg",
    title: "App Development",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
    link: "/services/app-development",
  },
  {
    image: "/assets/services/seo.jpg",
    title: "SEO",
    description:
      "Strategic digital solutions tailored to elevate your brand's online presence and drive measurable results.",
    link: "/services/seo",
  },
  {
    image: "/assets/services/ui-ux.jpg",
    title: "UI/UX Design",
    description:
      "User-centered design that creates intuitive, engaging interfaces to enhance user satisfaction and conversion.",
    link: "/services/ui-ux-design",
  },
  {
    image: "/assets/services/digital-marketing.jpg",
    title: "Digital Marketing",
    description:
      "Data-driven marketing campaigns that connect with your audience and convert visitors into loyal customers.",
    link: "/services/digital-marketing",
  },
  {
    image: "/assets/services/events.jpg",
    title: "Events Management",
    description:
      "Strategic social media management to build community, increase engagement, and drive brand awareness.",
    link: "/services/events-management",
  },
  {
    image: "/assets/services/logo.jpg",
    title: "Logo Design",
    description:
      "Compeling content that tells your brand story and connects with your audience across all platforms.",
    link: "/services/logo-design",
  },
];

const Services = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 3, allServices.length));
  };

  const visibleServices = allServices.slice(0, visibleCount);
  const hasMoreServices = visibleCount < allServices.length;

  return (
    <FadeInSection>
      <section className="py-20 px-0">
        <div className="max-w-7xl mx-auto px-5">
          <div className="mb-16 text-center">
            <h3 className="text-base text-accent font-medium sm:text-lg">
              Features
            </h3>
            <h2 className="text-5xl text-text font-semibold sm:text-6xl">
              Services
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visibleServices.map((service, index) => (
              <ServiceCard
                key={index}
                image={service.image}
                description={service.description}
                link={service.link}
              />
            ))}
          </div>

          {hasMoreServices && (
            <div className="mt-12 flex justify-center">
              <button
                onClick={handleLoadMore}
                className="flex items-center text-center justify-center text-white bg-gradient-to-br from-blue-900 via-accent to-blue-700 hover:from-blue-800 py-2 px-6 rounded transition-all duration-300 transform shadow-lg shadow-accent/20 text-md font-semibold"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>
    </FadeInSection>
  );
};

export default Services;
