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
              listColor: {
             main:  "rgb(247,247,247)",
              },
            }
          : {
              // palette values for dark mode
              malak: {
                main: green[500],
              },
                listColor: {
             main:  null,
              },
            }),
      },
});
export default getDesignTokens;