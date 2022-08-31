import Image from "next/image";
import Head from "next/head";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, } from "@reach/accordion";


import Footer from "@includes/footer";
import Nav from "@includes/nav"

import Intro from "../../components/pro-aves/intro"


export default function ProAves() {
    return (
        <>
            <div className="pb-32">
                <Head>
                    <title>Ações Pró-Aves</title>
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
                            ></Image>
                        </div>
                    </div>
                </div>

                <div className="mt-16">
                    <div className="mb-24">
                        <h1 className="w-full text-5xl font-bold leading-tight text-center text-gray-800">
                            Ações Pró-Aves{" "}
                        </h1>
                        <div className="w-full mb-4">
                            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                        </div>
                    </div>
                </div>
                <div className="container max-w-4xl mx-auto mb-12">
                    <div className="px-6 mb-24 text-gray-600">
                        <p className="mb-4">Ano após ano, populações de aves sofrem impactos diretos e indiretos de ações humanas. Esse efeito negativo de nossas ações sobre a biodiversidade pode ser associado ao crescimento populacional humano, consumo excessivo de recursos e materiais, a expansão das cidades e aos avanços tecnológicos que inserem novos hábitos, costumes e alterações na paisagem. Embora grande parte destas ações sejam de caráter coletivo, <span className="font-bold">algumas mudanças nos hábitos individuais de cada pessoa podem impedir a morte de centenas de aves</span>.</p>
                        <p className="mb-4">O Observatório de Aves da Mantiqueira, OAMa, acredita que todos podemos associar ao seu modo de vida algumas ações que favoreçam a conservação das aves e seus habitats e por isso realiza atividades para fomentar ações Pró-Aves na vida e no dia-a-dia de todo brasileiro.</p>
                        <p className="mb-4">Essa campanha tem como objetivo apresentar alguns dos principais problemas que afetam as aves e que podem ser mitigados com ações simples de cada pessoa. Aqui você vai conhecer sobre o problema da caça e tráfico de animais silvestres, sobre o inimigo invisível que gera a morte por colisão das aves, sobre a problemática das poluições luminosa e sonora e outros.</p>
                        <p className="mb-4">A mudança precisa de todos nós para acontecer!</p>
                    </div>
                    <Accordion collapsible className="border-2 rounded-xl  border-black">
                    <Intro></Intro>
                    </Accordion>
                </div>
            </div>
            <Footer></Footer>

        </>
    )
}