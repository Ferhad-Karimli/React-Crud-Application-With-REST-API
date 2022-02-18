import { Box, Grid, Button, TextField } from "@mui/material";
import styled, { keyframes } from "styled-components";
import { ThemeProps } from "../../../../interface/theme";

type EntryPanelStyledProps = {
  theme?: ThemeProps;
  none?: string;
};

const rotate = keyframes`
  from {
    transform: scale(.95);
  }

  to {
    transform: scale(1.1);
  }
`;

export const ContentStyled = styled(Grid).attrs(() => ({
  xs: 12,
  item: true,
}))`
  display: flex;
  flex-direction: column !important;
  justify-content: center;
  align-items: center;
`;

export const EntryPanel: React.FunctionComponent<EntryPanelStyledProps> = styled(
  Box
)`
  display: ${({ none }: EntryPanelStyledProps) => (none ? "none" : "flex")};
  flex-direction: column;
  align-items: center;
  img {
    animation: ${rotate} 10s linear infinite alternate;
  }
`;

export const EntryButton = styled(Button).attrs(() => ({
  variant: "contained",
  color: "warning",
  size: "large",
}))`
  width: 300px;
  height: 50px;
`;

export const EntryField = styled(TextField).attrs(() => ({
  label: "Nickname",
  type: "text",
  color: "warning",
  autoComplete: "current-password",
  variant: "filled",
}))`
  width: 300px;
  margin: 10px 0 !important;
`;
