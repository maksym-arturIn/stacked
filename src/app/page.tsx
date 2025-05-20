import Link from "next/link";

export default function Home() {
  return (
    <main className="center min-h-full h-full w-full">
      <Link href={"/connect"}>Go to /connect</Link>
    </main>
  );
}
