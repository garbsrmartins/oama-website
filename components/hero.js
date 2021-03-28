import Image from "next/image";

export default function Hero() {
  return (
    //   Hero
    <div className=" relative hero">
      <div className="pt-32 lg:pb-16 md:pb-16 h-full flex justify-items-center items-center">
        <div className="container px-3 mx-auto h-full flex flex-wrap flex-col z-50 md:flex-row justify-items-center ">
          {/* Left Col */}
          <div className="flex flex-col text-yellow-100 w-full md:w-2/6  text-center md:text-left">
            <p className="uppercase tracking-loose w-full">
              Observatório de Aves da Mantiqueira
            </p>
            <h1 className="my-4 text-5xl font-bold leading-tight">
              Conservação com Ciência
            </h1>
            <p className="leading-normal text-2xl mb-8">
              Gerando dados e engajamento para a conservação das aves da Mata
              Atlântica
            </p>
            <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 w-1/4 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              Apoie
            </button>
          </div>
          {/* <!--Right Col--> */}
          <div className="w-full md:w-3/5 py-6 text-center">
            {/* <img className="w-full md:w-4/5 z-50" src="hero.png" /> */}
          </div>
        </div>
      </div>
      <div className="absolute top-0 h-full w-full">
        <Image
          // className="h-32"
          src="/luiza_ave_2.png"
          layout="fill"
          //   width={"2000"}
          //   height={"1000"}
          objectFit="cover"
          objectPosition="right"
        ></Image>
      </div>
    </div>
  );
}
