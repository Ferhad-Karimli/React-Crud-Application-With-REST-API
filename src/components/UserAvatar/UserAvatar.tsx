import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export const UserAvatar = () => {
  const UserName = localStorage.getItem("user");

  return (
    <Stack direction="row" spacing={6} >
      <Avatar style={{ background: "#e884b0",width:"90px" }} children={UserName} />
    </Stack>
  );
};
