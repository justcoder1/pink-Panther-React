import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import App from "./App";
import { DEFAULT_LOCALE } from './_utils/lang/locales';
import "./index.css";

const queryClient = new QueryClient()

const UncaughtSuspense: React.FC = () => {
  console.error(`Uncaught suspense!!!
A application level fallback has been used to wrap the entire application in a loading state.
This allows application to recover, but user experience is severly impacted.
Investigate and use Suspense nearer the async request.
`);
  return <>Loading...</>;
};

const locale = DEFAULT_LOCALE;
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>      
     <Suspense fallback={<UncaughtSuspense />}>
        <IntlProvider locale={locale} key={locale} defaultLocale={DEFAULT_LOCALE}>
          <App />
        </IntlProvider>
      </Suspense>
    </QueryClientProvider>
  </React.StrictMode>
);
