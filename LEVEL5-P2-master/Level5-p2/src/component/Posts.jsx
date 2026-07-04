import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Menu, MenuItem } from "@mui/material";
import { useRef, useState } from "react";
export default function Posts() {
  /*
  1- CardHeader
  2- CardMedia
  3- CardContent
  4- CardActions
  5- collaps
  */

  const myCards = [
    {
      letter: "H",
      color: "purple",
      userName: "Haya ali",
      imgLink:
        "https://images.pexels.com/photos/34311933/pexels-photo-34311933.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      letter: "N",
      color: "teal",
      userName: "Noor moh",
      imgLink:
        "https://images.pexels.com/photos/18488300/pexels-photo-18488300.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      letter: "M",
      color: "pink",
      userName: "Malak sh",
      imgLink:
        "https://images.pexels.com/photos/34163375/pexels-photo-34163375.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const renderMenu = (
    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem
        onClick={() => {
          handleClose();
        }}
      >
        My account
      </MenuItem>
    </Menu>
  );
  return (
    <Box sx={{ flexGrow: "3" }}>
      {myCards.map((item) => {
        return (
          <Card sx={{ maxWidth: 400, mx: "auto", my: 5 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: item.color }} aria-label="recipe">
                  {item.letter}
                </Avatar>
              }
              action={
                <IconButton onClick={handleClick} aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={item.userName}
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image={item.imgLink}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        );
      })}
      {renderMenu}
    </Box>
  );
}