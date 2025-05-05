"use client";

import { useState, useEffect } from "react";
import ServiceCard from "@/components/ui/ServiceCard";
import FadeInSection from "./FadeInSection";
import { PulsingLoader } from "./ui/PulseLoader";

const allServices = [
  {
    image: "/assets/services/logo.jpg",
    title: "Logo Design",
    description:
      "Compeling content that tells your brand story and connects with your audience across all platforms.",
    link: "/services/logo-design",
  },
  {
    image: "/assets/services/web-development.jpg",
    title: "Web Development",
    description:
      "Custom web development with cutting-edge technologies to create responsive, high-performance websites.",
    link: "/services/web-development",
  },
  {
    image: "/assets/services/app-development.jpg",
    title: "App Development",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
    link: "/services/app-development",
  },
  {
    image: "/assets/services/influencer-marketing.jpg",
    title: "Influencer Marketing",
    description:
      "Data analysis and reporting to measure performance and optimize your digital marketing strategies.",
    link: "/services/influencer-marketing",
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
    image: "/assets/services/events.jpg",
    title: "Events Management",
    description:
      "Strategic social media management to build community, increase engagement, and drive brand awareness.",
    link: "/services/events-management",
  },
  {
    image: "/assets/services/digital-marketing.jpg",
    title: "Digital Marketing",
    description:
      "Data-driven marketing campaigns that connect with your audience and convert visitors into loyal customers.",
    link: "/services/digital-marketing",
  },
  {
    image: "/assets/services/outdoor-marketing.jpg",
    title: "Outdoor Marketing",
    description:
      "Innovative outdoor marketing strategies that capture attention and drive foot traffic to your business.",
    link: "/services/outdoor-marketing",
  },
];

interface ServicesProps {
  initialVisibleCount?: number;
  loadMoreCount?: number;
}

const Services = ({
  initialVisibleCount = 6,
  loadMoreCount = 3,
}: ServicesProps) => {
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  const [isLoading, setIsLoading] = useState(false);

  // Preload all images for better performance
  useEffect(() => {
    allServices.forEach((service) => {
      if (service.image) {
        const img = new Image();
        img.src = service.image;
      }
    });
  }, []);

  const handleLoadMore = async () => {
    setIsLoading(true);
    // Short delay for UI feedback
    await new Promise((resolve) => setTimeout(resolve, 500));
    setVisibleCount((prev) => prev + loadMoreCount);
    setIsLoading(false);
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
                disabled={isLoading}
                className="font-poppins flex items-center text-center justify-center text-white bg-gradient-to-br from-blue-900 via-accent to-blue-700 hover:from-blue-800 py-2 px-6 rounded transition-all duration-300 transform shadow-lg shadow-accent/20 text-md font-semibold"
              >
                {isLoading ? (
                  <>
                    <PulsingLoader size="xs" color="white" />
                  </>
                ) : (
                  "Load More"
                )}
              </button>
            </div>
          )}
        </div>
      </section>
    </FadeInSection>
  );
};

export default Services;
