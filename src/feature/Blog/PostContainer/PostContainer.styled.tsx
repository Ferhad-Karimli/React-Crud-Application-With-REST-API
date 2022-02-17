import { styled as styledMUI} from '@mui/material/styles';
import { Grid } from '@mui/material';
import styled from "styled-components";

export const drawerWidth = 240;

export const DrawerHeader = styledMUI('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

export const PostContentStyled = styled(Grid).attrs(() => ({
    item: true,
    xs: 12
}))`
    display:flex;
`