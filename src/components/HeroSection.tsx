
const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen pt-24 pb-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 lg:pr-8 text-center lg:text-left order-2 lg:order-1">
            {/* Hello Badge */}
            <div className="inline-block">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-portfolio-blue to-blue-500 text-white font-montserrat font-medium rounded-full text-sm shadow-lg">
                Hello!
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-bold text-gray-900 dark:text-white leading-tight">
                I'm <span className="text-gray-600 dark:text-gray-300">D Swati</span>
                <span className="ml-2">👋</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-montserrat leading-relaxed max-w-lg mx-auto lg:mx-0">
              Full Stack Developer & Creative Technologist.
              <br />
              Based in India.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-portfolio-orange text-white font-montserrat font-semibold rounded-lg shadow-lg hover:shadow-xl hover:bg-orange-600 transition-all duration-300 transform hover:scale-105">
                Download CV
              </button>
              <button className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-montserrat font-semibold rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Get in Touch!
              </button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Yellow Background Circle */}
              <div className="w-80 h-80 md:w-96 md:h-96 bg-portfolio-yellow rounded-full absolute -z-10 transform translate-x-4 translate-y-4"></div>
              
              {/* Profile Image */}
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <img
                  src="/lovable-uploads/a33d70ad-aa04-4be4-b452-431900be25bb.png"
                  alt="D Swati"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
