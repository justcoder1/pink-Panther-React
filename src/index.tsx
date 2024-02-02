import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfirmProvider } from 'material-ui-confirm';
import { SnackbarProvider } from 'notistack';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import App from './App';
import { DEFAULT_LOCALE } from './_utils/lang/locales';
import './index.css';
import { ThemeProvider } from '@mui/material/styles';
import themeOverides from './_utils/globals/themes/muiOverides'

const queryClient = new QueryClient();

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
    <ThemeProvider theme={themeOverides}>
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
    </ThemeProvider>
  </React.StrictMode>
);
