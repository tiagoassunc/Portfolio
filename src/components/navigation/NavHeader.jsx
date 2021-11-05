/** @jsxImportSource theme-ui */
import { jsx } from "theme-ui";
import Link from "next/link";
import { display } from "styled-system";
import styles from "./../../sass/commons.module.scss";

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
        Tiago
        <nav>
          <Link
            href="/notes/[id]"
            as={`/notes/1`}
            style={{
              textDecoration: "none",
            }}
          >
            <a className={styles.removeLinkStyle}>animations</a>
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default NavHeader;
