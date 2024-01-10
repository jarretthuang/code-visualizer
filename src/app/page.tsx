import Canvas from "@/components/Canvas";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-svh w-screen flex-col items-center justify-between p-6">
      <div className="flex select-none flex-row items-center whitespace-nowrap pb-5">
        <Image
          src="/android-chrome-192x192.png"
          alt="Logo"
          className="dark:invert"
          width={40}
          height={40}
        />
        <div className="px-2 text-3xl font-bold">Code Visualizer</div>
      </div>
      <div className="w-full flex-1 rounded-lg border-2 p-2 shadow">
        <Canvas />
      </div>
    </main>
  );
}
