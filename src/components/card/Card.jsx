/** @jsxImportSource theme-ui */
import { jsx } from "theme-ui";

import { HiBookmark } from "react-icons/hi";

const Card = ({ title, likes, children }) => {
  return (
    <div
      sx={{
        variant: "containers.glass",
        height: "550px",
        width: "450px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <div
        sx={{
          variant: "containers.blackGlass",
          height: "62%",
          width: "90%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          sx={{
            variant: "containers.glass",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "fixed",
            top: "12px",
            right: "12px",
            height: "45px",
            width: "45px",
          }}
        >
          <HiBookmark sx={{ height: 25, width: 25, color: "grey" }} />
        </div>
        {children}
      </div>
      <div
        sx={{
          // backgroundColor: "orangered",
          variant: "containers.blackGlass",
          borderRadius: "10px",
          height: "27%",
          width: "90%",
        }}
      ></div>
    </div>

    /*  <div className={classNames([styles.wrapper, styles.wrapperAnime])}>
      <div className={styles.header}>
        <div className={styles.imageWrapper}>
          <Image
            src={image}
            className={styles.image}
            alt=""
            width={30}
            height={30}
          />
        </div>
        <div className={styles.badgeWrapper}>
          <div className={classNames([styles.dangerBadge, styles.badgeAnime])}>
            <AiFillHeart />
          </div>
          <div
            className={classNames([
              styles.primaryBadge,
              styles.badgeAnime,
              "group",
            ])}
          >
            <BsChatSquareFill />
            <span
              className={classNames([styles.counter, "group-hover:text-white"])}
            >
              {likes}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.textWrapper}>
        <h1 className={styles.text}>{`${order}. ${title}`}</h1>
      </div>
    </div> */
  );
};

export default Card;
