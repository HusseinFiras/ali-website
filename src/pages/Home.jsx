import EnhancedHeroSection from '../components/sections/EnhancedHeroSection'
import ServicesOverview from '../components/sections/ServicesOverview'
import StrategySection from '../components/sections/StrategySection'
import EnhancedServicesGrid from '../components/sections/EnhancedServicesGrid'
import AboutSection from '../components/sections/AboutSection'
import EnhancedCTASection from '../components/sections/EnhancedCTASection'

const Home = () => {
  return (
    <>
      <EnhancedHeroSection />
      <ServicesOverview />
      <StrategySection />
      <EnhancedServicesGrid />
      <AboutSection />
      <EnhancedCTASection />
    </>
  )
}

export default Home