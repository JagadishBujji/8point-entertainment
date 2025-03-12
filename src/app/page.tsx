
import Counter from "../components/home/Counter";
import MainBanner from "../components/home/MainBanner";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="container-fluid p-0 m-0">
        <MainBanner />
        <Counter />
      </main>
    </div>
  );
}
