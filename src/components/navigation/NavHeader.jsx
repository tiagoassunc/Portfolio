/** @jsxImportSource theme-ui */
import { jsx } from "theme-ui";
import Image from "next/image";
import Link from "next/link";
import commons from "./../../sass/commons.module.scss";
import { HiSparkles } from "react-icons/hi";

const NavHeader = () => {
  return (
    <div
      sx={{
        height: "15vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div sx={{ variant: "containers.glass" }}>
        <header sx={{ variant: "navigation.NavHeader" }}>
          <nav>
            <Link
              href="/"
              as={`/`}
              style={{
                textDecoration: "none",
              }}
            >
              <a>
                <Image
                  src="/svg/text/tiago-10.svg"
                  alt="Tiago"
                  fill="#fff"
                  width={175}
                  height={175}
                />
              </a>
            </Link>
          </nav>
          <nav>
            <Link href="/animations" as={`/animations`}>
              <a className={commons.removeLinkStyle}>
                <HiSparkles />
                animations
              </a>
            </Link>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default NavHeader;
