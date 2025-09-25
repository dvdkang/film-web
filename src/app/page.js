import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-4 md:pt-8 px-4 md:px-16">
      <div className="relative w-full h-[calc(100vh-5rem)] md:h-[calc(100vh-6rem)] overflow-hideen">
        <video
          src="/videos/hero.mp4"
          className="w-full h-full object-cover rounded-lg"
          controls
        />
      </div>
    </div>
  );
}
