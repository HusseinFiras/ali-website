const AboutSection = () => {
    return (
      <section className="py-20">
        <div className="container mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="section-eyebrow">Know More</div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-purple mb-6">
                Smart Media
              </h2>
              <p className="text-light-text mb-6">
                Our skilled, adaptable marketing team thrives on meeting the most demanding go-to-market 
                issues with agile marketing execution and under strict time constraints. We are a full team 
                under one roof, and our objective is to help you deliver on your promise. The siblings saw 
                a huge gap in the Iraqi market, which is underserved in digital marketing, social media 
                management, as well as app innovations, and decided to start this company to fill it.
              </p>
              
              <div className="my-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary-orange rounded-full flex items-center justify-center text-white mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-primary-purple font-semibold">clients traditional and digital marketing</p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary-orange rounded-full flex items-center justify-center text-white mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-primary-purple font-semibold">app and website development</p>
                </div>
              </div>
              
              <p className="text-light-text">
                as well as for their brands in Iraq and the Middle East. We collected specialists, experts, 
                and award winners to create the all-encompassing platform known as Smart Media. We offer 
                all-day service, cordial business relationships, and multi-level dependability.
              </p>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src="https://via.placeholder.com/500x600?text=Team+Member" 
                alt="Team Member" 
                className="w-full max-w-lg mx-auto rounded-lg shadow-lg" 
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default AboutSection