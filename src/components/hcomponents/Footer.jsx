import React from 'react';

// You can replace these with actual icons from a library like 'react-icons'
const SocialIcons = () => (
  <div className="flex space-x-4">
    <a href="#" className="text-gray-400 hover:text-white">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
    </a>
    <a href="#" className="text-gray-400 hover:text-white">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
    </a>
    <a href="#" className="text-gray-400 hover:text-white">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.795 2.013 10.148 2 12.315 2zm-1.161 4.573a.75.75 0 01.75.75v1.336a.75.75 0 01-1.5 0V7.323a.75.75 0 01.75-.75zm0-2.25a.75.75 0 01.75.75v1.336a.75.75 0 01-1.5 0V3.073a.75.75 0 01.75-.75z" clipRule="evenodd" /></svg>
    </a>
  </div>
);

// At the top of src/components/Footer.js

// Import the specific icons you need
import { FaApple, FaGooglePlay } from 'react-icons/fa';

// ... (keep the rest of the file the same)

// Replace the AppStoreButtons component with this new version
const AppStoreButtons = () => (
  <div className="flex flex-col sm:flex-row gap-4">
    <a href="#" className="bg-black text-white py-2 px-4 rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition-colors">
      <FaApple className="w-7 h-7" />
      <div>
        <p className="text-xs leading-none">Download on the</p>
        <p className="text-lg font-semibold leading-tight">App Store</p>
      </div>
    </a>
    <a href="#" className="bg-black text-white py-2 px-4 rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition-colors">
      <FaGooglePlay className="w-6 h-6" />
      <div>
        <p className="text-xs leading-none">GET IT ON</p>
        <p className="text-lg font-semibold leading-tight">Google Play</p>
      </div>
    </a>
  </div>
);

// ... (keep the rest of the file the same)


const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const linkSections = [
    {
      title: 'GetaCar.com',
      links: ['Sign in', 'Profile', 'My Favorites', 'My searches'],
    },
    {
      title: 'Buying a Car',
      links: ['Car finder', 'Car reviews', 'Car comparisons', 'Certified pre-owned'],
    },
  ];

  return (
    <footer className="bg-gray-800 text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        {/* Top Section with links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {linkSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Middle section with Social and App Store links */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <SocialIcons />
          <AppStoreButtons />
        </div>
        
        {/* Bottom Section with copyright */}
        <hr className="my-8 border-gray-700" />
        <div className="text-center md:text-left text-sm text-gray-500">
            <p>&copy; {currentYear} Cars.com. All rights reserved.</p>
            <div className="mt-4 md:mt-2 flex justify-center md:justify-start space-x-4">
                <a href="#" className="hover:text-gray-300">Terms of Service</a>
                <a href="#" className="hover:text-gray-300">Privacy Policy</a>
          
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;