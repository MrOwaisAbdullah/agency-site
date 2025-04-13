import EventsManagementService from '@/components/services/EventsManagement'
import React from 'react'

export const metadata = {
    title: "Events Management Service | Burraq Digits",
    description:
        "Burraq Digits is a leading events management agency that specializes in planning and executing memorable events for businesses and individuals. Our team of experienced event planners works closely with clients to understand their vision and create customized event solutions that exceed expectations.",
    keywords: "Events Management, Event Planning, Corporate Events, Burraq Digits",
}

export const dynamic = "force-static";

const eventsManagement = () => {
  return (
    <EventsManagementService />
  )
}

export default eventsManagement