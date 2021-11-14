import { colors } from "@theme-ui/preset-bootstrap";
import { tailwind } from "@theme-ui/presets";
import { borderRadius, width } from "styled-system";
// import myBackgroundImage from "../assets/svg/myBackgroundImage";

const theme = {
  ...tailwind,
  navigation: {
    NavHeader: {
      width: "90vw",
      maxHeight: "70px",
      padding: "0px 50px",
      color: tailwind.colors.gray[3],
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      textTransform: "uppercase",
      fontFamily: tailwind.fonts.sans,
      fontSize: "18px",
    },
  },
  containers: {
    glass: {
      color: tailwind.colors.gray[3],
      background: "rgba(255, 255, 255, 0.1)",
      boxShadow: "20px 20px 50px rgba(0, 0, 0, 0.5)",
      borderRadius: "10px",
      backdropFilter: "blur(2px)",
    },
    page: {
      height: "100%",
      width: "90%",
    },
    me: {
      border: "2px solid blue",
      borderRadius: "50%",
    },
  },
};

console.log(tailwind);

export default theme;
