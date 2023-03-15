import React from 'react';
//import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

import { createRoot } from 'react-dom/client';

import App from './App';
import * as serviceWorker from './serviceWorker';

import './assets/scss/style.scss';
import './i18n';

const history = createBrowserHistory();
const root = createRoot(document.getElementById('root'));

// https://schema.org/Article
const companyStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SPAICE",
    description: "SPAICE is a Software-as-a-Service provider that tackles navigation in space. They cover the whole pipeline, from target detection (satellite/debris) to docking operations, including tracking and fully autonomous navigation and control. SPAICE's approach is based on AI and Computer Vision."
};

root.render(
    <BrowserRouter history={history}>
        <App>
            <script type="application/ld+json">
            {JSON.stringify(companyStructuredData)}
        </script>
        </App>
    </BrowserRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
