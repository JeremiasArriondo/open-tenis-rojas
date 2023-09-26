import Image from "next/image";

export const Navbar = () => {
  return (
    <header>
      <nav className="h-16 flex items-center justify-center border-b border-gray-200 bg-[#f48633] text-white">
        {/*<span className="ball">🎾</span>*/}
        <Image
          src="/images/logo.png"
          alt="Open Rojas logo"
          width={40}
          height={40}
        />
        <span className="text-2xl font-bold">Open Rojas 2023</span>{" "}
        <span className="ball">🎾</span>
      </nav>
    </header>
  );
};
