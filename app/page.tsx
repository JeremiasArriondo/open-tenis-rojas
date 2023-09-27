import Image from "next/image";
import { Result } from "./components/result";
import Players from "./components/players";
import Marquee from "./components/markee-magic";
import { Fixture } from "./components/fixture";

const reviews = [
  {
    name: "El Rincon Del Tenis",
    link: "https://www.instagram.com/elrincondeltennis/",
  },
  {
    name: "Hierromag",
    link: "https://hierromag.com",
  },
  {
    name: "Luchetti",
    link: "https://hierromag.com",
  },
  {
    name: "Alem 1888",
    link: "https://hierromag.com",
  },
  {
    name: "BAVA",
    link: "https://hierromag.com",
  },
  {
    name: "Grido",
    link: "https://grido.com/",
    // logo: (
    //   <img src="/platzi.png" alt="Logo de Platzi" className="w-full h-auto" />
    // ),
  },
];

const ReviewCard = ({
  logo,
  link,
  size,
  name,
}: {
  name?: string;
  logo?: string | React.ReactNode;
  link: string;
  premium?: boolean;
  size?: string;
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      // className="relative group flex flex-col items-center justify-center space-y-2 rounded-2xl p-8 backdrop-blur-sm sm:p-10"

      className={`relative ${
        size === "large"
          ? "min-w-[250px] border-yellow-300 hover:border-yellow-200"
          : "min-w-[50px] border-slate-900 hover:border-slate-900/75"
      } flex justify-center items-center overflow-hidden rounded-xl border border-gray-300 bg-white/10 w-full py-4 h-24 px-12 transition hover:border-orange-500 hover:shadow-lg group`}
    >
      {logo ? (
        <div className="flex flex-row items-center justify-center w-full h-auto gap-2 text-gray-500 transition backdrop-blur-sm group-hover:scale-110">
          {logo}
        </div>
      ) : (
        <h4>{name}</h4>
      )}
    </a>
  );
};

export default function Home() {
  return (
    <main className="mx-8 mt-8 pb-16">
      {/* <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div> */}
      {/* <div>
        <Image
          src={"/images/bg-hero.webp"}
          alt="Cancha de polvo de ladrillo"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }} // optional
        />
      </div> */}
      <div className="overflow-x-auto">
        <h1 className="text-2xl underline-title">Conoce el fixture</h1>

        {/* <ul className="flex gap-8">
          <li>
            <button className="border">Round of 16</button>
          </li>
          <li>Quarter-final</li>
          <li>Semi-final</li>
          <li>Final</li>
        </ul> */}
        <Fixture />
        <div>
          <h2 className="text-2xl underline-title">Auspiciantes</h2>
          <div className="my-8 relative flex flex-col w-full overflow-hidden gap-y-4">
            <Marquee reverse pauseOnHover className="[--duration:40s]">
              {reviews
                .slice()
                .reverse()
                .map((review) => (
                  <ReviewCard key={review.name} {...review} />
                ))}
            </Marquee>
            <Marquee pauseOnHover className="[--duration:40s]">
              {[...reviews.slice(4), ...reviews.slice(0, 4)].map((review) => (
                <ReviewCard key={review.name} {...review} />
              ))}
            </Marquee>
            <div className="absolute inset-y-0 left-0 w-40 pointer-events-none from-white to-transparent bg-gradient-to-r "></div>
            <div className="absolute inset-y-0 right-0 w-1/3 pointer-events-none bg-gradient-to-l from-white"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
