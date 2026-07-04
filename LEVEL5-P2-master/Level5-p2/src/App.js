import { Button, ButtonBase, createTheme, CssBaseline, Grid, Paper, Stack, styled, ThemeProvider, Typography } from "@mui/material";
import AppBarr from "component/AppBarr";
import MyList from "component/MyList";
import React, {useState } from "react";
import getDesignTokens from "styles/Theme";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#4D7BAF',
  }),
}));

function App() {
   const [mode, setMyMode] = useState(
    localStorage.getItem("currentMode") === null
      ? "dark"
      : localStorage.getItem("currentMode") === "light"
        ? "light"
        : "dark",
  );
    const theme = React.useMemo(() => 
    createTheme(getDesignTokens(mode)), [mode])
  return (
     <ThemeProvider  theme={theme}>
      <CssBaseline />
      <AppBarr/>
    <div className="App">

<Stack sx={{flexDirection: "row"}}>
  <MyList theme={theme} setMyMode={setMyMode}/>
    <Typography sx={{flexGrow: "10", height:"1000px"}} className="border" variant="h6">box2</Typography>
  <Typography sx={{flexGrow: "2"}} className="border" variant="h6">box3</Typography>
</Stack>



    </div>
  </ThemeProvider>
  );
}

export default App;