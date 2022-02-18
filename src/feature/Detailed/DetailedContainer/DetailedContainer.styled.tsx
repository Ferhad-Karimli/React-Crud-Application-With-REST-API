import { Button } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";

export const DetailedContent = styled(Box)``;

export const PostField: any = styled.input.attrs(() => ({
  fullWidth: true,
  color: "warning",
}))`
  margin: 15px 0;
  height: 70px;
  border: ${({ edit }: any) => (edit ? "1px solid  gray" : "none")};
  font-size: ${({ font }: any) => `${font}px `}!important;
`;

export const EditButton = styled(Button)`
  svg {
    fill: white;
  }
`;
