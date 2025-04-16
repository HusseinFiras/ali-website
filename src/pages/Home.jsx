import HeroSection from '../components/sections/HeroSection'
import ServicesOverview from '../components/sections/ServicesOverview'
import StrategySection from '../components/sections/StrategySection'
import ServicesGrid from '../components/sections/ServicesGrid'
import AboutSection from '../components/sections/AboutSection'
import CTASection from '../components/sections/CTASection'

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <StrategySection />
      <ServicesGrid />
      <AboutSection />
      <CTASection />
    </>
  )
}

export default Home