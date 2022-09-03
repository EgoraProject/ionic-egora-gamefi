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
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
Sentry.init({
  // what sentry project the data should be sent to
  dsn: process.env.SENTRY_DSN, 
  release: "sentry-demo@0.4.0",
  dist: "1",
  tracesSampleRate: 1,
  integrations: [new BrowserTracing]
}, SentryReact.init)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
