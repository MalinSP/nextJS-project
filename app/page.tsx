import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h2 className="text-5xl mb-8 font-bold">Next.js tutorial</h2>
      <Link href="/client" className="btn btn-accent">
        Get Started
      </Link>
    </div>
  );
};

export default HomePage;
