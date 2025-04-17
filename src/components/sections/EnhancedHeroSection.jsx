import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion';
// Import react-icons
 FaWhatsapp, FaTiktok, FaPlay, FaHeart, FaComment, FaShare, FaBell, FaThumbsUp } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const EnhancedHeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const [currentTime, setCurrentTime] = useState('');
  const phoneRef = useRef(null);
  const isInView = useInView(phoneRef, { once: false });
  const controls = useAnimation();
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [activeNotification, setActiveNotification] = useState(null);
  const [notificationDetails, setNotificationDetails] = useState({
    type: '',
    count: 1
  });

  const rotatingTexts = [
    "Digital Marketing",
    "Web Development",
    "Brand Strategy",
    "Social Media",
    "Content Creation"
  ];

  // Update current time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    };

    // Initial call
    updateTime();

    // Set interval to update every minute
    const timeInterval = setInterval(updateTime, 60000);
    return () => clearInterval(timeInterval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Get a random notification count between 1 and max
  const getRandomCount = (max = 5) => {
    return Math.floor(Math.random() * max) + 1;
  };

  // Get random notification type for a platform
  const getRandomNotificationType = (platform) => {
    const types = {
      facebook: ['like', 'comment', 'share'],
      instagram: ['heart', 'comment', 'follow'],
      twitter: ['retweet', 'reply', 'mention'],
      linkedin: ['connection', 'message', 'job'],
      whatsapp: ['message', 'group', 'call'],
      tiktok: ['like', 'comment', 'share']
    };
    
    const platformTypes = types[platform] || ['notification'];
    return platformTypes[Math.floor(Math.random() * platformTypes.length)];
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      
      // Enhanced notification sequence
      const notificationSequence = async () => {
        // Initial delay
        await new Promise(r => setTimeout(r, 2000));
        
        // Generate random order of platforms for notifications
        const platforms = ['facebook', 'instagram', 'twitter', 'linkedin', 'whatsapp', 'tiktok'];
        const shuffledPlatforms = [...platforms].sort(() => Math.random() - 0.5);
        
        // Show notifications for 3 random platforms
        for (let i = 0; i < 3; i++) {
          const platform = shuffledPlatforms[i];
          const notifType = getRandomNotificationType(platform);
          const count = getRandomCount();
          
          setNotificationDetails({
            type: notifType,
            count: count
          });
          
          setActiveNotification(platform);
          await new Promise(r => setTimeout(r, 3000 + Math.random() * 1000));
        }
        
        setActiveNotification(null);
      };
      
      notificationSequence();
      
      // Periodically show notifications
      const notificationInterval = setInterval(() => {
        notificationSequence();
      }, 15000);
      
      return () => clearInterval(notificationInterval);
    }
  }, [isInView, controls]);

  // Get notification icon based on type
  const getNotificationIcon = (type) => {
    switch (type) {
      case 'heart':
      case 'like':
        return <FaHeart className="text-white text-xs" />;
      case 'comment':
      case 'reply':
        return <FaComment className="text-white text-xs" />;
      case 'share':
      case 'retweet':
        return <FaShare className="text-white text-xs" />;
      case 'follow':
      case 'connection':
        return <FaUserPlus className="text-white text-xs" />;
      case 'message':
      case 'group':
        return <FaComment className="text-white text-xs" />;
      case 'call':
        return <FaPhone className="text-white text-xs" />;
      case 'job':
      case 'mention':
        return <FaBell className="text-white text-xs" />;
      default:
        return <FaBell className="text-white text-xs" />;
    }
  };

  // Animation variants for the social media icons
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.3
      }
    }
  };

  const iconVariants = {
    hidden: { y: 20, opacity: 0, scale: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 300,
        bounce: 0.4
      }
    }
  };

  const floatAnimation = {
    initial: { y: 0 },
    animate: { 
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseAnimation = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Get notification styles for each platform
  const getNotificationStyles = (platform) => {
    if (activeNotification !== platform) return {};
    
    return {
      boxShadow: '0 0 15px 5px rgba(255, 255, 255, 0.6)',
      animation: 'pulse 1.5s infinite'
    };
  };

  // Social media data with custom animations
  const socialPlatforms = [
    { 
      name: 'facebook', 
      icon: <FaFacebookF className="w-7 h-7 text-white" />, 
      position: 'top-0 right-8',
      size: 'w-14 h-14',
      color: 'bg-blue-600',
      animation: {
        y: [0, -20, 0],
        rotate: [0, 5, 0],
        scale: [1, 1.1, 1],
        duration: 4
      }
    },
    { 
      name: 'instagram', 
      icon: <FaInstagram className="w-8 h-8 text-white" />, 
      position: 'bottom-16 right-2',
      size: 'w-16 h-16',
      color: 'bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500',
      animation: {
        y: [0, 15, 0],
        rotate: [0, -5, 0],
        scale: [1, 1.15, 1],
        duration: 5
      }
    },
    { 
      name: 'twitter', 
      icon: <FaXTwitter className="w-7 h-7 text-white" />, 
      position: 'bottom-6 left-16',
      size: 'w-14 h-14',
      color: 'bg-black',
      animation: {
        y: [0, 12, 0],
        rotate: [0, -8, 0],
        scale: [1, 1.1, 1],
        duration: 4.5
      }
    },
    { 
      name: 'tiktok', 
      icon: <FaTiktok className="w-8 h-8 text-white" />, 
      position: 'top-14 left-2',
      size: 'w-15 h-15 p-3',
      color: 'bg-black',
      animation: {
        y: [0, -12, 0],
        rotate: [0, 8, 0],
        scale: [1, 1.2, 1],
        duration: 3.5
      }
    },
    { 
      name: 'linkedin', 
      icon: <FaLinkedinIn className="w-7 h-7 text-white" />, 
      position: 'top-1/2 left-0',
      size: 'w-14 h-14',
      color: 'bg-blue-700',
      animation: {
        x: [0, -15, 0],
        rotate: [0, 6, 0],
        scale: [1, 1.1, 1],
        duration: 5
      }
    },
    { 
      name: 'whatsapp', 
      icon: <FaWhatsapp className="w-7 h-7 text-white" />, 
      position: 'top-1/4 right-0',
      size: 'w-14 h-14',
      color: 'bg-green-500',
      animation: {
        x: [0, 12, 0],
        rotate: [0, -8, 0],
        scale: [1, 1.15, 1],
        duration: 4
      }
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-light-bg via-white to-light-bg py-20 md:py-32 overflow-hidden">
      {/* Animated Background Elements - Large Circles Only */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-20 -right-20 w-72 h-72 bg-primary-purple opacity-5 rounded-full"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-40 -left-20 w-80 h-80 bg-primary-orange opacity-5 rounded-full"
          animate={{ 
            x: [0, -10, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-40 w-60 h-60 bg-primary-purple opacity-5 rounded-full"
          animate={{ 
            x: [0, 20, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side content */}
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-sm font-semibold text-primary-orange tracking-widest uppercase mb-2">TRANSFORMING BRANDS</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-purple mb-6">
              Smart Media
            </h1>
            <div className="flex items-center h-12 mb-6">
              <span className="text-lg md:text-xl text-dark-text mr-2">
                Specialists in
              </span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentText}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-lg md:text-xl font-bold text-primary-orange"
                >
                  {rotatingTexts[currentText]}
                </motion.div>
              </AnimatePresence>
            </div>
            <p className="text-lg text-light-text mb-8 max-w-lg">
              To assist firms aiming to expand globally, a go-to-market strategy and execution specialist for Business marketing solutions
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="btn btn-primary">
                Discover More
              </Link>
              <Link to="/contact" className="btn border-2 border-primary-purple text-primary-purple hover:bg-primary-purple hover:text-white hover:-translate-y-1 transition-all duration-300">
                Get Started
              </Link>
            </div>
          </motion.div>

          {/* Right side image - Social Media Animation */}
          <motion.div 
            className="md:w-1/2 flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            ref={phoneRef}
          >
            {/* Social media icons floating around phone */}
            <motion.div
              className="relative"
              variants={floatAnimation}
              initial="initial"
              animate="animate"
            >
              {/* Phone with 3D perspective */}
              <motion.div 
                className="w-72 h-80 md:w-96 md:h-[480px] relative flex items-center justify-center perspective-1000"
                variants={pulseAnimation}
                initial="initial"
                animate="animate"
              >
                {/* 3D Phone with shadows - REVERSED TILT */}
                <motion.div 
                  className="w-60 h-[420px] md:w-72 md:h-[480px] rounded-[40px] relative overflow-hidden transform-style-3d"
                  initial={{ rotateY: -30, rotateX: 5 }}
                  animate={{ 
                    rotateY: [-30, -20, -30], 
                    rotateX: [5, 0, 5],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  style={{ 
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1) inset",
                    background: "linear-gradient(145deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)",
                    backdropFilter: "blur(5px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  {/* Phone screen with glare effect */}
                  <div className="absolute inset-2 bg-gradient-to-br from-white to-gray-100 rounded-[32px] flex flex-col overflow-hidden">
                    {/* Status bar with live time */}
                    <div className="h-6 bg-gray-100 rounded-t-[32px] flex justify-between items-center px-5">
                      <div className="text-[10px] text-gray-500 font-medium">{currentTime}</div>
                      <div className="w-16 h-4 bg-gray-200 rounded-full flex justify-center items-center">
                        <div className="w-10 h-1.5 bg-gray-300 rounded-full"></div>
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Content area */}
                    <div className="flex-1 p-4 relative">
                      {/* Purple header area */}
                      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-primary-purple/90 to-primary-orange/80 rounded-t-lg"></div>
                      
                      {/* Content */}
                      <div className="relative z-10 h-full flex flex-col">
                        {/* App title */}
                        <div className="text-white text-center py-2 font-bold">
                          Social Dashboard
                        </div>
                        
                        {/* Content cards with animations */}
                        <div className="flex flex-col space-y-3 mt-4">
                          <motion.div 
                            className="w-full h-12 bg-white rounded-xl shadow-sm flex items-center px-3"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                          >
                            <div className="w-8 h-8 bg-primary-orange/20 rounded-full flex items-center justify-center mr-3">
                              <div className="w-4 h-4 bg-primary-orange rounded-full"></div>
                            </div>
                            <div className="flex-1">
                              <motion.div 
                                className="w-2/3 h-2 bg-gray-200 rounded-full mb-1"
                                animate={{ width: ["50%", "80%", "50%"] }}
                                transition={{ duration: 4, repeat: Infinity }}
                              />
                              <motion.div 
                                className="w-1/2 h-2 bg-gray-100 rounded-full"
                                animate={{ width: ["30%", "60%", "30%"] }}
                                transition={{ duration: 5, repeat: Infinity }}
                              />
                            </div>
                          </motion.div>
                          
                          <motion.div 
                            className="w-full h-36 bg-white rounded-xl shadow-sm overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                          >
                            {/* Chart area */}
                            <div className="h-full relative">
                              <div className="absolute inset-0 flex items-end px-2 pb-2">
                                <div className="flex-1 h-full flex items-end space-x-2">
                                  {Array.from({ length: 7 }).map((_, i) => (
                                    <motion.div 
                                      key={i}
                                      className="flex-1 bg-primary-purple/30 rounded-t-md"
                                      initial={{ height: '20%' }}
                                      animate={{ height: `${20 + Math.random() * 60}%` }}
                                      transition={{ 
                                        duration: 2 + i * 0.5, 
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                      }}
                                    />
                                  ))}
                                </div>
                              </div>
                              
                              {/* Chart overlay with gradient */}
                              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/50 pointer-events-none"></div>
                            </div>
                          </motion.div>
                          
                          {videoPlaying ? (
                            <div className="w-full h-16 bg-white rounded-xl shadow-sm overflow-hidden relative">
                              <motion.div 
                                className="absolute inset-0 bg-gradient-to-r from-primary-purple/20 to-primary-orange/20"
                                animate={{ 
                                  background: [
                                    'linear-gradient(90deg, rgba(113,20,113,0.2) 0%, rgba(245,171,0,0.2) 100%)',
                                    'linear-gradient(90deg, rgba(245,171,0,0.2) 0%, rgba(113,20,113,0.2) 100%)',
                                    'linear-gradient(90deg, rgba(113,20,113,0.2) 0%, rgba(245,171,0,0.2) 100%)'
                                  ]
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                              />
                              
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-6 h-6 bg-primary-purple rounded-full flex items-center justify-center">
                                  <span className="text-white text-xs">❚❚</span>
                                </div>
                                
                                {/* Audio waves */}
                                <div className="flex items-center space-x-1 ml-4">
                                  {Array.from({ length: 5 }).map((_, i) => (
                                    <motion.div 
                                      key={i}
                                      className="w-1 h-4 bg-primary-purple rounded-full"
                                      animate={{ height: ["30%", "100%", "30%"] }}
                                      transition={{ 
                                        duration: 0.5 + Math.random() * 0.5, 
                                        repeat: Infinity,
                                        repeatDelay: Math.random() * 0.2
                                      }}
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>
                          ) : (
                            <motion.div 
                              className="w-full h-16 bg-white rounded-xl shadow-sm flex items-center justify-center cursor-pointer"
                              whileHover={{ scale: 1.05 }}
                              onClick={() => setVideoPlaying(true)}
                            >
                              <motion.div 
                                className="w-12 h-12 bg-primary-purple rounded-full flex items-center justify-center"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <FaPlay className="w-4 h-4 text-white ml-1" />
                              </motion.div>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Home indicator */}
                    <div className="h-6 flex justify-center items-center">
                      <div className="w-1/3 h-1 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Glare effect - adjusted for reverse tilt */}
                  <motion.div 
                    className="absolute inset-0 rounded-[32px] pointer-events-none"
                    style={{ 
                      background: "linear-gradient(225deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)", 
                      opacity: 0.5
                    }}
                    animate={{ 
                      background: [
                        "linear-gradient(225deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)",
                        "linear-gradient(225deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)",
                        "linear-gradient(225deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)"
                      ]
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>

              {/* Social Media Icons floating around */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={controls}
                className="absolute inset-0"
              >
                {socialPlatforms.map((platform) => (
                  <motion.div 
                    key={platform.name}
                    variants={iconVariants}
                    className={`absolute ${platform.position} ${platform.size} ${platform.color} rounded-full flex items-center justify-center shadow-lg`}
                    animate={{ 
                      y: platform.animation.y || [0, 0, 0],
                      x: platform.animation.x || [0, 0, 0],
                      rotate: platform.animation.rotate || [0, 0, 0],
                      scale: platform.animation.scale || [1, 1, 1],
                    }}
                    transition={{ 
                      duration: platform.animation.duration, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    style={getNotificationStyles(platform.name)}
                    whileHover={{ 
                      scale: 1.2, 
                      boxShadow: '0 0 15px 5px rgba(255, 255, 255, 0.3)'
                    }}
                  >
                    {platform.icon}
                    
                    {/* Platform-specific notification badges */}
                    {activeNotification === platform.name && (
                      <motion.div 
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className={`absolute -top-1 -right-1 min-w-5 h-5 ${
                          platform.name === 'instagram' ? 'bg-gradient-to-tr from-yellow-500 via-red-500 to-pink-500' :
                          platform.name === 'facebook' ? 'bg-blue-600' :
                          platform.name === 'twitter' ? 'bg-black' :
                          platform.name === 'linkedin' ? 'bg-blue-700' :
                          platform.name === 'whatsapp' ? 'bg-green-600' :
                          platform.name === 'tiktok' ? 'bg-black' : 'bg-red-500'
                        } rounded-full flex items-center justify-center px-1`}
                      >
                        {platform.name === 'instagram' && notificationDetails.type === 'heart' ? (
                          <FaHeart className="text-white text-[8px]" />
                        ) : platform.name === 'facebook' && notificationDetails.type === 'like' ? (
                          <FaThumbsUp className="text-white text-[8px]" />
                        ) : platform.name === 'twitter' && notificationDetails.type === 'retweet' ? (
                          <FaShare className="text-white text-[8px]" />
                        ) : notificationDetails.count > 9 ? (
                          <span className="text-white text-[8px] font-bold px-1">9+</span>
                        ) : (
                          <span className="text-white text-[8px] font-bold px-1">{notificationDetails.count}</span>
                        )}
                      </motion.div>
                    )}
                  </motion.div>
                ))}
                
                {/* Ads Badge */}
                <motion.div 
                  variants={iconVariants}
                  className="absolute top-6 left-1/3 px-4 py-2 bg-primary-orange text-white font-bold rounded-lg shadow-lg text-lg"
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 3, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  ADS
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Add custom CSS for animations */}
      <style jsx="true">{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        
        @keyframes pulse {
          0% {
            box-shadow: 0 0 10px 3px rgba(255, 255, 255, 0.7);
          }
          50% {
            box-shadow: 0 0 20px 5px rgba(255, 255, 255, 0.9);
          }
          100% {
            box-shadow: 0 0 10px 3px rgba(255, 255, 255, 0.7);
          }
        }
      `}</style>
    </section>
  );
};

export default EnhancedHeroSection;