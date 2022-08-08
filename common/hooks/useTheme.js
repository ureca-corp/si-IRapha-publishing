export const ThemeAttr = {
  Key: "theme",

  LightBlue: "light-blue",
  Rose: "rose",
  SeaFoam: "sea-foam",
};

export const useTheme = (theme) => {
  const $app = document.getElementById("irapha-app");

  theme
    ? $app.setAttribute(ThemeAttr.Key, theme)
    : $app.removeAttribute(ThemeAttr.Key);
};
