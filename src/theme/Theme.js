const gray = {
  gray100: "#f8f9fa",
  gray200: "#e9ecef",
  gray300: "#dee2e6",
  gray900: "black"
};

const colors = {
  primary: "blue",
  secondary: "gray",
  light: gray.gray100,
  white: "white"
};

export const theme = {
  ...gray,
  ...colors,
  borderRadius: "0.25rem",
  imageBackground: gray.gray900,
  videoBackground: gray.gray900,

  questionBackground: colors.white
};
