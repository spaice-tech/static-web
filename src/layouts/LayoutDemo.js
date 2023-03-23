import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const LayoutDemo = ({ children }) => (
  <>
    <div class="stars1"></div>
    <div class="stars2"></div>
    <Header navPosition="center" className="reveal-from-bottom" hideSignin={true} hideNews={true} hideAbout={true}/>
    <main className="site-content">
      {children}
    </main>
    {/* <Banner /> */}
    <Footer />
  </>
);

export default LayoutDemo;  