import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Banner from '../components/layout/partials/Banner';

const LayoutHero = ({ children }) => (
  <>
    <div class="stars1"></div>
    <div class="stars2"></div>
    <Header navPosition="center" className="reveal-from-bottom" hideLogo={false} hideSignin={true}/>
    <main className="site-content">
      {children}
    </main>
    <Footer />
  </>
);

export default LayoutHero;  