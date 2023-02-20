import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ScrollToTop from './utils/ScrollToTop';
import ReactGA from 'react-ga';

// Layouts
import LayoutNews from './layouts/LayoutNews';
import LayoutHero from './layouts/LayoutHero';
import LayoutAbout from './layouts/LayoutAbout';

// Views 
import Home from './views/Home';
import News from './views/News';
import About from './views/About';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
    ReactGA.set({ page });
    ReactGA.pageview(page);
};



const App = () => {

    const childRef = useRef();
    let location = useLocation();

    useEffect(() => {
        const page = location.pathname;
        document.body.classList.add('is-loaded')
        childRef.current.init();
        trackPage(page);
        // eslint-disable-next-line react-hooks/exhaustive-deps

    }, [location]);

    return (
        <ScrollReveal
            ref={childRef}
            children={() => (
                <ScrollToTop>
                    <Switch>
                    <AppRoute exact path="/" component={Home} layout={LayoutHero} />
                    <AppRoute exact path="/news" component={News} layout={LayoutNews} />
                    <AppRoute exact path="/about" component={About} layout={LayoutAbout} />
                </Switch>
                </ScrollToTop>
            )} />
    );
}

export default App;