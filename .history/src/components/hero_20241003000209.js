// import React from "react";
import Imghero from "@/assets/img/hero.png";
import Image from "next/image";


export default function Hero() {
    return(
    <section className="h-[100dvh] min-h-[100vh] w-full bg-green-600 flex justify-center items-center">
        <div className=" text-center flex-col items-center w-1/2">
            <p className="">The Wedding of</p>
            <Image src={Imghero} alt="hero" className="border border-2 border-white rounded-md "/>
            <h2 className="">Dilan <span>&</span>Milea</h2>
        </div>
    </section>
    );
}