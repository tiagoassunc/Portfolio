import React from "react";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  const { params } = router.query;
  console.log(params);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <h1 style={{ fontSize: "100px" }}>🧱 Building... 🏗️</h1>
    </div>
  );
};

export default Home;
