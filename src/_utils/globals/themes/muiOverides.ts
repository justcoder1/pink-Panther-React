import { createTheme } from "@mui/material/styles";

const themeOverides = createTheme({
  palette: {
    primary: {
      main: "#fa8ab0",
    },
    secondary: {
      main: "#b61588",
    },
  },
});

export default createTheme(themeOverides);
