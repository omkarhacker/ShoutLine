import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`${image}`}
      />
    </Box>
  );
};
//https://res.cloudinary.com/dnpm4dnb4/image/upload/v1728329063/info4_c7vpix.jpg
//https://res.cloudinary.com/dnpm4dnb4/image/upload/v1728328785/twitter_DEV/ftjija9azhgwkxvcs8ow.png
//https://res.cloudinary.com/dnpm4dnb4/image/upload/v1728328167/twitter_DEV/kyhsuommphccoebhcccc.png

export default UserImage;