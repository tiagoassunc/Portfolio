/** @jsxImportSource theme-ui */

const Presentation = ({ title, description }) => {
  return (
    <div
      sx={{
        variant: "containers.glass",
        height: "100%",
        width: "49%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px",
        textAlign: "center",
      }}
    >
      <h1
        sx={{
          borderBottom: "solid 1px rgba(255, 255, 255, 0.4)",
        }}
      >
        {title}
      </h1>
      <div
        sx={{
          height: "100%",
          width: "100%",
          overflowY: "scroll",
        }}
      >
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Presentation;
