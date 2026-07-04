import {
  Box,
  createTheme,
  CssBaseline,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import AppBarr from "component/AppBarr";
import MyList from "component/MyList";
import Posts from "component/Posts";
import React, { useState } from "react";
import getDesignTokens from "styles/Theme";

function App() {
  const [mode, setMyMode] = useState(
    localStorage.getItem("currentMode") === null
      ? "dark"
      : localStorage.getItem("currentMode") === "light"
        ? "light"
        : "dark",
  );
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
<Box className={theme.palette.mode}>
        <AppBarr />
        <Stack sx={{ flexDirection: "row" }}>
          <MyList {...{ setMyMode, theme }} />
<Posts/>
          <Typography sx={{ flexGrow: "2" }} variant="body1" color="initial">
            Section 3
          </Typography>
        </Stack>
</Box>
    </ThemeProvider>
  );
}

export default App;