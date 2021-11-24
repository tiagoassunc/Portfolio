/** @jsxImportSource theme-ui */
import responsive from "./../src/sass/responsive.module.scss";
import Presentation from "../src/components/text/Presentation";
import Me from "../src/components/imgs/Me";

const Home = () => {
  return (
    <div
      sx={{
        width: "100vw",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        sx={{
          variant: "containers.page",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className={responsive.flex}
      >
        <Me imgSrc={"/img/me.jpeg"} />
        <Presentation title={"Tiago Assunção | 20"} description={"lorem"} />
      </div>
    </div>
  );
};

export default Home;
