import { Link } from 'react-router-dom'

const StrategySection = () => {
  return (
    <section className="bg-light-bg py-20">
      <div className="container mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://via.placeholder.com/500x500?text=Strategy+Illustration" 
              alt="Strategy Illustration"
              className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="md:w-1/2">
            <div className="section-eyebrow">Strategy</div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-purple mb-6">
              Smart Media
            </h2>
            <p className="text-light-text mb-8">
              Through a multi-channel marketing strategy, we assists customers in achieving their objectives. 
              Your clients, both present and future, are taken into consideration while developing our 
              analytics-based marketing campaigns.
            </p>
            <Link to="/services" className="btn btn-primary">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StrategySection