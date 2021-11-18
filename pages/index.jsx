/** @jsxImportSource theme-ui */
import { jsx } from "theme-ui";
import Link from "next/link";
import Image from "next/image";
import { variant } from "styled-system";
import responsive from "./../src/sass/responsive.module.scss";

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
              src="/img/me.jpeg"
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
            Tiago Assunção | 20
          </h1>
          <div
            sx={{
              height: "100%",
              width: "100%",
              overflowY: "scroll",
            }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              quidem vel unde voluptates accusantium modi tempora quaerat
              repudiandae ab? Impedit sit perferendis, iusto quos quam doloribus
              reprehenderit maiores esse voluptate. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Provident ipsa delectus aliquam
              reprehenderit, eum perspiciatis, incidunt dicta sint culpa
              similique nam pariatur? Modi eius magni veritatis corrupti
              nesciunt natus aliquam? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eum quidem vel unde voluptates accusantium modi
              tempora quaerat repudiandae ab? Impedit sit perferendis, iusto
              quos quam doloribus reprehenderit maiores esse voluptate. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Provident ipsa
              delectus aliquam reprehenderit, eum perspiciatis, incidunt dicta
              sint culpa similique nam pariatur? Modi eius magni veritatis
              corrupti nesciunt natus aliquam? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eum quidem vel unde quos quam
              doloribus reprehenderit maiores esse voluptate. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Provident ipsa delectus
              aliquam reprehenderit, eum perspiciatis, incidunt dicta sint culpa
              similique nam pariatur? Modi eius magni veritatis corrupti
              nesciunt natus aliquam? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eum quidem vel unde quos quam doloribus
              reprehenderit maiores esse voluptate. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Provident ipsa delectus aliquam
              reprehenderit, eum perspiciatis, incidunt dicta sint culpa
              similique nam pariatur? Modi eius magni veritatis corrupti
              nesciunt natus aliquam? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eum quidem vel unde
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
