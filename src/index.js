import React from 'react';
//import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
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
    name: "SpAIce",
    description: ""
};

root.render(
    <Router history={history}>
        <App>
            <script type="application/ld+json">
            {JSON.stringify(companyStructuredData)}
        </script>
        </App>
    </Router>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
