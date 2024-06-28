import { ArrowTrendingUpIcon } from "@heroicons/react/16/solid";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="  flex h-screen w-screen  items-center justify-center gap-20 px-[20%] bg-gradient-to-br from-gray-100 to-slate-200 text-black">
      <div className="flex flex-col gap-3">
        <h1 className="text-6xl">StockMastermind</h1>
        <h3>
          Gestiona tu stock de manera eficiente y sencilla con StockMastermind.
        </h3>
        <p>
          La plataforma{" "}
          <span className=" font-semibold text-green-500">numero uno</span> en
          gestion de stock en el mundo
        </p>
        <Link href={"/articles"}>
          <Button className="w-fit px-6 font-semibold" color="secondary">
            Comenzar
            <ArrowTrendingUpIcon className="w-6 h-6" />
          </Button>
        </Link>
      </div>
      <div className="flex">
        <video
          src="/Boss.mp4"
          autoPlay
          loop
          muted
          className="rounded-3xl h-[35rem] z-10 shadow-lg"
        />
        <video
          src="/Boss2.mp4"
          autoPlay
          loop
          muted
          className="rounded-3xl h-[35rem] z-0 -translate-x-1/3 translate-y-14"
        />
      </div>
    </main>
  );
}
