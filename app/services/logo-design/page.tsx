import LogoDesignService from '@/components/services/LogoDesign'
import React from 'react'

export const metadata = {
    title: "Logo Design Service | Burraq Digits",
    description:
        "Burraq Digits is a leading logo design agency that specializes in creating unique and memorable logos for businesses of all sizes. Our team of experienced designers works closely with clients to understand their brand identity and create custom logo designs that effectively communicate their message and values.",
    keywords: "Logo Design, Branding, Graphic Design, Burraq Digits",
}

export const dynamic = "force-static";

const logoDesign = () => {
  return (
    <LogoDesignService />
  )
}

export default logoDesign