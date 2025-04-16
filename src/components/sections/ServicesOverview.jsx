const ServicesOverview = () => {
    const services = [
      {
        title: "Market Analysis",
        icon: "https://via.placeholder.com/80x80?text=MA",
      },
      {
        title: "Strategy Development",
        icon: "https://via.placeholder.com/80x80?text=SD", 
      },
      {
        title: "Plan Execution",
        icon: "https://via.placeholder.com/80x80?text=PE",
      }
    ];
  
    return (
      <section className="py-16">
        <div className="container mx-auto px-5 md:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-card shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 text-center max-w-xs"
              >
                <img 
                  src={service.icon} 
                  alt={service.title} 
                  className="w-20 h-20 mx-auto mb-6"
                />
                <h3 className="text-xl font-bold text-primary-purple">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ServicesOverview;