import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import SpendingHabit from './SpendingHabit/SpendingHabit'
import NewsLetter from './NewsLetter/NewsLetter'
import FinancialServices from "../LandingPage/FinancialServices/FinancialServices"
import FeatureCover from './FeatureCover/FeatureCover'
import Overview from './Overview/Overview'
import Services from "../LandingPage/Services/Services"

function LandingPage() {
  return (
    <div>
        <HeroSection />
        <Services />
        <SpendingHabit />
        <FinancialServices />
        <Overview />
        <FeatureCover />
        <NewsLetter head='Subscribe to our Newsletter' />

    </div>
  )
}

export default LandingPage
