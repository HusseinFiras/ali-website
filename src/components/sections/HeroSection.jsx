import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className="bg-light-bg py-20 md:py-32">
      <div className="container mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="section-eyebrow">WE ARE</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-purple mb-6">
              Smart Media
            </h1>
            <p className="text-lg text-light-text mb-8 max-w-lg">
              To assist firms aiming to expand globally, a go-to-market strategy and execution specialist for Business marketing solutions
            </p>
            <Link to="/about" className="btn btn-primary">
              Read More
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/src/assets/hero-img.png" 
              alt="Smart Media Hero" 
              className="w-full max-w-lg"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/500x400?text=Smart+Media";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection