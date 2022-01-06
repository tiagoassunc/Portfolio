/** @jsxImportSource theme-ui */

import Link from "next/link";
import commons from "./../../sass/commons.module.scss";
import { HiOutlineUser } from "react-icons/hi";
const NavConfig = () => {
  return (
    <div
      sx={{
        variant: "containers.glass",
        height: "65px",
        width: "65px",
        position: "fixed",
        bottom: "12px",
        right: "12px",
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
              <HiOutlineUser sx={{ height: 35, width: 35 }} />
            </a>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default NavConfig;
