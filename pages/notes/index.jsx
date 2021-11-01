import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Notes index path</h1>
      <Link href="/notes/[id]" as={`/notes/1`}>
        note 1
      </Link>
    </div>
  );
};

export default Home;
