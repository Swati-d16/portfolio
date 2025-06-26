
import { Facebook, Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const SocialSidebar = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  return (
    <div className="fixed left-6 social-sidebar-positioned z-40 hidden lg:block">
      <div className="flex flex-col">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            className="w-12 h-12 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center hover:border-gray-900 dark:hover:border-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 group social-icon-spacing"
            aria-label={label}
          >
            <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialSidebar;
