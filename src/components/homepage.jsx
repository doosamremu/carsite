import SearchForm from './hcomponents/SearchForm';
import PromoSection from './hcomponents/PromoSection';
import Categories from './hcomponents/Categories';
import EvShowcase from './hcomponents/EvShowcase';
import CookieBanner from './hcomponents/CookieBanner';
import React from 'react';
import Navbar from './hcomponents/Navbar';
import Footer from './hcomponents/Footer';

function App() {
  return (
    <div>
      <Navbar />
        <SearchForm />
        <PromoSection />
        <Categories />
        <EvShowcase />
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default App;



