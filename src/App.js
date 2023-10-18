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
import NewsTtec from './views/news/Ttec';
import Demo from './views/Demo';
import SecondDemo from './views/SecondDemo';
import LayoutArticle from './layouts/LayoutArticle';
import LayoutDemo from './layouts/LayoutDemo';
import NewsPSW from './views/news/PSW';
import Comparison from './views/Comparison';
import Comparison2 from './views/Comparison2';
import Comparison3 from './views/Comparison3';
import Comparison4 from './views/Comparison4';
import Comparison10 from './views/Comparison10';

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
                    <AppRoute exact path="/news/ttec" component={NewsTtec} layout={LayoutArticle} />
                    <AppRoute exact path="/news/paris-space-week" component={NewsPSW} layout={LayoutArticle} />
                    <AppRoute exact path="/uidsgbibdgs235253" component={Demo} layout={LayoutDemo} />
                    <AppRoute exact path="/enhancement-demo" component={SecondDemo} layout={LayoutDemo} />


                    {/*<AppRoute exact path="/second-demo/0-comparison" component={Comparison} layout={LayoutDemo} />  
                    <AppRoute exact path="/second-demo/1-comparison" component={Comparison2} layout={LayoutDemo} />  
                    <AppRoute exact path="/second-demo/2-comparison" component={Comparison3} layout={LayoutDemo} />  
                    <AppRoute exact path="/second-demo/3-comparison" component={Comparison4} layout={LayoutDemo} />  
                    <AppRoute exact path="/second-demo/9-comparison" component={Comparison10} layout={LayoutDemo} />*/}  

                </Switch>
                </ScrollToTop>
            )} />
    );
}

export default App;