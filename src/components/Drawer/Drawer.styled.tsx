import { styled as styledMUI } from "@mui/material/styles";

export const DrawerHeader = styledMUI("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(8, 14),
  ...theme.mixins.toolbar,
}));
