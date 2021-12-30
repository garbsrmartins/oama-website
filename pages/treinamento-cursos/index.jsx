import Nav from "@includes/nav";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Head from "next/head";
import Footer from "@includes/footer";

export default function Treinamento() {
  return (
    <div className="pb-32">
      <Head>
        <title>Treinamento e Cursos</title>
      </Head>

      <Nav />
      <div className=" relative hero-small md:hero min-h-1/2">
        <div className="pt-32 lg:pb-16 md:pb-16 h-full  justify-items-center items-center">
          <div className="absolute top-0 h-full w-full">
            <Image
              // className="h-32"
              src="/heros/quem_somos.jpg"
              layout="fill"
              //   width={"2000"}
              //   height={"1000"}
              objectFit="cover"
              objectPosition="center"
              priority={true}
            />
          </div>
        </div>
      </div>
      <div className="mt-16">
        <div className="mb-24">
          <h1 class="w-full text-5xl font-bold leading-tight text-center text-gray-800">
            Cursos e Treinamentos{" "}
          </h1>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
          </div>
        </div>
      </div>
      <div className="px-12 sm:px-32">
        <h2 className="w-full mb-6 text-3xl font-bold leading-tight text-center text-gray-800">
          Treinamento
        </h2>
        <div className="flex flex-col sm:flex-row">
          <div class="w-full my-auto sm:w-1/3 p-2 sm:p-6">
            <div>
              <Image
                placeholder="blur"
                alt="Serra da Mantiqueira"
                layout="responsive"
                src="/sobre/Mantiqueira.jpg"
                width={400}
                objectFit="cover"
                height={400}
              />
            </div>
          </div>
          <div className="w-full sm:w-2/3">
            <p className="text-gray-600 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              eget condimentum felis. Nulla ac lacus nisi. Nam eget ultricies
              leo. Pellentesque rutrum nibh vel nibh hendrerit ultrices.
              Pellentesque convallis neque at vulputate tempor. Nulla congue
              mattis lectus, placerat ullamcorper libero egestas a. Vivamus
              fermentum ex in felis consectetur, et iaculis nulla malesuada. In
              fringilla condimentum fringilla. Etiam eget pretium nulla. Vivamus
              quis magna laoreet, aliquet leo nec, condimentum ipsum. Praesent
              sollicitudin ante non neque tristique, id rutrum dui maximus.
              Morbi id sem ut velit faucibus mattis. Nulla varius malesuada orci
              ut dapibus. Ut faucibus gravida ornare. Proin ut pretium dui.
              Donec tincidunt vitae risus eu ultricies. Suspendisse convallis
              auctor lacus, vitae posuere quam feugiat ac. Duis a ex non tortor
              lobortis molestie. Nam in lacus vel enim finibus bibendum. Duis
              tincidunt porttitor lorem mollis semper. Mauris tincidunt ex in
              ullamcorper blandit. Suspendisse pulvinar, mauris sit amet congue
              fringilla, eros magna vestibulum nisl, a ullamcorper libero nisi
              vel justo. Morbi a ultrices mi. Sed tempor dolor enim, quis cursus
              enim auctor ac. In finibus tellus sit amet mauris varius, sit amet
              fringilla mauris tempor. Maecenas pretium sagittis eros, ut
              interdum mi pulvinar at. Nunc feugiat fermentum turpis, quis
              finibus nunc rutrum eget. Suspendisse venenatis lacinia sem, sed
              gravida lectus semper at. Donec volutpat aliquet nisi, eu pretium
              augue rutrum eget. Integer id vehicula nibh. Aliquam tincidunt
              pharetra risus. Cras semper erat nisl, id ornare <a className="underline text-yellow-600 cursor-pointer">Link</a>.
            </p>
          </div>
          </div>
          <h2 className="w-full mt-12 mb-6 text-3xl font-bold leading-tight text-center text-gray-800">
          Cursos
        </h2>
        <div className="flex flex-col sm:flex-row ">
          <div class="w-full sm:w-1/3 p-2 sm:p-6 my-auto">
            <div>
              <Image
                placeholder="blur"
                alt="Serra da Mantiqueira"
                layout="responsive"
                src="/sobre/Mantiqueira.jpg"
                width={400}
                objectFit="cover"
                height={400}
              />
            </div>
          </div>
          <div className="w-full sm:w-2/3">
              <p className="text-gray-600 text-lg font-bold">Nome do Curso</p>
              <p className="text-gray-500 text-md font-bold">11/01/1991</p>
              <p className="text-gray-500 text-md font-bold">Estação de Pesquisa Refúgio da Boa Vista</p>
            <p className="text-gray-600 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              eget condimentum felis. Nulla ac lacus nisi. Nam eget ultricies
              leo. Pellentesque rutrum nibh vel nibh hendrerit ultrices.
              Pellentesque convallis neque at vulputate tempor. Nulla congue
              mattis lectus, placerat ullamcorper libero egestas a. Vivamus
              fermentum ex in felis consectetur, et iaculis nulla malesuada. In
              fringilla condimentum fringilla. Etiam eget pretium nulla. Vivamus
              quis magna laoreet, aliquet leo nec, condimentum ipsum. Praesent
              sollicitudin ante non neque tristique, id rutrum dui maximus.
              Morbi id sem ut velit faucibus mattis. Nulla varius malesuada orci
              ut dapibus. Ut faucibus gravida ornare. Proin ut pretium dui.
              Donec tincidunt vitae risus eu ultricies. Suspendisse convallis
              auctor lacus, vitae posuere quam feugiat ac. Duis a ex non tortor
              lobortis molestie. Nam in lacus vel enim finibus bibendum. Duis
              tincidunt porttitor lorem mollis semper. Mauris tincidunt ex in
              ullamcorper blandit. Suspendisse pulvinar, mauris sit amet congue
              fringilla, eros magna vestibulum nisl, a ullamcorper libero nisi
              vel justo. Morbi a ultrices mi. Sed tempor dolor enim, quis cursus
              enim auctor ac. In finibus tellus sit amet mauris varius, sit amet
              fringilla mauris tempor. Maecenas pretium sagittis eros, ut
              interdum mi pulvinar at. Nunc feugiat fermentum turpis, quis
              finibus nunc rutrum eget. Suspendisse venenatis lacinia sem, sed
              gravida lectus semper at. Donec volutpat aliquet nisi, eu pretium
              augue rutrum eget. Integer id vehicula nibh. Aliquam tincidunt
              pharetra risus. Cras semper erat nisl, id ornare <a className="underline text-yellow-600 cursor-pointer">Link</a>.
            </p>
          </div>

        </div>


        <h2 className="w-full mt-12 mb-6 text-3xl font-bold leading-tight text-center text-gray-800">
          Cursos Concluídos
        </h2>
        <div className="flex flex-col sm:flex-row ">
          <div class="w-full sm:w-1/3 p-2 sm:p-6 my-auto">
            <div>
              <Image
                placeholder="blur"
                alt="Serra da Mantiqueira"
                layout="responsive"
                src="/sobre/Mantiqueira.jpg"
                width={400}
                objectFit="cover"
                height={400}
              />
            </div>
          </div>
          <div className="w-full sm:w-2/3">
              <p className="text-gray-600 text-lg font-bold">Nome do Curso</p>
              <p className="text-gray-500 text-md font-bold">11/01/1991</p>
              <p className="text-gray-500 text-md font-bold">Estação de Pesquisa Refúgio da Boa Vista</p>
            <p className="text-gray-600 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              eget condimentum felis. Nulla ac lacus nisi. Nam eget ultricies
              leo. Pellentesque rutrum nibh vel nibh hendrerit ultrices.
              Pellentesque convallis neque at vulputate tempor. Nulla congue
              mattis lectus, placerat ullamcorper libero egestas a. Vivamus
              fermentum ex in felis consectetur, et iaculis nulla malesuada. In
              fringilla condimentum fringilla. Etiam eget pretium nulla. Vivamus
              quis magna laoreet, aliquet leo nec, condimentum ipsum. Praesent
              sollicitudin ante non neque tristique, id rutrum dui maximus.
              Morbi id sem ut velit faucibus mattis. Nulla varius malesuada orci
              ut dapibus. Ut faucibus gravida ornare. Proin ut pretium dui.
              Donec tincidunt vitae risus eu ultricies. Suspendisse convallis
              auctor lacus, vitae posuere quam feugiat ac. Duis a ex non tortor
              lobortis molestie. Nam in lacus vel enim finibus bibendum. Duis
              tincidunt porttitor lorem mollis semper. Mauris tincidunt ex in
              ullamcorper blandit. Suspendisse pulvinar, mauris sit amet congue
              fringilla, eros magna vestibulum nisl, a ullamcorper libero nisi
              vel justo. Morbi a ultrices mi. Sed tempor dolor enim, quis cursus
              enim auctor ac. In finibus tellus sit amet mauris varius, sit amet
              fringilla mauris tempor. Maecenas pretium sagittis eros, ut
              interdum mi pulvinar at. Nunc feugiat fermentum turpis, quis
              finibus nunc rutrum eget. Suspendisse venenatis lacinia sem, sed
              gravida lectus semper at. Donec volutpat aliquet nisi, eu pretium
              augue rutrum eget. Integer id vehicula nibh. Aliquam tincidunt
              pharetra risus. Cras semper erat nisl, id ornare <a className="underline text-yellow-600 cursor-pointer">Link</a>.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
