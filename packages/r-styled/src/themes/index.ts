const toHyphen = (name: string) =>
  name.replace(/[A-Z]/g, (x) => `-${x.toLocaleLowerCase()}`);
const checkDark = () =>
  window.window.matchMedia('(prefers-color-scheme: dark)').matches;
// init css variable ...
const updateThemeVariable = (token?: StyledThemeToken) => {
  const initTheme = checkDark() ? DefaultDarkThemes : DefaultLightThemes;
  Object.entries(initTheme).forEach(([key, value]) => {
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
