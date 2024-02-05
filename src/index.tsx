import { ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfirmProvider } from 'material-ui-confirm';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import App from './App';
import themeOverides from './_utils/globals/themes/muiOverides';
import { DEFAULT_LOCALE } from './_utils/lang/locales';
import './index.css';

const queryClient = new QueryClient()

const locale = DEFAULT_LOCALE;
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={themeOverides}>
      <QueryClientProvider client={queryClient}>
        <IntlProvider locale={locale} key={locale} defaultLocale={DEFAULT_LOCALE}>
          <ConfirmProvider defaultOptions={{ confirmationButtonProps: { autoFocus: true } }}>
            <SnackbarProvider>
              <App />
            </SnackbarProvider>
          </ConfirmProvider>
        </IntlProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
