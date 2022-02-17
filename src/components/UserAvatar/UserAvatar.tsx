import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

// const stringAvatar = (name: string) => {
//   return {
//     children: `${name?.split(' ')[0][0]}${name?.split(' ')[1][0]}`,
//   };
// }

export const UserAvatar = () => {
  // let userName = localStorage?.get("user") || "dsds"
  // console.log(userName,"username")
  // var lastname = localStorage.getItem("user");
  const UserName = localStorage.getItem("user")
  // console.log(localStorage.getItem("user"),"localstorage")

  return (
    <Stack direction="row" spacing={6}>
      <Avatar style={{background:"#e884b0"}} children={UserName} />
    </Stack>
  );
}
