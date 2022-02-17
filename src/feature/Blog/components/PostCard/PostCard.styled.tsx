import styled from "styled-components";
import Card from '@mui/material/Card';



export const PostCardStyled = styled(Card)`
margin:25px 0;
cursor: pointer;
transition: all .2s !important;

&:hover{
    transform: scale(.98);
}
`