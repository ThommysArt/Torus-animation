import Navbar from "@/components/navbar";
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/components/scene'), {
    ssr: false,
});

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen w-screen border-b">
      <Navbar />
      <div className="flex w-full h-14 p-0 m-0"></div>
      <div className="relative flex h-[90vh] z-10">
        <Scene />
      </div>
    </main>
  );
}
