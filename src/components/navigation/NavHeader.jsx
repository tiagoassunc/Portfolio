/** @jsxImportSource theme-ui */
import { jsx } from "theme-ui";
import Image from "next/image";
import Link from "next/link";
import commons from "./../../sass/commons.module.scss";

const NavHeader = () => {
  return (
    <div
      style={{
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <header sx={{ variant: "navigation.NavHeader" }}>
        <nav>
          <Link
            href="/notes/[id]"
            as={`/notes/1`}
            style={{
              textDecoration: "none",
            }}
          >
            <a className={commons.removeLinkStyle}>
              <Image
                src="/svg/text/tiago-06.svg"
                alt="Tiago"
                fill="#fff"
                width={240}
                height={240}
              />
            </a>
          </Link>
        </nav>
        <nav>
          <Link
            href="/notes/[id]"
            as={`/notes/1`}
            style={{
              textDecoration: "none",
            }}
          >
            <a className={commons.removeLinkStyle}>animations</a>
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default NavHeader;
