/** @jsxImportSource theme-ui */

import Link from "next/link";
import Card from "../../src/components/card/Card";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "85vh",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          color: "#fff",
          height: "100%",
          width: "90%",
        }}
      >
        <div
          sx={{
            variant: "containers.glass",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "65px",
            width: "65px",
          }}
        >
          <HiArrowSmLeft sx={{ height: 38, width: 40 }} />
        </div>
        <div>
          <Card>
            <h1 style={{ fontSize: "35px" }}>🧱 Building... 🏗️</h1>
          </Card>
        </div>
        <div
          sx={{
            variant: "containers.glass",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "65px",
            width: "65px",
          }}
        >
          <HiArrowSmRight sx={{ height: 38, width: 40 }} />
        </div>
      </div>
    </div>
  );
};

export default Home;
