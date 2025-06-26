
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import SocialSidebar from '../components/SocialSidebar';
import AboutSection from '../components/AboutSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-montserrat">
      <Header />
      <SocialSidebar />
      <HeroSection />
      <AboutSection />
    </div>
  );
};

export default Index;
