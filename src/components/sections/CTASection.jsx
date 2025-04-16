import { Link } from 'react-router-dom'

const CTASection = () => {
  return (
    <section className="py-16 my-10">
      <div className="container mx-auto px-5 md:px-8">
        <div className="bg-light-bg rounded-2xl p-8 md:p-16 text-center max-w-5xl mx-auto">
          <div className="section-eyebrow justify-center">Start Now</div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-purple mb-6">
            Get Started For Free!
          </h2>
          <p className="text-light-text mb-8 max-w-2xl mx-auto">
            By utilizing Smart Media innovative marketing solutions, which are offered with special 
            concepts in mind, you can give your brand the prominence it merits, all in a varied 
            collection of various types of designs, films, motion graphics, and other materials
          </p>
          <Link to="/contact" className="btn btn-primary">
            SCHEDULE A CALL
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTASection