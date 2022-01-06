/** @jsxImportSource theme-ui */
import responsive from "./../src/sass/responsive.module.scss";
import Presentation from "../src/components/text/Presentation";
import Me from "../src/components/imgs/Me";

import { db, auth } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

const Home = () => {
  /* console.log("💠", db);
  console.log("🙏🏾", auth);

  try {
    const docRef = addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  const querySnapshot = getDocs(collection(db, "users"));
  console.log(querySnapshot); */

  // const users = db.collection("users").get();
  // console.log("😂", { users });

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
        <Presentation
          title={"Tiago Assunção | 20"}
          description={
            "→ Desenvolvimento de sistemas frontend: Linguagens: Html, Css - Sass e Js - Ts | Frameworks: React, Redux, Next e outros meta-frameworks → Desenvolvimento de sistemas backend: Linguagens: Node - Js e Ts | Frameworks: Express, Firebase e outros meta-frameworks → Criação de testes automatizados: Testes unitários, testes de integração, testes de aceitação → Manutenção de políticas de integração e deploy contínua → Prática de processos e metodologias ágeis → Pesquisa e aplicação de boas práticas do mercado para o desenvolvimento de software"
          }
        />
      </div>
    </div>
  );
};

export default Home;
