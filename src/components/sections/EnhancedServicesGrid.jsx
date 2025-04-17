const ServicesGrid = () => {
    const services = [
      {
        title: "Create E-Commerce Store",
        description: "Everything You Need For A Quick Launch To Start Selling Online Today! Develop Your Store Using Our Consolidated Platform.",
        icon: "https://via.placeholder.com/60x60?text=EC",
        color: "orange"
      },
      {
        title: "Brand Design & Strategy",
        description: "Branding design services from Smart Media are of the highest caliber.",
        icon: "https://via.placeholder.com/60x60?text=BD",
        color: "purple"
      },
      {
        title: "Social Media Management",
        description: "The specialists in the social media management provide clients with tried and proven methods.",
        icon: "https://via.placeholder.com/60x60?text=SM",
        color: "orange"
      },
      {
        title: "Audience Analytics",
        description: "The economy reality dictates us to use finest data systems and capabilities.",
        icon: "https://via.placeholder.com/60x60?text=AA",
        color: "purple"
      },
      {
        title: "SEO",
        description: "The best course of action to develop your business significantly is to use our search engine optimization.",
        icon: "https://via.placeholder.com/60x60?text=SEO",
        color: "purple"
      },
      {
        title: "Content Writing",
        description: "We aid in creating the most effective material for your social media profiles, then assist in marketing them.",
        icon: "https://via.placeholder.com/60x60?text=CW",
        color: "purple"
      },
      {
        title: "Web Development",
        description: "Make your website's inactive visitors to paying ones by our development knowledge.",
        icon: "https://via.placeholder.com/60x60?text=WD",
        color: "orange"
      },
      {
        title: "Digital Marketing",
        description: "Content marketing is a powerful marketing tactic when used as a component of a thorough marketing plan.",
        icon: "https://via.placeholder.com/60x60?text=DM",
        color: "purple"
      }
    ];
  
    return (
      <section className="py-20">
        <div className="container mx-auto px-5 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-purple mb-12 text-center">
            Do You Want Your Brand To Have Greater Reach?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`rounded-card p-6 text-white text-center ${service.color === 'purple' ? 'bg-primary-purple' : 'bg-primary-orange'} transition-all duration-300 hover:-translate-y-2 hover:shadow-lg`}
              >
                <img 
                  src={service.icon} 
                  alt={service.title}
                  className="w-16 h-16 mx-auto mb-4" 
                />
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/90 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default ServicesGrid