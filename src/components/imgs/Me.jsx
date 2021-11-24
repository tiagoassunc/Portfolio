/** @jsxImportSource theme-ui */
import Image from "next/image";

const Me = ({ imgSrc }) => {
  return (
    <div
      sx={{
        height: "100%",
        width: "49%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        sx={{
          variant: "containers.circle",
          height: "400px",
          width: "400px",
          position: "relative",
        }}
      >
        <Image
          src={imgSrc}
          // src="/img/me.jpeg"
          alt="Tiago"
          quality="100"
          width={"400"}
          height={"400"}
          sx={{
            variant: "images.me",
            position: "absolute",
            top: "50%",
            right: "50%",
            transform: "translate(0%,0%)",
          }}
        />
      </div>
    </div>
  );
};

export default Me;
