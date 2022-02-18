import Toolbar from "@mui/material/Toolbar";
import Grow from "@mui/material/Grow";
import { IconButton, Typography } from "@mui/material";
import { AppBar } from "./Header.styled";
import UserAvatar from "../UserAvatar";
import { MenuBarContent } from "./Header.styled";

export const Header = () => {
  return (
    <Grow in={true} style={{ transformOrigin: "0 0 5" }} timeout={1000}>
      <AppBar position="fixed">
        <MenuBarContent>
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Blog App
            </Typography>
          </Toolbar>
          <UserAvatar />
        </MenuBarContent>
      </AppBar>
    </Grow>
  );
};
