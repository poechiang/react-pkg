import {
  DefaultDarkThemes,
  DefaultLightThemes,
  DefaultThemePrefix,
} from './tokens';

export const toHyphen = (name: string) =>
  name.replace(/[A-Z]/g, (x) => `-${x.toLocaleLowerCase()}`);
export const checkDark = () =>
  window.window.matchMedia('(prefers-color-scheme: dark)').matches;
/**
 * init css variable ...
 */
export const updateThemeVariable = (token?: StyledThemeToken) => {
  token = token || checkDark() ? DefaultDarkThemes : DefaultLightThemes;
  Object.entries(token).forEach(([key, value]) => {
    if (typeof value === 'string') {
      document.documentElement.style.setProperty(
        toHyphen(`--${DefaultThemePrefix}-${key}`),
        value,
      );
    } else {
      Object.entries(value).forEach(([k, v]) => {
        document.documentElement.style.setProperty(
          toHyphen(`--${DefaultThemePrefix}${k}-${key}`),
          v,
        );
      });
    }
  });
};

// init css variable with default coloring and the correct theme key (light or dark)
updateThemeVariable();
