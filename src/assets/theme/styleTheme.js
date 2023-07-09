export const styleTheme = {
  color: {
    primary: "#ff385c",
    secondary: "#00848a",
  },
  textColor: {
    primary: "#222",
    secondary: "#717171",
  },
  mixin: {
    hoverBoxShadow: `
   transition: box-shadow 0.2s ease;
    &:hover {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
    }
`,
  },
};
