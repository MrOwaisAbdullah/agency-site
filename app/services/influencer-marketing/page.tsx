import InfluencerMarketingService from '@/components/services/InfluencerMarketing'
import React from 'react'

export const metadata = {
    title: "Influencer Marketing Service | Burraq Digits",
    description:
        "Burraq Digits is a leading influencer marketing agency that specializes in connecting brands with the right influencers to amplify their reach and engagement. Our team of experts curates impactful influencer campaigns that drive brand awareness and foster authentic connections with target audiences.",
    keywords: "Influencer Marketing, Social Media, Brand Promotion, Burraq Digits",
}

export const dynamic = "force-static";

const influencerMarketing = () => {
  return (
    <InfluencerMarketingService />
)
}

export default influencerMarketing