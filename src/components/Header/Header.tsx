import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Grow from '@mui/material/Grow';
import { IconButton, Typography } from '@mui/material';
import { AppBar } from './Header.styled';
import Drawer from "../Drawer"
import { useState } from 'react';
import UserAvatar from "../UserAvatar"
import { MenuBarContent } from "./Header.styled"

export const Header = () => {
    let [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open)
    }
    return (
        <Grow
            in={true}
            style={{ transformOrigin: '0 0 5' }}
            timeout={1000}
        >
            <AppBar position="fixed" >
                <MenuBarContent>
                    <Toolbar>
                        {/* <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleClick}
                        >
                            <MenuIcon />
                        </IconButton> */}
                        <Typography variant="h6" noWrap component="div">
                            Blog App
                        </Typography>
                    </Toolbar>
                    <UserAvatar />
                </MenuBarContent>

            </AppBar>
        </Grow>
    )
}