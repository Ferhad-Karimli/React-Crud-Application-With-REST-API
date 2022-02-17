import { Box } from "@material-ui/core";
import { Button, Input } from "@mui/material";
import styled from "styled-components";

export const PostAddContent = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5px 0;
  width: 70%;
  margin: 0 auto;
`;

export const Form = styled.form`
  width: 100%;
`;

export const PostAddButton = styled(Button).attrs(() => ({
  variant: "contained",
  size: "large",
  fullWidth: true,
  color: "warning",
}))`
  height: 40px;
  margin: 40px 0 !important;
  svg {
    font-size: 40px !important;
  }
`;

export const PostField = styled(Input).attrs(() => ({
  fullWidth: true,
  color: "primary",
  size: "large",
  autoFocus: false,
}))`
  height: 80px;
  margin-left: 15px !important;
`;
