import React from 'react';
import SiteNavbar from '../components/siteNavbar';
import Hero from '../components/Hero';
import HelpCards from '../components/HelpCards';
import Testimonials from '../components/Testimonials';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import '../assets/styles.css';

const LandingPage = () => {
  return (
    <>
      <SiteNavbar />
      <Hero />
      <HelpCards />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
};

export default LandingPage;
