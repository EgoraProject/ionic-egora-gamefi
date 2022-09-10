import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import * as Sentry from '@sentry/capacitor'
import * as SentryReact from '@sentry/react'
import { BrowserTracing } from '@sentry/tracing'

const container = document.getElementById('root');
const root = createRoot(container!);
Sentry.init({
  // what sentry project the data should be sent to
  dsn: 'https://74689645d71f46b4aa1d2c60b7f64ea3@o1379622.ingest.sentry.io/6692556', 
  release: "sentry-demo@0.5.0",
  dist: "1",
  tracesSampleRate: 1,
  integrations: [new BrowserTracing()]
}, SentryReact.init)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
