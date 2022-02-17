import { Box, TextField,Button } from "@mui/material";
import styled from "styled-components";



export const CommentBox = styled(Box)`
margin:40px 0 !important;

`

export const CommentField = styled(TextField).attrs(()=>({
    fullWidth:true,
    multiline:true,
    rows:4,
    color:"warning"
}))`
`

export const CommentButton = styled(Button).attrs(()=>({
    variant:"contained",
    color:"warning"
}))`

margin:15px 0 !important;
`