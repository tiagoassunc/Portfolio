/** @jsxImportSource theme-ui */

import Link from "next/link";
import commons from "./../../sass/commons.module.scss";
import { HiCog } from "react-icons/hi";
const NavConfig = () => {
  return (
    <div
      sx={{
        variant: "containers.glass",
        height: "65px",
        width: "65px",
        position: "fixed",
        bottom: "12px",
        left: "12px",
      }}
    >
      <div
        sx={{
          position: "absolute",
          top: "50%",
          right: "50%",
          transform: "translate(50%,-43%)",
        }}
      >
        <nav>
          <Link href="/configurations" as={`/configurations`}>
            <a className={commons.removeLinkStyle}>
              <HiCog sx={{ height: 35, width: 35 }} />
            </a>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default NavConfig;
//HiConfig
