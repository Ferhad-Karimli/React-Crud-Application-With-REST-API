import { ReactNode } from "react";
import Container from "@mui/material/Container";
import Main from "../Main";
import Header from "../Header";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Container maxWidth="xl">
      <Header />
      <Main>{children}</Main>
    </Container>
  );
};

export default Layout;
