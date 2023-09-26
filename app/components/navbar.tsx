import Image from "next/image";

export const Navbar = () => {
  return (
    <header className="z-50 sticky top-0">
      <nav className="h-16 px-8 flex items-center border-b border-gray-200 bg-white/80 backdrop-filter backdrop-blur-3xl backdrop-saturate-200">
        {/*<span className="ball">🎾</span>*/}
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Open Rojas logo"
            width={50}
            height={50}
          />
          <span className="text-2xl font-extrabold bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
            Open Rojas 2023
          </span>
          <span className="ball">🎾</span>
        </div>
      </nav>
    </header>
  );
};
