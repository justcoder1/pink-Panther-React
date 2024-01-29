import { useIntl } from "react-intl";

// locales supported by the application
export enum Locales {
  EnGB = 'en-GB',
}

export const DEFAULT_LOCALE = Locales.EnGB;

export const SetIntlText = (ref: string, textString: string): string => {
  const intl = useIntl();
  return intl.formatMessage({
    id: ref,
    description: ref,
    defaultMessage: textString,
  });
}
