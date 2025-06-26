
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-200 dark:bg-yellow-600 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gray-200 dark:bg-gray-600 rounded-full opacity-20 blur-xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            This is it. ;)
          </h2>
          
          {/* Horizontal line */}
          <div className="w-20 h-1 bg-gray-300 dark:bg-gray-600 mx-auto mb-8"></div>
          
          {/* Content */}
          <div className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed space-y-6">
            <p>
              <strong className="text-gray-900 dark:text-white">Swati</strong> is an Indian <strong className="text-gray-900 dark:text-white">Full Stack Developer & Creative Technologist</strong> with a passion for building intuitive, efficient, and visually engaging web applications. She is driven by curiosity and thrives on solving complex problems with simple, scalable solutions. Swati has a keen eye for design, blending aesthetics with functionality, and is passionate about making technology accessible to everyone.
            </p>
            
            <p>
              She holds a <strong className="text-gray-900 dark:text-white">Master of Computer Applications (MCA)</strong> degree and has actively contributed to web development projects over the last few years. Swati has built user-centric applications using modern technologies like <strong className="text-gray-900 dark:text-white">React.js, Node.js, Express.js, and MongoDB</strong>. She has also worked on front-end projects with great attention to responsive design and seamless user experience.
            </p>
            
            <p>
              Her interests go beyond coding. Swati enjoys creating thoughtful UI designs, contributing to open-source projects, and exploring ways to integrate art into her work, inspired by her <strong className="text-gray-900 dark:text-white">Fine Arts background</strong>. She also finds joy in developing productivity tools like notes apps, portfolio websites, and shopping platforms.
            </p>
            
            <p>
              When she's not coding, Swati loves spending time with her family, sketching, learning new skills through YouTube tutorials, or watching web series to unwind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
