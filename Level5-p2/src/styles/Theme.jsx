const { green } = require("@mui/material/colors");
const getDesignTokens = (mode) => ({
    palette: {
        // @ts-ignore
        mode,
        ...(mode === "light"
          ? {
              // palette values for Light mode
              malak: {
                main: "#2196f3",
              },
            }
          : {
              // palette values for dark mode
              malak: {
                main: green[500],
              },
            }),
      },
});
export default getDesignTokens;