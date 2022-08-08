export const ThemeAttr = {
  Key: "theme",

  LightBlue: "light-blue",
  Rose: "rose",
  SeaFoam: "sea-foam",
};

export const useTheme = () => {
  const $app = document.getElementById("irapha-app");

  const setTheme = (theme) => {
    theme
      ? $app.setAttribute(ThemeAttr.Key, theme)
      : $app.removeAttribute(ThemeAttr.Key);
  };

  return { setTheme };
};
