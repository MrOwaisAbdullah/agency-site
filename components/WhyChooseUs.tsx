import FadeInSection from "./FadeInSection";
import FeatureItem from "./ui/FeaturedItem";
import CtaCard, { CtaCardProps } from "./CtaCard";
import BenefitItem from "./BenefitItems";

interface WhyChooseUsProps {
  mainTitle: string;
  titleName: string;
  titleFor: string;
  benefits: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
  featuresLeft: string[];
  featuresRight: string[];
  ctaCard: CtaCardProps;
}

export default function WhyChooseUsSection( { mainTitle, titleName, titleFor, benefits, featuresLeft, featuresRight, ctaCard } : WhyChooseUsProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column */}
          <div className="lg:w-1/2">
            <FadeInSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-10 font-montserrat">
                {mainTitle} <span className="text-accent">{titleName}</span> for {titleFor}?
              </h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <BenefitItem
                    key={index}
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                  />
                ))}
              </div>
            </FadeInSection>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2">
            <FadeInSection delay={0.3}>
              <div className="bg-[#1a1c20] p-8 rounded-lg border border-gray-800">
                <h3 className="text-2xl font-bold mb-6 font-montserrat">Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                  <div>
                    {featuresLeft.map((feature, index) => (
                      <FeatureItem key={index} title={feature} />
                    ))}
                  </div>
                  <div>
                    {featuresRight.map((feature, index) => (
                      <FeatureItem key={index} title={feature} />
                    ))}
                  </div>
                </div>

                <CtaCard {...ctaCard} />
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
}