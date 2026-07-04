import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import GroupsIcon from '@mui/icons-material/Groups';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import TuneIcon from '@mui/icons-material/Tune';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { DarkMode, LightMode } from "@mui/icons-material";
export default function MyList({setMyMode, theme}) {
  const myList = [
    {title:"Home", icon:<HomeIcon/> },
    {title:"Profile", icon:<AccountBoxIcon/> },
    {title:"Pages", icon:<ContactPageIcon/> },
    {title:"Groups", icon:<GroupsIcon/> },
    {title:"Friends", icon:<GroupAddIcon/> },
    {title:"Setting", icon:<TuneIcon/> },
  ];
  return (
    <Box sx={{bgcolor: theme.palette.listColor.main, flexGrow:"1", display:{xs:"none", md:"block"}}} >
      <List sx={{position:"fixed"}}>
        {myList.map((item) => {
          return(
  <ListItem key={item.title} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
          )
        }
        )}
      
          <ListItem>
        <ListItemIcon>
          {theme.palette.mode === "dark"? <DarkMode /> : <LightMode/>}
        </ListItemIcon>
        <ListItemText primary={theme.palette.mode}/>
        <Switch
          edge="end"
          onChange={() => {
              localStorage.setItem("currentMode",
                theme.palette.mode === "light"? "dark" : "light"
              )
              setMyMode(theme.palette.mode === "light" ? "dark" : "light");
          }
          }
          inputProps={{
            'aria-labelledby': 'switch-list-label-wifi',
          }}
        />
      </ListItem>

      </List>
    </Box>
  )
}