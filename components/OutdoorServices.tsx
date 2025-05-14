"use client";

import { useState } from "react";
import ServiceCard from "@/components/ui/ServiceCard";
import FadeInSection from "./FadeInSection";

const outdoorSubServices = [
  {
    image: "/assets/services/expo.jpg",
    title: "Expo Branding",
    description:
      "Custom expo branding and booth designs that help you grab attention and dominate the exhibition floor.",
    link: "/contact",
  },
    {
      image: "/assets/services/outdoor-marketing.jpg",
      title: "School Sport Activity",
      description:
        "Become a brand activator through school events — strengthening community ties and enhancing brand presence.",
      link: "/contact",
    },
    {
      image: "/assets/services/billboard.jpg",
      title: "Billboard Advertising",
      description:
        "High-visibility billboard campaigns in premium locations — perfect for brand awareness and mass reach.",
      link: "/contact",
    },
    // {
    //   image: "/assets/services/outdoor-marketing.jpg",
    //   title: "Bike Float Ad",
    //   description:
    //     "Mobile brand promotion with illuminated bike panels, maintained by trained field teams for maximum visibility.",
    //   link: "/contact",
    // },
    // {
    //   image: "/assets/services/outdoor-marketing.jpg",
    //   title: "Human Walker Panel Ad",
    //   description:
    //     "Walking light panels for mobile advertising — expertly developed to maximize reach and engagement.",
    //   link: "/contact",
    // },
    // {
    //   image: "/assets/services/outdoor-marketing.jpg",
    //   title: "Door-to-Door Flyer Distribution",
    //   description:
    //     "Precise flyer targeting and distribution with a strong focus on quality, accuracy, and customer satisfaction.",
    //   link: "/contact",
    // },
    {
      image: "/assets/services/bus-advertisement.jpg",
      title: "Bus Shelter Advertisement",
      description:
        "High-impact transit shelter ads that reach daily commuters with strategic placement and creative visuals.",
      link: "/contact",
    },
    {
      image: "/assets/services/rickshaw.jpg",
      title: "Advertisement on Rickshaw",
      description:
        "Affordable and widespread city advertising through customized rickshaw branding campaigns.",
      link: "/contact",
    },
    // {
    //   image: "/assets/services/outdoor-marketing.jpg",
    //   title: "Vinyl Pasting on Vehicles",
    //   description:
    //     "High-quality vinyl wraps for cars and fleets — durable, visible, and designed for maximum brand exposure.",
    //   link: "/contact",
    // },
    {
      image: "/assets/services/people-bus-branding.jpg",
      title: "People Bus Branding Ad",
      description:
        "Transform public buses into moving billboards — city-wide exposure with large, bold designs.",
      link: "/contact",
    },
    // {
    //   image: "/assets/services/outdoor-marketing.jpg",
    //   title: "Mall Branding (Inside & Outside)",
    //   description:
    //     "Dominate high-traffic shopping environments with strategic branding inside and outside malls.",
    //   link: "/contact",
    // },
    // {
    //   image: "/assets/services/outdoor-marketing.jpg",
    //   title: "Promotional Marketing Activity",
    //   description:
    //     "Drive engagement with in-store product sampling, giveaways, and direct promotions that boost brand loyalty.",
    //   link: "/contact",
    // },
    // {
    //   image: "/assets/services/outdoor-marketing.jpg",
    //   title: "Foxy Branding Display Ad",
    //   description:
    //     "Bold, mobile branding using foxy displays — perfect for city-wide brand exposure and attention-grabbing visuals.",
    //   link: "/contact",
    // },
    // {
    //   image: "/assets/services/outdoor-marketing.jpg",
    //   title: "Shop Signage",
    //   description:
    //     "Professional storefront signs that guide customers, boost visibility, and make a lasting impression.",
    //   link: "/contact",
    // },
    // {
    //   image: "/assets/services/outdoor-marketing.jpg",
    //   title: "Wall Painting Ads",
    //   description:
    //     "Creative wall paintings that add visual flair and brand storytelling directly onto urban landscapes.",
    //   link: "/contact",
    // },
    {
      image: "/assets/services/smd-van-ad.jpg",
      title: "SMD Float Van Advertising",
      description:
        "Eye-catching mobile LED screen ads that light up busy streets and major events for maximum exposure.",
      link: "/contact",
    },
    {
      image: "/assets/services/pedestrian-bridge.jpg",
      title: "Pedestrian Bridge Branding",
      description:
        "Strategic pedestrian bridge ads that capture the attention of foot traffic and enhance brand visibility.",
      link: "/contact",
    },
    // {
    //   image: "/assets/services/outdoor-marketing.jpg",
    //   title: "Concert/Event Branding",
    //   description:
    //     "Bold event branding solutions — banners, signage, and visuals that enhance event experience and brand impact.",
    //   link: "/contact",
    // },
  ];
  

const OutdoorServices = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 6, outdoorSubServices.length));
  };

  const visibleServices = outdoorSubServices.slice(0, visibleCount);
  const hasMoreServices = visibleCount < outdoorSubServices.length;

  return (
    <FadeInSection>
      <section className="py-20 px-0">
        <div className="max-w-7xl mx-auto px-5">
          <div className="mb-16 text-center">
            <h3 className="text-base text-accent font-medium sm:text-lg">
              OutDoor Marketing
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
                buttonText="Get a Quote"
              />
            ))}
          </div>

          {hasMoreServices && (
            <div className="mt-12 flex justify-center">
              <button
                onClick={handleLoadMore}
                className="font-poppins flex items-center text-center justify-center text-white bg-gradient-to-br from-blue-900 via-accent to-blue-700 hover:from-blue-800 py-2 px-6 rounded transition-all duration-300 transform shadow-lg shadow-accent/20 text-md font-semibold"
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

export default OutdoorServices;
