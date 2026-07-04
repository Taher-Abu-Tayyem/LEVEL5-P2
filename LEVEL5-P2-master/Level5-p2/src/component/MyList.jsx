import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import GroupsIcon from '@mui/icons-material/Groups';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import TuneIcon from '@mui/icons-material/Tune';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Button } from '@mui/material';
export default function MyList({theme, setMyMode}) {
const myList = [
    {title:"Home", icon:<HomeIcon/> },
    {title:"Profile", icon:<AccountBoxIcon/> },
    {title:"Pages", icon:<ContactPageIcon/> },
    {title:"Groups", icon:<GroupsIcon/> },
    {title:"Friends", icon:<GroupAddIcon/> },
    {title:"Setting", icon:<TuneIcon/> },
  ];
  return (
    <Box sx={{flexGrow: "1.2", display:{xs:"none" , md:"block"}}} className="border" >
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
          <Button variant="text" color="primary"
      onClick={() => {
          localStorage.setItem("currentMode",
                theme.palette.mode === "light"? "dark" : "light"
              )
              setMyMode(theme.palette.mode === "light" ? "dark" : "light");
      }
      }>Change Theme</Button>
      </List>
    </Box> 
  )
}