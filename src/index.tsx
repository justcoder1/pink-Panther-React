import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faTwitter, faWikipediaW, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars, faPaw, faPencil, faTrash, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfirmProvider } from 'material-ui-confirm';
import { SnackbarProvider } from 'notistack';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import App from './App';
import { DEFAULT_LOCALE } from './_utils/lang/locales';
import './index.css';

const queryClient = new QueryClient();

library.add(faVolumeUp, faPaw, faBars, faTrash, faPencil, faFacebookF, faYoutube, faWikipediaW, faTwitter);

const UncaughtSuspense: React.FC = () => {
  console.error(`Uncaught suspense!!!
A application level fallback has been used to wrap the entire application in a loading state.
This allows application to recover, but user experience is severly impacted.
Investigate and use Suspense nearer the async request.
`);
  return <>Loading...</>;
};

const locale = DEFAULT_LOCALE;
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<UncaughtSuspense />}>
        <IntlProvider locale={locale} key={locale} defaultLocale={DEFAULT_LOCALE}>
          <ConfirmProvider defaultOptions={{ confirmationButtonProps: { autoFocus: true } }}>
            <SnackbarProvider>
              <App />
            </SnackbarProvider>
          </ConfirmProvider>
        </IntlProvider>
      </Suspense>
    </QueryClientProvider>
  </React.StrictMode>
);
