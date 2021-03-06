const size = { mobile: "576px", desktop: "1100px" };

export const theme = {
  primaryColor100: "white",
  primaryColor200: "#f2f2f2",
  primaryColor300: "#aaa",
  primaryColor700: "#a9adc1",
  primaryColor800: "#1f2028",

  titleFontSize: "1.3125rem",
  hoverBackgroundColor: "rgb(0, 0, 0, 0.2)",
  primaryButtonColor: "#b5266b",
  secondaryButtonColor: "#434653",
  secondaryButtonHoverColor: "#2e3039",
  borderColor800: "#8d8d8d",

  mobile: `${size.mobile}`,
  mobileMediaQuery: `(min-width:${size.mobile})`,
  desktopMediaQuery: `(min-width:${size.desktop})`,
};
