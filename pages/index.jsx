import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Index Page</h1>
      <Link href="/notes">
        <a>Note</a>
      </Link>
    </div>
  );
};

export default Home;
